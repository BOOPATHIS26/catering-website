import MenuTabs from './MenuTabs.jsx'

export default function MenusSection() {
  return (
    <section className="section section--dark" id="sample-menus">
      <div className="container">
        <div className="text-center mb-5 reveal in"><span className="eyebrow eyebrow--center">Sample menus</span><h2 className="display-heading">Priced menus &amp; <em>packages</em></h2><p className="section-lead mx-auto text-center">A taste of what we serve. Every menu is a starting point — we tailor dishes, courses and quantities to your event.</p></div>
        <MenuTabs />
        <div className="text-center mt-5"><a className="btn btn-outline-amutham" href="/menus">Explore full menus &amp; packages</a></div>
      </div>
    </section>
  )
}
