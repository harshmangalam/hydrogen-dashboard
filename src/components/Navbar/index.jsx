import { Box, Container, Flex, Heading, Spacer } from "@hope-ui/solid";
import Sidebar from "../Sidebar";


export default function Navbar() {
  return (
    <Box as="nav" bg="white" px={"$2"} pos="fixed" top={0} w="$full">
      <Container>
        <Flex h={"$16"} alignItems={"center"}>
          <Flex gap={"$4"} alignItems="center">
            <Sidebar />
            <Heading fontSize={"$2xl"}>Hydrogen</Heading>
          </Flex>
          <Spacer />
        </Flex>
      </Container>
    </Box>
  );
}
