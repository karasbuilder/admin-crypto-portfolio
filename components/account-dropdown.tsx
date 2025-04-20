"use client"

import { useState, useRef, useEffect } from "react"
import { User, LogOut, Settings, UserCircle, CreditCard, HelpCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSignOut = () => {
    // Clear login state
    sessionStorage.removeItem("isLoggedIn")
    document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    // Redirect to login page
    router.push("/login")
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`bg-emerald-600 rounded-full p-2 transition-all duration-200 ${isOpen ? "ring-2 ring-emerald-300" : "hover:bg-emerald-700"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-5 w-5 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="py-2 px-3 border-b">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-100 rounded-full p-2">
                <UserCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">demo@example.com</p>
              </div>
            </div>
          </div>

          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              <UserCircle className="h-4 w-4 mr-3 text-gray-500" />
              My Profile
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              <CreditCard className="h-4 w-4 mr-3 text-gray-500" />
              Billing
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              <Settings className="h-4 w-4 mr-3 text-gray-500" />
              Settings
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              <HelpCircle className="h-4 w-4 mr-3 text-gray-500" />
              Help Center
            </button>
          </div>

          <div className="py-1 border-t">
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-150"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
