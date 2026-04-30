import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLORS = {
    bg: 0x0d1117,
    primary: 0x67cfe8,
    accent: 0x8cf0ff,
    white: 0xffffff,
};

const ParticleCanvas: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;

        const w = container.clientWidth;
        const h = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, w / h, 1, 3000);
        camera.position.z = 170;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        container.appendChild(renderer.domElement);

        // Build particle positions from canvas-rendered text
        const textCanvas = document.createElement("canvas");
        textCanvas.width = 2200;
        textCanvas.height = 700;
        const ctx = textCanvas.getContext("2d", { willReadFrequently: true })!;
        ctx.fillStyle = "#ffffff";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = '900 220px "Space Grotesk","Inter","Arial Black",Impact,sans-serif';
        ctx.fillText("ATLANTIS", textCanvas.width / 2, textCanvas.height * 0.34);
        ctx.font = '900 270px "Space Grotesk","Inter","Arial Black",Impact,sans-serif';
        ctx.fillText("LABS", textCanvas.width / 2, textCanvas.height * 0.72);

        const imgData = ctx.getImageData(0, 0, textCanvas.width, textCanvas.height).data;
        const skip = 2;

        const heroPos: number[] = [];
        const startPos: number[] = [];
        const speeds: number[] = [];
        const sizes: number[] = [];

        for (let py = 0; py < textCanvas.height; py += skip) {
            for (let px = 0; px < textCanvas.width; px += skip) {
                const idx = (py * textCanvas.width + px) * 4;
                if (imgData[idx + 3] > 128) {
                    const tx = (px - textCanvas.width / 2) * 0.112;
                    const ty = -(py - textCanvas.height / 2) * 0.112;
                    const tz = (Math.random() - 0.5) * 28;
                    heroPos.push(tx, ty, tz);
                    startPos.push(
                        (Math.random() - 0.5) * 1800,
                        (Math.random() - 0.5) * 1800,
                        (Math.random() - 0.5) * 1200 + 200
                    );
                    speeds.push(0.012 + Math.random() * 0.012);
                    sizes.push(0.4 + Math.random() * 1.2);
                }
            }
        }

        const heroPosF32 = new Float32Array(heroPos);

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(startPos, 3));
        geo.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(COLORS.white) },
                uGlow: { value: new THREE.Color(COLORS.primary) },
            },
            vertexShader: `
                attribute float size;
                varying float vOpacity;
                uniform float uTime;

                void main() {
                    float twinkle = sin(uTime * 2.0 + position.x * 0.03 + position.y * 0.03) * 0.5 + 0.5;
                    vOpacity = 0.7 + twinkle * 0.38;
                    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                uniform vec3 uGlow;
                varying float vOpacity;

                void main() {
                    float r = distance(gl_PointCoord, vec2(0.5));
                    if (r > 0.5) discard;
                    float str = pow(1.0 - r * 2.0, 0.78);
                    vec3 col = mix(uGlow, uColor, str);
                    gl_FragColor = vec4(col, str * vOpacity);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // Ambient dust
        const dustGeo = new THREE.BufferGeometry();
        const dustPos: number[] = [];
        const dustSizes: number[] = [];
        for (let i = 0; i < 900; i++) {
            dustPos.push((Math.random() - 0.5) * 620, (Math.random() - 0.5) * 800, (Math.random() - 0.5) * 560);
            dustSizes.push(Math.random() * 1.4 + 0.35);
        }
        dustGeo.setAttribute("position", new THREE.Float32BufferAttribute(dustPos, 3));
        dustGeo.setAttribute("size", new THREE.Float32BufferAttribute(dustSizes, 1));
        const dustMat = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(COLORS.accent) } },
            vertexShader: `
                attribute float size;
                varying float vA;
                uniform float uTime;
                void main() {
                    vA = 0.1 + 0.15 * sin(uTime * 0.5 + position.x * 0.05);
                    vec3 p = position;
                    p.y += sin(uTime * 0.2 + position.x * 0.05) * 3.0;
                    vec4 mvPos = modelViewMatrix * vec4(p, 1.0);
                    gl_PointSize = size * (400.0 / -mvPos.z);
                    gl_Position = projectionMatrix * mvPos;
                }
            `,
            fragmentShader: `
                uniform vec3 uColor;
                varying float vA;
                void main() {
                    float r = distance(gl_PointCoord, vec2(0.5));
                    if (r > 0.5) discard;
                    gl_FragColor = vec4(uColor, vA * pow(1.0 - r * 2.0, 2.0));
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const dust = new THREE.Points(dustGeo, dustMat);
        scene.add(dust);

        let ptrX = 0;
        let ptrY = 0;
        const onMouseMove = (e: MouseEvent) => {
            ptrX = (e.clientX / window.innerWidth) * 2 - 1;
            ptrY = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        document.addEventListener("mousemove", onMouseMove);

        const posArr = geo.attributes.position.array as Float32Array;
        const clock = new THREE.Clock();
        let animId: number;

        function animate() {
            animId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            mat.uniforms.uTime.value = t;
            dustMat.uniforms.uTime.value = t;

            for (let i = 0; i < posArr.length; i += 3) {
                const id = i / 3;
                const spd = speeds[id] * 1.2;
                posArr[i] += (heroPosF32[i] - posArr[i]) * spd;
                posArr[i + 1] += (heroPosF32[i + 1] - posArr[i + 1]) * spd;
                posArr[i + 2] += (heroPosF32[i + 2] - posArr[i + 2]) * spd;
                if (Math.abs(heroPosF32[i] - posArr[i]) < 1.2) {
                    posArr[i + 1] += Math.sin(t * 0.7 + heroPosF32[i] * 0.02) * 0.007;
                }
            }
            geo.attributes.position.needsUpdate = true;

            points.rotation.y = Math.sin(t * 0.05) * 0.007;
            points.rotation.x = Math.cos(t * 0.03) * 0.004;
            dust.rotation.y = t * 0.009;

            camera.position.x += (ptrX * 7 - camera.position.x) * 0.05;
            camera.position.y += (ptrY * 4 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            if (!container) return;
            const nw = container.clientWidth;
            const nh = container.clientHeight;
            camera.aspect = nw / nh;
            camera.updateProjectionMatrix();
            renderer.setSize(nw, nh);
            const baseZ = 170;
            if (camera.aspect < 1.2) {
                camera.position.z = Math.min(350, baseZ * (1.2 / camera.aspect));
            } else {
                camera.position.z = baseZ;
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            document.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", handleResize);
            geo.dispose();
            mat.dispose();
            dustGeo.dispose();
            dustMat.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
};

export default ParticleCanvas;
