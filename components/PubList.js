import PubItem from '../components/PubItem'
import { Box } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'

function PubList({ pubArray, status }) {
    if (!status.isOk) {
        return (
            <Box as="p" textAlign="center" m={5}>
                Error {status.error?.code} - {status.error?.message}
            </Box>
        )
    } else {
        return (
            <>
                <Box as="p" textAlign="center" m={5}>
                    No Error
                </Box>
                <VStack spacing='4px' alignItems="stretch" >
                    {
                        pubArray.map(
                            (pub, index) => (
                                <PubItem pub={pub} index={index} key={index} ></PubItem>
                            )
                        )
                    }
                </VStack>
            </>
        )
    }
}

export default PubList
