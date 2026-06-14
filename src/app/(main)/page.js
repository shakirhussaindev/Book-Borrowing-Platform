import Banner from "@/components/homePage/Banner";
import Featured from "@/components/homePage/FeaturedBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Featured/>
    </div>
  );
}
