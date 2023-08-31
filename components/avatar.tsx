import { InitialProfile } from "@/lib/initial-profile";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  profile: any;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = async ({
  profile,
  isLarge,
  hasBorder,
}) => {
  return (
    <div className={cn("rounded-full cursor-pointer hover:opacity-90 transition relative", isLarge ? 'h-32 w-32' : 'h-12 w-12')}>
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        alt="avatar"
        src={profile?.profileImage || '/images/placeholder.png'}
      />
    </div>
  )
}

export default Avatar
