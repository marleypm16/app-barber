import React from 'react';
import {db} from "@/app/_lib/prisma";
import SchedulingItem from "@/app/_components/schedulingItem";
import Header from "@/app/_components/header";

const Page = async () => {
    const appointments = await db.appointments.findMany({
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
    })
    return (
            <>
                <div className='p-5'>
                    <Header />
                </div>
                <div className="px-5 py-6">
                    {appointments.length === 0 ? <h2 className="mb-6 text-lg font-semibold">Sem Agendamentos</h2> : <h2 className="mb-6 text-lg font-semibold">Agendamentos</h2>}
                    <div className="flex w-full flex-col gap-6">
                    {appointments.map((schedule) => (
                            <SchedulingItem key={schedule.id} scheduling={schedule}/>
                        ))}
                    </div>
                </div>
            </>

    );
};

export default Page;