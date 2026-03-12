import type { ReactNode } from 'react'

const navItems = [
  'Executive Overview',
  'Financial Intelligence',
  'AI Briefing',
  'Exports',
  'Alerts',
]

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="brand-kicker">SightLine</p>
          <h1 className="brand-title">Executive Intelligence</h1>
          <p className="brand-copy">
            Clean analytics for leadership, without analyst friction.
          </p>
        </div>

        <nav className="nav">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`nav-item ${index === 0 ? 'active' : ''}`}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <div className="content">
        <header className="topbar">
          <div>
            <p className="topbar-label">Workspace</p>
            <h2 className="topbar-title">Executive Workspace</h2>
          </div>

          <div className="ask-bar">
            Ask SightLine about revenue, cash, risk, or variance...
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}
