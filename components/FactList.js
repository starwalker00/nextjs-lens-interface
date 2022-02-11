import FactItem from '../components/FactItem'
import { Box } from '@chakra-ui/react'

function FactList({ factsData, status }) {
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
                {
                    factsData.map(
                        (factData, index) => (
                            <FactItem factData={factData} key={index} ></FactItem>
                        )
                    )
                }
            </>
        )
    }
}

export default FactList
