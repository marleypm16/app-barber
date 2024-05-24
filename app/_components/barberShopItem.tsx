import React from 'react';
import {BarberShop} from "@prisma/client";
import {Card, CardContent} from "@/app/_components/ui/card";
import {Button} from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {Badge} from "@/app/_components/ui/badge";
import {StarIcon} from "lucide-react";
interface BarberShopItemProps {
    barberShop : BarberShop
}
const BarberShopItem = ({barberShop} : BarberShopItemProps) => {
    return (
        <div>
            <Card className="min-w-full max-w-full rounded-2xl">
                <CardContent className="px-1 py-0 pt-1">
                    <div className="w-full h-[159px] relative">
                        <Image
                            alt={barberShop.name}
                            src={barberShop.imageUrl}
                            style={{
                                objectFit: "cover",
                            }}
                            fill
                            className="rounded-2xl"
                        />
                        <Badge className="absolute top-2 left-2" variant="secondary">
                            <StarIcon size={16} className='fill-primary text-primary mr-1 '/>
                            5,0
                        </Badge>
                    </div>

                    <div className="px-2 pb-3">
                        <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barberShop.name}</h2>
                        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barberShop.address}</p>
                        <Link href={`barbershop/${barberShop.id}`}>
                            <Button className="w-full mt-3" variant="secondary">
                                Reservar
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BarberShopItem;