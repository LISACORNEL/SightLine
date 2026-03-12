import MetricCard from "../MetricCard";


export default function Home() {
  return (
    <div className="page">
      <section className="hero-panel">
        <p className="eyebrow">MVP Dashboard</p>
        <h1 className="hero-title">Executive clarity at a glance.</h1>
        <p className="hero-copy">
          SightLine will recommend dashboard packs, explain what changed,
          surface financial risk, and let leaders ask questions in plain English.
        </p>
      </section>

      <section className="metrics-grid">
        <MetricCard
          label="Revenue"
          value="$2.4M"
          delta="+8.2% vs prior period"
          tone="positive"
        />
        <MetricCard
          label="Cash Position"
          value="$640K"
          delta="-4.1% vs prior period"
          tone="warning"
        />
        <MetricCard
          label="Gross Margin"
          value="31.4%"
          delta="+1.2 pts improvement"
        />
      </section>

      <section className="panel-grid">
        <article className="panel">
          <p className="panel-kicker">Executive Overview</p>
          <h2>What changed</h2>
          <p>
            Revenue is improving, but cash is tightening. The first usable
            version should make that tradeoff obvious immediately.
          </p>
        </article>

        <article className="panel">
          <p className="panel-kicker">Financial Intelligence</p>
          <h2>What needs attention</h2>
          <p>
            The finance pack should quickly explain margin movement, overdue
            receivables, and budget variance.
          </p>
        </article>

        <article className="panel">
          <p className="panel-kicker">AI Briefing</p>
          <h2>How the assistant should behave</h2>
          <p>
            Plain-English answers, short executive summaries, and citation-backed
            responses only.
          </p>
        </article>
      </section>
    </div>
  )
}
