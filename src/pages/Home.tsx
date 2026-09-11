import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data/projects';
import '../components/experience/experience.css';
const World = lazy(() => import('../components/experience/World'));
const chapters = [['home','Top'],['projects','Works'],['about','About'],['services','Services'],['contact','Contact']];

function WorkGallery({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:['start start','end end'] });
  const x = useTransform(scrollYProgress,[0,1],['0%','-66.6667%']);
  return <section id="projects" className="al-works" ref={ref} aria-labelledby="works-title">
    <div className="al-works-stage">
      <div className="al-section-label"><h2 id="works-title">Selected works</h2><span>01 — 03 / Scroll to discover</span></div>
      <motion.div className="al-work-track" style={reduced ? undefined : {x}}>
        {projects.map((project,index) => <article key={project.title} className="al-project">
          <div className="al-project-image"><img src={project.image} alt={`${project.title} interface`} loading="lazy" /><span className="al-project-number">0{index+1}</span></div>
          <div className="al-project-caption"><div><span className="al-mono">{project.category} / Concept & development</span><h3>{project.title}</h3><p>{project.description}</p><ul>{project.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul></div><a href={project.githubUrl} target="_blank" rel="noreferrer">View project ↗</a></div>
        </article>)}
      </motion.div>
    </div>
  </section>;
}

function Blueprint() {
  return <div className="al-intro" aria-hidden="true"><svg viewBox="0 0 1200 900" fill="none"><g stroke="#666" strokeWidth=".6">{[270,300,380,440,600,760,820,900,930].map(x=><path key={x} d={`M${x} 0V900`}/>)}{[95,120,475,510,660,715,750].map(y=><path key={y} d={`M0 ${y}H1200`}/>)}<path d="M150 900L600 0L1050 900M200 900L650 0M1000 900L550 0"/></g><path className="al-draw" pathLength="1" d="M600 120L900 750H780L716 610H484L420 750H300ZM600 360L535 510H665Z" stroke="#e6eff1" strokeWidth="1.4"/></svg><p className="al-mono">Ideas take shape. Possibilities become real.</p></div>;
}

