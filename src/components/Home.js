import { Box, Button, Flex, Heading, HStack, Image, Input, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"
import "../App.css"
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Home() {

    return (

        <Box >
            <Box bgColor={"#f4f6fa"} p={2}>
                <Box borderRadius='10px' p={3} bgColor={"gray.200"} mt={15} ml={270} w={800} >
                    <Image borderRadius='10px' width={799} height={230} src='https://niftypm.com/_nuxt/img/large@1x.8a3e5ad.webp' />
                </Box>

                <Stack ml={370} mt={5} mb={5} direction={'row'} spacing='15px'  >
                    <Box>
                        <Heading>The ultimate project management </Heading>
                    </Box>
                    <Box >
                        <img className="hi" width={40} alt="img" src="https://niftypm.com/_nuxt/img/large@1x.639e4a2.webp" />
                    </Box>
                </Stack>
                <Box>
                    <Text color={"gray.600"}>Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.
                        <br />
                        Nifty is one app to unite teams, goals, and actions in one place.</Text>
                </Box>
                <Box >
                    <Input bg={"gray.200"} mt={25} h={50} w={500} placeholder="name@company.com" />

                    <Button className="btn" color={"white"} borderRadius={"10"} ml={-130} mt={-1} bg={"#00baab"} h={9} w={120}>Get Started</Button>
                    <hr style={{ width: "500px", margin: "auto", marginTop: "18px" }} />
                    <Box boxSize='8' mt={5} ml={426}>
                        <Image ml={50} mt={3} position={"absolute"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606' alt='Dan Abramov' />
                        <Button ml={-1} w={500} h={50} variant='outline'>Sign up with Google</Button>
                    </Box>

                    <Text fontSize={16} color={"#6c729c"} mt={"28px"} fontWeight="600">Free forever. No credit required</Text>
                </Box>
            </Box>

            <Text fontSize="17px" fontWeight={"700"} color="#8b99ad" mt={"65px"} mb={"48px"}>JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</Text>
            <HStack spacing='40px' ml={200} mb={"130px"}>
                <Box w='100px' h='30px' >
                    <img src="https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg" />
                </Box>
                <Box w='100px' h='30px'>
                    <img src="https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg" />
                </Box>
                <Box w='100px' h='30px' >
                    <img src="https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg" />
                </Box>
                <Box w='100px' h='10px' >
                    <img src="https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg" />
                </Box>
                <Box w='100px' h='30px' >
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K" />
                </Box>
                <Box w='100px' h='20px' >
                    <img src="https://niftypm.com/_nuxt/img/logo-loreal.8cc4fed.svg" />
                </Box>
                <Box w='100px' h='30px' >
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==" />
                </Box>
            </HStack>

            <div className="divv"></div>

            <Text color={"#6c729c"} mt={180} fontWeight="600">SAY GOODBYE TO STATUS MEETINGS</Text>

            {/* BOX 1 */}
            <Box borderTopRadius={25} pt={10} m={"auto"} mt={20} w='92%' h='auto' bgGradient='linear(to-r, #e9f9ff, #fcecf9)'>

                <Text fontWeight={"500"} fontSize={20}>Roadmaps<span class="dot"> . . . . </span>Tasks<span class="dot"> . . . . </span>Discussions<span class="dot"> . . . . </span>Docs<span class="dot"> . . . . </span>Reporting</Text>

                <Heading mt={50}>Collaborate on Tasks</Heading>
                <Text color={"gray.700"} mt={5} fontSize={"18px"}>Flexibly organize, prioritize, and track daily work with a high level of detail using
                    <br />
                    Kanban, List, Timeline, Calendar, and Swimlane views. <span className="span">Learn more > </span> </Text>

                <Box m={"auto"} mt={50} w={"80%"} >
                    <Image borderRadius='10px' width={"100%"} src='https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp' />
                </Box>
            </Box>
            {/* BOX 1 complete */}

            <Box>
                <Image position={"absolute"} width={"18px"} ml={530} mt={4} src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" />
                <Button color={"#00baab"} borderBottomRadius={13} bg={"none"} h={"50px"} width={"92.1%"} border={"1px solid rgba(196,200,226,.5)"}>
                
                     Try Nifty now. Thank us later >
                </Button>
            </Box>
            <div className="div2"></div>

            <Text color={"#6c729c"} mt={170} fontWeight="600">BUILT FOR EVERY TEAM</Text>

            {/* BOX 2 */}

            <Box borderTopRadius={25} p={8} m={"auto"} mt={45} w='92%' h='auto' bgGradient='linear(to-r,#fcecf9, #e9f9ff)'>

                <Text ml={"-400px"} fontWeight={"500"} fontSize={20}>Engineering <span class="dot"> . . . . </span>Sales<span class="dot"> . . . . </span>Marketing<span class="dot"> . . . . </span>Product<span class="dot"> . . . . </span>Client Management<span class="dot"> . . . . </span> IT</Text>


                <Flex m={"auto"} width="90%">

                    <Box w={"70%"} ml={-90} mt={20} p={10}>
                        <Heading mr={260} mt={50}>Product</Heading>
                        <Text justifyItems={"start"} color={"gray.700"} mt={2} fontSize={"18px"}>Build better products with team alignment. Create
                            <br />
                            clear product roadmaps and automate progress
                            <br />
                            reporting as tasks are completed.
                        </Text>
                        <div style={{ lineHeight: "35px", marginTop: "20px" }}>
                            <span className="ic1"><CheckCircleIcon w={4} h={4} color="#00baab" /></span><p>Gather tickets using forms & prioritize resolutions</p>
                            <span className="ic1"><CheckCircleIcon w={4} h={4} color="#00baab" /></span><p>Automate ticket assignments with status assignees</p>
                            <span className="ic1"><CheckCircleIcon w={4} h={4} color="#00baab" /></span><p>Plan project timelines & deployments using Roadmaps</p>
                        </div>
                    </Box>

                    <Spacer />

                    <Box mr={-50} p={2} mt={5} w={"90%"} >
                        <Image borderRadius='10px' width={"100%"} src='https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp' />
                    </Box>

                </Flex>
                <Box    >
                </Box>
            </Box>
                                        {/* Box 2 complete */}
                                         {/* Box 3 start */}

            <Box mt={20} p={75} w='100%' h='430px' bgGradient='linear(to-br, blue.100, pink.100)'>

                      <Box mt={50} p={10} m={"auto"} borderRadius={20}  w='83%' h='300px' bgGradient='linear(red.100 5%, orange.100 25%, yellow.100 50%)'>
                                   <div style={{marginLeft:"50%",marginTop:"25px"}}>
                                    <img width={"70px"} src="https://www.pngarts.com/files/12/Apostrophe-Icon-PNG-Image-Background.png"/>
                                   </div>


                            </Box> 

                
            </Box>
                      {/* Box 3 complete */}
        </Box>



    )

}