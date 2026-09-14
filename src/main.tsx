import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './cards.css'
import './polish.css'
import './theme.css'
import { ProjectShowcase, projectHref } from './ProjectShowcase'

const cv = '/Muhammad-Ridhwan-Habib-Abdillah-CV.pdf'

const tech = {
  'Build': ['C#', 'TypeScript', 'JavaScript', 'Python', 'C++', 'PHP'],
  'Deliver': ['.NET Core', 'Node.js', 'Laravel', 'React', 'Vue'],
  'Connect': ['SQL Server', 'MySQL', 'REST APIs', 'Git', 'Linux', 'Automation'],
  'Foundation': ['Arduino', 'Raspberry Pi', 'Embedded integration']
}

const principles = ['Understand the problem before writing code', 'Design for maintainability', 'Business requirements drive technical decisions', 'Test what matters', 'Make systems understandable', 'Automate repetitive work']

function Arrow() { return <span aria-hidden="true">↗</span> }
function Section({ id, label, title, children }: {id:string; label:string; title:string; children:React.ReactNode}) {
  return <section id={id} className="section"><div className="eyebrow">{label}</div><h2>{title}</h2>{children}</section>
}

function App() {
  const [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') !== 'light')
  useEffect(() => { const theme = dark ? 'dark' : 'light'; document.documentElement.dataset.theme = theme; document.body.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme) }, [dark])
  return <>
    <header><a className="brand" href="#top">MR<span>.</span></a><nav className={menu ? 'open' : ''}><a href="#profile" onClick={()=>setMenu(false)}>Profile</a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav><div className="nav-tools"><button className="theme" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark ? '◐' : '◑'}</button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu ? '×' : '☰'}</button></div></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="kicker">Software Engineer · Indonesia</p><h1>Muhammad<br/><em>Ridhwan</em> Habib<br/>Abdillah.</h1><p className="lede">Building reliable software for real-world business operations.</p><p className="sublede">Software Engineer with 3+ years of experience delivering end-to-end software solutions in a global manufacturing environment.</p><div className="actions"><a className="button primary" href="#work">View my work <Arrow/></a><a className="button" href={cv} download>Download CV ↓</a></div></div><div className="hero-panel"><div className="panel-top"><span>ENGINEERING PROFILE</span><span className="status">● available for conversation</span></div><div className="signal"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="panel-bottom"><span>Requirements → software → operations</span><span>01—</span></div></div></section>
      <div className="proof"><div><b>3+ years</b><span>professional experience</span></div><div><b>Enterprise</b><span>software environment</span></div><div><b>Full-stack</b><span>development practice</span></div><div><b>Business + technical</b><span>analysis & delivery</span></div></div>

      <Section id="profile" label="01 / ENGINEERING PROFILE" title="Software built with the business context intact."><div className="profile-grid"><p className="large-copy">My path began in electrical engineering, where systems are tangible and constraints matter. It moved through robotics and embedded work, and into software engineering—where I now help translate operational needs into maintainable applications.</p><div className="detail-list"><p><b>Today</b>Full-stack web and desktop application development for global manufacturing and business operations.</p><p><b>Practice</b>Requirements analysis, APIs, database integration, automation, functional testing, regression testing, and UAT.</p><p><b>Working style</b>Coordinate across functions, review code, mentor teammates, and keep technical decisions connected to the problem being solved.</p></div></div></Section>

      <Section id="experience" label="02 / EXPERIENCE" title="A grounding in delivery, not just implementation."><div className="timeline"><article><div className="date">DEC 2022 — PRESENT</div><div><p className="company">PT Indonesia Epson Industry</p><h3>System Development Staff</h3><p>Developing internal software supporting global manufacturing and business operations, from requirements gathering through functional and technical specification, implementation, testing, and UAT.</p><div className="tags"><span>Full-stack</span><span>REST APIs</span><span>Databases</span><span>Automation</span><span>Code review</span><span>Mentoring</span></div></div></article><article><div className="date">JAN 2020 — FEB 2020</div><div><p className="company">PT Xirka Silicon Technology</p><h3>Embedded System Engineer Intern</h3><p>Worked on hardware and software integration, including system validation with RS-232, RS-485, Arduino, C, and C++.</p><div className="tags"><span>Arduino</span><span>RS-232</span><span>RS-485</span><span>C / C++</span></div></div></article></div></Section>

      <Section id="work" label="03 / SELECTED WORK" title="Engineering case studies."><p className="intro">These projects are presented with care for what can be stated from the available record. The focus is the problem space, contribution, and engineering foundation—not invented outcomes.</p><div className="cases"><Case n="01" name="Mandu.in" type="Bangkit Product-Based Capstone Project · C22-PS028" text="A product-based capstone project completed through Bangkit Academy in 2022." learn="A focused experience in taking a product concept through a structured capstone setting."/><Case n="02" name="Robusta coffee roaster temperature regulation" type="Academic engineering project" text="Temperature regulation for a Robusta coffee roaster using PID control and a motorized ball valve." learn="Control-oriented problem solving and the relationship between physical systems, actuators, and feedback."/><Case n="03" name="Home coffee roaster temperature control" type="Academic engineering project" text="Gas-fuelled home coffee-roaster temperature control using a motorized ball-valve actuator." learn="How an engineering requirement can connect sensing, actuation, and system behaviour."/></div></Section>

      <Section id="systems" label="04 / HOW I THINK ABOUT SOFTWARE" title="Trace the path from need to dependable operation."><p className="intro">This is a conceptual view of the engineering areas I work across—not a claim about any single production system.</p><div className="architecture">{['Requirements','Frontend','API','Application logic','Database','Operations & testing'].map((x,i)=><div className="arch-node" key={x}><span>0{i+1}</span><b>{x}</b>{i<5 && <i>↓</i>}</div>)}</div><div className="principles">{principles.map((p,i)=><div key={p}><span>0{i+1}</span>{p}</div>)}</div></Section>

      <Section id="stack" label="05 / TECHNOLOGY MAP" title="Tools arranged around the work they enable."><div className="tech-map">{Object.entries(tech).map(([group, items])=><div className="tech-group" key={group}><h3>{group}</h3>{items.map(x=><span key={x}>{x}</span>)}</div>)}</div></Section>

      <Section id="foundation" label="06 / ENGINEERING FOUNDATION" title="Where my systems thinking started."><div className="foundation"><div><p className="company">Gadjah Mada Robotic Team</p><h3>Electronic Engineer · GMRT Fukuro</h3><p>KRSBI-B Wheeled RoboSoccer</p></div><p>Electronic system design, schematics, PCB development, solenoid-kicker and driver-circuit work, component selection, embedded integration, debugging, failure analysis, and collaboration across mechanical and software teams.</p></div></Section>

      <Section id="education" label="07 / EDUCATION & CREDENTIALS" title="Built on an engineering foundation."><div className="credentials"><div><span>EDUCATION</span><h3>Universitas Gadjah Mada</h3><p>Bachelor of Electrical Engineering · GPA 3.47 / 4.00</p><h3>Bangkit Academy</h3><p>Machine Learning Path</p></div><div><span>CREDENTIALS</span><ul><li>DeepLearning.AI TensorFlow Developer Specialization</li><li>Google IT Automation Certificate</li><li>Google IT Automation with Python Specialization</li><li>Mathematics for Machine Learning Specialization</li><li>TensorFlow: Data and Deployment Specialization</li></ul></div></div></Section>

      <Section id="hire" label="08 / RECRUITER VIEW" title="What engineering hiring teams can quickly see."><div className="hire-grid"><div><span>TECHNICAL RECRUITER</span><p>3+ years in an enterprise environment; full-stack delivery, business analysis, testing, and technical leadership exposure.</p></div><div><span>SENIOR SOFTWARE ENGINEER</span><p>Attention to APIs, databases, maintainability, testing, system thinking, and code quality.</p></div><div><span>SOFTWARE ARCHITECT</span><p>An approach that connects requirements, design, implementation, collaboration, system boundaries, and technical trade-offs.</p></div></div></Section>
    </main>
    <footer id="contact"><p className="eyebrow">09 / CONTACT</p><h2>Have a system that needs<br/>to be built?</h2><a className="contact-link" href={cv} download>Start with the CV <Arrow/></a><p className="footer-note">Muhammad Ridhwan Habib Abdillah · Software Engineer</p></footer>
  </>
}
function Case({n,name,type,text}:{n:string;name:string;type:string;text:string;learn:string}) { const ids: Record<string,string> = {'01':'mandu','02':'pid-roaster','03':'gas-roaster'}; return <article className="case"><a href={projectHref(ids[n])}><span>{n}</span><div><p>{type}</p><h3>{name}</h3><small>{text}</small></div><b>↗</b></a></article> }
createRoot(document.getElementById('root')!).render(new URLSearchParams(window.location.search).has('project') ? <ProjectShowcase /> : <App />)
