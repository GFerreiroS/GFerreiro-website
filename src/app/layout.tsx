import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Gferreiro Page",
  description: "About me",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return(
    <nav className="flex items-center justify-between w-full bg-gradient-to-b from-[#15162c] to-[#2e026d] text-white shadow-lg">
      <div>Prueba</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
