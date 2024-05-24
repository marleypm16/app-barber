"use client";
import React from 'react';
import {Button} from "@/app/_components/ui/button";
interface navigationProps {
    setActiveComponent : React.Dispatch<React.SetStateAction<string>>
}
const Navigation = ({setActiveComponent} : navigationProps) => {

    return (
        <ul className='flex justify-between'>
            <li>
                <Button variant='secondary' onClick={() => setActiveComponent('services')}>Serviços</Button>
            </li>
            <li>
                <Button  variant='secondary' onClick={() => setActiveComponent('details')}>Detalhes</Button>
            </li>
            <li>
                <Button  variant='secondary' onClick={() => setActiveComponent('barbers')}>Barbeiros</Button>
            </li>
        </ul>
    );
};

export default Navigation;