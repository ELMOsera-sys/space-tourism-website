import { NavLink, useParams } from "react-router";
import { useData } from "../../context/data.tsx";


export default function Member() {
    const { member = "anousheh-ansari" } = useParams();

    const { data, loading, error } = useData();

    if (loading) return <p>loading...</p>;
    if (error || !data) return <p>loading error</p>;

    const current = data.crew.find(
      (el) => el.name.toLowerCase().split(" ").join("-") === member,
    );

    if (!current) return <p>crew member ...</p>;
  return (
    <main
      className="flex flex-col items-center lg:justify-center gap-10 text-blue-300
     "
    >
      <h3 className="text-white md:self-start md:text-xl">
        <span className="text-blue-300 mr-5">02</span> MEET YOUR CREW
      </h3>
      <div
        className="flex flex-col items-center gap-10
      md:w-[80%] md:mx-auto lg:mt-10 lg:flex-row "
      >
        <div className="flex flex-col items-center  gap-7 lg:w-[50%]  ">
          <div
            key={current.name}
            className="flex flex-col items-center gap7 lg:items-start
          animate__animated animate__swing"
          >
            <div
              className="flex flex-col items-center gap-2 lg:items-start lg:pl-5
              "
            >
              <p className="uppercase tracking-widest text-xl lg:align-start ">
                {current.role}
              </p>
              <h2
                className="uppercase tracking-widest text-4xl text-white 
              lg:align-start "
              >
                {current.name}
              </h2>
            </div>
            <p className="p-5 text-center lg:text-left">{current.bio}</p>
          </div>

          <nav
            key={current.role}
            className="flex gap-5 lg:w-full lg:align-start lg:pl-10
          animate__animated animate__rollIn"
          >
            <NavLink
              to="/crew/douglas-hurley"
              className={({ isActive }) =>
                ` rounded-full w-5 h-5 bg-blue-300 border-white block ${isActive ? "bg-white" : ""}`
              }
            >
              <span className="sr-only">doug</span>
            </NavLink>
            <NavLink
              to="/crew/mark-shuttleworth"
              className={({ isActive }) =>
                ` rounded-full w-5 h-5 bg-blue-300 border-white block ${isActive ? "bg-white" : ""}`
              }
            >
              <span className="sr-only">mark</span>
            </NavLink>
            <NavLink
              to="/crew/victor-glover"
              className={({ isActive }) =>
                ` rounded-full w-5 h-5 bg-blue-300 border-white block ${isActive ? "bg-white" : ""}`
              }
            >
              <span className="sr-only">victor</span>
            </NavLink>
            <NavLink
              to="/crew/anousheh-ansari"
              className={({ isActive }) =>
                ` rounded-full w-5 h-5 bg-blue-300 border-white block ${isActive ? "bg-white" : ""}`
              }
            >
              <span className="sr-only">anoush</span>
            </NavLink>
          </nav>
        </div>
        <img key={member}
          src={`/assets/crew/image-${member}.webp`}
          alt={current.name}
          className="w-60 lg:w-90 mx-auto animate__animated animate__backInUp"
        />
      </div>
    </main>
  );
}
