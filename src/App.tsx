import {Routes , Route, Navigate } from "react-router"
import Home from "./template/Home.tsx"
import Star from "./template/destination/Star.tsx"
import Member from "./template/crew/Member.tsx"
import Object from "./template/technology/Object.tsx"

import Layout from "./layout/Layout.tsx"
import LayoutDestination from "./layout/LayoutDestination.tsx"
import LayoutCrew from "./layout/LayoutCrew.tsx"
import LayoutTechno from "./layout/LayoutTechno.tsx"

function App() {

  

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/destination" element={<LayoutDestination />}>
            <Route
              index
              element={<Navigate to="/destination/moon" replace />}
            />
            <Route path=":star" element={<Star />} />
          </Route>
          <Route path="/crew" element={<LayoutCrew />}>
            <Route
              index
              element={<Navigate to="/crew/anousheh-ansari" replace />}
            />
            <Route path=":member" element={<Member />} />
          </Route>
          <Route path="/technology" element={<LayoutTechno />}>
            <Route index element={<Navigate to="/technology/space-capsule" replace />} />
            <Route path=":object" element={<Object />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App
