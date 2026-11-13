import Reveal from './Reveal.jsx'

const packages = [
  ['Essential', '£38', 'A generous buffet or grazing spread for relaxed gatherings and celebrations.', ['Buffet or grazing menu of your choice', 'Two mains & four seasonal sides', 'Artisan breads, butters & dressings', 'Delivery, set-up & styling']],
  ['Signature', '£72', 'Our full-service experience for weddings and milestone events.', ['Six passed canapés on arrival', 'Three-course plated dinner, served', 'Uniformed waiting & kitchen team', 'Private menu tasting for two']],
  ['Bespoke', 'From £110', 'A fully designed menu with no limits — for the events that deserve everything.', ['Four-to-six course tasting menu', 'Wine & cocktail pairings', 'Private chef & front-of-house brigade', 'Full event styling']],
]

export default function PackagesSection() {
  return (
    <section className="section section--paper" id="packages"><div className="container">
      <div className="text-center mb-5 reveal in"><span className="eyebrow eyebrow--center">Event packages</span><h2 className="display-heading">Three ways to <em>book us</em></h2><p className="section-lead mx-auto text-center">Per-person packages that bundle food, service and the extras. Everything is adjustable.</p></div>
      <div className="pkg-grid">{packages.map(([name, price, description, items], index) => <Reveal className={`pkg-card${index === 1 ? ' pkg-card--featured reveal--d1' : ''}`} key={name}>{index === 1 && <span className="pkg-card__badge">Most booked</span>}<h3 className="pkg-card__name">{name}</h3><div className="pkg-card__price">{price}<span> / person</span></div><p className="pkg-card__desc">{description}</p><ul className="pkg-card__list">{items.map((item) => <li key={item}>{item}</li>)}</ul><a className={`btn ${index === 1 ? 'btn-amutham' : 'btn-outline-amutham'} btn-block-sm`} href="/quote">Enquire about {name}</a></Reveal>)}</div>
    </div></section>
  )
}
