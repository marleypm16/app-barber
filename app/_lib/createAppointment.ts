"use server"
import {db} from "@/app/_lib/prisma";
export const createAppointment = async (date: Date | undefined , serviceId: string , barberShopId: string ) => {
    if (date! < new Date()) {
        console.log("Data inválida")
        return

    }
    const appointment = await db.appointments.create({
        data: {
            date: date!,
            serviceId: serviceId,
            barberShopId: barberShopId,
        },
    })
    console.log(appointment)
}