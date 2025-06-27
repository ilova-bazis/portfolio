import Link from 'next/link';
import { FaLinkedinIn, FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center p-6 pt-44">
            <div className="max-w-3xl w-full text-center">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold mb-6 text-gray-900">Coming Soon</h1>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-700 mb-8">
                        I&apos;m currently working on something amazing! This page is under construction and will be available soon.
                    </p>
                    <p className="text-gray-600 mb-10">
                        In the meantime, feel free to check out my other work or get in touch.
                    </p>
                </div>

                <div className="flex justify-center gap-8 mb-16">
                    <Link 
                        href="/resume" 
                        className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300 text-lg"
                    >
                        View Resume
                    </Link>
                    <Link 
                        href="/blog" 
                        className="px-8 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 text-lg"
                    >
                        Read Blog
                    </Link>
                </div>

                <div className="border-t border-gray-200 pt-8">
                    <p className="text-gray-600 mb-6">Connect with me on social media</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://www.linkedin.com/in/farzon" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://github.com/ilova-bazis" target="_blank" rel="noopener noreferrer"
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            <FaSquareGithub size={24} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            <FaSquareInstagram size={24} />
                        </a>
                        <a href="https://x.com/iLovaBazis" target="_blank" rel="noopener noreferrer"
                           className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                            <FaSquareXTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
