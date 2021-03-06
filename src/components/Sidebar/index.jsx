import {
  createDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@hope-ui/solid";
import { NavLink } from "solid-app-router";
import { AiOutlineMenu } from "solid-icons/ai";
import { FaSolidUsers } from "solid-icons/fa";
import { FaSolidUserFriends } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { FaSolidHistory } from "solid-icons/fa";
import { IoNotificationsSharp } from "solid-icons/io";
import { BiSolidMessageAlt } from "solid-icons/bi";
import { For } from "solid-js";
export default function Sidebar() {
  const { isOpen, onOpen, onClose } = createDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        variant={"ghost"}
        colorScheme="neutral"
        aria-label="Drawer toggler"
        icon={<AiOutlineMenu />}
      />

      <Drawer opened={isOpen()} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody>
            <VStack spacing="$2" alignItems={"start"}>
              <For each={menus}>
                {(menu) => (
                  <HStack
                    as={NavLink}
                    href={menu.href}
                    textDecoration="none"
                    w="$full"
                    alignItems={"center"}
                    spacing="$3"
                    py={"$3"}
                    rounded="$md"
                    cursor={"pointer"}
                    px={"$2"}
                    _hover={{ bg: "$neutral3" }}
                  >
                    <Icon as={menu.icon()} boxSize="$6" name={menu.name} />
                    <Text fontSize={"$lg"}>{menu.name}</Text>
                  </HStack>
                )}
              </For>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const menus = [
  {
    name: "Users",
    icon: () => FaSolidUserFriends,
    href: "/users",
    end: true,
  },
  {
    name: "Posts",
    icon: () => BsFilePost,
    href: "/posts",
    end: false,
  },
  {
    name: "Groups",
    icon: () => FaSolidUsers,
    href: "/groups",
    end: false,
  },
  {
    name: "Groups Posts",
    icon: () => BsFilePost,
    href: "/group-posts",
    end: false,
  },
  {
    name: "Notifications",
    icon: () => IoNotificationsSharp,
    href: "/notifications",
    end: false,
  },
  {
    name: "Login History",
    icon: () => FaSolidHistory,
    href: "/login-history",
    end: false,
  },
  {
    name: "Messages",
    icon: () => BiSolidMessageAlt,
    href: "/messages",
    end: false,
  },
];
