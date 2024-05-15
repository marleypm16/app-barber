import React from 'react';
import {BarberShop} from "@prisma/client";
interface detailsProps {
    barberShop : BarberShop

}
const Details = ({barberShop} : detailsProps) => {
    return (
        <div>
            <div className='flex flex-col gap-2 mb-3 border-b pb-1'>
                <h1>Detalhes</h1>
                <p>{barberShop.description}</p>
                <p>Telefone Para contato {barberShop.phone}</p>
            </div>
            <div className='border-b pb-1'>
                <h2>Endereço</h2>
                <p>{barberShop.address}</p>
            </div>
        </div>
    );
};

export default Details;