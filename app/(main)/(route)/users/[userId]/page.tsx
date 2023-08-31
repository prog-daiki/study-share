import Avatar from "@/components/avatar"
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs"

const UserPage = async () => {
  const user = await currentUser();
  const profile = await db.profile.findUnique({
    where: {
      userId: user?.id
    }
  })

  return (
    <>
      <div className="font-bold text-lg md:pt-5 px-5 pb-5">
        プロフィール
      </div>
      <div className="w-full bg-white/20 h-44 relative">
        <div className="absolute -bottom-16 left-4">
          <Avatar profile={profile} isLarge />
        </div>
      </div>
    </>
  )
}

export default UserPage
