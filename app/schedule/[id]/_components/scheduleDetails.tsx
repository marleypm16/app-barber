"use client";
import React from 'react';
import {Prisma} from "@prisma/client";
import {Toaster,toast} from "sonner";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {Button} from "@/app/_components/ui/button";
import {handleDeleteSchedule} from "@/app/_lib/deleteAppointment";
import {Card, CardContent} from "@/app/_components/ui/card";
import Image from "next/image";
import {Avatar, AvatarImage} from "@/app/_components/ui/avatar";
import Link from "next/link";
interface ScheduleDetailsProps {
    schedule : Prisma.AppointmentsGetPayload<{
        include:{
            barberShop:{
                select:{
                    name: true,
                    imageUrl: true,
                    address: true
                }
            },
            service:{
                select:{
                    name: true,
                    price: true
                }
            }
        }
    }>

}
const ScheduleDetails = ({schedule} : ScheduleDetailsProps) => {

    const handleDelete = async () => {
        try {
            await handleDeleteSchedule(schedule.id);
            toast.success("Agendamento cancelado com sucesso");
        }
        catch (error) {
            console.error(error);
            toast.error("Erro ao cancelar agendamento");

        }
    }
    return (
        <>
            <div className="relative h-[200px] mb-3 w-full">
                <Image
                    src='/barbershop-map.svg'
                    alt={schedule.barberShop.address}
                    fill
                    className=" object-cover "
                />
                <Toaster/>
                <div className="px-5">
                    <div className="relative h-[200px] w-full mt-6">
                        <Image src="/barbershop-map.svg" fill alt={schedule.barberShop.name} />

                        <div className="w-full absolute bottom-4 left-0 px-5">
                            <Card>
                                <CardContent className="p-3 flex gap-2">
                                    <Avatar>
                                        <AvatarImage src={schedule.barberShop.imageUrl} />
                                    </Avatar>

                                    <div>
                                        <h2 className="font-bold">{schedule.barberShop.name}</h2>
                                        <h3 className="text-xs overflow-hidden text-nowrap text-ellipsis">{schedule.barberShop.address}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
            </div>
            </div>
            <Card>
                <CardContent className='p-3'>
                    <div className='flex justify-between items-center mb-3'>
                        <span className='text-gray-400 text-sm'>{schedule.service.name}</span>
                        <span className='text-sm'>{Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(schedule.service.price))}</span>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <span className='text-gray-400 text-sm'>Data</span>
                      <span className='text-sm'>{format(schedule.date, "dd 'de' MMMM")}</span>
                  </div>

                  <div className='flex justify-between items-center mb-3'>
                      <span className='text-gray-400 text-sm'>Horário</span>
                      <span className='text-sm'>{format(schedule.date, "HH:mm", {
                          locale: ptBR
                      })}</span>
                  </div>
                  <div className='flex justify-between items-center mb-5'>
                      <span className='text-gray-400 text-sm'>Barbearia</span>
                      <span className='text-sm'>{schedule.barberShop.name}</span>
                  </div>
                    <div className='flex justify-center'>
                        <Link href='/'>
                            <Button variant='destructive' onClick={handleDelete}>Cancelar Agendamento</Button>
                        </Link>
                    </div>
              </CardContent>
          </Card>
        </>

    );
};

export default ScheduleDetails;