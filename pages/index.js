import Head from 'next/head'
import {
  Box,
  Button,
  ButtonGroup,
  CSSReset,
  Heading,
  Icon,
  Link,
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
  brand: {
    // 900: '#1a365d',
    // 800: '#153e75',
    // 700: '#2a69ac',
  },
}
const theme = extendTheme({ colors });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Box w={500} p={4} m="20px auto">
          <Heading as="h1" size="xl" textAlign="center">
            Chakra Example h1
          </Heading>
          <Heading as="h2" size="l" textAlign="center" m={5}>
            Chakra Example h2
          </Heading>
          <Box as="p" textAlign="center">
            Example using Nextjs and{' '}
            <Link href="https://chakra-ui.com" isExternal>
              Chakra <Icon name="external-link" mx="2px" />
            </Link>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  )
}
