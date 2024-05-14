import React from 'react';
import Image from "next/image";
import {MenuIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
const Header = () => {
    return (
        <header className='flex justify-between items-center '>
            <Image src='./logo.svg' alt='logo' height={70} width={70}/>
            <Button size="icon" className="bg-transparent text-black">
                <MenuIcon/>
            </Button>
        </header>
    );
};

export default Header;