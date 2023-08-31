import MobileSidebar from "./mobile-sidebar"

interface NavbarProps {
  userId: string | null;
}

const Navbar: React.FC<NavbarProps> = ({
  userId,
}) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar userId={userId} />
    </div>
  )
}

export default Navbar
