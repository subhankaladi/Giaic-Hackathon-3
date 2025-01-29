import ExploreProducts from "@/components/home-products";
import Banner from "@/components/banner";
import Air from "@/components/AirMax";
import AirHomeProducts from "@/components/air-home-products";
import ManBanner from "@/components/man-feature";
import ESSENTIALS from "@/components/The-Essentials";
import CategorySec from "@/components/Category-sec";

export default function Home() {
  return (
   <div>
    <Banner/>
    <hr className="bg-black"/>
    <ExploreProducts/>
    <hr className="bg-black"/>
    <Air/>
    <hr className="bg-black"/>
    <AirHomeProducts/>
    <hr className="bg-black"/>  
    <ManBanner/>
    <hr className="bg-black"/>  
    <ESSENTIALS/>
    <hr className="bg-black"/>  
    <CategorySec/>
    <hr className="bg-black"/>  
   </div>
  );
}
