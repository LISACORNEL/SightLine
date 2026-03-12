export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">SightLine</p>
        <h1>Executive intelligence without analyst friction.</h1>
        <p className="lede">
          Connect business data, get recommended dashboard packs, read AI summaries,
          ask questions, and export reports.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Executive Overview</h2>
          <p>Top KPIs, business changes, and priority actions for leadership.</p>
        </article>
        <article className="card">
          <h2>Financial Intelligence</h2>
          <p>Cash, margin, receivables, payables, and budget variance in one place.</p>
        </article>
        <article className="card">
          <h2>AI Analyst</h2>
          <p>Plain-English summaries and citation-backed answers for CEOs and CFOs.</p>
        </article>
      </section>
    </main>
  )
}
