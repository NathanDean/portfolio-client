import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import NavMenu from "./NavMenu/NavMenu";
import theme, { mobile } from "../../styling/theme";

const DrawerMenu = ({isOpen, setIsOpen}) => {

    const isMobile = useMediaQuery(mobile);

    return (

        <Drawer 
            variant = "temporary" 
            anchor = "right" 
            open = {isOpen} 
            onClose = {() => setIsOpen(false)}
            PaperProps = {{sx: {
                width: isMobile ? "100%" : "40%",
                alignItems: "flex-end"
            }}}
            transitionDuration = {isMobile ? 275 : {enter: theme.transitions.duration.enteringScreen, exit: theme.transitions.duration.leavingScreen}}
        >

            <IconButton aria-label = "Close menu" onClick = {() => setIsOpen(false)} sx = {{width: "1em", height: "1em", padding: 0, margin: 2.5}}>

                <CloseIcon />
                
            </IconButton>

            <NavMenu setIsOpen = {setIsOpen} />

        </Drawer>

    )

}

export default DrawerMenu