import React from 'react';
import {Input} from "@/app/_components/ui/input";
import {Button} from "@/app/_components/ui/button";
import {SearchIcon} from "lucide-react";

const InputSearch = () => {
    return (
        <div className="flex gap-4 items-center">
            <Input/>
            <Button size='icon' className='bg-[#8163FF] px-2'>
                <SearchIcon/>
            </Button>
        </div>
    );
};

export default InputSearch;