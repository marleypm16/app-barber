"use server"
import {db} from "@/app/_lib/prisma";

export const handleDeleteSchedule = async (appointmentId:string) => {
    const appointment = await db.appointments.delete({
        where: {
            id: appointmentId
        }
    })
    console.log(appointment)
}