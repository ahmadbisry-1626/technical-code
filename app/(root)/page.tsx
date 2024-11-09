import FetchDataEditor from "@/components/FetchDataEditor";
import HeroSection from "@/components/HeroSection";
import LaunchData from "@/components/LaunchData";
import Todolist from "@/components/Todolist";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

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

            <section className="w-full flex flex-col items-center justify-center h-screen gap-2 pt-10" id="rollkan">
                <h1 className="text-[52px] font-bold text-center">
                    Fetch Data
                </h1>
                <FetchDataEditor />
                <Button className='bg-primary rounded-[12px] w-max h-[54px] mt-4' asChild>
                    <Link href="#display" className="">
                        <span className="text-[20px] font-semibold">Display kan</span>
                    </Link>
                </Button>
            </section>

            <section className="h-screen w-full flex items-center flex-col pt-24" id="display">
                <div className="w-full max-w-[690px] flex justify-between">
                    <h1 className="text-[52px] font-bold text-center">
                        Display Data
                    </h1>
                    <Button className='bg-primary rounded-[12px] w-max h-[54px] mt-4' asChild>
                        <Link href="#display" className="">
                            <span className="text-[20px] font-semibold">Filter kan</span>
                        </Link>
                    </Button>
                </div>
                <LaunchData />
            </section>
        </main>
    );
}
