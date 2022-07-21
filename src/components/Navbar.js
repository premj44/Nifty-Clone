import { Box, Button, ButtonGroup, Flex, Grid, Heading, Link, Select, Spacer, Stack } from "@chakra-ui/react";

export default function Navbar() {
    


    return (
        <>
        <Box bg={"#fcfdfe"} >
            <div style={{display: "flex", width: "90%",margin:"auto",height:"70px"}}>
                <div style={{marginTop:"18px"}}>
                    <img width="90px" src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" />
                </div>
                <Spacer />
                <div style={{fontWeight:"500",marginTop:"18px"}} >
                    <Link style={{ marginLeft: "10px" }}>
                        <select style={{width:"90px",fontWeight:"500"}}>
                            <option>Featured</option>
                            <option>Discussions</option>
                            <option>Tasks</option>
                            <option>Milesstones</option>
                            <option>Docs & Files</option>
                        </select>
                    </Link>
                    <Link style={{ marginLeft: "20px" }}>
                        <select style={{width:"100px",fontWeight:"500"}}>
                            <option>Use Cases</option>
                            <option>Discussions</option>
                            <option>Tasks</option>
                            <option>Milesstones</option>
                            <option>Docs & Files</option>
                        </select>
                    </Link>
                    <Link style={{ marginLeft: "20px" }}>
                        <select style={{width:"100px",fontWeight:"500"}}>
                            <option>Resources</option>
                            <option>Got Clients?</option>
                            <option>Tasks</option>
                            <option>Milesstones</option>
                            <option>Docs & Files</option>
                        </select>
                    </Link>
                    <Link style={{ marginLeft: "20px" }}>
                        <select style={{width:"110px",fontWeight:"500"}}>
                            <option>Got Clients?</option>
                            <option>Discussions</option>
                            <option>Tasks</option>
                            <option>Milesstones</option>
                            <option>Docs & Files</option>
                        </select>
                    </Link>
                    <Link style={{ marginLeft: "20px" }}>Pricing</Link>
                    <Link style={{ marginLeft: "25px",color:"#00baab" }}>Get a Demo</Link>
                </div>
                <Spacer />
                <Box w='200px' mt={4}>
                    <ButtonGroup gap='2'>
                        <Button h='8' borderRadius={12} variant='outline'>Login</Button>
                        <Button  h='8' borderRadius={12} colorScheme='teal'>Sign Up</Button>
                    </ButtonGroup>
                </Box>
            </div>
            </Box>
        </>
    )
}