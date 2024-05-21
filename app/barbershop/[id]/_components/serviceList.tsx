import React from 'react';
import { BarberShop, Services} from "@prisma/client";

import ServiceItem from "@/app/barbershop/[id]/_components/ServiceItem";
interface serviceListProps {
    services : Services[]
    barberShop : BarberShop
}
const ServiceList = ({services,barberShop} : serviceListProps) => {

    return (
        <>
            {services.map((service) => (
               <ServiceItem  key={service.id} barbershop={barberShop} service={ service }/>
            ))}
        </>

    );
};

export default ServiceList;