"use client";
import React from 'react';
import {Input} from "@/app/_components/ui/input";
import {Button} from "@/app/_components/ui/button";
import {SearchIcon} from "lucide-react";
import {useRouter} from "next/navigation";

const InputSearch = () => {
    const router = useRouter()
    const [search,setSearch] = React.useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!search) {
            return;
        }

        router.push(`/barbershop?search=${search}`);
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-3 items-center">
            <Input placeholder='Buscar' className='rounded-2xl' onChange={handleChange}
                   value={search}/>
            <Button  size='icon' className='bg-[#8163FF] px-2' type='submit'>
                <SearchIcon/>
            </Button>
        </form>
    );
};

export default InputSearch;