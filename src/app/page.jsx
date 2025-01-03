import { MyButton } from "@/components/MyButton";
import { User } from "@/components/User";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* <MyButton /> */}
            <Link href={"/bakery"}>Bakery Store</Link>
        </div>
    );
}
