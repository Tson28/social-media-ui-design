"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts")

  const profileStats = [
    { label: "Bài viết", count: 342, icon: "📝" },
    { label: "Người theo dõi", count: 12400, icon: "👥" },
    { label: "Đang theo dõi", count: 523, icon: "➕" },
  ]

  const userPosts = [
    {
      id: 1,
      content: "Đi trekking ở Sapa hôm qua, cảnh đẹp đến mê hồn! 🌲 Không khí trong lành, núi rừng hùng vĩ.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      likes: 1200,
      comments: 234,
      shares: 45,
      date: "3 ngày trước",
    },
    {
      id: 2,
      content: "Chia sẻ kinh nghiệm làm việc tại startup. Teamwork và communication là chìa khóa thành công!",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      likes: 890,
      comments: 156,
      shares: 23,
      date: "1 tuần trước",
    },
    {
      id: 3,
      content: "Hành trình từ junior đến senior developer. Kiên trì và không ngừng học hỏi là bí quyết!",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      likes: 2345,
      comments: 567,
      shares: 89,
      date: "2 tuần trước",
    },
    {
      id: 4,
      content: "Sáng sớm ở Đà Lạt, sương mù bao phủ như thiên đường! 🏔️ Cảm giác bình yên khó tả.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
      likes: 1567,
      comments: 289,
      shares: 67,
      date: "3 tuần trước",
    },
    {
      id: 5,
      content: "Đắk Lắk - vùng đất của cà phê và rừng già. Nơi đây có những cánh rừng nguyên sinh tuyệt đẹp! 🌳",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      likes: 2100,
      comments: 423,
      shares: 102,
      date: "1 tháng trước",
    },
  ]

  const photos = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop",
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="relative mb-6">
        {/* Cover Photo */}
        <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-t-xl">
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffptshop.com.vn%2Ftin-tuc%2Fdanh-gia%2Favatar-vo-tri-169093&psig=AOvVaw0KZny2qZUCo36Sukeknyc_&ust=1763931072188000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCAlbXRhpEDFQAAAAAdAAAAABAE"
            alt="Cover"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        {/* Profile Info Card */}
        <div className="post-card -mt-20 relative z-10 overflow-hidden">
          <div className="px-6 pb-6 pt-24">
            {/* Avatar */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-card shadow-xl">
                  <Image
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Ftin-tuc%2Ftop-55-anh-bia-dep-cute-nhat-tai-xuong-ngay%2F%3Fsrsltid%3DAfmBOopUdtLcAGDi8nxXlSt9JHyhmIeW5T1-argZqwwfApi4Lg1kGM1m&psig=AOvVaw0vqCebaWXjMSHUJ8ItQZbm&ust=1763931024485000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCvlJ3RhpEDFQAAAAAdAAAAABAE"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <button className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:scale-110 transition-transform">
                  📷
                </button>
              </div>

              <div className="flex-1 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-1">Nguyễn Thái Sơn</h1>
                    <p className="text-muted-foreground mb-2">@nguyenthaison</p>
                    <p className="text-sm text-foreground flex items-center gap-2">
                      <span>✨</span>
                      <span>Full-stack Developer | Tech Enthusiast ☕</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                      Theo dõi
                    </button>
                    <button className="px-6 py-2 bg-secondary text-foreground rounded-lg font-semibold hover:bg-input transition-all duration-200">
                      Nhắn tin
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mb-4">
                  {profileStats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                      <span className="text-xl">{stat.icon}</span>
                      <div>
                        <span className="font-bold text-lg text-foreground block">{stat.count.toLocaleString()}</span>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-foreground leading-relaxed mb-4">
                  Yêu thích công nghệ, du lịch và cà phê ☕ Đam mê xây dựng những sản phẩm tuyệt vời. 
                  Luôn tìm kiếm những thử thách mới và cơ hội học hỏi. 
                  <span className="text-primary"> #WebDeveloper #Travel #Coffee</span>
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>📍 Hà Nội, Việt Nam</span>
                  <span>🔗 nguyenthaison.dev</span>
                  <span>📅 Tham gia tháng 1, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="post-card mb-6 p-2 flex gap-2 bg-secondary/50">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === "posts"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-foreground hover:bg-input"
          }`}
        >
          📝 Bài viết
        </button>
        <button
          onClick={() => setActiveTab("photos")}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === "photos"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-foreground hover:bg-input"
          }`}
        >
          📸 Ảnh
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeTab === "videos"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-foreground hover:bg-input"
          }`}
        >
          🎥 Video
        </button>
      </div>

      {/* Content */}
      {activeTab === "posts" && (
        <div className="space-y-4">
          {userPosts.map((post) => (
            <div key={post.id} className="post-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">Nguyễn Thái Sơn </p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>

              <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

              {post.image && (
                <div className="w-full rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.content.substring(0, 50)}
                    width={800}
                    height={500}
                    className="w-full h-auto max-h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="flex gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                <button className="hover:text-red-500 transition-colors flex items-center gap-2">
                  ❤️ <span>{post.likes.toLocaleString()}</span>
                </button>
                <button className="hover:text-primary transition-colors flex items-center gap-2">
                  💬 <span>{post.comments.toLocaleString()}</span>
                </button>
                <button className="hover:text-primary transition-colors flex items-center gap-2">
                  📤 <span>{post.shares.toLocaleString()}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "photos" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <Image
                src={photo}
                alt={`Photo ${i + 1}`}
                fill
                className="object-cover group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "videos" && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎥</div>
          <p className="text-muted-foreground">Chưa có video nào</p>
        </div>
      )}
    </div>
  )
}
