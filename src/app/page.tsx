import Link from "next/link";
import { FaGithub, FaInfoCircle, FaInstagram, FaLinkedin, FaBlog } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center px-4 py-16 ">
        <h1 className="font-extrabold tracking-tight text-white text-[4rem]">
          Gabriel Ferreiro
        </h1>
        <div className="flex flex-row">
          <Link className="pr-2" href="https://github.com/GFerreiroS">
            <FaGithub className="text-5xl" />
          </Link>
          <Link className="pr-2" href="https://www.instagram.com/paellota/">
            <FaInstagram className="text-5xl" />
          </Link>
          <Link className="pr-2" href="https://www.linkedin.com/in/gabriel-ferreiro-sedlovskij/">
            <FaLinkedin className="text-5xl" />
          </Link>
          <a className="pr-2" href="/cv/cv.png" download>
            <img src="/images/cv.png" alt="" className="h-12"/>
          </a>
          <Link className="pr-2" href="https://blog.gferreiro.com">
            <FaBlog className="text-5xl" />
          </Link>
        </div>
      </div>
    </main>
  );
}
