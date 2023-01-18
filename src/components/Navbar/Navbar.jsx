import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, IconButton, Link, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import NavMenu from "./NavMenu/NavMenu";
import DrawerMenu from "./DrawerMenu";

import { mobile, tablet } from "../../styling/theme";

const toolbarStyles = {
    display: "flex",
    justifyContent: "space-between"
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const isTablet = useMediaQuery(tablet);
    const isMobile = useMediaQuery(mobile);

    return (

        <AppBar position = "sticky">

            <Toolbar sx = {toolbarStyles}>

                <Link component = {RouterLink} to = "/" underline = "none">

                    <Typography variant = "h1" color = "black" sx = {{position: "relative", top: "-.1rem", pl: 2}}>{isMobile ? "nd" : "NATHAN DEAN"}</Typography>

                </Link>

                <>

            {isTablet ? 
                    
                <>
                
                    <IconButton aria-label = "Toggle menu" onClick = {() => setIsOpen(!isOpen)}>
            
                        <MenuIcon />
            
                    </IconButton>
                    
                    <DrawerMenu isOpen = {isOpen} setIsOpen = {setIsOpen} />
            
                </>
            
            :
            
                <NavMenu setIsOpen = {setIsOpen} />
            
            }

        </>

            </Toolbar>

        </AppBar>

    )

}

export default Navbar