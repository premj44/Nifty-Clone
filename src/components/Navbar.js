import { Box, Button, ButtonGroup, Flex, Text, Link, Heading, Input, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import "../App.css"

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>
            <Box bg={"#fcfdfe"} >
                <Box style={{ display: "flex", width: "90%", margin: "auto", height: "70px" }}>
                    <Box style={{ marginTop: "18px",cursor:"pointer" }}>
                    <NavLink to="/"><img width="90px" src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" /></NavLink>
                    </Box>
                    <Spacer />
                    <Box  style={{ display: "flex", fontWeight: "500", marginTop: "18px" }} >
                        <Box id="navhover" ml={20}><NavLink to="/">Features</NavLink></Box>

                        <Box id="navhover" ml={10}><NavLink to="/apps">Apps</NavLink></Box>

                        <Box id="navhover" ml={10}><NavLink to="/blog">Blog</NavLink></Box>
                        
                        <Box id="navhover" ml={10}><NavLink to="/">Got Clients?</NavLink></Box>

                        <Box id="navhover" ml={10} ><NavLink to="/">Pricing</NavLink></Box>
                        <Box ml={10} color={"#00baab"}>Get a Demo</Box>
                    </Box>
                    <Spacer />
                    <Box w='200px' mt={4}>
                        <ButtonGroup gap='2'>
                            <Button h='8' borderRadius={12} variant='outline' ><NavLink to="/login">Login</NavLink> </Button>
                            <Button h='8' borderRadius={12} colorScheme='teal' onClick={onOpen}  >Sign Up</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box m={"auto"} p={10} w={395} h={320}>

                            <Stack direction="column" gap="0.5rem">
                                <Box m={"auto"} w='90px' h='10'>
                                    <img width="80px" src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" />
                                </Box>
                                <Box textAlign="center">
                                    <Heading>Get Started in less than 1 minute</Heading>
                                </Box>

                                <Flex>
                                    <Input bg={"gray.200"} mt={25} h={50} w={650} placeholder="name@company.com" />
                                    <Button className="btn" color={"white"} borderRadius={"10"} ml={-110} mt={8} bg={"#00baab"} h={9} w={180}>Get Started</Button>
                                </Flex>
                            </Stack>

                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}