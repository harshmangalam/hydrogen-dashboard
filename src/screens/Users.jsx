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
} from "@hope-ui/solid";
import { createResource, Show } from "solid-js";
import { fetchUsers } from "../services";
export default function Users() {
  const [resource] = createResource(fetchUsers);
  return (
    <Box>
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
          <Box overflowX={"auto"}>
            <Table overflowX={"scroll"}>
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th>Gender</Th>
                  <Th>Cover Image</Th>
                  <Th>Profile Image</Th>
                  <Th>Role</Th>
                  <Th>Status</Th>
                  <Th>Last Seen</Th>
                  <Th>Created At</Th>
                  <Th>Updated At</Th>
                </Tr>
              </Thead>
              <Tbody>
                <For each={resource().data.data.users}>
                  {(user) => (
                    <Tr>
                      <Td>{user.firstName}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.gender}</Td>
                      <Td>
                        <Image src={user.coverImage} />
                      </Td>
                      <Td>
                        <Image src={user.profileImage} />
                      </Td>
                      <Td>{user.role}</Td>
                      <Td>{user.status}</Td>
                      <Td>
                        <Show when={user.lastSeen}>
                          {new Date(user.lastSeen).toLocaleDateString()}
                        </Show>
                      </Td>
                      <Td>{new Date(user.createdAt).toLocaleDateString()}</Td>
                      <Td>{new Date(user.updatedAt).toLocaleDateString()}</Td>
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
