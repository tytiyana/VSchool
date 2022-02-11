# Intro to Express
 * Express is a function so once called it returns everything you need for you to start using it to create a server. */

# Initialize a new node project
* npm init -y
* npm install express 

# Vocabulary

# Route
 * An event listener for http requests
 * get, post, put, delete
 * every route created need two arguments.
 * Argument 1 is the endpoint (mount path) & Argument 2 is the callback function.
 * The callback function gives you access to the request(req) and response(res) objects. 
 * Request - any request coming from the client is this  
 * Response - any response sent to the client

# Endpoint
 * the destination part of the url
 * "/item" "/user"
# Port 
 * In your computer you have thousands of ports, they run processes. They can run servers, programs, etc. We'll be running servers on a local port.
 * Referred to as localhost:9000/ stay between 3000-9000.

# .listen() 
* .listen is a function from express that makes the server listen for activity. Listen needs two arguments, a port and a callback function. 

# Middleware (for every request)
* a function that fires on the inbetween (one of the functions that fires in a set of actions)
* fires before it gets to the route
*  the "next" function is used to move to the next middleware in line on the server

# Request Body (req.body)
* check the incoming request for a request body and parse it from JSON to javascript so we can handle it.

# .use()
* anytime a request comes to the path it looks for request body
* takes two arguments (a mount path & the request and response objects and the next function)
* first argument is optional if you need it to fire everytime there's a request 

# express.json(
  * looks for a request body and turns it into 'req.body' (turns it into javascript)
)

# Express Router
* enables us to modularize our routes in express

# Modular file organization
* different files are used for specific tasks

# Error-handling


# Nodemon
 * Nodemon hot relaods your server so you don't have to.
 * npm install -g nodemon.
 * -g means globally so you only have to install once.
 * nodemon example.js

 # UUID
 * creates unique IDs
 * npm install uuid

 # Morgan (a logger) 
 * it logs errors in a more straightforward way
 * npm install morgan

 # Extra Stuff 
  * Control + C ends the process. */
  * Express makes objects json automatically like axios. */