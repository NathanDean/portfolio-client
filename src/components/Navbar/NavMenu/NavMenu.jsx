import { List, ListItem, useMediaQuery } from "@mui/material";
import NavMenuItem from "./NavMenuItem";
import SocialMediaIcons from "../../Root/SocialMediaIcons";
import { tablet } from "../../../styling/theme";

const desktopStyles = {
    display: "flex",
    flexDirection: "row",
}

const drawerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 1,
    height: 1
}

const NavMenu = ({setIsOpen}) => {

    const isTablet = useMediaQuery(tablet);

    return (

        <List sx = {isTablet ? drawerStyles : desktopStyles}>

                <NavMenuItem name = "projects" link = "/" setIsOpen = {setIsOpen} />

                <NavMenuItem name = "about" link = "/about" setIsOpen = {setIsOpen} />

                {isTablet && <ListItem sx = {{justifyContent: "center"}}><SocialMediaIcons /></ListItem>}

        </List>

    )

}

export default NavMenu