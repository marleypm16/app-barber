"use client";
import React, {useEffect} from 'react';
import {notFound, useSearchParams} from "next/navigation";
import {BarberShop} from "@prisma/client";
import {searchForBarberShop} from "@/app/_lib/searchBarberShop";
import Header from "@/app/_components/header";
import BarberShopItem from "@/app/_components/barberShopItem";
const BarberShopsPage = () => {
    const searchParams = useSearchParams();
    const searchFor = searchParams.get("search");
    const [barberShops, setBarberShops] = React.useState<BarberShop[]>([]);
    useEffect(() => {
        const fetchBarberShops = async () => {
            if (!searchFor) return;
            const foundRestaurants = await searchForBarberShop(searchFor);
            setBarberShops(foundRestaurants);
        };

        fetchBarberShops();
    }, [searchFor]);

    if (!searchFor) {
        return notFound();
    }
    return (
        <>
            <div className='p-5'>
                <Header />

            </div>
            <div className="px-5 py-6">
                <h2 className="mb-6 text-lg font-semibold">Barbearias Encontradas</h2>
                <div className="flex w-full flex-col gap-6">
                    {barberShops.map((barberShop) => (
                        <BarberShopItem
                            key={barberShop.id}
                            barberShop={barberShop}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BarberShopsPage;