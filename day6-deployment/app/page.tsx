import ExploreProducts from "@/components/home-products";
import Banner from "@/components/banner";
import Air from "@/components/AirMax";
import AirHomeProducts from "@/components/air-home-products";

export default function Home() {
  return (
   <div>
    <Banner/>
    <hr className="bg-black"/>
    <ExploreProducts/>
    <hr className="bg-black"/>
    <Air/>
    <AirHomeProducts/>
    <hr className="bg-black"/>  
   </div>
  );
}
