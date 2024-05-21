"use server";

import {db} from "@/app/_lib/prisma";

export const searchForBarberShop = async (search: string) => {
    return db.barberShop.findMany({
        where: {
            name: {
                contains: search,
                mode: "insensitive",
            },
        },
    });
};