import Image from "next/image";
import "~/styles/globals.css";

export default function AboutPage() {
  return (
    <>
      <div className="mb-10 min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white flex flex-col items-center">
        <section className="pt-20 sm:pb-10 w-full flex justify-center">
          <div className="container flex flex-row items-center gap-5 max-w-4xl">
            <Image
              src="/images/8FA6928E-4191-4E7B-8E52-035CFE37FFE9.jpeg"
              alt="About Image"
              width={300}
              height={300}
            />
            <p className="text-muted-foreground text-balance sm:text-xl text-center">
              Welcome to my blog. I&apos;m Paella or GFerreiro in most places on the internet. I&apos;m a dev, docker enthusiast and a gamer.
            </p>
          </div>
        </section>
        <section className="container mt-20 flex max-w-4xl flex-col space-y-6">
          <h2 className="text-center text-3xl font-black">
            Latest Posts
          </h2>
        </section>
      </div>
    </>
  );
}
