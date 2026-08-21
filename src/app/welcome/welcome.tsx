import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function Welcome() {
    return (
        <div className="py-16 md:py-20">
            {/* Top accent bar */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-14" />

            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: profile card */}
                    <div className="flex-none flex flex-col items-center md:items-start gap-4 md:min-w-56">
                        <Image
                            src='/me.png'
                            alt="Profile"
                            width={200}
                            height={200}
                            className='w-36 h-36 rounded-full ring-2 ring-orange-500 object-cover'
                        />
                        <div>
                            <h1 className="text-xl font-extrabold tracking-tight">Farzon Nosiri</h1>
                            <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mt-1">
                                Software Engineer
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/farzon" target='_blank' className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
                                <FaLinkedinIn size={22} />
                            </a>
                            <a href="https://github.com/ilova-bazis" target='_blank' className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
                                <FaSquareGithub size={22} />
                            </a>
                            <a href="#" target='_blank' className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
                                <FaSquareInstagram size={22} />
                            </a>
                            <a href="https://x.com/iLovaBazis" target='_blank' className="text-gray-700 hover:text-orange-500 transition-colors duration-200">
                                <FaSquareXTwitter size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Right: bio + CTA */}
                    <div className="flex-1">
                        <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">
                            Welcome
                        </p>
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-gray-900 mb-5">
                            HELLO WORLD.
                        </h2>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-0.5 bg-orange-500" />
                            <span className="text-gray-500 text-sm">◼</span>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed max-w-2xl mb-10">
                            <p>
                                I am a software engineer who loves turning complex problems into simple, scalable solutions.
                            </p>
                            <p>
                                With a combination of innovative technologies and industry best-practices, I have creatively solved complex problems and delivered elegant, high-quality solutions.
                            </p>
                            <p>
                                From simple web development to enterprise-grade applications — and a passion for teaching and mentoring aspiring developers.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link href="/resume" className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2">
                                Resume <span className="text-orange-400">↗</span>
                            </Link>
                            <Link href="/portfolio" className="px-6 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors duration-200 flex items-center gap-2">
                                Portfolio <span className="text-orange-400">↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
