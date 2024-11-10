import Link from 'next/link';
import Image from 'next/image';

export default function Top() {
    return (

        <nav className=''>

            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div>
                    <Link className="flex justify-between items-center gap-2" href="/">
                        <Image src='/logo.svg' alt="Logo" width={22} height={22} className='w-8 h-8' />
                        <h1 className="font-bold md:text-2xl">Farzon Nosiri</h1>
                        <span className='text-2xl text-orange-600 '>/</span>
                        <h2 className="text-orange-600 font-medium md:text-2xl">Software Engineer</h2>
                    </Link>
                </div>
                <div className='w-full md:block md:w-auto'>
                    <div className="fixed flex md:relative bottom-0 left-0 z-50 w-full h-16 md:flex flex-row gap-4 md:h-auto items-center mt-4 justify-center bg-gray-200 md:bg-inherit md:justify-normal shadow md:shadow-none shadow-slate-400">
                        <div><Link className="text-lg active:text-orange-600" href="/portfolio">Portfolio</Link></div>|
                        <div><Link className='text-lg active:text-orange-600' target='_blank' href="/farzon_nosiri_resume_v2.pdf">Resume</Link></div>|
                        <div><Link className='text-lg active:text-orange-600' href="/contact">Contact Me</Link></div>
                    </div>
                </div>
            </div>

        </nav>
    );
}