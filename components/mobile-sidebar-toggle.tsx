"use client"
import { Menu, X } from "lucide-react"

interface MobileSidebarToggleProps {
  onToggle: (isOpen: boolean) => void
  isOpen: boolean
}

export default function MobileSidebarToggle({ onToggle, isOpen }: MobileSidebarToggleProps) {
  return (
    <button
      className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
      onClick={() => onToggle(!isOpen)}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}
