import React from 'react';
import Image from "next/image";
import {CalendarIcon, HomeIcon, MenuIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
import Link from "next/link";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger} from "@/app/_components/ui/sheet";
const Header = () => {
    return (
        <header className='flex justify-between items-center '>
            <Link href='/'><Image src='/logo.svg' alt='logo' height={100} width={100}/></Link>
            <Sheet>
                <SheetTrigger>
                    <Button size="icon" className="bg-transparent text-white">
                    <MenuIcon/>
                </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>Menu</SheetHeader>
                    <SheetDescription>
                        <div className="flex flex-col gap-3 px-5">
                            <Button variant="outline" className="justify-start" asChild>
                                <Link href="/">
                                    <HomeIcon size={18} className="mr-2"/>
                                    Início
                                </Link>
                            </Button>
                                <Button variant="outline" className="justify-start" asChild>
                                    <Link href="/schedule">
                                        <CalendarIcon size={18} className="mr-2"/>
                                        Agendamentos
                                    </Link>
                                </Button>
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>

        </header>
    );
};

export default Header;