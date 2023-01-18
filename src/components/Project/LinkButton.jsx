import { Button, Link, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { mobile } from "../../styling/theme";

const LinkButton = ({to, text}) => {

    const isMobile = useMediaQuery(mobile);

    return (

        <Button 
            component = {to.charAt(0) === "/" || to.charAt(0) === "." ? RouterLink : Link} 
            to = {to}
            href = {to}
            variant = {"contained"}
            sx = {                {
                m: isMobile && 1,
                width: 1
            }}
        >{text}</Button>

    )

}

export default LinkButton