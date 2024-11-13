import Link from 'next/link';
import Image from 'next/image';

export default function Top() {
    return (

        <nav className=''>

            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div>
                    <Link className="flex flex-row justify-items-start items-center gap-2" href="/">
                        <Image src='/logo.svg' alt="Logo" width={44} height={44} className='w-22 h-22' />
                        <div className="flex flex-col sm:flex-row gap-0 items-start justify-center">   
                            <div className="flex flex-row gap-2 items-center mb-0 pb-0"><h1 className="font-bold text-base sm:text-2xl">FARZON NOSIRI</h1><span className='sm:text-2xl text-orange-600 '>/</span></div>
                            <h2 className="text-orange-600 mt-0 pt-0 font-medium sm:text-2xl">Software Engineer</h2>

                        </div>
                    </Link>
                </div>
                <div className='w-full sm:block sm:w-auto'>
                    <div className="fixed flex sm:relative bottom-0 left-0 z-50 w-full h-16  flex-row gap-4 sm:h-auto items-center mt-4 justify-center bg-gray-200 sm:bg-inherit sm:justify-normal shadow sm:shadow-none shadow-slate-400">
                        <div><Link className="text-lg active:text-orange-600" href="/portfolio">Portfolio</Link></div>|
                        <div><Link className='text-lg active:text-orange-600' target='_blank' href="/farzon_nosiri_resume_v2.pdf">Resume</Link></div>|
                        <div><Link className='text-lg active:text-orange-600' href="/contact">Contact Me</Link></div>
                    </div>
                </div>
            </div>

        </nav>
    );
}