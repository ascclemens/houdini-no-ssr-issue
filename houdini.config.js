/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "apiUrl": "http://127.0.0.1:42011/api/graphql",
    "plugins": {
        "houdini-svelte": {
            "client": "./src/client"
        }
    }
}

export default config
