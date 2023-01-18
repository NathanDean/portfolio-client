import { useRouteError } from "react-router-dom";
import { Container, Card, CardContent, Typography } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

const containerStyles = {
    paddingTop: 4,
    paddingBottom: 4
}

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        
        <>

            <Navbar />

            <Container sx = {containerStyles}>

                <Card xs = {12} sm = {10}>

                    <CardContent>

                        <Typography variant = "body1" sx = {{pb: 2}}>Sorry, that page doesn't exist.</Typography>

                    </CardContent>

                </Card>

            </Container>

        </>

    )

}

export default ErrorPage