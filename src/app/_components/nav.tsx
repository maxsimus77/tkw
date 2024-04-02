import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Nav() {
    return (
        <div className="border-b" style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
            <div className="left">
                <ul style={{ display: "flex", gap: "1rem" }}>
                    <li>
                        <Button asChild>
                            <Link href="/">Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button asChild>
                            <Link href="/course">Course</Link>
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="right">
                <Button>
                    Connect wallet
                </Button>
            </div>
        </div>
    );
}