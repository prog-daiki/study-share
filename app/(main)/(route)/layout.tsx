import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar/sidebar"
import SidebarFollow from "@/components/sidebar/sidebar-follow"
import { db } from "@/lib/db"
import { InitialProfile } from "@/lib/initial-profile"
import { auth, currentUser } from "@clerk/nextjs"
import { Profile } from "@prisma/client"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth()
  const profile = await db.profile.findUnique({
    where: {
      userId: user?.id
    }
  })

  return (
    <div className="h-full flex justify-start">
      <div className="hidden h-full md:flex md:flex-col md:w-1/4 bg-black border-x-[1px] border-gray-700">
        <Sidebar userId={userId} />
      </div>
      <main className="w-full md:w-2/4 h-full bg-black text-white">
        <div className="md:hidden">
          <Navbar userId={userId} />
        </div>
        {children}
      </main>
      <div className="h-full hidden md:flex md:w-1/4 bg-black border-x-[1px] border-gray-700">
        <SidebarFollow profile={profile} />
      </div>
    </div>
  )
}

export default MainLayout
