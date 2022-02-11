import { Box } from '@chakra-ui/react'

function FactItem({ factData }) {
    return (
        <Box as="p" size="l" textAlign="center">
            {factData.fact}
        </Box >
    )
}

export default FactItem
