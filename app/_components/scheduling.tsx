import React from 'react';
import SchedulingItem from "@/app/_components/schedulingItem";
import {db} from "@/app/_lib/prisma";
const Scheduling = async () => {
    const schedule = await db.appointments.findMany({
        include:{
            barberShop:{
                select:{
                    name:true,
                    imageUrl:true
                }
            },
            service:{
                select:{
                    name:true,

                }
            }
        },
        take: 5
    });
    return (
        <div className="mt-6">
            <h2 className="pl-5 text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
            {
                schedule.length > 0 ? (
                    <>
                        <div className="px-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                            {schedule.map((booking) => (
                              <SchedulingItem key={booking.id} scheduling={booking}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className='px-5 '>Nenhum agendamento encontrado</p>
                )
            }
        </div>
    );
};


export default Scheduling;