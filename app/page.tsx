"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Feed from "@/components/Feed"
import RightSidebar from "@/components/RightSidebar"
import ProfilePage from "@/components/pages/ProfilePage"
import GroupsPage from "@/components/pages/GroupsPage"
import MessagesPage from "@/components/pages/MessagesPage"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
      <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="flex-1 overflow-y-auto bg-background">
          {currentPage === "home" && <Feed />}
          {currentPage === "profile" && <ProfilePage />}
          {currentPage === "groups" && <GroupsPage />}
          {currentPage === "messages" && <MessagesPage />}
        </main>

        <RightSidebar />
      </div>
    </div>
  )
}
