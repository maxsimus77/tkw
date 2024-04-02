import Slider from "@/app/_components/slider";
import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { blockchain, tutorial, works } from "@/app/_asset/course_asset"


export default function Course() {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "1rem" }}>
            <Slider />
            <ScrollArea className="w-full whitespace-nowrap rounded-md border flex flex-col rounded-lg border-slate-200 dark:border-slate-700 mt-10 p-5">
                <div className="title bold text-xl">
                    Khóa học lập trình web
                </div>
                <div className="flex w-max space-x-4 p-4">
                    {works.map((course) => (
                    <figure key={course.price} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                        <Image
                            src={course.banner}
                            alt={`Photo by ${course.price}`}
                            className="h-fit w-fit object-cover"
                            width={250}
                            height={150}
                        />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            {course.price === 0 ? "Miễn phí" : course.price + " USDT"}
                        </figcaption>
                        <div className="title mt-2">{course.name}</div>
                        {course.price != 999 ? <Link href={`/course/${course.id}`}><Button variant="outline" className="mt-2">Xem khóa học</Button></Link> : null}
                    </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border flex flex-col rounded-lg border-slate-200 dark:border-slate-700 mt-10 p-5">
                <div className="title bold text-xl">
                    Khóa tư duy với lập trình căn bản
                </div>
                <div className="flex w-max space-x-4 p-4">
                    {tutorial.map((course) => (
                    <figure key={course.price} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                        <Image
                            src={course.banner}
                            alt={`Photo by ${course.price}`}
                            className="h-fit w-fit object-cover"
                            width={250}
                            height={150}
                        />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            {course.price === 0 ? "Miễn phí" : course.price + " USDT"}
                        </figcaption>
                        <div className="title mt-2">{course.name}</div>
                        <Link href={`/course/${course.id}`}><Button variant="outline" className="mt-2">Xem khóa học</Button></Link>
                    </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border flex flex-col rounded-lg border-slate-200 dark:border-slate-700 mt-10 p-5">
                <div className="title bold text-xl">
                    Khóa học lập trình web
                </div>
                <div className="flex w-max space-x-4 p-4">
                    {blockchain.map((course) => (
                    <figure key={course.price} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                        <Image
                            src={course.banner}
                            alt={`Photo by ${course.price}`}
                            className="h-fit w-fit object-cover"
                            width={250}
                            height={150}
                        />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            {course.price === 0 ? "Miễn phí" : course.price + " USDT"}
                        </figcaption>
                        <div className="title mt-2">{course.name}</div>
                        {course.price != 999 ? <Link href={`/course/${course.id}`}><Button variant="outline" className="mt-2">Xem khóa học</Button></Link> : null}
                    </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}