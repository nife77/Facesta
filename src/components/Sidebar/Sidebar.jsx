
import { Tooltip, Box, Flex, Link, Avatar, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Box
          as={Link}
          to="/asaprogrammer"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Avatar size={"sm"} name="Udath Hegde" src="/profilepic.png" />
        </Box>
      ),
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  const {handleLogout, isLoggingOut} = useLogout
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={"whiteAlpha.400"}
                borderRadius={6}
                p={2}
                w={"full"}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
		{/* LOGOUT */}
		<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
                onClick={handleLogout}
                alignItems={"center"}
                gap={4}
                _hover={"whiteAlpha.400"}
                borderRadius={6}
                p={2}
                w={{base: 10, md:"full"}}
				mt={"auto"}
				justifyContent={{base: "center", md:"flex-start"}}
              >
				<BiLogOut size={25} />
				<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							isLoading={isLoggingOut}
						>
              Logout</Button>

			</Flex>
		</Tooltip>

      </Flex>
    </Box>
  );
};

export default Sidebar;