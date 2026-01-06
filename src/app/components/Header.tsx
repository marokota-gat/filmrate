'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { startTransition, ViewTransition } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { User } from '../types/types';

const user: User = {
  avatarPath: '/Avatar.svg',
  id: 1,
  name: 'Mario Rossi',
  email: 'mario.rossi@filmrate.com',
  password: 'password',
  created_at: '2021-01-01',
  updated_at: '2021-01-01',
  token: 'token'
};

// Ascolta lo scroll e nasconde il header quando scrolla verso il basso
function scrollEffect(setHidden: (hidden: boolean) => void) {
  let lastScroll = 0;
  const handleScroll = () => {
    const current = window.scrollY;

    if (current < 50) {
      setHidden(false);
      lastScroll = current;
      return;
    }
    if (current > lastScroll) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScroll = current;
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}

// Handler per il box avatar con le opzioni di profilo e logout
function avatarHandler(session: any) {
  return (
    <ViewTransition>
      <div className="flex flex-col justify-between absolute top-12 right-15 max-w-[190px] h-[133px] bg-white border border-black/10 rounded-[8px] shadow p-2">
        <p className="text-[14px] font-medium text-[#0A0A0A]">{session.data?.user?.name}</p>
        <p className="text-[12px] text-[#717182]">{session.data?.user?.email}</p>
        <div className="h-[1px] w-[100%] bg-black/10" />
        <Link className="flex gap-2 items-center" href="/profile">
          <Image src="/ProfileIcon.svg" alt="Profile" width={16} height={16} />
          Profile
        </Link>

        <button className="flex gap-2 items-center" onClick={() => signOut({ callbackUrl: '/' })}>
          <Image src="/LogoutIcon.svg" alt="Sign Out" width={16} height={16} />
          Sign Out
        </button>

      </div>
    </ViewTransition>
  )
}

export default function Header() {
  const session = useSession();
  const [hidden, setHidden] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);
  console.log(session.data);
  // close avatar when clicking outside the box avatar handler
  useEffect(() => {
    if (!avatarVisible) return;
    const close = () => startTransition(() => setAvatarVisible(false));
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [avatarVisible]);

  // scroll effect
  useEffect(() => scrollEffect(setHidden), []);


  return (
    <header className={`fixed z-50 flex h-[70px] w-full backdrop-blur-md items-center border-b-[1px] border-black/10 bg-white/60 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="flex h-[36px] w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[200px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/IconCinema.svg"
            alt="icon"
            width={32}
            height={32}
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
          <h1 className="pl-2 text-[16px] font-normal text-[#0A0A0A] sm:text-[18px] md:text-[20px]">
            FilmRate
          </h1>
        </Link>

        {/* Search bar - nascosta su mobile, visibile da md in su */}
        <div className="hidden h-[36px] w-full max-w-[200px] items-center space-x-2 rounded-[8px] bg-[#F3F3F5] py-1 pl-3 pr-3 md:inline-flex md:max-w-[280px] lg:max-w-[350px] xl:max-w-[448px]">
          <Image
            src="/searchIcon.svg"
            alt="searchIcon"
            width={16}
            height={16}
          />
          <input
            type="text"
            placeholder="Cerca film o serie..."
            className="ml-3 w-full bg-transparent text-[14px] text-[#0A0A0A] placeholder:text-[14px] placeholder:text-[#717182] focus:outline-none"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 space-x-2">
          {/* Watchlist - solo icona su mobile, testo completo da lg in su */}
          <Link href="/watchlist" className="flex items-center justify-center">
            <Image
              src="/WatchlistIcon.svg"
              alt="Watchlist"
              width={16}
              height={16}
            />
            <p className="hidden pl-2 text-[14px] font-medium text-[#0A0A0A] lg:block lg:pl-4">
              La mia watchlist
            </p>
          </Link>

          {/* Sign Out / SignIn button */}
          {session?.data ? (
            <>
              <Image className="cursor-pointer rounded-full" src={session.data?.user?.image as string} alt="Avatar" width={32} height={32} onClick={() => startTransition(() => setAvatarVisible(!avatarVisible))} />
              {avatarVisible && avatarHandler(session)}
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="flex h-[36px] items-center justify-center rounded-[8px] bg-black px-3 sm:w-[100px]"
            >
              <Image src="/SignInIcon.svg" alt="Sign in" width={16} height={16} />
              <p className="hidden pl-4 text-[14px] font-medium text-[#fff] sm:block">
                Accedi
              </p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
