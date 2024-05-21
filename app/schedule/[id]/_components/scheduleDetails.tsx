"use client";
import React from 'react';
import {Prisma} from "@prisma/client";
import {format} from "date-fns";
import {ptBR} from "date-fns/locale";
import {Button} from "@/app/_components/ui/button";
import {handleDeleteSchedule} from "@/app/_lib/deleteAppointment";
import Link from 'next/link';
import {Card, CardContent} from "@/app/_components/ui/card";
import Image from "next/image";
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
    return (
        <>
            <div className="relative h-[200px] mb-3 w-full">
                <Image
                    src='/barbershop-map.svg'
                    alt={schedule.barberShop.address}
                    fill
                    className=" object-cover "
                />
                <div className="absolute flex p-4  items-center bottom-3 left-5 bg-[#191B1F] rounded-lg px-2 py-1">
                    <Image src={schedule.barberShop.imageUrl} alt={schedule.barberShop.name} className='rounded-full' height={80} width={80}/>
                    <div>
                        <h1 className='text-white'>{schedule.barberShop.name}</h1>
                        <p className='text-white'>{schedule.barberShop.address}</p>
                    </div>
                </div>
            </div>
            <Card>
                <CardContent className='p-3'>
                    <div className='flex justify-between items-center mb-3'>
                        <h1>{schedule.service.name}</h1>
                        <span>{Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(schedule.service.price))}</span>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <span>Data</span>
                      <span>{format(schedule.date, "dd 'de' MMMM")}</span>
                  </div>

                  <div className='flex justify-between items-center mb-3'>
                      <span>Horário</span>
                      <span>{format(schedule.date, "HH:mm", {
                          locale: ptBR
                      })}</span>
                  </div>
                  <div className='flex justify-between items-center'>
                      <span>Barbearia</span>
                      <span>{schedule.barberShop.name}</span>
                  </div>

                  <Button onClick={() => handleDeleteSchedule(schedule.id)}>Cancelar</Button>
              </CardContent>
          </Card>
        </>

    );
};

export default ScheduleDetails;