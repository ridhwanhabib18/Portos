import './case-template.css'

type CaseStudy = {
  id: string
  number: string
  title: string
  type: string
  period: string
  summary: string
  problem: string
  approach: string
  systemsLens: string
  focusAreas: string[]
  reviewerTakeaway: string
}

const projects: CaseStudy[] = [
  {
    id: 'mandu', number: '01', title: 'Mandu.in',
    type: 'Bangkit Product-Based Capstone Project · C22-PS028', period: '2022',
    summary: 'A product-based capstone project completed through Bangkit Academy.',
    problem: 'A structured capstone setting for translating a product concept into a collaborative delivery project.',
    approach: 'The available project record confirms the capstone context. Specific implementation, architecture, and outcome details are not asserted here without verified source material.',
    systemsLens: 'The project represents experience in structured product delivery and collaboration—a useful complement to enterprise software work.',
    focusAreas: ['Product-based capstone', 'Collaborative delivery', 'Structured project work'],
    reviewerTakeaway: 'A concise, factual project record that supports the broader software-engineering trajectory without overstating individual contribution.'
  },
  {
    id: 'pid-roaster', number: '02', title: 'Robusta coffee roaster temperature regulation',
    type: 'Academic engineering project', period: 'Control systems',
    summary: 'Temperature regulation for a Robusta coffee roaster using PID control and a motorized ball valve.',
    problem: 'Regulate the temperature of a Robusta coffee roaster through a controlled physical process.',
    approach: 'Use a PID control method with a motorized ball valve as the stated actuator.',
    systemsLens: 'The work connects control logic, actuation, and feedback from a physical system—the foundation of disciplined systems thinking.',
    focusAreas: ['PID control', 'Temperature regulation', 'Motorized ball valve', 'Embedded systems'],
    reviewerTakeaway: 'Evidence of engineering thinking that reaches beyond a user interface: constraints, control, actuation, and system behaviour.'
  },
  {
    id: 'gas-roaster', number: '03', title: 'Home coffee roaster temperature control',
    type: 'Academic engineering project', period: 'Embedded control',
    summary: 'Gas-fuelled home coffee-roaster temperature control using a motorized ball-valve actuator.',
    problem: 'Control temperature in a gas-fuelled home coffee roaster.',
    approach: 'Use a motorized ball-valve actuator for temperature regulation.',
    systemsLens: 'A practical example of connecting a requirement, an actuator, and expected system behaviour.',
    focusAreas: ['Temperature control', 'Gas fuel', 'Actuation', 'Motorized ball valve'],
    reviewerTakeaway: 'A strong engineering foundation that supports an eventual move from embedded systems into full-stack application development.'
  }
]

export function projectHref(id: string) { return `?project=${id}#work` }

function Label({ children }: { children: React.ReactNode }) { return <p className="cs-label">{children}</p> }

export function ProjectShowcase() {
  const selected = new URLSearchParams(window.location.search).get('project')
  const project = projects.find(item => item.id === selected) ?? projects[0]

  return <main className="case-template">
    <nav className="cs-nav" aria-label="Project navigation">
      <a className="cs-brand" href="/">MR<span>.</span></a>
      <a className="cs-back" href="/#work">← Back to all work</a>
    </nav>

    <header className="cs-hero">
      <div>
        <Label>Selected work / {project.number}</Label>
        <h1>{project.title}</h1>
        <p className="cs-summary">{project.summary}</p>
      </div>
      <dl className="cs-meta">
        <div><dt>Project context</dt><dd>{project.type}</dd></div>
        <div><dt>Focus</dt><dd>{project.period}</dd></div>
        <div><dt>Evidence</dt><dd>CV-supported project summary</dd></div>
      </dl>
    </header>

    <section className="cs-scan" aria-label="Project at a glance">
      <div><Label>At a glance</Label><h2>What a reviewer should understand in 30 seconds.</h2></div>
      <div className="cs-scan-content"><p>{project.problem}</p><ul>{project.focusAreas.map(area => <li key={area}>{area}</li>)}</ul></div>
    </section>

    <section className="cs-evidence">
      <div><Label>Evidence-led presentation</Label><h2>Clear enough to assess.<br />Honest enough to trust.</h2></div>
      <div><p>This project page uses only facts supported by the available record. Screenshots, source code, technical diagrams, and links should be added only when they are available and approved for sharing.</p><div className="cs-evidence-row"><span>Project summary</span><b>Available</b><span>Repository / screenshots</span><b>Not published</b></div></div>
    </section>

    <section className="cs-review">
      <aside><Label>Review guide</Label><a href="#problem">Problem</a><a href="#approach">Approach</a><a href="#systems">Systems lens</a><a href="#takeaway">Recruiter takeaway</a></aside>
      <div className="cs-review-content">
        <article id="problem"><span>01</span><div><Label>Problem</Label><h2>Start with the need.</h2><p>{project.problem}</p></div></article>
        <article id="approach"><span>02</span><div><Label>Approach</Label><h2>Describe the work precisely.</h2><p>{project.approach}</p></div></article>
        <article id="systems"><span>03</span><div><Label>Systems lens</Label><h2>Connect technical pieces to behaviour.</h2><p>{project.systemsLens}</p></div></article>
        <article id="takeaway" className="cs-takeaway"><span>04</span><div><Label>Recruiter & tech lead takeaway</Label><h2>Why this belongs in the portfolio.</h2><p>{project.reviewerTakeaway}</p></div></article>
      </div>
    </section>

    <footer className="cs-footer"><Label>Next step</Label><h2>Want the full engineering profile?</h2><a href="/Muhammad-Ridhwan-Habib-Abdillah-CV.pdf" download>Download CV <span>↓</span></a></footer>
  </main>
}
