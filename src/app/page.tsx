import Slider from "@/app/_components/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import tutorial from '@/img/7.png'
import solidity from '@/img/6.jpg'
import deploy from '@/img/4.png'


export default function Home() {

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "1rem" }}>
      <Slider />
      <div className="flex flex-col items-center w-full border rounded-lg border-slate-200 dark:border-slate-700 mt-10 p-5">
        <div className="title bold text-xl">Giới thiệu về website</div>
        <div className="content mt-2">
          <p>
            Đây là trang web được dựng lên nhầm mực đích là học tập và hướng dẫn những người mới đến với code và đặc biệt là code dành cho blockchain với những khóa học đơn giản dễ hiểu và có các kiến thức nền tảng về blockchain bạn sẽ nhanh chống đạt được những kết quả mong muốn khi bước trên con đường này
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full border rounded-lg border-slate-200 dark:border-slate-700 mt-10 p-5">
        <div className="title bold text-xl">Một số khóa học đề cử</div>
        <div className="content mt-2 flex gap-5 flex-row">
          <Card>
            <CardHeader>
              <CardTitle>
                <Image src={tutorial} alt="tutorial" width={250} height={150} />
              </CardTitle>
              <CardDescription>Miễn phí</CardDescription>
            </CardHeader>
            <CardContent>Kiến Thức Nhập Môn IT</CardContent>
            <CardFooter>
              <Button variant="outline">Xem khóa học</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Image src={solidity} alt="solidity" width={250} height={150} />
              </CardTitle>
              <CardDescription>Miễn phí</CardDescription>
            </CardHeader>
            <CardContent>Kiến Thức nền tảng blockchain</CardContent>
            <CardFooter>
              <Button variant="outline">Xem khóa học</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Image src={deploy} alt="image" width={250} height={150} />
              </CardTitle>
              <CardDescription>Miễn phí</CardDescription>
            </CardHeader>
            <CardContent>Kiến trúc triển khai dự án cơ bản</CardContent>
            <CardFooter>
              <Button variant="outline">Xem khóa học</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
