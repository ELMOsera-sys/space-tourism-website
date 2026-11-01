import { Outlet } from "react-router";

function LayoutDestination() {

  return (
    <div className="h-dvh w-full">
      <Outlet />
    </div>
  );
}


export default LayoutDestination