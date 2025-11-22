"use client"

import { useState } from "react"

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

export default function MessagesPage() {
  // CHANGE: Added comprehensive message mock data
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "Trần Thị B",
      avatar: "👩‍💼",
      lastMessage: "Bạn khỏe không? 👋",
      timestamp: "5 phút trước",
      unread: true,
    },
    {
      id: 2,
      name: "Lê Văn C",
      avatar: "👨‍💻",
      lastMessage: "Tối nay gặp mặt được không?",
      timestamp: "15 phút trước",
      unread: false,
    },
    {
      id: 3,
      name: "Phương Anh",
      avatar: "👩‍🎨",
      lastMessage: "Cảm ơn bạn nhiều lắm!",
      timestamp: "1 giờ trước",
      unread: false,
    },
    {
      id: 4,
      name: "Hoàng Văn",
      avatar: "👨‍🔬",
      lastMessage: "Project đó đã xong chưa?",
      timestamp: "3 giờ trước",
      unread: false,
    },
    {
      id: 5,
      name: "Vũ Thanh",
      avatar: "👨‍🎓",
      lastMessage: "Giới thiệu bạn công việc tốt",
      timestamp: "Hôm qua",
      unread: false,
    },
  ])

  const [selectedConv, setSelectedConv] = useState<number>(1)
  const [messageInput, setMessageInput] = useState("")

  const messages = [
    { id: 1, sender: "other", text: "Bạn khỏe không? 👋", timestamp: "5 phút trước" },
    { id: 2, sender: "me", text: "Tôi khỏe, còn bạn?", timestamp: "3 phút trước" },
    { id: 3, sender: "other", text: "Tôi cũng khỏe lắm!", timestamp: "2 phút trước" },
    { id: 4, sender: "me", text: "Tối nay có thời gian không?", timestamp: "1 phút trước" },
  ]

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("")
    }
  }

  return (
    <div className="flex h-[calc(100vh-70px)] bg-background">
      {/* Conversations List */}
      <div className="w-80 border-r border-border bg-card overflow-y-auto transition-colors duration-300">
        <div className="p-4 sticky top-0 bg-card border-b border-border">
          <h2 className="font-bold text-xl text-foreground mb-3">Tin nhắn</h2>
          <input
            type="text"
            placeholder="Tìm cuộc trò chuyện..."
            className="w-full px-3 py-2 bg-secondary text-foreground rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all duration-200"
          />
        </div>
        <div className="space-y-1 p-2">
          {/* CHANGE: Enhanced conversations list with unread indicators */}
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConv(conv.id)}
              className={`w-full sidebar-item justify-start transition-all duration-200 ${
                selectedConv === conv.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary text-foreground"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold flex-shrink-0">
                {conv.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-left">{conv.name}</p>
                <p
                  className={`text-xs truncate text-left ${selectedConv === conv.id ? "opacity-80" : "text-muted-foreground"}`}
                >
                  {conv.lastMessage}
                </p>
              </div>
              {conv.unread && <div className="w-3 h-3 bg-destructive rounded-full flex-shrink-0"></div>}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-background transition-colors duration-300">
        {/* Chat Header */}
        <div className="p-4 border-b border-border bg-card sticky top-0 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold">
            {conversations.find((c) => c.id === selectedConv)?.avatar}
          </div>
          <div>
            <h3 className="font-bold text-foreground">{conversations.find((c) => c.id === selectedConv)?.name}</h3>
            <p className="text-xs text-muted-foreground">Đang hoạt động</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200">📞</button>
            <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200">📹</button>
            <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200">ℹ️</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
          {/* CHANGE: Enhanced message display with better styling */}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl transition-all duration-200 ${
                  msg.sender === "me"
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-br-none"
                    : "bg-secondary text-foreground rounded-bl-none"
                }`}
              >
                <p>{msg.text}</p>
                <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border bg-card flex gap-2">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-4 py-2 bg-input text-foreground rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
          <button className="btn-icon bg-secondary hover:bg-input transition-all duration-200">😊</button>
          <button
            onClick={sendMessage}
            className="btn-icon bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:scale-110 transition-all duration-200"
          >
            ✈️
          </button>
        </div>
      </div>
    </div>
  )
}
