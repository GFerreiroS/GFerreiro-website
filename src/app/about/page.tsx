import Image from "next/image";
import "~/styles/globals.css";

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <section className="flex justify-center pt-20 sm:pb-10">
          <div className="container flex max-w-3xl flex-row items-end gap-5">
            <Image
              src="/images/8FA6928E-4191-4E7B-8E52-035CFE37FFE9.jpeg"
              alt="About Image"
              width={300}
              height={300}
            />
            <p className="text-muted-foreground border-round text-balance rounded-2xl bg-violet-400 bg-opacity-20 pb-10 pt-10 text-center sm:text-xl">
              Welcome to my blog. I&apos;m Paella or GFerreiro in most places on
              the internet. I&apos;m a dev, docker enthusiast and a gamer.
            </p>
          </div>
        </section>
        <section className="mt-20 flex flex-col">
          <section className="container flex flex-row space-x-20">
            <div className="pe-20">
              <h2 className="text-center text-3xl font-black">Latest Posts</h2>
            </div>
            <div>
              <p>HOLA HOLA HOLA</p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
