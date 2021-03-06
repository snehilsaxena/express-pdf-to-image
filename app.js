const express = require('express');
const fs = require( 'fs' );
const app = express();
// const router = express.Router();
const convertImage = require('./convert');

const moveFrom = "./pdfs/";

app.get('', (req, res, next) => {
    (async ()=>{
        try {
            const files = await fs.promises.readdir( moveFrom );
            for( const file of files ) {
                console.log(file);
                convertImage(moveFrom+file);
            }
            res.send('Completed');
        }
        catch( e ) {
            console.error( "We've thrown! Whoops!", e );
            res.send('Not Completed');
        }
    })();
});

app.listen(8080);
console.log("Server Started at port 8080!");
