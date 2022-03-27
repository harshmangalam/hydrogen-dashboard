import { AspectRatio, Box, Heading, Image, Text, VStack } from "@hope-ui/solid";

export default function Home() {
  return (
    <VStack spacing={"$6"}>
      <Image src="/src/assets/logo.png" maxW={"120px"} />
      <VStack>
        <Heading fontSize={"$2xl"}>Hydrogen Dashboard</Heading>
        <Text textAlign={"center"}>Open the drawer and select menu to show more data </Text>
      </VStack>
    </VStack>
  );
}
