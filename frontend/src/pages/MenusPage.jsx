import CallToActionSection from '../components/CallToActionSection.jsx'
import MenuTabs from '../components/MenuTabs.jsx'
import PackagesSection from '../components/PackagesSection.jsx'
import PageLayout from '../components/PageLayout.jsx'
import QuoteSection from '../components/QuoteSection.jsx'

export default function MenusPage() {
  return (
    <PageLayout isMenusPage title="Catering Menus & Packages — Amutham">
      <header className="page-head">
        <div className="page-head__bg"><img src="/img/menus-header.jpg" alt="" width="1920" height="900" fetchPriority="high" /></div>
        <div className="container page-head__inner" id="full-menus"><p className="crumb"><a href="/">Home</a> / Menus</p><h1 className="page-head__title">Catering menus &amp; <em>packages</em></h1><p className="section-lead">Everything on these menus is a starting point. We build a bespoke proposal around your event, guest count and taste — these prices give you a realistic sense of budget.</p></div>
      </header>
      <main id="main">
        <section className="section section--dark" id="menus"><div className="container"><div className="text-center mb-5 reveal in"><span className="eyebrow eyebrow--center">Choose a style</span><h2 className="display-heading">Menus by <em>service style</em></h2><p className="section-lead mx-auto text-center">Per-person pricing shown excludes VAT and travel. Minimum numbers apply to some styles.</p></div><MenuTabs fullPage /></div></section>
        <PackagesSection />
        <QuoteSection />
        <CallToActionSection eyebrow="Let’s plan it" heading="Ready to plan" emphasis="your event?" text="Tell us about your date and guest list." />
      </main>
    </PageLayout>
  )
}
