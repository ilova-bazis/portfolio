'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact Me' },
  { href: '/blog', label: 'Blog' },
];

export default function Top() {
  const pathname = usePathname();

  return (
    <nav className=''>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div>
          <Link className="flex flex-row justify-items-start items-center gap-2" href="/">
            <Image src='/logo.svg' alt="Logo" width={44} height={44} className='w-22 h-22' />
            <div className="flex flex-col sm:flex-row gap-0 items-start justify-center">
              <div className="flex flex-row gap-2 items-center mb-0 pb-0">
                <h1 className="font-bold text-base sm:text-2xl">FARZON NOSIRI</h1>
                <span className='sm:text-2xl text-orange-600'>/</span>
              </div>
              <h2 className="text-orange-600 mt-0 pt-0 font-medium sm:text-2xl">Software Engineer</h2>
            </div>
          </Link>
        </div>
        <div className='w-full sm:block sm:w-auto'>
          <div className="fixed flex sm:relative bottom-0 left-0 z-50 w-full h-16 flex-row gap-4 sm:h-auto items-center mt-4 justify-center bg-gray-200 sm:bg-inherit shadow sm:shadow-none shadow-slate-400">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className={`text-sm sm:text-base transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-orange-500 font-bold'
                      : 'hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && <span className="text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
