
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <div className="w-full dark:bg-gray-900">
            <div className='md:px-5 lg:px-10  flex justify-between h-16 items-center container mx-auto'>
                <Link href={"/"} className="text-2xl font-bold md:p-0 px-10">
                    <span className="hover:text-black hover:bg-white duration-300 bg-black text-white dark:bg-white dark:text-black px-2 py-1 dark:hover:text-white dark:hover:bg-black">Shezy</span>Blogs.
                </Link>
                <div className="hidden md:flex items-center  space-x-4">
                    <Link href={"/"} className="font-semibold text-gray-500">
                        Home
                    </Link>
                    <Link href={"/blogs"} className="font-semibold text-gray-500">
                        Blogs
                    </Link>
                    <Link href={"/about"} className="font-semibold text-gray-500">
                        About
                    </Link>
                    <Link href={"/contact"} className="font-semibold text-gray-500">
                        Contact
                    </Link>
                </div>
                {/* mobile nav */}
                <main className="md:hidden block px-10">
                    <Sheet>
                        <SheetTrigger>
                            <Image src={"/menu.svg"} width={30} height={30} alt="Menu" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <Link href={"/"}>
                                    <SheetTitle className="text-2xl font-semibold">Shezy Blogs.</SheetTitle>
                                </Link>
                                <SheetDescription>
                                    <div className="space-y-5  grid grid-flow-row">
                                        <Link href={"/"} className="text-xl py-2 font-medium">
                                            Home
                                        </Link>
                                        <Link href={"/blogs"} className="text-xl py-2 font-medium">
                                            Blogs
                                        </Link>
                                        <Link href={"/about"} className="text-xl py-2 font-medium">
                                            About
                                        </Link>
                                        <Link href={"/contact"} className="text-xl py-2 font-medium">
                                            Contact
                                        </Link>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </main>
            </div>
        </div>
    )
}
