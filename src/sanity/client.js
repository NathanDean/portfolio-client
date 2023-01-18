import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "dj6exhw4",
    dataset: "production",
    apiVersion: "2022-11-21",
    useCdn: true
});