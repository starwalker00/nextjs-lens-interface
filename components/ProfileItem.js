import { Box } from '@chakra-ui/react'

function ProfileItem({ item }) {
    return (
        <Box as="p" size="l" textAlign="center">
            {/* {JSON.stringify(item)} */}
            {item.name.last}
        </Box >
    )
}

export default ProfileItem
