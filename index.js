import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/assets',express.static(path.join(__dirname +'/assets')));


app.get('/hostinger', (req, res) => {
    console.log(__dirname);
    res.sendFile( path.join(__dirname+'/index.html') )
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));