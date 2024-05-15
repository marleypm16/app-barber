import React from 'react';
import {Barber} from "@prisma/client";
import Image from "next/image";
import {Button} from "@/app/_components/ui/button";
interface barbersProps {
    barbers : Barber[]

}
const Barbers = ({barbers} : barbersProps) => {
    return (
        <div>
            <ul>
                {barbers.map((barber) => (
                    <li className='flex items-center justify-between mb-3' key={barber.id}>
                        <div className='flex gap-3'>
                            <div>
                                <Image className='rounded-full' src='' alt='imagem barbeiro' width={60}
                                       height={60}/>
                            </div>
                            <div>
                                <h2 className='mb-1'>{barber.name}</h2>
                            </div>
                        </div>
                        <Button className=''>Detalhes</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Barbers;