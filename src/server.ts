import express, { response } from 'express';


const app = express();

app.get("/", (request, response) =>{
    return response.json( {message: "Hello Word!"});
})

app.listen(8080, () => console.log("Server is running!"));