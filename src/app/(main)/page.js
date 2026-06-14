import Banner from "@/components/homePage/Banner";
import Featured from "@/components/homePage/FeaturedBooks";
import MembershipSection from "@/components/homePage/MembershipSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
      <MembershipSection/>
    </div>
  );
}
