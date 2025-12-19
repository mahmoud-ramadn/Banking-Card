"use client"
import Image from 'next/image';
import Link from 'next/link';
import { StaggeredMenu } from '../StaggeredMenu';
export default function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
  ];
  return (
    <div className="mx-auto mt-5 flex max-w-[947px] flex-wrap items-center justify-between px-4 text-white md:px-0">
        <ul className="md:flex hidden items-center gap-10">
          <Link href="/#" className="text-lg font-semibold">
            Home
          </Link>
          <Link href="/#" className="text-lg font-semibold">
            About
          </Link>
          <Link href="/#" className="text-lg font-semibold">
            Cards
          </Link>
        </ul>
        <div className="  md:block hidden relative h-14 w-28 md:w-44">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        <ul className="md:flex   hidden items-center gap-10">
          <Link href="/#" className="hover:bg-secondary text-lg font-semibold">
            Services
          </Link>
          <Link href="/#" className="text-lg font-semibold">
            Insights
          </Link>
          <Link href="/#" className="text-lg font-semibold">
            Contact
          </Link>
        </ul>
      <div style={{  background: '#1a1a1a' }} className="md:hidden">
        <StaggeredMenu isFixed={true}
          position="right"
          className="absolute"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/logo.webp"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
    </div>
  );
}
