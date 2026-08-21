import Link from "next/link";
import { FiGithub, FiTerminal, FiCpu } from "react-icons/fi";

export default function PortfolioHero() {
    return (
        <div className="py-12 md:py-16">
            {/* Top accent bar */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-12" />

            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3 font-mono">
                            <span className="text-xs font-bold tracking-widest uppercase text-orange-500">
                                Engineering Showcase & Open Source
                            </span>
                            <span className="text-xs text-neutral-400">•</span>
                            <span className="text-xs font-mono text-neutral-600">8 Projects</span>
                        </div>

                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none text-gray-900 mb-5">
                            PORTFOLIO
                        </h1>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-0.5 bg-orange-500" />
                            <span className="text-gray-500 text-sm">◼</span>
                            <span className="text-xs font-mono text-gray-600">
                                Systems, AI tools, native desktop & distributed platforms
                            </span>
                        </div>

                        <p className="text-gray-700 text-base sm:text-lg max-w-2xl leading-relaxed">
                            Selected open-source tools, CLI utilities, AI workflows, and enterprise platforms built by <strong className="text-gray-950">Farzon Nosiri</strong>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:pb-2">
                        <Link
                            href="https://github.com/ilova-bazis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                        >
                            <FiGithub className="text-sm" />
                            <span>GitHub Profile</span>
                            <span className="text-orange-400">↗</span>
                        </Link>
                        <Link
                            href="/resume"
                            className="px-5 py-2.5 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                        >
                            <span>Resume</span>
                            <span className="text-orange-400">↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
