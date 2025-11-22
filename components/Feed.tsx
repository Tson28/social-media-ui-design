"use client"

import { useState } from "react"
import Image from "next/image"

interface Post {
  id: number
  author: string
  avatar: string
  time: string
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  liked?: boolean
}

export default function Feed() {
  // CHANGE: Added realistic avatars and nature images for posts
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Nguyễn Văn A",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "2 giờ trước",
      content: "Vừa hoàn thành dự án web mới! Rất hứng thú với React 19 ✨ Công nghệ này quá tuyệt vời.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      likes: 2340,
      comments: 456,
      shares: 124,
      liked: false,
    },
    {
      id: 2,
      author: "Trần Thị B",
      avatar: "https://i.pravatar.cc/150?img=47",
      time: "4 giờ trước",
      content: "Đi trekking ở Sapa hôm qua, cảnh đẹp đến mê hồn! 🌲 Không khí trong lành, núi rừng hùng vĩ. Ai cũng nên thử một lần!",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
      likes: 4560,
      comments: 892,
      shares: 234,
      liked: false,
    },
    {
      id: 3,
      author: "Lê Minh Tuấn",
      avatar: "https://i.pravatar.cc/150?img=33",
      time: "6 giờ trước",
      content: "Khóa học lập trình Python cho người mới bắt đầu đã ra mắt! Link trong bio 🎓",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      likes: 1890,
      comments: 345,
      shares: 89,
      liked: false,
    },
    {
      id: 4,
      author: "Hoàng Vân",
      avatar: "https://i.pravatar.cc/150?img=45",
      time: "8 giờ trước",
      content: "Sáng sớm ở Đà Lạt, sương mù bao phủ như thiên đường! 🏔️ Cảm giác bình yên khó tả.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
      likes: 3210,
      comments: 567,
      shares: 178,
      liked: false,
    },
    {
      id: 5,
      author: "Phan Anh",
      avatar: "https://i.pravatar.cc/150?img=13",
      time: "10 giờ trước",
      content: "Mới được promote lên Senior Developer! Cảm ơn team đã ủng hộ 🎉🚀",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      likes: 5670,
      comments: 1234,
      shares: 345,
      liked: false,
    },
    {
      id: 6,
      author: "Võ Thanh Hoa",
      avatar: "https://i.pravatar.cc/150?img=20",
      time: "12 giờ trước",
      content: "Đắk Lắk - vùng đất của cà phê và rừng già. Nơi đây có những cánh rừng nguyên sinh tuyệt đẹp! 🌳",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      likes: 2890,
      comments: 678,
      shares: 234,
      liked: false,
    },
    {
      id: 7,
      author: "Đặng Văn Nam",
      avatar: "https://i.pravatar.cc/150?img=32",
      time: "14 giờ trước",
      content: "Hoàng Liên Sơn vào mùa hoa ban nở. Thiên nhiên luôn mang đến những điều kỳ diệu! ⛰️",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
      likes: 1567,
      comments: 289,
      shares: 92,
      liked: false,
    },
    {
      id: 8,
      author: "Lương Thị Nữ",
      avatar: "https://i.pravatar.cc/150?img=9",
      time: "16 giờ trước",
      content: "Startup của tôi vừa nhận được $5M funding! Rất cảm ơn những nhà đầu tư đã tin tưởng 🙏",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
      likes: 8934,
      comments: 2345,
      shares: 567,
      liked: false,
    },
    {
      id: 9,
      author: "Trương Hải Yến",
      avatar: "https://i.pravatar.cc/150?img=68",
      time: "18 giờ trước",
      content: "Bình minh trên đỉnh Fansipan. Vượt qua khó khăn để thấy được vẻ đẹp tuyệt vời này hoàn toàn xứng đáng! 🌅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      likes: 3456,
      comments: 789,
      shares: 234,
      liked: false,
    },
    {
      id: 10,
      author: "Ngô Quốc Bảo",
      avatar: "https://i.pravatar.cc/150?img=51",
      time: "20 giờ trước",
      content: "Rừng quốc gia Cát Tiên - nơi bảo tồn thiên nhiên hoang dã. Cần bảo vệ môi trường nhiều hơn! 🦋🌿",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      likes: 2123,
      comments: 456,
      shares: 123,
      liked: false,
    },
  ])

  // CHANGE: Added like functionality
  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post,
      ),
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Post Box */}
      <div className="post-card mb-6 transition-colors duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image
              src="https://i.pravatar.cc/150?img=1"
              alt="Your avatar"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="text"
            placeholder="Bạn đang nghĩ gì?"
            className="flex-1 px-4 py-3 bg-secondary text-foreground rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <div className="flex gap-2 pt-4 border-t border-border">
          {/* CHANGE: Enhanced buttons with better styling */}
          <button className="btn-social flex-1 bg-secondary hover:bg-input text-foreground transition-all duration-200 hover:shadow-md">
            📸 Ảnh
          </button>
          <button className="btn-social flex-1 bg-secondary hover:bg-input text-foreground transition-all duration-200 hover:shadow-md">
            😊 Cảm xúc
          </button>
          <button className="btn-social flex-1 bg-secondary hover:bg-input text-foreground transition-all duration-200 hover:shadow-md">
            📍 Địa điểm
          </button>
          <button className="btn-social bg-gradient-to-r from-primary to-accent text-primary-foreground flex-1 hover:shadow-lg transition-all duration-200 hover:scale-105">
            ✈️ Đăng
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="post-card hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-foreground hover:bg-secondary px-2 py-1 rounded transition-all duration-200">
                •••
              </button>
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

            <div className="flex gap-4 text-sm text-muted-foreground py-3 border-y border-border mb-3">
              <span className="hover:text-primary cursor-pointer transition-colors">
                ❤️ {post.likes.toLocaleString()}
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                💬 {post.comments.toLocaleString()}
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                📤 {post.shares.toLocaleString()}
              </span>
            </div>

            {/* CHANGE: Enhanced action buttons with better interactivity */}
            <div className="flex gap-2">
              <button
                onClick={() => handleLike(post.id)}
                className={`btn-social flex-1 transition-all duration-200 ${
                  post.liked
                    ? "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
                    : "text-primary hover:bg-secondary"
                } hover:shadow-md`}
              >
                {post.liked ? "❤️" : "🤍"} Thích
              </button>
              <button className="btn-social flex-1 text-primary hover:bg-secondary transition-all duration-200 hover:shadow-md">
                💬 Bình luận
              </button>
              <button className="btn-social flex-1 text-primary hover:bg-secondary transition-all duration-200 hover:shadow-md">
                📤 Chia sẻ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
