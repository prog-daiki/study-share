import { InitialProfile } from "@/lib/initial-profile"

const Home = async () => {
  const profile = await InitialProfile();
  return (
    <div className="md:pt-5 px-5 pb-5 font-bold">
      Main Page
    </div>
  )
}

export default Home;
