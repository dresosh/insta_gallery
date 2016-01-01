var express = require( 'express' )
   ,app     = express()
   ,mongoose = require( 'mongoose' )
   ,morgan   = require( 'morgan' )
   ,bodyparser = require( 'body-parser' )
   ,methodOverride = require( 'method-override' )
   ,port = process.env.PORT || 3000


app.use( express.static( __dirname + '/public' ) )
app.use( morgan( 'dev' ) )
app.use( bodyparser.urlencoded( { 'extended':'true' } ) )
app.use( bodyparser.json() )
app.use( bodyparser.json( { type:'application/vnd.api + json' } ) )



app.listen( port, function() {
  console.log( 'App is listening on ' + port );
})
