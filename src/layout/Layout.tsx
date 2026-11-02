
import { NavLink, Outlet, useLocation } from "react-router";
import { useState,useEffect } from "react";

const getBg = (pathname: string) => {
  if (pathname.includes("destination")) return "destination";
  if (pathname.includes("crew")) return "crew";
  if (pathname.includes("technology")) return "technology";

  return "home";
};

function Layout() {
  const [show, setShow] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
  document.body.dataset.bg = getBg(pathname);
}, [pathname]);

  return (
    <div
      
      className="text-white p-4
   flex flex-col gap-6 
"
    >
      <div className="flex justify-between items-center gap-5 w-full z-10 ">
        <button className=" w-10 md:w-20 ">
          <img src="/assets/shared/logo.svg" alt="logo" className="w-full " />
        </button>

        <div className="max-md:hidden bg-white border flex-1" />

        <div
          className="max-sm:hidden bg-white/15 w-full animate__animated 
        lg:[animation-name:backInDown]
        lg:w-[50%]  lg:pl-30 pt-5 p-4"
        >
          <nav
            className="flex gap-5
           text-white tracking-[0.15em]  w-full "
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `pb-5 cursor-pointer border-b-5 ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-1">00</span>
              <span>HOME</span>
            </NavLink>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                `pb-5 cursor-pointer border-b-5 ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-1">01</span>
              <span>DESTINATION</span>
            </NavLink>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                `pb-5 cursor-pointer border-b-5 ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-1">02</span>
              <span>CREW</span>
            </NavLink>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `pb-5 cursor-pointer border-b-5 ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-1">03</span>
              <span>TECHNOLOGY</span>
            </NavLink>
          </nav>
        </div>

        <button
          className={`size-6 bg-blue-300
  mask-[url(/assets/shared/icon-hamburger.svg)]
  mask-no-repeat mask-contain mask-center cursor-pointer ${!show ? "" : "hidden"} sm:hidden `}
          onClick={() => setShow(true)}
        >
          <span className="sr-only">Hamburger</span>
        </button>

        <div
          className={`fixed top-0 right-0 h-dvh w-[60%] animate__animated animate__backInRight
         bg-white/5 backdrop-blur-2xl ${show ? "" : "hidden"} sm:hidden`}
        >
          <button
            className="
      absolute top-0 right-0 m-6
      size-6 bg-blue-300 cursor-pointer
      mask-[url(/assets/shared/icon-close.svg)]
      mask-no-repeat mask-contain mask-center sm:hidden
    "
            onClick={() => setShow(false)}
          >
            <span className="sr-only">Close</span>
          </button>

          <nav
            className="flex flex-col gap-8 pt-25 pl-5 
           text-white tracking-[0.15em] "
          >
            <NavLink
              to="/"
              onClick={() => setShow(false)}
              end
              className={({ isActive }) =>
                ` border-r-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-3">00</span> HOME
            </NavLink>
            <NavLink
              to="/destination"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `border-r-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-3">01</span> DESTINATION
            </NavLink>
            <NavLink
              to="/crew"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `border-r-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-3">02</span> CREW
            </NavLink>
            <NavLink
              to="/technology"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `border-r-5 cursor-pointer ${isActive ? "border-white" : "border-transparent"}`
              }
            >
              <span className="font-bold mr-3">03</span> TECHNOLOGY
            </NavLink>
          </nav>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
