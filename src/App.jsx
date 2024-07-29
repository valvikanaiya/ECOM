import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRouts } from "./routes";
import Layout from "@components/Layout/Layout";
import { CircularProgress } from "@mui/material";

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route element={<Layout />}>
          {protectedRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        {publicRouts.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
