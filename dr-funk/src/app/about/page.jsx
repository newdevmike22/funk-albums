import Image from "next/image";
import Link from "next/link";
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

const About = () => {
  return (
    <div className="container-two">
      <h1 className={`${archivo.className} jock`}>Dr. Jockkenstein</h1>
      <p className={`${fran.className} slogan`}>
        <em>&ldquo;Operating on Your Mind&rdquo;</em>
      </p>
      <div className="bio">
        <Image src="/images/dj-art-two.webp" alt="Dr. Jockkenstein headshot art" width={1254} height={1254} className="float-left mr-4 mb-2 w-48" />
        <p>Born Marcus Jamal Houston on April 23, 1955, in St. Louis, Missouri, Dr. Jockkenstein became one of the most influential voices in the history of Black radio. After earning a Bachelor of Journalism from the University of Missouri–Columbia in 1977, he landed his first radio job as the late-night DJ at WESL in East St. Louis.</p>
        <p>In 1978, during a live interview with funk legend George Clinton, Clinton dubbed him “Dr. Jockkenstein.” The name stuck, as did his legendary slogan: “Dr. Jockkenstein operating on your mind.” Known for breaking records before they became hits, he was the first DJ to play “Rapper’s Delight” by The Sugar Hill Gang.</p>
        <p>By 1980, he had joined Magic 108 in St. Louis, where his legendary Role Call segment made him a local icon. After becoming the #1-rated DJ in his time slot at WGGI-FM in 1985, he signed with Urban One in 1990 to host his own nationally syndicated show. The Dr. Jockkenstein Show ran for 25 years until his retirement in 2015. In 2016, he was inducted into the Rock & Roll Hall of Fame.</p>
      </div>
      <div>
        <Link href="/" className="btn">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default About;
