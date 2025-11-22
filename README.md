# social-media-ui-design
Thought for 2sGenerated design inspirationExplored codebase structureHoàn hảo! Tôi sẽ tạo một website mạng xã hội hiện đại với Astro.js. Dựa trên design inspiration, tôi sẽ thiết kế với:

## **THIẾT KẾ CHI TIẾT UI/UX**

### **Bảng Màu (Color Palette)**

- **Màu chủ đạo**: Xanh da trời (`#0084FF`) - Teal (`#00A8A8`)
- **Màu phụ**: Trắng (`#FFFFFF`), Xám nhạt (`#F0F2F5`), Xám đậm (`#65676B`)
- **Accent**: Xanh lá cây (`#31A24C`) cho thích/like


### **Typography**

- **Headings**: Inter Bold 500-700
- **Body**: Inter Regular 400
- **Caption**: Inter 300 12px


### **Layout & Components**

#### **1. Trang Chủ (Home)**

```plaintext
┌─────────────────────────────────────┐
│  Header (Fixed)                     │
│  Logo | Search | Icons (Bell, DM)   │
└─────────────────────────────────────┘
│ Left Sidebar │ Main Feed │ Right Sidebar │
│ • Home       │ • Post Box │ • Suggestions  │
│ • Friends   │ • Posts    │ • Trending     │
│ • Groups    │ • Stories  │ • Contacts     │
│ • Messages  │           │ • Pages        │
└─────────────────────────────────────┘
```

#### **2. Trang Cá Nhân (Profile)**

- Banner ảnh bìa + Avatar
- Thông tin: Tên, Bio, Followers/Following
- Tabs: Bài viết, Ảnh, Video, Về tôi
- Post history


#### **3. Trang Nhóm (Groups)**

- Danh sách nhóm
- Group header + Members
- Group posts + discussions


#### **4. Trang Nhắn Tin (Messages)**

- Danh sách cuộc trò chuyện
- Chat window hiển thị tin nhắn


Giờ tôi sẽ xây dựng với **Astro.js**:

Planned architectureBây giờ tôi sẽ xây dựng website mạng xã hội với Astro.js:

Reviewed existing stylesNow I'll create the modern social media website with Astro.js:

```astro
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['sharp']
    }
  }
});
```

Let me create the complete social media platform with Astro:

Reviewed layoutCreated modern social media platform---

## **WIREFRAME & THIẾT KẾ CHI TIẾT**

### **1️⃣ TRANG CHỦ (Home Feed)**

```plaintext
┌─────────────────────────────────────────────────┐
│ 🔵 SocialHub      [🔍 Tìm kiếm]   🔔 💬 👤   │ Header (xanh + trắng)
├─────────┬──────────────────────────┬─────────┤
│ SIDEBAR │      MAIN FEED           │ RIGHT   │
│ 🏠 Home │ ┌───────────────────────┐│ SIDEBAR │
│ 👤 Prof │ │ 👤 Bạn đang nghĩ gì?  ││ #Trends│
│ 👥 Grp  │ │ 📸 ❤️ 😊 📍 [Đăng]  ││ 125K   │
│ 💬 Msg  │ ├───────────────────────┤│ posts  │
│ 🔖 Save │ │👤 Nguyễn A │2h│ ...  ││        │
│ ⚙️ Sett │ │ Vừa hoàn thành proj..  ││ 👤 Đề│
│         │ │ ❤️ 234 💬45 📤12       ││ cử   │
│ 👥 Nhóm │ │ [❤️] [💬] [📤]        ││        │
│ Designers│ └───────────────────────┘│        │
│ Dev Nam │ ┌───────────────────────┐│        │
│ Startup │ │👤 Trần B  │4h│ ...    ││ © 2025│
└─────────┴──────────────────────────┴─────────┘
```

### **2️⃣ TRANG CÁ NHÂN (Profile)**

```plaintext
┌─────────────────────────────────────┐
│ [Ảnh bìa - Gradient xanh]           │
│      👤 Avatar                      │
│  Nguyễn Văn A                       │
│  @nguyenvanA                        │
│  Yêu thích công nghệ, du lịch ☕   │
│  1.2K Followers | 523 Following    │
│ [Bài viết] [Ảnh] [Video]           │
├─────────────────────────────────────┤
│ 📌 Bài viết gần đây                 │
│ • Post 1                            │
│ • Post 2                            │
│ • Post 3                            │
└─────────────────────────────────────┘
```

