const express = require( "express" );
const json = require( "body-parser" ).json;
const mongoose = require( "mongoose" );
const port = 4000;
const app = express();

app.use( json() );

mongoose.connect( "mongodb://localhost:27017/menu" );
mongoose.connection.once( "open", () => console.log( "Mongoose connected" ) );

const foodRoutes = require( "./features/food/foodRoutes" );
foodRoutes( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
