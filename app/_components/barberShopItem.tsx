import React from 'react';
import {BarberShop} from "@prisma/client";
import {Card, CardContent} from "@/app/_components/ui/card";
import {Badge, StarIcon} from "lucide-react";
import {Button} from "@/app/_components/ui/button";
import Image from "next/image";
interface BarberShopItemProps {
    barberShop : BarberShop
}
const BarberShopItem = ({barberShop} : BarberShopItemProps) => {
    return (
        <div>
            <Card className="min-w-full max-w-full rounded-2xl">
                <CardContent className="px-1 py-0 pt-1">
                    <div className="w-full h-[159px] relative">
                        <div className="absolute top-2 left-2 z-50">
                            <Badge fontVariant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                                <StarIcon size={12} className="fill-primary text-primary" />
                                <span className="text-xs">5,0</span>
                            </Badge>
                        </div>
                        <Image
                            alt={barberShop.name}
                            src={barberShop.imageUrl}
                            style={{
                                objectFit: "cover",
                            }}
                            fill
                            className="rounded-2xl"
                        />
                    </div>

                    <div className="px-2 pb-3">
                        <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barberShop.name}</h2>
                        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barberShop.address}</p>
                        <Button className="w-full mt-3" variant="secondary">
                            Reservar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BarberShopItem;