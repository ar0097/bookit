import Image from "next/image";
import Link from "next/link";

interface TypesData {
  text: string;
  location: string;
  price: number;
  img: string;
  id: string;
}

interface ExperienceCardProps {
  data: TypesData[];
}

function ExperienceCard({ data }: ExperienceCardProps) {
  return (
    <div className="w-full py-8 px-6 md:px-12 lg:px-[124px] flex flex-wrap justify-center gap-6">
      {data.map((ele, id) => (
        <div
          key={id}
          className="w-[90%] sm:w-[45%] md:w-[280px] h-auto rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
        >
          <div className="w-full h-[180px]">
            <Image
              src={ele.img}
              alt={ele.text}
              width={280}
              height={180}
              className="w-full h-full object-cover rounded-t-xl"
              unoptimized
            />
          </div>

          <div className="py-3 px-4 bg-[#F0F0F0] flex flex-col justify-between rounded-b-xl gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-[#161616] font-medium flex justify-between items-center">
                <h1 className="text-[16px]">{ele.text}</h1>
                <div className="bg-[#D6D6D6] text-[11px] py-1 px-2 rounded-sm">
                  {ele.location}
                </div>
              </div>

              <p className="text-[#6C6C6C] text-[12px] leading-5 font-normal">
                Curated small-group experience. Certified guide. Safety first
                with gear included.
              </p>
            </div>

            <div className="flex justify-between items-center text-[#161616]">
              <div className="flex gap-1.5 items-center">
                <h1 className="text-[12px] font-normal">From</h1>
                <p className="font-medium text-[20px]">₹{ele.price}</p>
              </div>
              <Link href={`details/${ele.id}`}>
                <button className="bg-[#FFD643] py-1.5 px-3 rounded-sm font-medium text-[14px] hover:bg-[#f0c832] transition-colors">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCard;
