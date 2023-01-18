import { Box, IconButton, Link, useMediaQuery } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { tablet } from "../../styling/theme";

const SocialMediaIcons = () => {

    const isTablet = useMediaQuery(tablet);

    return (

        <Box sx = {!isTablet && {position: "fixed", bottom: 0, right: 0, p: .5}}>

            <IconButton component = {Link} href = "https://github.com/NathanDean" aria-label = "Visit GitHub" sx = {{color: "black"}} >

                <GitHubIcon fontSize = "large" />

            </IconButton>

            <IconButton component = {Link} href = "https://www.linkedin.com/in/nathanjdean/" aria-label = "Visit LinkedIn" sx = {{color: "black"}} >

                <LinkedInIcon fontSize = "large" />                

            </IconButton>

        </Box>

    )

}

export default SocialMediaIcons