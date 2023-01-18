import { ListItem, ListItemText, useMediaQuery } from "@mui/material";
import NavMenuLink from "./NavMenuLink";
import { tablet } from "../../../styling/theme";

const NavMenuItem = ({ name, link, setIsOpen }) => {

    const isTablet = useMediaQuery(tablet);

    return (

        <ListItem sx = {{
            pt: 0,
            pb: isTablet && 3
        }}>
            
            <ListItemText>

                <NavMenuLink name = {name} link = {link} setIsOpen = {setIsOpen} />

            </ListItemText>

        </ListItem>

    )

}

export default NavMenuItem