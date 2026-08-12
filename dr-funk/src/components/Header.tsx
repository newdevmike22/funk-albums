import Image from "next/image";
import { Archivo_Black, Fraunces } from "next/font/google";

const archivo = Archivo_Black({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const fran = Fraunces({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const Header = () => {
  return (
    <header>
      <Image src="/images/dj-logo-art.webp" alt="DJ Dr. Dr. Jockkenstein logo" width={1536} height={1024} className="image" />
      <h1 className={`${archivo.className} headTitle`}>
        Dr. Jockkenstein&apos;s
        <br />
        12 Favorite Funk Albums
      </h1>
      <p className={`${fran.className} intro`}>Take a musical journey through the land of funk as Dr. Jockkenstein operates on your mind with his 12 favorite funk albums.</p>
    </header>
  );
};

export default Header;
