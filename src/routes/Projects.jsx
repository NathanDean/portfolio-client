import { useLoaderData } from "react-router-dom";
import { Grid, useMediaQuery } from "@mui/material";
import { getData } from "../getData";
import Project from "../components/Project/Project";
import { laptop } from "../styling/theme";

const Projects = () => {
    
    const { projects } = useLoaderData();
    const isLaptop = useMediaQuery(laptop);

    return (

        <Grid container spacing = {4} sx = {{justifyContent: isLaptop ? "flex-start" : "center"}}>

            {projects && 
            
                projects.map(project => {

                    return (

                        <Grid key = {project._id} item xs = {12} sm = {10} md = {8} lg = {6}>

                            <Project project = {project} summary />

                        </Grid>

                    )
                    
                })
            
            }

        </Grid>

    )

}

const loader = async () => {
    const query = "*[_type == 'project']|order(orderRank) {_id, name, slug, shortDescription, longDescription, projectLanguages, appLink, gitHubLink, image}";
    const projects = await getData(query);
    return { projects };
}

export default Projects

export { loader }