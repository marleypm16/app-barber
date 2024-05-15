"use client";
import React from 'react';
import Image from "next/image";
import Navigation from "@/app/barbershop/[id]/_components/navigation";
import ServiceDetails from "@/app/barbershop/[id]/_components/serviceDetails";
import {Barber, BarberShop, Services} from '@prisma/client';
import Details from "@/app/barbershop/[id]/_components/details";
import Barbers from "@/app/barbershop/[id]/_components/Barbers";
interface barberShopDetailsProps {
    barberShop : BarberShop
    services : Services[]
    barbers : Barber[]
}

const BarberShopDetails = ({barberShop,services,barbers} : barberShopDetailsProps) => {
    const [activeComponent, setActiveComponent] = React.useState('services');
    const renderComponent = () => {
        if (activeComponent === 'services') {
            return <ServiceDetails services={services}/>
        }
        else if (activeComponent === 'details') {
            return <Details barberShop={barberShop}/>
        }
        else{
            return <Barbers barbers={barbers}/>
        }
    }
    return (
        <div>
            <div className=''>
                <Image src={barberShop.imageUrl} alt={barberShop.name} width={500} height={500}/>
                <div className='p-5'>
                    <h1>{barberShop.name}</h1>
                    <p>{barberShop.address}</p>
                </div>

                <div className='p-5'>
                    <Navigation setActiveComponent={setActiveComponent}/>
                </div>

                <div className='p-5'>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default BarberShopDetails;