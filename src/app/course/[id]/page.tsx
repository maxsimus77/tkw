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
import { works, tutorial, blockchain } from "@/app/_asset/course_asset"

export default function Page(props: any) {
    let id: number = props.params.id as number
    
    console.log(works)

    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", padding: "1rem" }}>
            div
            <h1>{props.params.id}</h1>
            <div className="w-[25%] flex flex-col space-between mt-10 p-5">
                <Link href="/course" className="w-full mb-5"><Button>Back</Button></Link>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {}
                        </CardTitle>
                        <CardDescription>
                            Khóa học lập trình web
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        Khóa học lập trình web
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">Xem khóa học</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}