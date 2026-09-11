import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default function World({ paused, reduced }: { paused: boolean; reduced: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const time = useRef(0);
  useEffect(() => {
    if (!host.current) return;
    const container = host.current;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 768 ? 1 : 1.5));
    renderer.setSize(innerWidth, innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    container.dataset.ready = "true";
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, .1, 100);
    camera.position.set(0, 0, 6);
    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environmentMap = pmrem.fromScene(environment, .04);
    scene.environment = environmentMap.texture;
    environment.dispose(); pmrem.dispose();

    const uniforms = { clock: { value: 0 }, white: { value: 0 } };
    const wallMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide, uniforms,
      vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `
        varying vec2 vUv; uniform float clock; uniform float white;
        void main(){
          vec2 q=vUv*vec2(56.,24.); vec2 cell=fract(q); vec2 id=floor(q);
          float border=step(.025,cell.x)*step(.035,cell.y);
          float fine=step(.12,fract(q.x*12.))*step(.12,fract(q.y*12.));
          float pattern=.5+.5*sin(id.x*.24+id.y*.43+clock*.32);
          float bands=smoothstep(.35,.8,sin(vUv.x*51.+vUv.y*24.+clock*.24));
          vec3 hue=.5+.5*cos(vec3(0.,2.,4.)+clock*.13+vUv.x*8.);
          vec3 dark=(vec3(.025)+hue*.075*pattern+bands*.055)*border;
          dark+=fine*.006;
          vec3 light=mix(vec3(.68,.75,.77),vec3(.88,.94,.95),border)-fine*.012;
          gl_FragColor=vec4(mix(dark,light,white),1.);
        }`,
    });
    const roomGeometry = new THREE.CylinderGeometry(11, 11, 16, 96, 1, true);
    const room = new THREE.Mesh(roomGeometry, wallMaterial);
    scene.add(room);
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.65); shape.lineTo(1.48, -1.4); shape.lineTo(.87, -1.4);
    shape.lineTo(.57, -.76); shape.lineTo(-.57, -.76); shape.lineTo(-.87, -1.4); shape.lineTo(-1.48, -1.4); shape.closePath();
    const hole = new THREE.Path();
    hole.moveTo(0,.48); hole.lineTo(-.36,-.31); hole.lineTo(.36,-.31); hole.closePath();
    shape.holes.push(hole);
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: .26, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: .045, bevelThickness: .04 });
    geometry.translate(0, -.08, -.13);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xe8f7ff, metalness: .15, roughness: .065, transmission: 1, thickness: .7, ior: 1.7, dispersion: 1.2, iridescence: 1, iridescenceIOR: 1.4, iridescenceThicknessRange: [120, 550], envMapIntensity: 2.1, clearcoat: 1 });
    const letter = new THREE.Mesh(geometry, material);
    scene.add(letter);
    const edgesGeometry = new THREE.EdgesGeometry(geometry, 30);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xd4efff, transparent: true, opacity: .2 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    letter.add(edges);
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const key = new THREE.DirectionalLight(0xd2ecff, 5); key.position.set(-3, 4, 3); scene.add(key);
    const rim = new THREE.PointLight(0xc1a8ff, 40); rim.position.set(3, 1, 2); scene.add(rim);

    const typeCanvas = document.createElement('canvas');
    typeCanvas.width=2048; typeCanvas.height=512;
    const typeContext=typeCanvas.getContext('2d')!;
    typeContext.fillStyle='white'; typeContext.font='bold 345px Arial'; typeContext.textAlign='center';
    typeContext.fillText('ATLANTIS',1024,355,1950);
    typeContext.font='50px Arial'; typeContext.fillText('L A B S',1024,470);
    const typeTexture=new THREE.CanvasTexture(typeCanvas); typeTexture.colorSpace=THREE.SRGBColorSpace;
    const typeGeometry=new THREE.PlaneGeometry(1,.25);
    const typeMaterial=new THREE.MeshBasicMaterial({map:typeTexture,alphaTest:.2,side:THREE.DoubleSide});
    const typePlane=new THREE.Mesh(typeGeometry,typeMaterial);
    typePlane.position.set(0,0,-.65); scene.add(typePlane);

    let frame = 0, last = performance.now(), pointerX = 0, pointerY = 0;
    let current = 0, target = 0;
    const progress = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      return THREE.MathUtils.clamp(-el.getBoundingClientRect().top / Math.max(1, el.offsetHeight - innerHeight), 0, 1);
    };
    const render = () => {
      const mission = document.getElementById('about')?.getBoundingClientRect();
      const services = document.getElementById('services')?.getBoundingClientRect();
      const light = mission && services ? THREE.MathUtils.smoothstep(innerHeight*.65 - mission.top, 0, innerHeight*.65) * (1-THREE.MathUtils.smoothstep(innerHeight*.6-services.top,0,innerHeight*.6)) : 0;
      uniforms.white.value = light;
      uniforms.clock.value = time.current;
      const hero = progress('home');
      typePlane.visible = hero < .78;
      typePlane.scale.setScalar(Math.min(9.5,camera.aspect*4.6));
      const works = progress('projects');
      const about = progress('about');
      target = hero*.9 + works*.45 + about*Math.PI*1.8;
      current += (target-current)*(reduced ? 1 : .085);
      letter.rotation.set(reduced ? 0 : Math.sin(time.current*.2)*.045+pointerY*.07, reduced ? -.13 : current+pointerX*.12, reduced ? 0 : Math.sin(about*Math.PI)*.16);
      const size = innerWidth < 768 ? .66 : 1;
      const zoom = 1+THREE.MathUtils.smoothstep(about,.75,1)*4;
      letter.scale.setScalar(size * zoom);
      letter.position.x = Math.sin(works*Math.PI)*1.6;
      letter.position.z = -works*1.2;
      letter.visible = !services || services.top > innerHeight*.25;
      edgesMaterial.opacity = .12+light*.3;
      room.rotation.y = reduced ? 0 : time.current*.008;
      renderer.render(scene,camera);
    };
    const tick = (now: number) => {
      if (now-last>32) { if (!paused && !reduced) time.current += Math.min((now-last)/1000,.06); last=now; render(); }
      frame=requestAnimationFrame(tick);
    };
    const start = () => { cancelAnimationFrame(frame); last=performance.now(); render(); if (!document.hidden && !paused && !reduced) frame=requestAnimationFrame(tick); };
    const scroll = () => { if (paused || reduced) render(); };
    const resize = () => { renderer.setSize(innerWidth,innerHeight); camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); render(); };
    const pointer = (event: PointerEvent) => { pointerX=event.clientX/innerWidth-.5; pointerY=event.clientY/innerHeight-.5; };
    const lost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame); renderer.domElement.style.opacity='0'; container.dataset.ready='false'; };
    const restored = () => { renderer.domElement.style.opacity='1'; container.dataset.ready='true'; start(); };
    renderer.domElement.addEventListener('webglcontextlost',lost);
    renderer.domElement.addEventListener('webglcontextrestored',restored);
    window.addEventListener('resize',resize); window.addEventListener('scroll',scroll,{passive:true}); window.addEventListener('pointermove',pointer,{passive:true}); document.addEventListener('visibilitychange',start);
    start();
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener('resize',resize); window.removeEventListener('scroll',scroll); window.removeEventListener('pointermove',pointer); document.removeEventListener('visibilitychange',start);
      renderer.domElement.removeEventListener('webglcontextlost',lost); renderer.domElement.removeEventListener('webglcontextrestored',restored);
      container.dataset.ready='false'; typeTexture.dispose(); typeGeometry.dispose(); typeMaterial.dispose();
      geometry.dispose(); material.dispose(); edgesGeometry.dispose(); edgesMaterial.dispose(); roomGeometry.dispose(); wallMaterial.dispose(); environmentMap.dispose(); renderer.dispose(); renderer.domElement.remove();
    };
  }, [paused,reduced]);
  return <div className="al-world" ref={host} aria-hidden="true"><div className="al-fallback">A</div></div>;
}
