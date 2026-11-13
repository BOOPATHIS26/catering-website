import { useRef, useState } from 'react'
import DietTag from './DietTag.jsx'

const menuStyles = [
  {
    id: 'canapes',
    name: 'Canapés & Bites',
    price: 'From £18 per person · choose 6 canapés',
    items: [
      ['Whipped goat’s cheese tartlet', 'Caramelised fig, toasted walnut, thyme honey', '£3.20', ['v']],
      ['Rare roast beef crostini', 'Horseradish crème fraîche, pickled shallot', '£3.60', []],
      ['Cured salmon blini', 'Dill cream, lemon, salmon roe', '£3.80', ['gf']],
      ['Spiced cauliflower pakora', 'Mint yoghurt, tamarind, nigella seed', '£3.00', ['vg', 'gf']],
      ['Mini Yorkshire pudding', 'Slow-braised short rib, red wine jus', '£3.90', []],
      ['Chilli-salt king prawn', 'Lime aïoli, coriander, crispy garlic', '£4.20', ['gf']],
    ],
  },
  {
    id: 'buffet',
    name: 'Buffet',
    price: '£28 per person · two mains, four sides',
    items: [
      ['Harissa-roast lamb shoulder', 'Pulled, twelve-hour cook, pomegranate & herb', 'Main', ['gf']],
      ['Buttermilk-brined roast chicken', 'Lemon, tarragon, pan gravy', 'Main', []],
      ['Miso-glazed aubergine', 'Sesame, spring onion, sticky rice vinegar glaze', 'Main', ['vg', 'gf']],
      ['Charred heritage carrot salad', 'Whipped feta, dukkah, orange dressing', 'Side', ['v', 'gf']],
      ['Giant herbed couscous', 'Roast squash, toasted almond, preserved lemon', 'Side', ['vg']],
      ['New potato & chive salad', 'Crème fraîche, wholegrain mustard, dill', 'Side', ['v', 'gf']],
    ],
  },
  {
    id: 'plated',
    name: 'Plated Dinner',
    price: '£52 for three courses · £64 for four courses',
    items: [
      ['Hand-dived scallops', 'Cauliflower purée, brown butter, capers · starter', 'Starter', ['gf']],
      ['Wild mushroom & truffle risotto', 'Aged parmesan, chive oil · vegetarian starter', 'Starter', ['v', 'gf']],
      ['Herb-crusted beef fillet', 'Dauphinoise, glazed heritage carrots, red wine jus', 'Main', ['gf']],
      ['Salt-baked celeriac Wellington', 'Chestnut, wild mushroom duxelles, madeira · vegan main', 'Main', ['vg']],
      ['Dark chocolate & salted caramel tart', 'Crème fraîche, honeycomb', 'Dessert', []],
    ],
  },
  {
    id: 'grazing',
    name: 'Grazing Tables',
    price: 'From £22 per person · minimum 30 guests',
    items: [
      ['Artisan cheese selection', 'British farmhouse cheeses, quince, grapes and oatcakes', 'Included', ['v']],
      ['Cured meats & charcuterie', 'Coppa, bresaola, fennel salami, cornichons', 'Included', []],
      ['Seasonal crudités', 'Market vegetables, whipped hummus, green goddess dip', 'Included', ['vg', 'gf']],
      ['Warm breads & focaccia', 'Cultured butter, olive oil, sea salt', 'Included', ['v']],
      ['Fruit, nuts & preserves', 'Seasonal fruit, toasted nuts, house-made chutneys', 'Included', ['vg']],
    ],
  },
]

export default function MenuTabs({ fullPage = false }) {
  const [active, setActive] = useState(0)
  const tabsRef = useRef([])

  function handleKeyDown(event, index) {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % menuStyles.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + menuStyles.length) % menuStyles.length
    if (next !== index) {
      event.preventDefault()
      setActive(next)
      tabsRef.current[next]?.focus()
    }
  }

  return (
    <>
      <div className="menu-tabs reveal reveal--d1 in" role="tablist" aria-label={fullPage ? 'Menu styles' : 'Menu categories'}>
        {menuStyles.map((menu, index) => (
          <button
            className="menu-tab"
            type="button"
            role="tab"
            id={`${fullPage ? 'full-' : ''}tab-${menu.id}`}
            aria-controls={`${fullPage ? 'full-' : ''}panel-${menu.id}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            key={menu.id}
            ref={(element) => { tabsRef.current[index] = element }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >{menu.name}</button>
        ))}
      </div>
      <p className="dietary-legend" aria-label="Dietary label meanings">
        <span><strong>V</strong> Vegetarian</span>
        <span><strong>VG</strong> Vegan</span>
        <span><strong>GF</strong> Gluten-free</span>
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          {menuStyles.map((menu, index) => (
            <div
              className={`menu-panel reveal${active === index ? ' in' : ''}`}
              role="tabpanel"
              id={`${fullPage ? 'full-' : ''}panel-${menu.id}`}
              aria-labelledby={`${fullPage ? 'full-' : ''}tab-${menu.id}`}
              key={menu.id}
              hidden={active !== index}
              tabIndex={0}
            >
              <div className="menu-panel__head text-center"><p className="menu-panel__price-note">{menu.price}</p></div>
              <ul className="menu-list">
                {menu.items.map(([name, description, price, tags]) => (
                  <li className="menu-item" key={name}>
                    <span className="menu-item__main">
                      <span className="menu-item__name">{name}{tags.length > 0 && <span className="menu-item__tags">{tags.map((tag) => <DietTag tag={tag} key={tag} />)}</span>}</span>
                      <span className="menu-item__desc">{description}</span>
                    </span>
                    <span className="menu-item__leader" aria-hidden="true" />
                    <span className="menu-item__price">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
