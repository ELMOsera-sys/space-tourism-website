import { NavLink, useParams } from "react-router";
import { useData } from "../../context/data.tsx";

export default function Star() {
  const { star = "moon" } = useParams();

  const { data, loading, error } = useData();

  if (loading) return <p>loading...</p>;
  if (error || !data) return <p>loading error</p>;

  const current = data.destinations.find(
    (el) => el.name.toLowerCase() === star,
  );

  if (!current) return <p>Destination ...</p>;



  return (
    <main
      className="flex flex-col max-sm:items-center gap-7 text-blue-300 
    md:w-[80%] md:mx-auto lg:flex-row lg:gap-20"
    >
      <div className="flex flex-col items-center gap-10 lg:gap-20">
        <h3
          className="text-white md:self-start md:text-xl
        animate__animated animate__flipInX"
        >
          <span className="text-blue-300 mr-5">01</span> PICK YOUR DESTINATION
        </h3>
        <img
          key={current.name}
          src={`/assets/destination/image-${star}.webp`}
          alt={current.name}
          className="w-50 lg:w-100 animate__animated animate__rotateIn "
        />
      </div>
      <div
        key={star}
        className="flex flex-col items-center lg:items-start gap-5 lg:w-[50%]
      lg:justify-center animate__animated animate__flipInX "
      >
        <nav className="flex gap-5 lg:pl-5">
          <NavLink
            to="/destination/moon"
            className={({ isActive }) =>
              `border-b-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
            }
          >
            MOON
          </NavLink>
          <NavLink
            to="/destination/mars"
            className={({ isActive }) =>
              ` border-b-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
            }
          >
            MARS
          </NavLink>
          <NavLink
            to="/destination/europa"
            className={({ isActive }) =>
              `border-b-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
            }
          >
            EUROPA
          </NavLink>
          <NavLink
            to="/destination/titan"
            className={({ isActive }) =>
              `border-b-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
            }
          >
            TITAN
          </NavLink>
        </nav>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <h2 className="text-7xl text-white tracking-widest lg:pl-7">
            {current.name.toUpperCase()}
          </h2>
          <p className="px-5 text-center lg:text-left">{current.description}</p>
        </div>

        <p className="border border-blue-300 w-full"></p>

        <div
          className="flex flex-col items-center gap-3 
        lg:flex-row lg:w-full lg:justify-around"
        >
          <p className="flex flex-col items-center gap-1">
            <span>Avg. distance</span>{" "}
            <span className="text-3xl text-white">{current.distance}</span>
          </p>
          <p className="flex flex-col items-center gap-1">
            <span>Est. travel time</span>{" "}
            <span className="text-3xl text-white">{current.travel}</span>
          </p>
        </div>
      </div>
    </main>
  );
}
