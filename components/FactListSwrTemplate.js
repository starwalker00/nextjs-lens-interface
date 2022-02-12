import FactItemSwrTemplate from '../components/FactItemSwrTemplate'
import { Box } from '@chakra-ui/react'

function FactListSwrTemplate({ results }) {
    if (false) {
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
                {
                    results.map(
                        (item, index) => (
                            <FactItemSwrTemplate item={item} key={index} ></FactItemSwrTemplate>
                        )
                    )
                }
            </>
        )
    }
}

export default FactListSwrTemplate
