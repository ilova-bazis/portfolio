import Link from "next/link";


export default function Footer() {
    return (
        <footer className="w-full p-4 flex flex-col justify-center items-center pb-98 sm:pb-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex flex-row gap-2 sm:gap-8 justify-center items-center">
                <div>
                    <span className="font-bold text-sm sm:text-base">Call</span>
                    <br />
                    <a href="tel:+13032109813" className="text-gray-900 text-sm sm:text-base">+13032109813</a>
                </div>
                <div>
                    <span className="font-bold text-sm sm:text-base">Write</span>
                    <br />
                    <a href="mailto:me@farzon.dev" className="text-gray-900 text-sm sm:text-base">me@farzon.dev</a>
                </div>
                <div>
                    <span className="font-bold text-sm sm:text-base">Telegram</span>
                    <br />
                    <a href="https://t.me/ilovabazis" className="text-gray-900 text-sm sm:text-base">@ilovabazis</a>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-900 pb-16 sm:pb-0">© 2024 <Link href="https://farzon.dev/" className="hover:underline">Farzon.dev</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}