## Authentication with JsonWebToken, Express & NodeJs

### Run the api
1. Run `nodemon`
2. Server listen on port 3000

### API doc
1. **GET**  | `/api` | *Test api* 
2. **POST** | `/api/login` | *Receive the token and set the header **Authorization : Baerer <access_token>***
3. **POST** | `/api/posts` | *Check the token and create post if token is good*

**Jean SAUNIE**