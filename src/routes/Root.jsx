import { createContext } from "react";
import { Container, useMediaQuery } from "@mui/material";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SocialMediaIcons from "../components/Root/SocialMediaIcons";
import ScrollToTop from "../components/Root/ScrollToTop";
import { getData } from "../getData";
import { tablet } from "../styling/theme";

const containerStyles = {
    paddingTop: 4,
    paddingBottom: 4
}

const LanguagesContext = createContext();

const Root = () => {

    const { languages } = useLoaderData();
    const isTablet = useMediaQuery(tablet);

    return (

        <>

            <Navbar />

                <Container sx = {containerStyles}>

                    <LanguagesContext.Provider value = {languages}>

                        <Outlet />

                        <ScrollToTop />

                    </LanguagesContext.Provider>

                </Container>

            {!isTablet && <SocialMediaIcons />}

        </>

    )

}

const loader = async () => {
    const query = "*[_type == 'language'] {_id, name, title}";
    const languages = await getData(query);
    return { languages }
}

export default Root

export { LanguagesContext, loader }