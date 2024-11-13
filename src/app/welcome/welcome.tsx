
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
export default function Welcome() {
    return (
        <div className="flex flex-col md:flex-row gap-4 max-w-screen-xl mx-auto justify-center items-center md:h-3/4 pt-11">
            <div className="flex-none justify-center items-center sm:min-w-72">
                <div className='float-right flex flex-col justify-center items-center w-full'>
                <Image src='/me.png' alt="Profile" width={200} height={200} className='w-32 h-32' />
                <h1 className="text-2xl font-bold mb-2">Farzon Nosiri</h1>
                    <p className="text-gray-600 mb-8">Software Engineer</p>

                    {/* Social icons */}
                    <div className="flex gap-4 mb-8">
                        <a href="https://www.linkedin.com/in/farzon" target='_blank' className="text-gray-700 hover:text-gray-900">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://github.com/ilova-bazis" target='_blank' className="text-gray-700 hover:text-gray-900">
                            <FaSquareGithub size={24} />
                        </a>
                        <a href="#" target='_blank' className="text-gray-700 hover:text-gray-900">
                            <FaSquareInstagram size={24} />
                        </a>
                        <a href="https://x.com/iLovaBazis" target='_blank' className="text-gray-700 hover:text-gray-900">
                            <FaSquareXTwitter size={24} />
                        </a>
                    </div>
                    </div>
            </div>
            <div className="grow max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Hello world!</h2>
                    <h3 className="text-xl mb-6">Welcome to my digital corner!</h3>
                    
                    <p className="mb-6 text-gray-900">
                    I am software engineer who loves turning complex problem to simple, scalable solutions.
                    </p>
                    
                    <p className="mb-6 text-gray-900">
                    With a combination of innovative technologies and industry best-practices, I have creatively solved complex problems and delivered elegant and high-quality solutions as a software engineer.
                    </p>
                    
                    <p className="mb-6 text-gray-900">
                    I have used state of the art technologies and tools to develop and deploy various projects ranging from simple web development to enterprise grade applications.
                    </p>
                    
                    <p className="mb-8 text-gray-900">
                    Coding is not only a skill, but a passion that motivates me to teach and mentor aspiring developers.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center mb-2">
                    <Link  href="/farzon_nosiri_resume_v2.pdf" target='_blank' className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                        Resume
                    </Link>
                    <Link  href="/portfolio" target='_blank' className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                        Portfolio
                    </Link>
                    
                    </div>
            </div>
        </div>


    );
}