import { Box, Button } from "@chakra-ui/react";


export default function Pagination({handlePrev,handleNext,current}){

    return(
        <Box mt={"15px"}>
           <span>
            <Button disabled={current===1} onClick={handlePrev} mr="10px">Prev</Button>
            <Button>{current}</Button>
            <Button onClick={handleNext} ml="10px">Next</Button>
           </span>
        </Box>
    )
}