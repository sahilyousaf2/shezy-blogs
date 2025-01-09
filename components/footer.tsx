import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-white border-t-2 dark:bg-gray-900 md:ml-0 ml-6">
            <div className="mx-auto container  lg:px-10 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 py-2 md:mb-0">
                        <Link href={"/"} className="text-2xl font-bold">
                            <span className="hover:text-black hover:bg-white duration-300 bg-black text-white dark:bg-white dark:text-black px-2 py-1 dark:hover:text-white dark:hover:bg-black">Shezy</span>Blogs.
                        </Link>

                        <p className="md:max-w-[450px] capitalize text-gray-500 py-2">we believe that every idea deserves a voice. Our platform is a haven for readers seeking thought-provoking articles, lifestyle tips, and fresh perspectives on trending topics.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Quick Links
                            </h2>
                            <div className="text-gray-500">
                                <Link href={"/"} className="font-medium">
                                    Home
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/blogs"} className="font-medium">
                                    Blogs
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/about"} className="font-medium">
                                    About
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/contact"} className="font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Follow us
                            </h2>
                            <div className="text-gray-500">
                                <Link href={"/"} className="font-medium">
                                    Facebook
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/"} className="font-medium">
                                    Instagram
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/"} className="font-medium">
                                    YouTube
                                </Link>
                            </div>
                            <div className="text-gray-500">
                                <Link href={"/"} className="font-medium">
                                    Github
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 pr-1">© 2025</span>
                <Link href="/" className="text-sm text-gray-500 sm:text-center dark:text-gray-400 hover:underline font-medium">
                    Shezy Blogs.
                </Link>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    . All Rights Reserved.Developed by
                    <span className="font-semibold px-1">
                        Sahil Yousaf

                    </span>
                </span>
            </div>
        </footer>

    )
}
