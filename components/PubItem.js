import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Center, Square, Text, Flex } from '@chakra-ui/react'

function PubItem({ pub, index }) {
    let imageURI = pub[2];
    return (

        <Flex color='white' direction='row' h='150px'
            boxShadow='lightskyblue 0px 0px 6px 0px' rounded='md' bg='teal'
            _hover={{
                background: "gray.50",
                color: "teal",
                cursor: "pointer",
            }}
        >
            <Center>
                <Text p="2" letterSpacing="1px" fontWeight="bold" fontSize="l">
                    {index}
                </Text>
            </Center>
            <Box borderRight="1px solid gray" minWidth="150px">
                <Image p="2"
                    src={imageURI}
                    alt={imageURI}
                    // borderRadius='full'
                    boxSize='150px'
                    objectFit='cover' />
            </Box>
            <Center flex='1'>
                <Text p="2" fontSize="xs" isTruncated >
                    {pub[2]}
                </Text>
            </Center>
        </Flex >
    )
}

export default PubItem
