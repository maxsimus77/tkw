import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function Nav() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid black" }}>
            <ul style={{ display: "flex", gap: "1rem" }}>
                <li>
                    <Button asChild>
                        <Link href="/">Home</Link>
                    </Button>
                </li>
                <li>
                    <Button asChild>
                        <Link href="/about">About</Link>
                    </Button>
                </li>
            </ul>
            <Button>
                Connect wallet
            </Button>
        </div>
    );
}