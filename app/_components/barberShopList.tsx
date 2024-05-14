import React from 'react';
import {db} from "@/app/_lib/prisma";
import BarberShopItem from "@/app/_components/barberShopItem";

const BarberShopList = async () => {
    const barbersShop = await db.barberShop.findMany({
        take:5
    });
    return (
        <div className="mt-6">
            <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

            <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {barbersShop.map((barbershop) => (
                    <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
                        <BarberShopItem key={barbershop.id} barberShop={barbershop}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarberShopList;