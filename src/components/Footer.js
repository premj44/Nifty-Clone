import { Box, Text, HStack, Link, Spacer, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import "../App.css"

export default function Footer() {

    return (
        <Box bgColor={"#f4f6fa"}>
            <hr style={{ marginTop: "25px" }} />
            <HStack ml={"35%"} mt={10} spacing='24px'>
                <Box w='70px' h='40px' bg='yellow.200'>
                    <img src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg" />
                </Box>
                <Box w='70px' h='40px' bg='tomato'>
                    <img src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg" />
                </Box>
                <Box w='70px' h='40px' bg='pink.100'>
                    <img src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg" />
                </Box>
                <Box w='70px' h='40px' bg='pink.100'>
                    <img src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg" />
                </Box>
                <Box w='70px' h='40px' bg='pink.100'>
                    <img src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg" />
                </Box>
                <Box w='70px' h='40px' bg='pink.100'>
                    <img src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg" />
                </Box>
            </HStack>
            <Box p={10}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxOTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjM1IiBkPSJNMCAxYzg5LjY5NiA3MS43NjMgMTY5LjY2NiAxMzEuNjggMjY
                yLjA2NCAxMzYuNDg3IDkyLjM5OCA0LjgwNyAxMzAuMjIxLTQwLjAwMiAxOTMuOTgxLTQwLjAwMiA2My43NiAwIDk0LjU1OSAyMC42MDIgMTE1LjA5MiA0MC4wMDJDNTkxLjY3IDE1Ni44ODcgNjMyLjczNiAxOTUgNzEwLjAwNCAxOTVzMTE1LjA5Mi00MC41MTcgMTM0LjU0NC01Ny41MTNDODY0IDEyMC40OSA5MTUuODcyIDg1LjEyNCA5ODguMjc4IDg1LjEyNGM3Mi40MDIgMCA5NC4wMjIgMTkuODQ0IDE2Mi42NDIgMTcuMzQgNjguNjItMi41MDUgOTIuOTQtMzIuOTYzIDE2NC4yNi0zMi45NjMgNzEuMzMgMCA1OC4zNiAyMy4zNDkgMTI0LjgyIDIzLjM0OSIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2Fw
                PSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIxIiB4Mj0iMTQ0MCIgeTI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY1OUY4Ii8+PHN0b3Agb2Zmc2V0PSIuMTk4IiBzdG9wLWNvbG9yPSIjQUU3MkZGIi8+PHN0b3Agb2Zmc2V0PSIuNDA2IiBzdG9wLWNvbG9yPSIjNzBDOUU4Ii8+PHN0b3Agb2Zmc2V0PSIuNjIiIHN0b3AtY29sb3I9IiMwMUFCOUQiLz48c3RvcCBvZmZzZXQ9Ii44MjUiIHN0b3AtY29sb3I9IiNGRTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4="/>
            </Box>


            <TableContainer w={"89%"} m={"auto"} >
                <Table >
                    <Thead>
                        <Tr>
                            <Th color='#00baab'>PRODUCT</Th>
                            <Th color='#00baab'>RESOURCES</Th>
                            <Th color='#00baab'>TRUST</Th>
                            <Th color='#00baab'>MADE FOR</Th>
                            <Th color='#00baab'>COMPARISIONS</Th>
                            <Th color='#00baab'>BLOG</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Th>Discussions</Th>
                            <Th>Blog</Th>
                            <Th>To convert</Th>
                            <Th>Agile Development</Th>
                            <Th>Airtable Alternative</Th>
                            <Th>Why project management is
                                <br />
                                broken (& how to fix it!)</Th>
                        </Tr>
                        <Tr>
                            <Th>Milestones</Th>
                            <Th>Change Log</Th>
                            <Th>Privacy</Th>
                            <Th>Client Management</Th>
                            <Th>Asana Alternative</Th>
                            <Th>Why Remote Collaboration is
                                <br />
                                more than just Communication</Th>
                        </Tr>
                        <Tr>
                            <Th>Tasks</Th>
                            <Th>Integrations</Th>
                            <Th>Terms of Use</Th>
                            <Th>Digital Agencies</Th>
                            <Th>Basecamp Alternative</Th>
                            <Th>Staying on top of your
                                <br />
                                workloads with time tracking</Th>
                        </Tr>
                        <Tr>
                            <Th>Docs & Files</Th>
                            <Th>Apps</Th>
                            <Th>Security</Th>
                            <Th>Legal Case Management</Th>
                            <Th>Clarizen Alternative</Th>
                            <Th>Best Legal Case Management
                                <br />
                                Software for Law Firms</Th>
                        </Tr>
                        <Tr>
                            <Th>Time Tracking</Th>
                            <Th>Pricing</Th>
                            <Th>Status</Th>
                            <Th>Marketing Teams</Th>
                            <Th>ClickUp Alternative</Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th>Reporting</Th>
                            <Th>Affiliates</Th>
                            <Th></Th>
                            <Th>Product Teams</Th>
                            <Th>Confluence Alternative</Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th>Project Home</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>Flow Alternative</Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th>Project Portfolios</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>Hive Alternative</Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>JIRA Alternative</Th>
                            <Th></Th>
                        </Tr>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>Monday.com Alternative</Th>
                            <Th></Th>
                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer>

            <hr style={{ width: "86%", margin: "auto", marginTop: "30px"}} />

            <Box w={"85%"} p={7} m={"auto"}>
                <HStack spacing='2px'>
                    <Box w='90px' h='10'>
                        <img width="80px" src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" />
                    </Box>
                    <Box w='360px' h='10'>
                        <Text color={"gray"}>2022 © Nifty Technologies, Inc. All rights reserved.</Text>
                    </Box>
                    <Spacer />
                    <Box w='80px' h='10' >
                        <Link>
                        hi<img src=""/>
                        </Link>
                    </Box>
                    <Box w='80px' h='10' >
                    <Link>
                        hi<img src=""/>
                        </Link>
                    </Box>
                    <Box w='80px' h='10'>
                        <Link>
                        hi<img src=""/>
                        </Link>
                    </Box>
                </HStack>
            </Box>


        </Box>
    )
}