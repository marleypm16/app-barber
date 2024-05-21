import React from 'react';
import Image from "next/image";
import {MenuIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
import Link from "next/link";
const Header = () => {
    return (
        <header className='flex justify-between items-center '>
            <Link href='/'><Image src='/logo.svg' alt='logo' height={100} width={100}/></Link>
            <Button size="icon" className="bg-transparent text-white">
                <MenuIcon/>
            </Button>
        </header>
    );
};

export default Header;