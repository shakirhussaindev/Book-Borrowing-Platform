import Banner from "@/components/homePage/Banner";
import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedBooks/>
    </div>
  );
}
