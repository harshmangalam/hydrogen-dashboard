import { Box, Container, Flex, Heading, Spacer } from "@hope-ui/solid";
import Sidebar from "../Sidebar";
import Profile from "./Profile";

export default function Navbar() {
  return (
    <Box as="nav" bg="$whiteAlpha12">
      <Container>
        <Flex h={"$16"} alignItems={"center"}>
          <Flex gap={"$4"} alignItems="center">
            <Sidebar />
            <Heading fontSize={"$2xl"}>Hydrogen</Heading>
          </Flex>
          <Spacer />
          <Flex gap={"$4"} alignItems="center">
            <Profile />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
