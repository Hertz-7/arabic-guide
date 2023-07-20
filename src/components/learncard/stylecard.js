import styled from "styled-components";
import Card from '@mui/material/Card';
import { hover } from "@testing-library/user-event/dist/hover";

const StyledCard = styled(Card)`
    margin-right: 20px;
    border: 1px solid gray;
    &:hover {
        border-bottom: 10px solid #9d2035;
        border-left: 1px solid #9d2035;
        border-right: 1px solid #9d2035;
        
        border-top: 1px solid #9d2035;
        transition: 0.5s;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }


`
export {StyledCard} ;