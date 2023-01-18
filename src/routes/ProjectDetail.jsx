import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import Project from "../components/Project/Project";
import { getData } from "../getData";

const gridContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const ProjectDetail = () => {
    
    const project = useLoaderData().projects[0];

    return (

        <Grid container spacing = {2} sx = {gridContainerStyles}>

            <Grid item xs = {12} sm = {10}>
                
                <Project project = {project} />

            </Grid>
            
        </Grid>

    )

}

const loader = async ({params}) => {
    const query = `*[_type == "project" && slug.current == "${params.slug}"] {_id, name, slug, longDescription, projectLanguages, appLink, gitHubLink, image}`;
    const projects = await getData(query);
    return { projects }
}

export default ProjectDetail

export { loader }