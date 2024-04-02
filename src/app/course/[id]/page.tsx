import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { works, tutorial, blockchain } from "@/app/_asset/course_asset"

export default function Page(props: any) {
    let id: number = props.params.id as number
    const course = [];
    for(let i = 0; i < works.length; i++) {
        if(works[i].id == id) {
            course.push(works[i])
        }
    }
    for(let i = 0; i < tutorial.length; i++) {
        if(tutorial[i].id == id) {
            course.push(tutorial[i])
        }
    }
    for(let i = 0; i < blockchain.length; i++) {
        if(blockchain[i].id == id) {
            course.push(blockchain[i])
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", padding: "1rem" }}>
            <div className="w-[25%] flex flex-col space-between mt-10 p-5">
                <Image
                    src={course[0].banner}
                    alt={`Photo by ${course[0].name}`}
                    className="h-fit w-fit object-cover"
                    width={250}
                    height={150}
                />
                <p>
                    {course[0].description}
                </p>
            </div>
            <div className="w-[25%] flex flex-col space-between mt-10 p-5">
                <Link href="/course" className="w-full mb-5"><Button>Back</Button></Link>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {course[0].name}
                        </CardTitle>
                        <CardDescription>
                            {course[0].price === 0 ? "Miễn phí" : course[0].price + " USDT"}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline">{course[0].price === 0 ? "Đăng ký" : "Mua ngay"}</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}