
"use client";

import { useMemo, useState } from "react";

type IconName =
  | "grid"
  | "code"
  | "brain"
  | "lightbulb"
  | "award"
  | "chat"
  | "settings"
  | "search"
  | "bell"
  | "arrow"
  | "calendar"
  | "clock"
  | "users"
  | "activity"
  | "book"
  | "plus"
  | "chevron"
  | "logout"
  | "menu"
  | "sparkles";

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
    code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 4-4 16" /></>,
    brain: <><path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 3 7h5Z" /><path d="M12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-3 7h-5Z" /><path d="M8 8h.01M16 8h.01M7 14h.01M17 14h.01" /></>,
    lightbulb: <><path d="M9 18h6M10 22h4" /><path d="M8 14.5a7 7 0 1 1 8 0c-1 .7-1.5 1.5-1.5 2.5h-5c0-1-.5-1.8-1.5-2.5Z" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="m8.2 13-1 8 4.8-3 4.8 3-1-8" /></>,
    chat: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    activity: <><path d="M3 12h4l3-9 4 18 3-9h4" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    logout: <><path d="M10 17l5-5-5-5M15 12H3" /><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" /></>,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const navigation: { label: string; icon: IconName; section: string }[] = [
  { label: "Dashboard", icon: "grid", section: "MAIN MENU" },
  { label: "Code Clan", icon: "code", section: "MAIN MENU" },
  { label: "ML Analysis League", icon: "brain", section: "MAIN MENU" },
  { label: "Innovation Workspace", icon: "lightbulb", section: "MAIN MENU" },
  { label: "Certificates", icon: "award", section: "RESOURCES" },
  { label: "Department Chat", icon: "chat", section: "RESOURCES" },
  { label: "Settings", icon: "settings", section: "SYSTEM" },
];

const activities = [
  { icon: "code", color: "purple", title: "Code Clan", detail: "Weekly coding challenge opened", time: "10 min ago" },
  { icon: "award", color: "green", title: "Certificates", detail: "New certificate template added", time: "1 hour ago" },
  { icon: "users", color: "blue", title: "Innovation Workspace", detail: "A new team joined the workspace", time: "3 hours ago" },
  { icon: "chat", color: "orange", title: "Department Chat", detail: "Faculty announcement posted", time: "Yesterday" },
];

const announcements = [
  { tag: "EVENT", title: "Innovation Sprint 2026", detail: "Share your ideas and build something meaningful.", date: "18 OCT", color: "purple" },
  { tag: "ACADEMIC", title: "Project review schedule", detail: "Check your team’s review slot before the deadline.", date: "21 OCT", color: "blue" },
  { tag: "COMMUNITY", title: "Code Clan challenge", detail: "A fresh challenge is waiting for you.", date: "24 OCT", color: "green" },
];

