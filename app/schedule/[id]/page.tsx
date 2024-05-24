import React from 'react';
import {db} from "@/app/_lib/prisma";
import ScheduleDetails from "./_components/scheduleDetails";
import {notFound} from "next/navigation";
import Header from "@/app/_components/header";
interface SchedulePageProps {
    params : {
        id : string
    }

}
const SchedulePage = async ({params} : SchedulePageProps) => {
    const schedule = await db.appointments.findUnique({
        where:{
            id: params.id
        },
        include:{
            barberShop:{
                select:{
                    name:true,
                    imageUrl:true,
                    address:true
                }
            },
            service:{
                select:{
                    name:true,
                    price:true

                }
            }
        }
    });
    if (!schedule) {
        return notFound()
    }
    return (
        <div className='p-5 mb-3'>
            <Header/>
            <div className='mb-3'>
                <h1>Informações da reserva</h1>
            </div>
            <div >
                <ScheduleDetails schedule={schedule}/>
            </div>
        </div>
    );
};

export default SchedulePage;