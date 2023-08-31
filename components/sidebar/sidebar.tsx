import SidebarItem from "./sidebar-item"
import Link from "next/link"
import { GraduationCap } from "lucide-react"

interface SidebarProps {
  userId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  userId
}) => {

  return (
    <div className="space-y-4 p-5 flex flex-col h-full text-white">
      <Link href='/' className="mb-5">
        <div className="flex space-x-2">
          <GraduationCap width={28} height={28} className="text-violet-500" />
          <h1 className="font-bold text-2xl">Study Share</h1>
        </div>
      </Link>
      <SidebarItem userId={userId} />
    </div>
  )
}

export default Sidebar
