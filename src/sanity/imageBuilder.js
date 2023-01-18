import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

const builder = imageUrlBuilder(client);

const urlFor = src => {
    return builder.image(src);
}

export default urlFor