export default function Home() {
  const reduced = Boolean(useReducedMotion());
  const [paused,setPaused] = useState(false);
  const [menu,setMenu] = useState(false);
  const [active,setActive] = useState('home');
  const hero = useRef<HTMLElement>(null);
  const about = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({target:hero,offset:['start start','end end']});
  const titleOpacity = useTransform(heroProgress,[0,.5,1],[1,1,0]);
  const titleScale = useTransform(heroProgress,[0,1],[1,1.18]);
  const { scrollYProgress: aboutProgress } = useScroll({target:about,offset:['start start','end end']});
  const missionOpacity = useTransform(aboutProgress,[0,.3,.48],[1,1,0]);
  const visionOpacity = useTransform(aboutProgress,[.42,.55,.88,1],[0,1,1,0]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for(const entry of entries) if(entry.isIntersecting) setActive(entry.target.id); },{rootMargin:'-20% 0px -55% 0px'});
    chapters.forEach(([id]) => {const section=document.getElementById(id);if(section) observer.observe(section);});
    const id=decodeURIComponent(window.location.hash.slice(1));
    if(id) document.getElementById(id)?.scrollIntoView();
    return ()=>observer.disconnect();
  },[]);
  useEffect(() => {
    if(!menu) return;
    const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setMenu(false);};
    window.addEventListener('keydown',close);
    return ()=>window.removeEventListener('keydown',close);
  },[menu]);
  return <div className={`al-experience${reduced?' al-reduced':''}${paused?' al-paused':''}`}>
    <Suspense fallback={null}><World paused={paused} reduced={reduced}/></Suspense>
    {!reduced && <Blueprint/>}
    <a className="al-skip" href="#projects">Skip introduction</a>
    <header className="al-header"><a className="al-brand" href="#home" aria-label="Atlantis Labs home">ΛTLANTIS<span>LABS</span></a><nav aria-label="Main navigation">{chapters.slice(1,4).map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="al-contact-link" href="#contact">Contact / Collaborate ↗</a><button className="al-menu-button" aria-expanded={menu} aria-controls="al-mobile-menu" onClick={()=>setMenu(!menu)}>{menu?'Close −':'Menu +'}</button></header>
    {menu && <nav id="al-mobile-menu" className="al-mobile-menu" aria-label="Mobile navigation">{chapters.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label} ↗</a>)}</nav>}
    <nav className="al-chapters" aria-label="Page chapters">{chapters.map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined}><span/>{label}</a>)}</nav>
    <div className="al-controls"><span className="al-axis" aria-hidden="true"><i/><b/><em/></span>{!reduced&&<button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'Resume motion':'Pause motion'}</button>}</div>
    <section id="home" className="al-hero" ref={hero}>
      <div className="al-hero-stage"><motion.div className="al-hero-content" style={reduced?undefined:{opacity:titleOpacity,scale:titleScale}}><p className="al-mono al-eyebrow">Independent development studio / India</p><h1>ATLANTIS<span>LABS</span></h1><p className="al-hero-message">Building experiences<br/>beyond the ordinary.</p><p className="al-hero-sub">Modern interfaces. Thoughtful engineering.<br/>From the first idea to the final interaction.</p></motion.div><a className="al-scroll al-mono" href="#projects">Scroll to explore <span>↓</span></a><span className="al-hero-code al-mono">Creative technology<br/>Est. for what comes next.</span></div>
    </section>
    <WorkGallery reduced={reduced}/>
    <section id="about" className="al-about" ref={about} aria-label="Mission and vision"><div className="al-about-stage"><motion.div className="al-statement al-mission" style={reduced?undefined:{opacity:missionOpacity}}><span className="al-outline">MISSION</span><h2><span>Turn ambitious ideas</span><br/><span>into exceptional experiences.</span></h2><p>We bring design and engineering together<br/>to build considered, responsive digital products.</p></motion.div><motion.div className="al-statement al-vision" style={reduced?undefined:{opacity:visionOpacity}}><span className="al-outline">VISION</span><h2><span>Make the complex feel simple.</span><br/><span>Make the ordinary feel new.</span></h2><p>Clean code. Distinctive interfaces.<br/>A lasting impression.</p></motion.div></div></section>
    <section id="services" className="al-services"><div className="al-section-label"><h2>What we do</h2><span>Design / Develop / Deliver</span></div>{[{title:'Web experiences',desc:'Responsive websites and modern React applications, designed around your brand and built for performance.',label:'01 / Frontend',word:'CREATE',stack:'React · TypeScript · Next.js'},{title:'Tools that move you forward',desc:'Focused desktop applications and internal tools that turn complex workflows into clear, useful experiences.',label:'02 / Applications',word:'BUILD',stack:'Electron · Node.js · Vite'}].map(service=><article className="al-service" key={service.title}><div className="al-service-art" aria-hidden="true"><div className="al-orbit"><i/><i/><i/></div><strong>{service.word}</strong></div><div><span className="al-mono">{service.label}</span><h3>{service.title}</h3><p>{service.desc}</p><span className="al-service-stack">{service.stack}</span><a href="mailto:admin@atlantislabs.top">Discuss your project ↗</a></div></article>)}</section>
    <footer id="contact" className="al-footer"><div className="al-contact-intro"><p className="al-mono">Have something in mind?</p><a href="mailto:admin@atlantislabs.top">Let’s build it together. ↗</a></div><div className="al-endmark" aria-label="Atlantis Labs">ATLANTIS<span>LABS</span></div><div className="al-footer-bottom"><nav aria-label="Footer navigation">{chapters.slice(0,4).map(([id,label])=><a key={id} href={`#${id}`}>{label}</a>)}</nav><div><a href="mailto:admin@atlantislabs.top">admin@atlantislabs.top ↗</a><a href="https://github.com/motocite" target="_blank" rel="noreferrer">GitHub ↗</a></div><p>© {new Date().getFullYear()} Atlantis Labs.</p></div></footer>
  </div>;
}
