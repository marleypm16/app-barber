"use client";
import React, {useEffect, useMemo, useState} from 'react';
import Image from "next/image";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/app/_components/ui/sheet";
import {Button} from "@/app/_components/ui/button";
import {Calendar} from "@/app/_components/ui/calendar";
import {ptBR} from "date-fns/locale";
import {addDays, format, setHours, setMinutes} from "date-fns";
import {Appointments, BarberShop, Services} from "@prisma/client";
import {createAppointment} from "@/app/_lib/createAppointment";
import {generateDayTimeList} from "@/app/_lib/generateDayTimeList";
import {getDayBookings} from "@/app/_lib/getDayBookings";
import Link from "next/link";
interface ServiceItemProps {
    service : Services
    barbershop : BarberShop
}
const ServiceItem = ({service,barbershop} : ServiceItemProps) => {
    const [appointments, setAppointments] = React.useState<Appointments[]>([]);
    const [hour, setHour] = useState<string | undefined>();
    const [date,setDate] = React.useState<Date | undefined>(undefined);
    const handleDateClick = (date: Date | undefined) => {
        setDate(date);
    };
    useEffect(() => {
        if (!date) {
            return;
        }

        const refreshAvailableHours = async () => {
            const _dayBookings = await getDayBookings(barbershop.id, date);
            setAppointments(_dayBookings);
        };

        refreshAvailableHours().then(r => r);
    }, [date, barbershop.id]);
    const handleConfirm = async () => {
        if (!date || !hour) {
            return;
        }
        const dateHour = Number(hour.split(":")[0]);
        const dateMinutes = Number(hour.split(":")[1]);


        const newDate = setMinutes(setHours(date, dateHour), dateMinutes);
        await createAppointment(newDate, service.id, barbershop.id);
    }
    const timeList = useMemo(() => {
        if (!date) {
            return [];
        }

        return generateDayTimeList(date).filter((time) => {
            const timeHour = Number(time.split(":")[0]);
            const timeMinutes = Number(time.split(":")[1]);

            const booking = appointments.find((appointment) => {
                const bookingHour = appointment.date.getHours();
                const bookingMinutes = appointment.date.getMinutes();

                return bookingHour === timeHour && bookingMinutes === timeMinutes;
            });

            return !booking;


        });
    }, [date, appointments]);

    return (
        <div>
            <li className='flex items-center justify-between mb-3' key={service.id}>
                <div className='flex gap-3'>
                    <div>
                        <Image className='rounded-full' src={service.imageUrl} alt={service.name} width={60}
                               height={60}/>
                    </div>
                    <div>
                        <h2 className='mb-1'>{service.name}</h2>
                        <p className='text-primary'>{Number(service.price).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</p>
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger><Button variant='secondary'>Reservar</Button></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Agendamento</SheetTitle>
                        </SheetHeader>
                        <div>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={handleDateClick}
                                locale={ptBR}
                                fromDate={addDays(new Date(), 1)}
                                styles={{
                                    head_cell: {
                                        width: "100%",
                                        textTransform: "capitalize",
                                    },
                                    cell: {
                                        width: "100%",
                                    },
                                    button: {
                                        width: "100%",
                                    },
                                    nav_button_previous: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    nav_button_next: {
                                        width: "32px",
                                        height: "32px",
                                    },
                                    caption: {
                                        textTransform: "capitalize",
                                    },
                                }}
                            />
                        </div>
                        {date && (
                            <SheetDescription className='flex flex-col gap-4'>
                                <div
                                    className="flex gap-3 overflow-x-auto py-6 px-5 border-t border-solid border-secondary [&::-webkit-scrollbar]:hidden">
                                    {timeList.map((time) => (
                                        <Button
                                            onClick={() => setHour(time)}
                                            className="rounded-full"
                                            key={time}
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </div>
                                {hour && (
                                    <>
                                        <p>{barbershop.name}</p>
                                        <p> {format(date, "dd 'de' MMMM 'de' yyyy", {
                                            locale: ptBR,
                                        })} ás {hour}</p>
                                        <p>{service.name} - {Number(service.price).toLocaleString('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}</p>
                                        <Link href={`/schedule`}> <Button
                                            onClick={handleConfirm}>Confirmar</Button></Link>
                                    </>
                                )}

                            </SheetDescription>
                        )}
                    </SheetContent>
                </Sheet>

            </li>
        </div>
    );
};

export default ServiceItem;