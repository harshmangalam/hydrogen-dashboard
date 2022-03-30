import { Box, Container, HopeProvider } from "@hope-ui/solid";
import { Route, Routes } from "solid-app-router";
import { lazy, Suspense } from "solid-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import axios from "axios";


const Home = lazy(() => import("./screens/Home"));
const Users = lazy(() => import("./screens/Users"));
const Posts = lazy(() => import("./screens/Posts"));

axios.defaults.baseURL = "https://hydrogen-harsh.herokuapp.com/api/admin";
export default function App() {
  return (
    <HopeProvider>
      <Box bg={"$neutral2"} minH="100vh">
        <Navbar />

        <Container as="main" py={"$20"} px={"$2"}>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Suspense>
        </Container>
        <Footer />
      </Box>
    </HopeProvider>
  );
}
