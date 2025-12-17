import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-[400px] border-t-[1px] border-black/10 bg-white px-[200px] pt-12">
      <div className="flex h-[220px] w-full space-x-8">
        <div className="w-[480px] space-y-3">
          <div className="flex items-center">
            <Image src="/IconCinema.svg" alt="logo" width={24} height={24} />
            <h1 className="pl-2 text-[18px]">FilmRate</h1>
          </div>
          <p className="text-[14px] text-[#717182]">
            La tua piattaforma di riferimento per scoprire, recensire e
            catalogare film e serie TV.
          </p>
          <p className="text-[14px]">Seguici sui social</p>
          <div className="flex items-center space-x-3">
            <Link href="">
              <Image
                src="/FacebookIcon.svg"
                alt="facebook"
                width={36}
                height={36}
              />
            </Link>
            <Link href="">
              <Image
                src="/TwitterIcon.svg"
                alt="twitter"
                width={36}
                height={36}
              />
            </Link>
            <Link href="">
              <Image
                src="/InstagramIcon.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </Link>
            <Link href="">
              <Image
                src="/YoutubeIcon.svg"
                alt="youtube"
                width={36}
                height={36}
              />
            </Link>
            <Link href="">
              <Image
                src="/GithubIcon.svg"
                alt="github"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
        <div className="flex w-[224px] flex-col text-[14px]">
          <p>Scopri</p>
          <div className="flex flex-col gap-3 pt-4 text-[14px] text-[#717182]">
            <Link href="">Film Popolari</Link>
            <Link href="">Serie TV del momento</Link>
            <Link href="">Prossime uscite</Link>
            <Link href="">Classifiche</Link>
          </div>
        </div>
        <div className="flex w-[224px] flex-col text-[14px]">
          <p>Generi</p>
          <div className="flex flex-col gap-3 pt-4 text-[14px] text-[#717182]">
            <Link href="">Azione</Link>
            <Link href="">Commedia</Link>
            <Link href="">Drammatico</Link>
            <Link href="">Sci-Fi</Link>
            <Link href="">Horror</Link>
            <Link href="">Thriller</Link>
          </div>
        </div>
        <div className="flex w-[224px] flex-col text-[14px]">
          <p>Community</p>
          <div className="flex flex-col gap-3 pt-4 text-[14px] text-[#717182]">
            <Link href="">Forum</Link>
            <Link href="">Blog</Link>
            <Link href="">Recensioni top</Link>
          </div>
        </div>
        <div className="flex w-[224px] flex-col text-[14px]">
          <p>Supporto</p>
          <div className="flex flex-col gap-3 pt-4 text-[14px] text-[#717182]">
            <Link href="">Centro assistenza</Link>
            <Link href="">Contattaci</Link>
          </div>
        </div>
      </div>
      <div className="my-8 h-[1px] bg-black/10" />
      <div className="flex items-center text-[14px] text-[#717182]">
        <p>© 2025 FilmRate. All rights reserved.</p>
        <div className="ml-auto flex items-center gap-6">
          <Link href="">Privacy policy</Link>
          <Link href="">Termini di Servizio</Link>
          <Link href="">Cookie Policy</Link>
        </div>
      </div>
      {/* rest of footer */}
    </footer>
  );
}
