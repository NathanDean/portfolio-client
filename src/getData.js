import client from "./sanity/client";

const getData = async query => {
    const data = await client.fetch(query)
    return data
}

export { getData }