export default function Home() {
  const [role, setRole] = useState<"Student" | "Faculty">("Student");
  const [active, setActive] = useState("Dashboard");
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const filteredActivities = useMemo(
    () =>
      activities.filter((item) =>
        `${item.title} ${item.detail}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const pageDescriptions: Record<string, string> = {
    Dashboard: "Your department, connected.",
    "Code Clan": "Practice, compete, and grow your coding skills.",
    "ML Analysis League": "Explore machine learning through collaboration.",
    "Innovation Workspace": "Turn promising ideas into real projects.",
    Certificates: "Your achievements, all in one place.",
    "Department Chat": "Stay connected with students and faculty.",
    Settings: "Make your workspace feel like yours.",
  };

  const isDashboard = active === "Dashboard";

  return (
    <main className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="sparkles" size={23} /></div>
          <div>
            <div className="brand-name">NEXUS<span>.</span></div>
            <div className="brand-caption">DEPARTMENT WORKSPACE</div>
          </div>
          <button className="icon-button sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close navigation">
            ×
          </button>
        </div>

        <div className="workspace-switcher">
          <div className="workspace-avatar">AI</div>
          <div className="workspace-copy">
            <strong>AI & DS Department</strong>
            <span>Academic workspace</span>
          </div>
          <Icon name="chevron" size={16} />
        </div>

        <nav className="side-navigation" aria-label="Main navigation">
          {["MAIN MENU", "RESOURCES", "SYSTEM"].map((section) => (
            <div className="nav-section" key={section}>
              <div className="nav-heading">{section}</div>
              {navigation.filter((item) => item.section === section).map((item) => (
                <button
                  key={item.label}
                  className={`nav-item ${active === item.label ? "nav-active" : ""}`}
                  onClick={() => {
                    setActive(item.label);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                  {item.label === "Department Chat" && <span className="nav-dot" />}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="status-card">
            <div className="status-orb"><Icon name="activity" size={17} /></div>
            <div>
              <strong>All systems ready</strong>
              <span>Workspace status</span>
            </div>
            <span className="live-dot" />
          </div>
          <button className="profile-card" onClick={() => setRole(role === "Student" ? "Faculty" : "Student")}>
            <div className="profile-avatar">{role === "Student" ? "ST" : "FC"}</div>
            <div className="profile-copy">
              <strong>{role === "Student" ? "Student Account" : "Faculty Account"}</strong>
              <span>{role} view · Demo mode</span>
            </div>
            <Icon name="chevron" size={16} />
          </button>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">
              <Icon name="menu" />
            </button>
            <div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div>
          </div>
          <div className="topbar-actions">
            <label className="search-box">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search activity..."
                aria-label="Search recent activity"
              />
              <kbd>⌘ K</kbd>
            </label>
            <div className="notification-wrap">
              <button className="icon-button notification-button" onClick={() => setShowNotifications(!showNotifications)} aria-label="Notifications">
                <Icon name="bell" size={19} />
                <span className="notification-indicator" />
              </button>
              {showNotifications && (
                <div className="notification-popover">
                  <strong>Notifications</strong>
                  <p>Your workspace is ready to explore.</p>
                  <p>Welcome to the {role.toLowerCase()} demo view.</p>
                </div>
              )}
            </div>
            <div className="topbar-divider" />
            <div className="top-profile">
              <div className="profile-avatar">{role === "Student" ? "ST" : "FC"}</div>
              <div><strong>{role}</strong><span>Demo account</span></div>
            </div>
          </div>
        </header>

        <div className="content-area">
          <div className="page-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> YOUR DIGITAL CAMPUS</div>
              <h1>{isDashboard ? "Command Center" : active}<span className="heading-period">.</span></h1>
              <p>{pageDescriptions[active]}</p>
            </div>
            <div className="heading-controls">
              <div className="role-switch" aria-label="Choose dashboard role">
                <button className={role === "Student" ? "role-selected" : ""} onClick={() => setRole("Student")}>Student</button>
                <button className={role === "Faculty" ? "role-selected" : ""} onClick={() => setRole("Faculty")}>Faculty</button>
              </div>
              <button className="primary-button" onClick={() => setActive("Innovation Workspace")}>
                <Icon name="plus" size={17} />
                <span>{role === "Faculty" ? "Create announcement" : "Explore workspace"}</span>
              </button>
            </div>
          </div>

          {!isDashboard && (
            <div className="module-banner">
              <div className="module-banner-icon"><Icon name={navigation.find((item) => item.label === active)?.icon ?? "grid"} size={25} /></div>
              <div>
                <span className="eyebrow">WORKSPACE MODULE</span>
                <h2>{active}</h2>
                <p>This module is ready for its next development phase. The navigation and role switcher are already working.</p>
              </div>
              <span className="coming-soon">PHASE 02</span>
            </div>
          )}

          <section className="hero-card">
            <div className="hero-grid" />
            <div className="hero-content">
              <div className="hero-pill"><span className="hero-pill-dot" /> YOUR SPACE TO BUILD</div>
              <h2>Ideas become<br /><span>impact here.</span></h2>
              <p>
                {role === "Student"
                  ? "Discover opportunities, collaborate with your peers, and turn what you learn into something extraordinary."
                  : "Guide student innovation, share department updates, and help ideas move from concept to creation."}
              </p>
              <button className="hero-button" onClick={() => setActive(role === "Student" ? "Innovation Workspace" : "Certificates")}>
                {role === "Student" ? "Discover opportunities" : "Manage department"}
                <Icon name="arrow" size={17} />
              </button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-ring ring-one" />
              <div className="hero-ring ring-two" />
              <div className="hero-ring ring-three" />
              <div className="hero-core"><Icon name="sparkles" size={44} /></div>
              <div className="floating-chip chip-top"><span className="chip-pulse" /> IDEATE</div>
              <div className="floating-chip chip-bottom">BUILD <span>↗</span></div>
              <div className="hero-coordinate">19.9975° N<br />73.7898° E</div>
            </div>
            <div className="hero-index"><span>01</span> / THE NEXT CHAPTER</div>
          </section>

          <div className="section-heading">
            <div><span className="section-kicker">AT A GLANCE</span><h2>Workspace overview</h2></div>
            <span className="updated-label"><span className="live-dot" /> Demo data</span>
          </div>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-top"><div className="stat-icon purple"><Icon name="users" size={20} /></div><span className="stat-trend">+12.5% <Icon name="arrow" size={13} /></span></div>
              <div className="stat-value">{role === "Student" ? "248" : "32"}<span>{role === "Student" ? " students" : " faculty"}</span></div>
              <div className="stat-label">Department community</div>
              <div className="stat-foot"><span className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></span><span>Across the department</span></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><div className="stat-icon blue"><Icon name="lightbulb" size={20} /></div><span className="stat-neutral">In progress</span></div>
              <div className="stat-value">{role === "Student" ? "18" : "12"}<span> projects</span></div>
              <div className="stat-label">Innovation in motion</div>
              <div className="stat-progress"><span style={{ width: "68%" }} /></div>
              <div className="progress-caption"><span>Project activity</span><strong>68%</strong></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><div className="stat-icon green"><Icon name="award" size={20} /></div><span className="stat-neutral">This semester</span></div>
              <div className="stat-value">126<span> earned</span></div>
              <div className="stat-label">Certificates issued</div>
              <div className="stat-foot"><span className="stat-foot-dot" /><span>Achievements worth celebrating</span></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><div className="stat-icon orange"><Icon name="code" size={20} /></div><span className="stat-trend">Active</span></div>
              <div className="stat-value">09<span> challenges</span></div>
              <div className="stat-label">Code Clan challenges</div>
              <div className="stat-foot"><span className="stat-foot-dot orange-dot" /><span>Ready for participation</span></div>
            </article>
          </section>

          <section className="dashboard-columns">
            <div className="panel activity-panel">
              <div className="panel-heading">
                <div><span className="section-kicker">LIVE FROM YOUR WORKSPACE</span><h2>Recent activity</h2></div>
                <button className="text-button" onClick={() => setActive("Department Chat")}>View all <Icon name="chevron" size={15} /></button>
              </div>
              <div className="activity-list">
                {filteredActivities.length ? filteredActivities.map((item, index) => (
                  <div className="activity-item" key={item.title}>
                    <div className={`activity-icon ${item.color}`}><Icon name={item.icon as IconName} size={18} /></div>
                    <div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div>
                    <time>{item.time}</time>
                    {index < filteredActivities.length - 1 && <div className="activity-line" />}
                  </div>
                )) : <div className="empty-state">No activities match “{query}”. Try another search.</div>}
              </div>
            </div>

            <div className="panel quick-panel">
              <div className="panel-heading">
                <div><span className="section-kicker">JUMP RIGHT IN</span><h2>Quick access</h2></div>
              </div>
              <div className="quick-links">
                <button onClick={() => setActive("Code Clan")}><div className="quick-icon purple"><Icon name="code" size={19} /></div><span><strong>Code Clan</strong><small>Practice & compete</small></span><Icon name="chevron" size={17} /></button>
                <button onClick={() => setActive("Innovation Workspace")}><div className="quick-icon blue"><Icon name="lightbulb" size={19} /></div><span><strong>Innovation Hub</strong><small>Build your next idea</small></span><Icon name="chevron" size={17} /></button>
                <button onClick={() => setActive("Certificates")}><div className="quick-icon green"><Icon name="award" size={19} /></div><span><strong>Certificates</strong><small>View achievements</small></span><Icon name="chevron" size={17} /></button>
                <button onClick={() => setActive("Department Chat")}><div className="quick-icon orange"><Icon name="chat" size={19} /></div><span><strong>Department Chat</strong><small>Connect with your people</small></span><Icon name="chevron" size={17} /></button>
              </div>
            </div>
          </section>

          <section className="panel announcements-panel">
            <div className="panel-heading">
              <div><span className="section-kicker">DON’T MISS A THING</span><h2>Announcements & upcoming</h2></div>
              {role === "Faculty" && <button className="text-button" onClick={() => setShowNotifications(true)}><Icon name="plus" size={15} /> New announcement</button>}
            </div>
            <div className="announcement-grid">
              {announcements.map((item) => (
                <article className="announcement-card" key={item.title}>
                  <div className="announcement-top"><span className={`announcement-tag ${item.color}`}>{item.tag}</span><span className="announcement-date"><Icon name="calendar" size={14} /> {item.date}</span></div>
                  <h3>{item.title}</h3><p>{item.detail}</p>
                  <button className="announcement-link" onClick={() => setActive(item.title === "Code Clan challenge" ? "Code Clan" : "Innovation Workspace")}>Explore <Icon name="arrow" size={14} /></button>
                </article>
              ))}
            </div>
          </section>

          <footer className="footer">
            <div className="footer-brand"><span className="footer-mark"><Icon name="sparkles" size={15} /></span> NEXUS<span className="footer-dot">.</span></div>
            <span>Built for the curious. Designed for what’s next.</span>
            <span className="footer-status"><span className="live-dot" /> All systems operational</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
