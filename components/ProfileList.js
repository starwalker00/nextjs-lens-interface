import ProfileItem from '../components/ProfileItem'
import { Box } from '@chakra-ui/react'

function ProfileList({ results }) {
    if (!results.length > 0) {
        return (
            <Box as="p" textAlign="center" m={5}>
                No data
            </Box>
        )
    } else {
        return (
            <>
                {
                    results.map(
                        (item, index) => (
                            <ProfileItem item={item} key={index} ></ProfileItem>
                        )
                    )
                }
            </>
        )
    }
}

export default ProfileList
