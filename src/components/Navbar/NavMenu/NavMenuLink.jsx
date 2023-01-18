import { forwardRef } from "react";
import { NavLink } from "react-router-dom"
import { Link, Typography, useMediaQuery } from "@mui/material"

import { tablet } from "../../../styling/theme";

const activeNavLinkStyle = {
    fontWeight: "600"
}

const CustomNavLink = forwardRef((props, ref) => {
    return <NavLink ref = {ref} {...props} style = {({isActive}) => isActive ? activeNavLinkStyle : undefined} />
})

const NavMenuLink = ({name, link, setIsOpen}) => {

    const isTablet = useMediaQuery(tablet);
    
    const capitalise = (word) => {
        const firstLetter = word.charAt(0);
        const capitalisedFirstLetter = firstLetter.toUpperCase();
        const otherLetters = word.slice(1);
        return capitalisedFirstLetter + otherLetters;
    }

    return (

        <Link component = {CustomNavLink} to = {link} underline = "none" onClick = {() => setIsOpen(false)}>
            <Typography 
                variant = {isTablet ? "h4" : "h5"} 
                color = "black" 
                sx = {{fontWeight: "inherit", textAlign: "center"}}
            >{capitalise(name)}</Typography>
        </Link>

    )

}

export default NavMenuLink