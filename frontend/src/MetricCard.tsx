type MetricCardProps = {
  label: string
  value: string
  delta: string
  tone?: 'default' | 'positive' | 'warning'
}

export default function MetricCard({
  label,
  value,
  delta,
  tone = 'default',
}: MetricCardProps) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <p className="metric-label">{label}</p>
      <h3 className="metric-value">{value}</h3>
      <p className="metric-delta">{delta}</p>
    </article>
  )
}
