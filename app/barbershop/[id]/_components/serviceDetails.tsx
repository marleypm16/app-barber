import React from 'react';
import {BarberShop, Services} from "@prisma/client";
import ServiceList from './serviceList';
interface ServiceDetailsProps {
    services : Services[]
    barberShop : BarberShop
}
const ServiceDetails = ({services,barberShop} : ServiceDetailsProps) => {
    return (
        <div>
            <ul>
                <ServiceList barberShop={barberShop} services={services}/>
            </ul>
        </div>
    );
};

export default ServiceDetails;