import {useNavigate} from "react-router"

export default function Home(){
  const moveto= useNavigate();
    return (
      <main
        className="h-dvh text-center flex flex-col gap-15 p-5 
        font-sans items-center lg:flex-row lg:justify-center lg:gap-30
      "
      >
        <div
          className="flex flex-col gap-15 lg:w-[50%] lg:gap-5 lg:p-20 
        lg:items-start 
        animate__animated animate__backInLeft
        md:[animation-name:backInDown]
        lg:[animation-name:backInLeft]
        "
        >
          <p
            className="text-xl text-blue-300 lg:p-4
          animate__animated  
          "
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-8xl tracking-widest lg:p-8 ">SPACE</h1>
          <p className="text-blue-300 p-3 lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          className="group relative size-60 
          lg:size-80 animate__animated animate__backInUp
        "
        >
          <span className="pointer-events-none absolute -inset-4 animate-spin [animation-duration:6s]">
            <span
              className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2
             rounded-full bg-white shadow-[0_0_12px_white]"
            />
          </span>

          <button
            className="flex size-full items-center justify-center rounded-full
             bg-white text-3xl tracking-widest text-blue-900 cursor-pointer
            shadow-[0_0_0_0_#ffffff1a] transition-shadow duration-500 
            group-hover:shadow-[0_0_0_44px_#ffffff1a]
            lg:group-hover:shadow-[0_0_0_88px_#ffffff1a]
            group-hover:text-blue-300"
            onClick={() => moveto("/destination")}
          >
            EXPLORE
          </button>
        </div>
      </main>
    );
}