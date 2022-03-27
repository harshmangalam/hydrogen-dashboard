import { Center, Container, Text, VStack } from "@hope-ui/solid";

export default function Footer() {
  return (
    <Center as="footer" h="$16">
      <Container>
        <VStack>
          <Text>Hydrogen Dashbaord - {new Date().getFullYear()}</Text>
        </VStack>
      </Container>
    </Center>
  );
}
