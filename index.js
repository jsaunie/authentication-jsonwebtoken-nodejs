const express = require( 'express' );
const jwt = require( 'jsonwebtoken' );

const app = express();

app.get( '/api', (req, res) => {
    res.json( {
        message: 'Welcome to the API',
    } );
} );

app.post( '/api/posts', verifyToken, (req, res) => {
    jwt.verify( req.token, 'secretKey', (err, authData) => {
        if ( err ) {
            res.sendStatus( 403 );
        } else {
            res.json( {
                message: 'Post created...',
                authData,
            } )
        }
    } );
} );

app.post( '/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@gmail.com',
    };
    
    jwt.sign( { user }, 'secretKey', { expiresIn: '30s' }, (err, token) => {
        res.json( { token } );
    } );
} );

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers[ 'authorization' ];
    if ( bearerHeader != null ) {
        // Authorization: Bearer <access_token>
        req.token = bearerHeader.split( ' ' )[ 1 ];
        next();
    } else {
        // Forbidden
        res.sendStatus( 403 );
    }
    
}

app.listen( 3000, () => console.log( 'Server started on port 3000' ) );
