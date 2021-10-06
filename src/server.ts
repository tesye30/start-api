import express, { response } from 'express';


const app = express();

app.use(express.json());
app.get("/", (request, response) =>{
    return response.json( {message: "Hello Word!"});
})

app.post("/courses", (request, response) => { 
    const { name } = request.body;
    return response.json({ name});
})

app.listen(8080, () => console.log("Server is running!"));