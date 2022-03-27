import { Box, Center, Container, Flex, Text, VStack } from "@hope-ui/solid";

export default function Footer() {
  return (
    <Center as="footer" bg={"$whiteAlpha12"} h="$16">
      <Container>
        <VStack>
          <Text>Hydrogen Dashbaord - {new Date().getFullYear()}</Text>
        </VStack>
      </Container>
    </Center>
  );
}
