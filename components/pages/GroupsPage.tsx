"use client"

import { useState } from "react"

interface Group {
  id: number
  name: string
  members: number
  description: string
  avatar: string
  joined?: boolean
}

export default function GroupsPage() {
  // CHANGE: Added extensive group mock data
  const [groups, setGroups] = useState<Group[]>([
    {
      id: 1,
      name: "Web Developer Vietnam",
      members: 52000,
      description: "Cộng đồng nhà phát triển web Việt Nam",
      avatar: "👨‍💻",
      joined: true,
    },
    {
      id: 2,
      name: "Thiết kế UI/UX",
      members: 31000,
      description: "Chia sẻ kiến thức thiết kế giao diện",
      avatar: "🎨",
      joined: false,
    },
    {
      id: 3,
      name: "Startup Ecosystem",
      members: 28000,
      description: "Nơi kết nối các startup và nhà đầu tư",
      avatar: "🚀",
      joined: true,
    },
    {
      id: 4,
      name: "Machine Learning VN",
      members: 18500,
      description: "Học tập và chia sẻ về AI & ML",
      avatar: "🤖",
      joined: false,
    },
    {
      id: 5,
      name: "Digital Marketing",
      members: 42300,
      description: "Chiến lược marketing online hiệu quả",
      avatar: "📱",
      joined: false,
    },
    {
      id: 6,
      name: "Blockchain & Crypto",
      members: 15600,
      description: "Khám phá công nghệ blockchain",
      avatar: "⛓️",
      joined: false,
    },
    {
      id: 7,
      name: "Product Management",
      members: 22400,
      description: "Quản lý sản phẩm hiệu quả",
      avatar: "📊",
      joined: true,
    },
    {
      id: 8,
      name: "Mobile App Development",
      members: 35800,
      description: "Phát triển ứng dụng di động",
      avatar: "📲",
      joined: false,
    },
  ])

  // CHANGE: Added join/leave functionality
  const toggleJoin = (id: number) => {
    setGroups(groups.map((g) => (g.id === id ? { ...g, joined: !g.joined } : g)))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Nhóm của bạn</h1>
      <p className="text-muted-foreground mb-6">Tham gia các nhóm để kết nối với cộng đồng</p>

      {/* CHANGE: Enhanced grid layout with better responsive design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div key={group.id} className="post-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-full h-32 bg-gradient-to-br from-primary to-accent rounded-lg mb-3 flex items-center justify-center text-5xl">
              {group.avatar}
            </div>
            <h3 className="font-bold text-lg mb-1 text-foreground">{group.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
            <p className="text-xs text-muted-foreground font-semibold mb-4">
              👥 {group.members.toLocaleString()} thành viên
            </p>
            {/* CHANGE: Enhanced join button with state management */}
            <button
              onClick={() => toggleJoin(group.id)}
              className={`w-full py-2 rounded-lg font-bold transition-all duration-200 hover:shadow-md ${
                group.joined
                  ? "bg-secondary text-foreground hover:bg-input"
                  : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105"
              }`}
            >
              {group.joined ? "✓ Đã tham gia" : "Tham gia"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
