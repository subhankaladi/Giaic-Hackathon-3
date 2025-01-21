import Image from "next/image";
import TNAV from "./components/tnav/page";
import Air from "./components/air/page";
import SHOES from "./components/shoes/page";
import Man from "./components/man/page";
import GEAR from "./components/gearup/page";
import DONT from "./components/dontmiss/page";
import ICON from "./components/icon/page";
import ESSENTIALS from "./components/essential/page";

export default function Home() {
  return (
    <div>
      <div className="relative z-10">
        <TNAV />
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
        <div className="w-10/12 h-[90vh] relative">
          <Image
            src="/mainshoe.png" 
            alt="Nike Shoe"
            layout="fill" 
            objectFit="contain" 
          />
        </div>
      </div>
        <Air/>
      <SHOES/>
      <Man/>
      <GEAR/>
      <DONT/>
      <ESSENTIALS/>
      <ICON/>
    </div>
  );
}
