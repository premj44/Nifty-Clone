import { Box, Button, Center, Divider, Flex, Heading, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import "../index.css"
import Footer from "./Footer";

export default function Apps() {

    return (
        <Box>
            <Navbar />

            <Box mt={"85px"} >
                <Heading>Remote collaboration, anywhere.</Heading>
                <Center mt={3}>
                    <Text color={"gray.600"} fontWeight={"400"} w={750}>Take Nifty on the go and manage tasks, track progress, and collaborate with your teammates from anywhere!</Text>
                </Center>
            </Box>

            <Flex w='600px' m='auto' mt={10} gap='15px' >
                <Box className="box1" w='550px' h='140px'  >
                    <Image className="img1" m='auto' w='55px' src='https://niftypm.com/_nuxt/img/ico-apple.28f423a.png' />
                    <Text display={"block"} className="imgtext" ml='5' mt={4}>DOWNLOAD FOR iOS</Text>
                </Box>

                <Box className="box1" w='710px' h='140px' >
                    <Image className="img1" m='auto' w='55px' src='https://niftypm.com/_nuxt/img/ico-android.21e1480.png' />
                    <Text className="imgtext" ml='5' mt={4}>DOWNLOAD FOR ANDROID</Text>
                </Box>

                <Box className="box1" w='550px' h='140px' >
                    <Image className="img1" m='auto' w='55px' src='https://niftypm.com/_nuxt/img/ico-mac.cad5cfb.png' />
                    <Text className="imgtext" ml='5' mt={4}>DOWNLOAD FOR MAC</Text>
                </Box>
            </Flex>

            <Flex w='500px' ml={"440"} >
                <Box mt={"-25px"} ml={"-1"} w='450px' h='140px' >
                    <Image className="img1" m='auto' w='55px' src='https://niftypm.com/_nuxt/img/ico-windows.4e2b176.png' />
                    <Text className="imgtext" ml='5' mt={4}>DOWNLOAD FOR WINDOWS</Text>
                </Box>

                <Box mt={"-20px"} w='450px' h='140px'>
                    <Image className="img1" m='auto' w='55px' src='https://niftypm.com/_nuxt/img/ico-chrome.b4002e7.png' />
                    <Text className="imgtext" ml='5' mt={4}>INSTALL CHROME EXTENSION</Text>
                </Box>
            </Flex>

            <Box bgPosition={"center"} bgSize={"100%"} bgImage={"https://niftypm.com/_nuxt/img/intro-waves.cd5b38b.png"}>
                <Image m={"auto"} src="https://niftypm.com/_nuxt/img/large@1x.5de3bf7.webp" />
            </Box>
      <Box padding={25} bgColor={"#f4f6fa"}>
            <Box  bgColor={"white"} m={"auto"} border={"1.5px solid teal"}  borderRadius='20' mt={105} p={"40px"} w={700} >
                <Stack direction="column" gap="0.5rem">
                    <Box m={"auto"} w='90px' h='10'>
                        <img width="50px" src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" />
                    </Box>
                    <Box textAlign="center">
                        <Heading fontSize='5xl'>Get Started Now</Heading>
                    </Box >
                   
                    <Box color={"gray"} fontWeight={"500"} fontSize={"17"} textAlign="center"  >
                        It takes less than 2 mins to sign up and create your first project or import your data from anywhere.
                    </Box>

                    <Flex>
                        <Input bg={"gray.100"} mt={15} ml={45} h={50} w={550} placeholder="name@company.com" />
                        <Button color={"white"} borderRadius={"10"} ml={"-135px"} mt={6} bg={"#00baab"} h={9} w={120}>Get Started</Button>
                    </Flex>

                    <hr style={{ width: "550px", margin: "auto", marginLeft: "45px", marginTop: "10px" }} />

                    <Flex >
                        <Image ml={206} mt={3} position={"absolute"} Size={"18"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606' alt='Dan Abramov' />
                        <Button variant='outline' borderRadius={"10"} ml={"50px"}  h={12} w={550}>Sign up with Google</Button>
                    </Flex>

                    <Text fontSize={16} color={"#6c729c"} mt={"28px"} fontWeight="600">Free forever. No credit required</Text>
                      
                </Stack>

            </Box>
        </Box>
        <Center mt={3} height='50px'>
        <Divider orientation='vertical' />
         </Center>
            <Footer/>
        </Box>
    );
};