import Banner from "@/components/homePage/Banner";
import Featured from "@/components/homePage/FeaturedBooks";
import MembershipSection from "@/components/homePage/MembershipSection";
import BookNews from "@/components/shared/BookNews";

export default function Home() {
  return (
    <div>
      <BookNews />
      <Banner />
      <Featured />
      <MembershipSection />
    </div>
  );
}
