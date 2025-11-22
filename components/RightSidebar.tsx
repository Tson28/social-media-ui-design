"use client"

import Image from "next/image"

export default function RightSidebar() {
  // CHANGE: Expanded mock data with more realistic trends and suggestions
  const trends = [
    { tag: "#WebDevelopment", posts: "245K", trend: "↑ 45%" },
    { tag: "#ReactJS", posts: "189K", trend: "↑ 32%" },
    { tag: "#DesignTrends", posts: "156K", trend: "↑ 28%" },
    { tag: "#StartupLife", posts: "132K", trend: "↑ 18%" },
    { tag: "#AI", posts: "298K", trend: "↑ 65%" },
    { tag: "#Programming", posts: "176K", trend: "↑ 22%" },
  ]

  const suggestions = [
    { name: "Lê Minh Tuấn", mutual: "45 bạn chung", avatar: "https://i.pravatar.cc/150?img=33" },
    { name: "Hoàng Vân", mutual: "38 bạn chung", avatar: "https://i.pravatar.cc/150?img=45" },
    { name: "Phan Anh", mutual: "27 bạn chung", avatar: "https://i.pravatar.cc/150?img=13" },
    { name: "Võ Thanh Hoa", mutual: "52 bạn chung", avatar: "https://i.pravatar.cc/150?img=20" },
    { name: "Đặng Văn Nam", mutual: "33 bạn chung", avatar: "https://i.pravatar.cc/150?img=32" },
  ]

  return (
    <aside className="w-72 bg-card border-l border-border overflow-y-auto hidden lg:block transition-colors duration-300">
      <div className="p-4 space-y-6">
        {/* Trending */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-foreground">Xu hướng hôm nay</h3>
          <div className="space-y-2">
            {trends.map((trend, i) => (
              <div key={i} className="sidebar-item cursor-pointer group transition-all duration-200 hover:bg-secondary">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-foreground group-hover:text-primary">{trend.tag}</p>
                  <p className="text-xs text-muted-foreground">{trend.posts} bài viết</p>
                </div>
                <span className="text-xs text-accent font-bold">{trend.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-foreground">Có thể bạn quen</h3>
          <div className="space-y-3">
            {suggestions.map((person, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-foreground">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.mutual}</p>
                </div>
                {/* CHANGE: Enhanced button with better styling */}
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:shadow-md hover:scale-110 transition-all duration-200">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground border-t border-border pt-4">
          <p className="mb-2">© 2025 SoTharmony.</p>
          <div className="space-y-1">
            <p className="hover:text-primary cursor-pointer transition-colors">Chính sách bảo mật</p>
            <p className="hover:text-primary cursor-pointer transition-colors">Điều khoản dịch vụ</p>
            <p className="hover:text-primary cursor-pointer transition-colors">Liên hệ</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
