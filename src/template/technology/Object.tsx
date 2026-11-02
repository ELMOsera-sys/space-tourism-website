import { NavLink, useParams } from "react-router";
import { useData } from "../../context/data.tsx";

export default function Object() {
    const { object = "space-capsule" } = useParams();

    const { data, loading, error } = useData();

    if (loading) return <p>loading...</p>;
    if (error || !data) return <p>loading error</p>;

    const current = data.technology.find(
      (el) => el.name.toLowerCase().split(" ").join("-") === object,
    );

    if (!current) return <p>crew member ...</p>;

  return (
    <main
      className="flex flex-col max-sm:items-center gap-10 text-blue-300
    "
    >
      <h3 className="text-white md:text-xl md:self-start">
        <span className="text-blue-300 mr-5">03</span> SPACE LAUNCH 101
      </h3>
      <div
        className="flex flex-col max-sm:items-center gap-10
      md:w-[80%] md:mx-auto lg:mt-10 lg:flex-row lg:w-full lg:pl-10 "
      >
        <div
          key={current.name}
          className="flex flex-col gap-5 items-center lg:flex-row-reverse   "
        >
          <picture
            className="w-dvw h-80 overflow-hidden flex  
            lg:w-[60%] lg:h-[80vh] lg:justify-end
          animate__animated animate__zoomInDown"
          >
            <source
              media="(min-width:640px) and (max-width: 760px) "
              srcSet={`/assets/technology/image-${object}-landscape.jpg`}
            />

            <img
              src={`/assets/technology/image-${object}-portrait.jpg`}
              alt={current.name}
              className="w-full "
            />
          </picture>
          <div
            key={object}
            className="flex flex-col gap-5 items-center lg:w-1/2
          lg:flex-row animate__animated animate__slideInLeft"
          >
            <nav className="flex gap-3 items-center lg:flex-col">
              <NavLink
                to="/technology/launch-vehicle"
                aria-label="launch vehicle"
                className={({ isActive }) =>
                  `rounded-full border border-blue-300 size-10 lg:size-15 lg:text-2xl flex items-center justify-center ${
                    isActive ? "bg-white text-blue-900" : "text-white"
                  }`
                }
              >
                <span>1</span>
              </NavLink>
              <NavLink
                to="/technology/spaceport"
                aria-label="spaceport"
                className={({ isActive }) =>
                  `rounded-full border border-blue-300 size-10 lg:size-15 lg:text-2xl flex items-center justify-center ${
                    isActive ? "bg-white text-blue-900" : "text-white"
                  }`
                }
              >
                <span>2</span>
              </NavLink>
              <NavLink
                to="/technology/space-capsule"
                aria-label="space capsule"
                className={({ isActive }) =>
                  `rounded-full border border-blue-300 size-10 lg:size-15 lg:text-2xl flex items-center justify-center ${
                    isActive ? "bg-white text-blue-900" : "text-white"
                  }`
                }
              >
                <span>3</span>
              </NavLink>
            </nav>
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <div className="flex flex-col gap-3 items-center">
                <p className="uppercase tracking-widest text-xl">
                  The terminology...
                </p>
                <h2
                  className="uppercase tracking-wider text-3xl text-white 
                lg:items-start lg:pl-5"
                >
                  {current.name}
                </h2>
              </div>
              <p className="p-5 text-center lg:text-left">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
