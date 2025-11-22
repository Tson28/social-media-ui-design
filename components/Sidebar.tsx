"use client"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: "home", label: "Trang chủ", icon: "🏠" },
    { id: "profile", label: "Trang cá nhân", icon: "👤" },
    { id: "groups", label: "Nhóm", icon: "👥" },
    { id: "messages", label: "Tin nhắn", icon: "💬" },
    { id: "bookmarks", label: "Đã lưu", icon: "🔖" },
    { id: "settings", label: "Cài đặt", icon: "⚙️" },
  ]

  return (
    <aside className="w-64 bg-card border-r border-border overflow-y-auto hidden md:block transition-colors duration-300">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`sidebar-item w-full justify-start transition-all duration-200 ${
              currentPage === item.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* CHANGE: Added more realistic groups section */}
      <div className="p-4 mt-8 border-t border-border">
        <h3 className="font-bold mb-3 text-foreground">Nhóm yêu thích</h3>
        <div className="space-y-2">
          {[
            { name: "Designers", members: 2.3 },
            { name: "Developers", members: 5.1 },
            { name: "Startups", members: 1.8 },
            { name: "Digital Marketing", members: 3.2 },
          ].map((group) => (
            <div key={group.name} className="sidebar-item text-sm hover:bg-secondary transition-all duration-200">
              <span>👥</span>
              <div className="flex-1">
                <div className="font-semibold">{group.name}</div>
                <div className="text-xs text-muted-foreground">{group.members}K thành viên</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
