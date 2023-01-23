import { Box, Button, Card, CardActions, CardContent, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink, useLoaderData } from "react-router-dom";
import { mobile } from "../styling/theme";
import { getData } from "../getData";
import urlFor from "../sanity/imageBuilder";

const About = () => {

    const { bio } = useLoaderData();
    const image = bio[0].image.asset._ref;
    const src = urlFor(image);
    const isMobile = useMediaQuery(mobile);

    const toText = bio => {

        return bio[0].bio.map(p => {
            const { _key, text } = p.children[0];
            return <Typography key = {_key} variant = "body1" sx = {{pb: 2}}>{text}</Typography>;
        })

    }

    return (

        <Card xs = {12} sm = {10}>

            <CardContent>

                <Typography variant = "h4" sx = {{mb: 1.5}}>

                    About me

                </Typography>

                <Box component = "img" src = {src} sx = {isMobile ? {width: 1, borderRadius: "2.5%"} : {float: "right", ml: 2, mb: 2, borderRadius: "2.5%"}} />

                {toText(bio)}

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
    const query = "*[_type == 'bio'] {bio, image}";
    const bio = await getData(query);
    return { bio }
}

export default About

export { loader }