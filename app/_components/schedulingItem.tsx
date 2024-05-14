import React from 'react';
import { Prisma } from "@prisma/client";
import Image from "next/image";
import {Badge} from "lucide-react";
import {Card, CardContent} from "@/app/_components/ui/card";
import { format } from 'date-fns';
import {ptBR} from "date-fns/locale";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/_components/ui/avatar";
interface schedulingItemProps {
    scheduling : Prisma.AppointmentsGetPayload<{
        include:{
            barberShop:{
                select:{
                    name: true,
                    imageUrl: true
                }
            },
            service:{
                select:{
                    name: true
                }
            }
        }
    }>;
}
const SchedulingItem = ({scheduling} : schedulingItemProps) => {
    return (
        <Card className="min-w-full">
            <CardContent className="py-0 flex px-0">
                <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
                    <Badge  className="w-fit">
                       Confirmado
                    </Badge>
                    <h2 className="font-bold">{scheduling.service.name}</h2>

                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={scheduling.barberShop.imageUrl} />

                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        <h3 className="text-sm">{scheduling.barberShop.name}</h3>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-1 border-l border-solid border-secondary">
                    <p className="text-sm capitalize">
                        {format(scheduling.date, "MMMM", {
                            locale: ptBR,
                        })}
                    </p>
                    <p className="text-2xl">{format(scheduling.date, "dd")}</p>
                    <p className="text-sm">{format(scheduling.date, "hh:mm")}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default SchedulingItem;