### **3️⃣ TRANG NHÓM (Groups)**

```plaintext
┌────────────┬────────────┐
│ Nhóm 1     │ Nhóm 2     │  Grid layout
│ 5.2K mbr   │ 3.1K mbr   │
│ [Tham gia] │ [Tham gia] │
├────────────┼────────────┤
│ Nhóm 3     │ Nhóm 4     │
│ 2.8K mbr   │ 1.9K mbr   │
│ [Tham gia] │ [Tham gia] │
└────────────┴────────────┘
```

### **4️⃣ TRANG NHẮN TIN (Messages)**

```plaintext
┌──────────────┬─────────────────┐
│ Tin nhắn     │ Trần Thị B      │
│              ├─────────────────┤
│ 👤 Trần B    │ Tin nhắn        │
│ "Bạn khỏe?"  │ của cuộc trò    │
│              │ chuyện ở đây    │
│ 👤 Lê C      │ [Bạn khỏe?]     │
│ "Tối nay..?" │ [Tôi khỏe, cảm  │
│              │  ơn bạn!]       │
│ 👤 Phương A  │                 │
│ "Cảm ơn..."  │ [Nhập tin nhắn] │
│              │ [📤]            │
└──────────────┴─────────────────┘
```

---

## **HƯỚNG DẪN THIẾT KẾ**

| Yếu tố | Chi tiết
|-----|-----
| **Màu chủ đạo** | Xanh: `#0084FF`, Teal: `#00A8A8`
| **Màu phụ** | Trắng: `#FFFFFF`, Xám: `#F0F2F5`, `#65676B`
| **Font chữ** | Inter Bold (headings), Inter Regular (body)
| **Icon** | Emoji đơn giản (🔔 💬 ❤️ 📸)
| **Spacing** | 1rem = 16px (Tailwind gap-4)
| **Border radius** | 0.5rem = 8px
| **Shadow** | Nhẹ (shadow-sm)
| **Breakpoint** | md: 768px, lg: 1024px


Tôi đã xây dựng một website mạng xã hội hoàn chỉnh với tất cả các trang yêu cầu. Kiến trúc bao gồm: Header với tìm kiếm, Sidebar điều hướng, Feed chính với hộp đăng bài, Trang cá nhân, Quản lý nhóm và Tin nhắn. Hệ thống màu sắc sử dụng xanh (`#0084FF`) làm màu chính, trắng và xám làm phụ, tạo nên giao diện tối giản nhưng hiện đại. Tất cả các component đều responsive, có hiệu ứng hover và tương thích mobile.

Thought for 2s
Completed social media buildI've completed all the tasks in the todo list. Here's a summary of what was delivered:

## **Hoàn Thành Toàn Bộ Website Mạng Xã Hội**

### **1. Cấu hình Astro & Styling**

- Cập nhật `globals.css` với theme xanh-trắng hiện đại
- Sử dụng design tokens (primary: `#0084FF`, secondary: `#F0F2F5`, accent: `#00A8A8`)
- Custom utility classes: `.post-card`, `.btn-social`, `.sidebar-item`, `.hover-lift`


### **2. Trang Chủ (Home)**

- Header cố định với logo, tìm kiếm và notifications
- Hộp đăng bài với các tính năng (📸 ảnh, 😊 cảm xúc, 📍 địa điểm)
- Feed hiển thị bài viết với like, comment, share
- Sidebar trái điều hướng (Home, Profile, Groups, Messages, Bookmarks)
- Sidebar phải hiển thị xu hướng, gợi ý kết nối


### **3. Trang Cá Nhân (Profile)**

- Banner ảnh bìa gradient + Avatar
- Thông tin người dùng, số lượng followers/following
- Tabs: Bài viết, Ảnh, Video
- Danh sách bài viết gần đây


### **4. Trang Nhóm (Groups)**

- Grid hiển thị các nhóm (2 cột trên desktop)
- Thông tin nhóm: tên, số thành viên
- Nút "Tham gia" với styling interactive


### **5. Trang Nhắn Tin (Messages)**

- Danh sách cuộc trò chuyện bên trái
- Chat window hiển thị tin nhắn
- Input field gửi tin nhắn
- Responsive layout cho mobile


