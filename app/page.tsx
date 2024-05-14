import Image from "next/image";
import Header from "@/app/_components/header";
import InputSearch from "@/app/_components/inputSearch";
import Scheduling from "@/app/_components/scheduling";
import BarberShopList from "@/app/_components/barberShopList";

export default function Home() {
  return (
      <>
          <div className="p-5 bg-[#131517]">
              <Header/>
          </div>
          <div className='p-5 bg-[#131517]'>
              <InputSearch/>
          </div>
          <div className='bg-[#131517]'>
              <Scheduling/>
          </div>
          <BarberShopList/>
      </>

  );
}
