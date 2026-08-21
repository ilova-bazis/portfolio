import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full pb-20 sm:pb-0">
            <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-10" />
            <div className="max-w-screen-xl mx-auto px-4 pb-8">
                <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-6">
                    Get In Touch
                </p>
                <div className="flex flex-row gap-8 sm:gap-16 mb-8">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">Call</span>
                        <a href="tel:+13032109813" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 text-sm">
                            +1 303 210 9813
                        </a>
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">Email</span>
                        <a href="mailto:me@farzon.dev" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 text-sm">
                            me@farzon.dev
                        </a>
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">Telegram</span>
                        <a href="https://t.me/ilovabazis" className="text-gray-900 hover:text-orange-500 transition-colors duration-200 text-sm">
                            @ilovabazis
                        </a>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-300 mb-6" />
                <span className="text-xs text-gray-500">
                    © 2025 <Link href="https://farzon.dev/" className="hover:text-orange-500 transition-colors duration-200">Farzon.dev</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
