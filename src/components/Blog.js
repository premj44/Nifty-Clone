import { Box, Flex, Grid, Text, Img } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from 'axios'
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import "../App.css"
import Footer from "./Footer";



export default function Blog() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePrev = () => {
        setPage((prev) => prev - 1)
    }

    useEffect(() => {

        axios.get(`https://niftydata1.herokuapp.com/api/data?_page=${page}&_limit=12`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })

    }, [page])

    return (

        <Box>
            <Navbar />


            <Box bg='white' mt='35px' mb="10px">

                <Grid templateColumns="repeat(3,1fr)" m={"auto"} gap="5px" w="90%" textAlign="left" >
                    {data.map((item) => (
                        <Box  value={item.id} name={item.id} key={item.id}  p="10px" rounded="md" bg="white" >
                            <Img className="mainbox" w="97%" h="190px" src={item.image} />

                            <Flex fontSize="xl" color={"gray.800"} fontWeight="500">
                                <Text className="mainbox" >{item.heading}</Text>
                            </Flex>

                            <Flex gap="2">
                                <Text color={"gray.600"} fontWeight={"semibold"}>{item.post}</Text>
                                <Text className="mainbox" color={"#00baab"} fontWeight={"semibold"}>{item.postName}</Text>
                            </Flex>


                        </Box>

                    ))}

                </Grid>

                <Pagination handlePrev={handlePrev} handleNext={handleNext} current={page} />

            </Box>
            <Footer/>
        </Box>
    )
}