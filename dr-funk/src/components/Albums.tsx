import Image from "next/image";
import Link from "next/link";
import { items } from "@/data/data";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets
  display: "swap",
});

const Albums = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
            <Image src={item.image} alt={item.alt} width={1024} height={1024} className="w-full h-auto object-cover" />
            <div className="p-4 space-y-2">
              <h2 className={`${ptSans.className} text-[1.8rem] font-bold text-center`}>{item.title}</h2>
              <h3 className="artist text-[1.25rem] font-semibold uppercase">{item.artist}</h3>
              <h4 className="year text-[1.05rem]">
                <span className="uppercase font-bold">Year:</span> {item.year}
              </h4>
              <h4 className="rank text-[1.05rem]">
                <span className="uppercase font-bold">Rank:</span> {item.rank}
              </h4>
              <p className="description">{item.desc}</p>
              <div className="pt-2">
                <audio controls className="w-full">
                  <source src={item.music} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link href="/about" className="btn">
          ABOUT
        </Link>
      </div>
    </>
  );
};

export default Albums;
