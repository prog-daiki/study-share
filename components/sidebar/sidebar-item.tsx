'use client'
import { cn } from "@/lib/utils"
import { BellPlus, Home, LogOut, User2 } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { SignOutButton } from "@clerk/nextjs"

interface SidebarItemProps {
  userId: string | null;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  userId
}) => {

  const items = [
    {
      icon: Home,
      label: 'ホーム',
      href: '/',
      color: 'text-sky-400'
    },
    {
      icon: BellPlus,
      label: '通知',
      href: '/notifications',
      color: 'text-pink-700'
    },
    {
      icon: User2,
      label: 'プロフィール',
      href: `/users/${userId}`,
      color: 'text-green-500'
    }
  ]

  return (
    <div>
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          <div className="flex flex-row items-center">
            <div className="p-4 cursor-pointer rounded-md w-full flex items-center  hover:bg-slate-300/10 transition">
              <div className="mr-4">
                <item.icon size={28} className={cn('', item.color)} />
              </div>
              <div className="font-semibold">
                {item.label}
              </div>
            </div>
          </div>
        </Link>
      ))
      }

      <SignOutButton>
        <div className="p-4 cursor-pointer rounded-md w-full flex items-center hover:bg-slate-300/10 transition">
          <div className="mr-4">
            <LogOut size={28} />
          </div>
          <div className="font-semibold">
            ログアウト
          </div>
        </div>
      </SignOutButton>

      <div className=" w-full flex p-4">
        <Button variant='secondary' className="w-full rounded-full font-bold text-lg">
          Share
        </Button>
      </div>
    </div>
  )
}

export default SidebarItem
