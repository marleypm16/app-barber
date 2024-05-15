import React from 'react';
import {Prisma, Services} from "@prisma/client";
import Image from "next/image";
import {Button} from "@/app/_components/ui/button";
import {format} from "date-fns";
interface ServiceDetailsProps {
    services : Services[]
}
const ServiceDetails = ({services} : ServiceDetailsProps) => {
    return (
        <div>
            <ul>
                {services.map((service) => (
                    <li className='flex items-center justify-between mb-3' key={service.id}>
                        <div className='flex gap-3'>
                            <div>
                                <Image className='rounded-full' src={service.imageUrl} alt={service.name} width={60} height={60} />
                            </div>
                            <div>
                                <h2 className='mb-1'>{service.name}</h2>
                                <p className='text-primary'>{Number(service.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            </div>
                        </div>
                        <Button className=''>Agendar</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceDetails;