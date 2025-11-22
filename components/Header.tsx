"use client"

interface HeaderProps {
  onToggleDarkMode?: (isDark: boolean) => void
  darkMode?: boolean
}

export default function Header({ onToggleDarkMode, darkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-3 max-w-full">
        {/* Logo - CHANGE: Updated branding to SoTharmony */}
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-black text-sm">
            S
          </div>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SoTharmony</span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full px-4 py-2 bg-secondary text-foreground rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* CHANGE: Added dark mode toggle button */}
          <button
            onClick={() => onToggleDarkMode?.(!darkMode)}
            className="btn-icon bg-secondary hover:bg-input transition-all duration-200 text-lg"
            title="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200 relative">
            🔔<span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200">💬</button>
          <button className="btn-icon bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200">
            👤
          </button>
        </div>
      </div>
    </header>
  )
}
