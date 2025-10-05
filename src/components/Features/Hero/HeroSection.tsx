import Link from "next/link";
import Socials from "../../../Utils/Socials";
import dynamic from "next/dynamic";

const RightPhotoCard = dynamic(
  () => import("@/components/Features/Hero/RightPhotoCard"),
);

export default function HeroSection() {
  return (
    <div className="max-w-7xl px-7 container mx-auto h-full pt-16 mb-9 xl:mb-0">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-20 xl:pb-20 ">
        <div className="text-center xl:text-left order-2 xl:order-none ">
          <h4 className="text-xl text-white/40 font-third">Hi, There</h4>
          <h1 className="text-[2rem] lg:text-[3.5rem] font-third font-black mt-5 mb-3 leading-[1.2]">
            I&apos;m <span className="text-accent">Tarek Monowar</span>
          </h1>

          <p className="mb-12 xl:mb-12 text-center xl:text-left mx-auto xl:mx-0">
            Full-Stack MERN Web Developer | FrontEnd | BackEnd | Database
          </p>

          <h2 className="mb-4 text-center xl:text-justify font-normal leading-[30px] text-white/60 font-third pr-5 w-[80%]">
            Develop a high-quality business or personal website and Take your
            online presence to the next level !
          </h2>

          <div className="flex flex-col items-center xl:items-start gap-5">
            <div className="mb-5">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 rounded-xl flex justify-center items-center text-accent text-base backdrop-brightness-[88%] transition-all duration-500 ease-in-out hover:shadow-[0_0_20px_#13bbff] shadow-[0_0_20px_transparent] cursor-pointer  hover:scale-110 "
              />
            </div>
            <div className="">
              <Link
                href="https://github.com/tarekmonowar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-[17px] py-[5px] bg-accent text-black border-2 border-accent rounded-[8px] text-[15px] font-semibold transition-all duration-500 ease-in-out hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_#13bbff]"
              >
                Get Github
              </Link>

              <Link
                href="https://drive.google.com/file/d/1XsMaL6ljpB6x924wQwIyhMiOVTZgxt9f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-[17px] py-[5px] bg-[#1c1c22] text-accent border-2 border-accent rounded-[8px] text-[15px] font-semibold transition-all duration-500 ease-in-out ml-[15px] hover:bg-accent hover:text-black hover:shadow-[0_0_20px_#13bbff]"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>

        <RightPhotoCard />
      </div>
    </div>
  );
}
