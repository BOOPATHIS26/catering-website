const labels = { v: 'V', vg: 'VG', gf: 'GF' }

export default function DietTag({ tag }) {
  return <span className={`diet-tag diet-tag--${tag}`}>{labels[tag]}</span>
}
