import React from 'react';
import { Prisma } from "@prisma/client";
import {Badge} from "@/app/_components/ui/badge";
import {Card, CardContent} from "@/app/_components/ui/card";
import {format, isFuture} from 'date-fns';
import {ptBR} from "date-fns/locale";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/_components/ui/avatar";
import Link from "next/link";
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
    const isConfirmed = isFuture(scheduling.date);
    return (
        <Link className='min-w-full'  href={`/schedule/${scheduling.id}`}>
        <Card className="min-w-full">
            <CardContent className="py-0 flex px-0">
                <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
                    <Badge variant={isConfirmed ? "default" : "secondary"}  className="w-fit">
                        {isConfirmed ? "Confirmado" : "Finalizado"}
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
                    <p className="text-sm">{format(scheduling.date, "HH:mm",{
                        locale: ptBR
                    })}</p>
                </div>
            </CardContent>
        </Card>
        </Link>
    );
};

export default SchedulingItem;