import Link from "next/link";

export default function PortfolioHero() {
    return (
        <div className="py-16 md:py-20">
            {/* Top accent bar */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-14" />

            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">
                            Selected Work
                        </p>
                        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight leading-none text-gray-900 mb-5">
                            PORTFOLIO
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-0.5 bg-orange-500" />
                            <span className="text-gray-500 text-sm">◼</span>
                        </div>
                        <p className="text-gray-700 text-lg mb-1">Selected work by</p>
                        <p className="text-gray-900 font-bold text-2xl">Farzon Nosiri</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 md:pb-2">
                        <Link
                            href="/resume"
                            className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
                        >
                            Resume <span className="text-orange-400">↗</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            Contact <span className="text-orange-400">↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
