import {
    Box,
    Center,
    Flex,
    Container,
    Stack,
    Input,
    Text,
    Button,
    Link,
    Image,
    Spacer,
} from '@chakra-ui/react'
import { BsEmojiSmile } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


export default function Login() {

    return (
        <Box  bgSize={"100%"} bgImage={"https://nifty.pm/static/media/waves-large@2x.0f45956af565d8c3dea9.png"}>
            <Box m={"auto"} w={950}>
                <Center cursor={"pointer"} mb={"40px"}>
                <NavLink to="/"><Image
                        width="97px" marginTop="9px" src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" /></NavLink>
                </Center >
                <Flex >

                    <Box border={"1px solid gray"} borderColor={"gray.200"} bg='#fcf9f7' p={35} >
                        <BsEmojiSmile style={{ fontSize: "25px", position: "absolute", marginLeft: "20px", marginTop: "6px" }} />
                        <Text fontSize={20} mb={3} ml={"-78px"} color="orange">  Reporting Dashboard</Text>
                        <Container mb={8} textAlign={"left"}>
                            Powerful reporting to keep you on top of your business
                            and workload. Customize your dashboard to gain
                            insights and make informed decisions.
                        </Container>
                        <Image
                            src='https://nifty.pm/static/media/main.9818dcc508e7ef1f7d96.png'
                        />
                    </Box>

                    <Stack bg={"white"} p={35} border={"1px solid gray"} borderLeft={'none'} borderColor={"gray.200"} direction="column" gap="0.5rem" fontSize={"14px"} fontWeight={"600"} color={"#8e94bb"}>
                        <Box>
                            <Text color={"blackAlpha.800"} fontSize={"24px"} textAlign={"left"}>Log in to your account</Text>
                        </Box>


                        <Box>
                            <Text textAlign={"left"}>Email Address *</Text>
                            <Input type="email" placeholder="add email" />
                        </Box>
                        <Box>
                            <Flex >
                                <Text>Password *</Text> <Spacer />  <Text>Forgot password ?</Text>
                            </Flex>
                            <Input type="password" placeholder="add password" />
                        </Box>

                        <Box>
                            <Button bg='#80dbd4' color={"white"} w={400} m={"auto"}>
                                Log in
                            </Button>
                        </Box>
                        <Center>
                            <Stack direction={'column'} spacing='12px'>
                                <Button bg='white' color="orange" w={200} m={"auto"}>
                                    <Image w={3.5} m={3} mb={2} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606' />    Sign in with Google
                                </Button>
                                <Box textAlign='center' w='210px' h='40px'>
                                    <Link fontSize={"16px"} color={"blackAlpha.700"}>Sign in with SSO</Link>
                                </Box>
                                <hr />
                                <Box >
                                    <Text bgColor={"gray.200"} color={"blackAlpha.700"} borderRadius={"40%"} width={"40px"} height={"20px"} p={"0px"} border={"0.9px"} position={"absolute"} mt={-6} ml={"98px"}>OR</Text>
                                </Box>
                                <Box textAlign='center' w='210px' >
                                    <Text fontSize={"16px"} color={"blackAlpha.700"}>Don't have an account?</Text>
                                </Box>
                                <Box>
                                    <Button boxShadow='xs' p='4' bg='white' color="orange" w={200} >
                                        Sign up for free
                                    </Button>
                                </Box>
                            </Stack>
                        </Center>
                    </Stack>

                </Flex>
            </Box>
        </Box>
    );
};