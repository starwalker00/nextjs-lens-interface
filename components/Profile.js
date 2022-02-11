import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Square, Text } from '@chakra-ui/react'

function Profile({ profile }) {
    if (!Profile) {
        return (
            <Box as="p" textAlign="center" m={5}>
                No profile to show
            </Box>
        )
    } else {
        let handle = profile[3];
        let imageURI = profile[4];
        return (
            <Center>
                <Flex color='white' direction='row' h='150px' justify="center"
                    boxShadow='lightskyblue 0px 0px 9px 0px' m='10' rounded='md' bg='teal'
                    _hover={{
                        background: "white",
                        color: "teal.500",
                        cursor: "pointer",
                    }}
                >
                    <Box>
                        <Image p="2"
                            src={imageURI}
                            alt={imageURI}
                            borderRadius='full'
                            boxSize='150px'
                            objectFit='cover' />
                    </Box>
                    <Center>
                        <Text p="2" letterSpacing="1px" fontWeight="bold" fontSize="md">
                            {handle}
                        </Text>
                    </Center>
                </Flex >
            </Center >
        )
    }
}

export default Profile
