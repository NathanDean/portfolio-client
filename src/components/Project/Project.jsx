import { useContext } from "react";
import { Box, Card, CardActions, CardContent, CardMedia, Chip, Typography, useMediaQuery } from "@mui/material";
import { LanguagesContext } from "../../routes/Root";
import LinkButton from "./LinkButton";
import { mobile, tablet } from "../../styling/theme"
import urlFor from "../../sanity/imageBuilder";

import { PortableText } from "@portabletext/react";

const Project = ({project, summary}) => {

    const {name, slug, shortDescription, longDescription, projectLanguages, appLink, gitHubLink, image} = project;

    const languages = useContext(LanguagesContext)

    const isMobile = useMediaQuery(mobile);
    const isTablet = useMediaQuery(tablet);

    return (

        <Card raised>

            <CardMedia
                component = "img"
                image = {urlFor(image).url()}
                alt = {name}
                sx = {{height: summary || isMobile ? "17.5rem" : "auto", maxHeight: "30rem", objectPosition: "top left"}}
            />
            
            <CardContent sx = {{
                height: (summary && !isTablet) && "12rem",
                borderTop: "1px solid black",
            }}>
                <Typography variant = "h4" sx = {{mb: 1.5}}>{name}</Typography>
                <Box sx = {{display: "flex", flexWrap: "nowrap"}}>
                    {projectLanguages.map(projectLanguage => {
                        const language = languages.find(el => el._id === projectLanguage._ref)
                        return <Chip key = {language._id} label = {language.name} variant = "contained" sx = {{ml: 0, mr: 1, mb: 1.5, backgroundColor: "#FFC001"}} />
                    })}
                </Box>

                {summary ? 
                
                    <Typography variant = "body1">{shortDescription}</Typography> 
            
                :

                    <PortableText value = {longDescription} />

                }

            </CardContent>

            <CardActions sx = {{
                    flexDirection: isMobile && "column",
                    pl: 2,
                    pr: 2,
                    pb: 2
                }}>

            {(!summary && isMobile) && 
            
                <>   
            
                    {appLink && <LinkButton to = {appLink} text = "View app" />}
                    <LinkButton to = {gitHubLink} text = "View on GitHub" />
            
                </>

            }

            <LinkButton to = {summary ? `/${slug.current}` : "../"} text = {summary ? "More info" : "Back to projects"} />
            {(!isMobile) && 

                <>
                
                    {appLink && <LinkButton to = {appLink} text = "View app" />}
                    {gitHubLink && <LinkButton to = {gitHubLink} text = "View on GitHub" />}
                
                </>

            }

                </CardActions>
                
        </Card>

    )

}

export default Project