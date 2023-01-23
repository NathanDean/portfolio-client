import { Box, Button, Card, CardActions, CardContent, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink, useLoaderData } from "react-router-dom";
import { mobile } from "../styling/theme";
import { getData } from "../getData";
import urlFor from "../sanity/imageBuilder";
import { PortableText } from "@portabletext/react";

const About = () => {

    const data = useLoaderData();
    const bio = data.bio[0];
    const { text, image } = bio;
    const src = urlFor(image.asset._ref);
    const isMobile = useMediaQuery(mobile);

    return (

        <Card xs = {12} sm = {10}>

            <CardContent>

                <Typography variant = "h4" sx = {{mb: 1.5}}>

                    About me

                </Typography>

                <Box component = "img" src = {src} sx = {isMobile ? {width: 1, borderRadius: "2.5%"} : {float: "right", ml: 2, mb: 2, borderRadius: "2.5%"}} />

                <PortableText value = {text} />

            </CardContent>

            <CardActions sx = {{
                    pl: 2,
                    pb: 2
                }}>
                                    
                <Button component = {RouterLink} to = "../" variant = "contained" sx = {{width: isMobile ? 1 : 1/3, m: "0 auto"}}>Back</Button>

            </CardActions>

        </Card>

    )

}

const loader = async () => {
    const query = "*[_type == 'bio'] {text, image}";
    const bio = await getData(query);
    return { bio }
}

export default About

export { loader }