//import {createClient} from 'contentful'
import * as contentful from 'contentful' 

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})


// const useContentful = ()=> {

//     const client = createClient({
//         spaceId: "xrhc6s36njjr",
//         accessToken:"sDfNiMFtiATtqAKEjCBnuhrt2zPobBH5-2UDXrN97bw", 
//         host: "preview.contentful.com"

//     })
//     const getAuthors = () => {
//         try {
//            const entries = client.getEntries({
//                 content_type: "title",
//             });
//             return entries
//         }catch(error){
//             console.log(`Error fecting authors: ${error}`);

//         }
//     };
//     return {getAuthors}
// }

//export default useContentful