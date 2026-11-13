import { useState } from 'react'
import DietTag from './DietTag.jsx'

const dishes = [
  ['Seared Scallops', 'Hand-dived scallops, silky cauliflower purée, brown butter and crisp capers.', 'dish-scallops.jpg', ['gf']],
  ['Herb-Crusted Fillet', 'Grass-fed beef fillet, dauphinoise, glazed heritage carrots, rich red wine jus.', 'dish-beef.jpg', ['gf']],
  ['Burrata & Heirloom', 'Creamy burrata, marinated heirloom tomatoes, basil oil and aged balsamic.', 'dish-burrata.jpg', ['v', 'gf']],
  ['Beetroot-Cured Salmon', 'Beetroot & gin cured salmon, dill crème fraîche, pickled cucumber, rye.', 'dish-salmon.jpg', ['gf']],
  ['Truffle Risotto', 'Wild mushroom and black truffle risotto, aged parmesan, chive oil.', 'dish-risotto.jpg', ['v', 'gf']],
  ['Miso Aubergine', 'Sticky miso-glazed aubergine, toasted sesame, spring onion, sushi rice.', 'dish-lamb.jpg', ['vg', 'gf']],
  ['Chocolate & Caramel Tart', 'Dark chocolate ganache, salted caramel, honeycomb and crème fraîche.', 'dish-tart.jpg', ['v']],
  ['Canapé Selection', 'A rotating tray of six seasonal passed canapés, styled to your colour palette.', 'dish-canape.jpg', ['v']],
]

const filters = [['all', 'All dishes'], ['v', 'Vegetarian'], ['vg', 'Vegan'], ['gf', 'Gluten-free']]

export default function DishesSection() {
  const [filter, setFilter] = useState('all')

  return (
    <section className="section section--tint" id="dishes">
      <div className="container">
        <div className="text-center mb-5 reveal in">
          <span className="eyebrow eyebrow--center">Signature dishes</span><h2 className="display-heading">A closer look at <em>the plate</em></h2>
          <p className="section-lead mx-auto text-center">Seasonal, produce-led cooking with something for every guest. Filter by dietary need below.</p>
        </div>
        <div className="filter-bar reveal in" role="group" aria-label="Filter dishes by dietary need">
          {filters.map(([id, label]) => <button className="filter-btn" type="button" key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}
        </div>
        <p className="dietary-legend" aria-label="Dietary label meanings">
          <span><strong>V</strong> Vegetarian</span>
          <span><strong>VG</strong> Vegan</span>
          <span><strong>GF</strong> Gluten-free</span>
        </p>
        <div className="dish-grid">
          {dishes.filter(([, , , tags]) => filter === 'all' || tags.includes(filter)).map(([name, description, image, tags]) => (
            <article className="dish-card reveal in" key={name}>
              <div className="dish-card__media"><img src={`/img/${image}`} alt={name} width="480" height="360" loading="lazy" /></div>
              <div className="dish-card__body"><h3 className="dish-card__name">{name}</h3><p className="dish-card__desc">{description}</p><div className="dish-card__tags">{tags.map((tag) => <DietTag key={tag} tag={tag} />)}</div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
