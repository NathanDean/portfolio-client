import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(createTheme({
    palette: {
        common: {
            black: "#272727"
        },
        primary: {
            main: "#00B1CD"
        },
        secondary: {
            main: "#FFC001"
        },
        text: {
            primary: "#30343F"
        }
    },
    typography: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontWeight: "200",
        h1: {
            fontSize: "4rem",
            fontWeight: "300",
            letterSpacing: "0.25rem"
        },
        h4: {
            letterSpacing: "0.15rem"
        },
        h5: {
            letterSpacing: "0.15rem"
        },
        h6 : {
            letterSpacing: "0.15rem"
        },
        body1: {
            letterSpacing: "0.04rem",
            wordSpacing: ".04rem"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: ".9rem",
                    letterSpacing: "0.04rem",
                    "&:hover": {
                        backgroundColor: "#FFC001"
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    letterSpacing: "0.04rem"
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536
        },
     }    
}));

const mobile = theme.breakpoints.down("sm");
const tablet = theme.breakpoints.down("md");
const laptop = theme.breakpoints.up("lg");

export default theme
export { mobile, tablet, laptop }