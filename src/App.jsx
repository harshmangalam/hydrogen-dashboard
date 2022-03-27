import { Box, HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./screens/Home"));

export default function App() {
  return (
    <HopeProvider>
      <Box
        bg={"$neutral2"}
        minH="100vh"
        display={"flex"}
        flexDirection="column"
      >
        <Navbar />

        <Box as="main" flex={1}>
          <Suspense fallback={<Box>Loading...</Box>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </HopeProvider>
  );
}
