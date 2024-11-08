import HeroSection from "@/components/HeroSection";
import Todolist from "@/components/Todolist";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center w-full wrapper">
            <HeroSection />
            <section className="w-full flex flex-col items-center justify-center h-screen gap-2 pt-10" id="started">
                <h1 className="text-[52px] font-bold text-center">
                    Todo list
                </h1>
                <Todolist />
                <Button className='bg-primary rounded-[12px] w-max h-[54px] mt-4' asChild>
                    <Link href="#rollkan" className="">
                        <span className="text-[20px] font-semibold">Let's Roll</span>
                    </Link>
                </Button>
            </section>

            <section className="h-screen w-full flex items-center justify-center" id="rollkan">
                asdadasd
            </section>
        </main>
    );
}
