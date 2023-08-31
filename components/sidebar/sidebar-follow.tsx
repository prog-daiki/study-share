import Avatar from "../avatar";

interface SidebarFollowProps {
  profile: any;
}

const SidebarFollow: React.FC<SidebarFollowProps> = ({
  profile
}) => {
  return (
    <div className="p-5 w-full">
      <div className="text-white bg-white/10 flex font-semibold p-4 rounded-md w-full justify-center flex-col">
        <div className="mb-4">おすすめのアカウント</div>
        <div className="w-full bg-gray-500/10 p-4 rounded-md">
          <Avatar profile={profile} />
        </div>
      </div>
    </div>
  )
}

export default SidebarFollow
