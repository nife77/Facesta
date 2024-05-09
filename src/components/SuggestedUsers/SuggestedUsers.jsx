import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";


const SuggestedUsers = () => {
  return (
  <VStack py={8} px={6} gap={4}>
    <SuggestedHeader />

    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
		<Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
			Suggested for you
		</Text>
		<Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
			See All
		</Text>
	</Flex>
	<SuggestedUser name="Salman R" followers={20} avatar=''/>
    <SuggestedUser name="Rahul Kumar" followers={5} avatar=''/>
    <SuggestedUser name="Udath Hegde" followers={999} avatar=''/>

    <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				© 2024 Built by{" "}
				<Link href='https://github.com/nife77' target='_blank' color='blue.500' fontSize={14}>
					Mukhesh, Saumya and Udath.
				</Link>
			</Box>
</VStack>
  );
}

export default SuggestedUsers