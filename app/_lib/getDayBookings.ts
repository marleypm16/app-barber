"use server";

import {db} from "@/app/_lib/prisma";
import {endOfDay, startOfDay} from "date-fns";

export const getDayBookings = async (barbershopId: string, date: Date) => {
    return db.appointments.findMany({
        where: {
            barberShopId: barbershopId,
            date: {
                lte: endOfDay(date),
                gte: startOfDay(date),
            },
        },
    });
};