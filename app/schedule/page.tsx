import React from 'react';
import {db} from "@/app/_lib/prisma";
import SchedulingItem from "@/app/_components/schedulingItem";

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
        <div>
            <h1>Agendamentos</h1>
            {appointments.map((schedule) => (
                <SchedulingItem key={schedule.id} scheduling={schedule}/>
            ))}
        </div>
    );
};

export default Page;