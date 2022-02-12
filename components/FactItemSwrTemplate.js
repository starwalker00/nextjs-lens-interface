import { Box } from '@chakra-ui/react'

function FactItemSwrTemplate({ item }) {
    return (
        <Box as="p" size="l" textAlign="center">
            {item.name.last}
        </Box >
    )
}

export default FactItemSwrTemplate
