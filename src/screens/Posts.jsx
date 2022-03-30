import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Box,
  Image,
  Center,
  Heading,
} from "@hope-ui/solid";
import { createResource, Show } from "solid-js";
import { fetchPosts } from "../services";
export default function Posts() {
  const [resource] = createResource(fetchPosts);
  return (
    <Box>
      <Heading fontSize={"$xl"}>Users</Heading>
      <Switch>
        <Match when={resource.loading}>
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="$neutral4"
              color="$info10"
              size="xl"
            />
          </Center>
        </Match>
        <Match when={resource.error}>
          <Text>Error...</Text>
        </Match>
        <Match when={resource()}>
          <Box overflowX={"auto"} my={"$6"}>
            <Table overflowX={"scroll"}>
              <Thead>
                <Tr>
                  <Th>Contentet</Th>
                  <Th>Audience</Th>
                  <Th>Author</Th>
                  <Th>Image</Th>
                  <Th>Feeling</Th>
                  <Th>CheckIn</Th>
                  <Th>Tagged Friends</Th>
                  <Th>Specific Audience Friends</Th>
                  <Th>Likes</Th>
                  <Th>Comments</Th>
                  <Th>Created At</Th>
                  <Th>Updated At</Th>
                </Tr>
              </Thead>
              <Tbody>
                <For each={resource().data.data.posts}>
                  {(post) => (
                    <Tr>
                      <Td>{post.content}</Td>
                      <Td>{post.audience}</Td>
                      <Td>{post.author?.firstName}</Td>

                      <Td>
                        <Image src={post.image} />
                      </Td>

                      <Td>{post.feeling}</Td>
                      <Td>{post.checkIn}</Td>
                      <Td>{post.taggedFriends}</Td>
                      <Td>{post.specificAudienceFriends}</Td>
                      <Td>{post.likes}</Td>
                      <Td>{post.comments}</Td>
                      <Td>{new Date(post.createdAt).toLocaleDateString()}</Td>
                      <Td>{new Date(post.updatedAt).toLocaleDateString()}</Td>
                    </Tr>
                  )}
                </For>
              </Tbody>
            </Table>
          </Box>
        </Match>
      </Switch>
    </Box>
  );
}
