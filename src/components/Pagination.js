import { Box, Button } from "@chakra-ui/react";
import "../App.css"


export default function Pagination({handlePrev,handleNext,current}){

    return(
        <Box mt={"15px"}>
           <span>
            <Button className="pbtn" disabled={current===1} onClick={handlePrev} mr="10px">Prev</Button>
            <Button className="pbtn">{current}</Button>
            <Button className="pbtn" onClick={handleNext} ml="10px">Next</Button>
           </span>
        </Box>
    )
}