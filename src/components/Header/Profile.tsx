import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adoilson Freitas</Text>
          <Text color="gray.300" fontSize="small">
            adoilsonbacelar@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Adoilson Freitas"
        src="https://avatars.githubusercontent.com/u/56658900?v=4"
      />
    </Flex>
  );
}
