import React from 'react';
import {db} from "@/app/_lib/prisma";
import {notFound} from "next/navigation";
import BarberShopDetails from "@/app/barbershop/[id]/_components/barberShopDetails";
interface BarberShopPageProps {
    params : {
        id : string
    }
}
const BarberShopPage = async ({params} : BarberShopPageProps) => {
    const barberShop = await db.barberShop.findUnique({
        where:{
            id: params.id
        },
    });
    const services = await db.services.findMany({
        where:{
            barberShopId: params.id
        }

    });
    const barbers = await db.barber.findMany({
        where:{
            barberShopId: params.id
        }

    });
    if (!barberShop) {
        return notFound()
    }

    return (
        <BarberShopDetails barberShop={barberShop} services={services} barbers={barbers}/>
    );
};

export default BarberShopPage;