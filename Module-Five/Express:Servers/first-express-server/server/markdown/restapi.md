# Intro to REST API architechture

# REST(ful) - Representational State Transfer
* craft endpoints to display exactly what it is meant to show.

# Resource - A single item (object) in a database

# Collection - a collection of similar items in a database

# Base (root) URL - http://amazon.com/ 
* the url that all things build off.

# API Endpoint - http://amazon.com/movies

# Parameters - /movies/:movieId /movies/b23yb34rn234v32n
* a way to give items a unique indentifier so they're easily identfiable. 
* normally a string of numbers and letters

# Query (query string) - /movies?genre=action&year=1999
* a sub-collection
* filtered

# Client - Frontend
# Server - Intermediary
# Databse - Backend

# Request Method
* get
* post
* put
* delete

# URL Parameters

# Parts of a URL
* Base - http://amazon.com/
* Endpoint http://amazon.com/images/
* Parameter http://amazon.com/images/23wejrnba324
* Query http://amazon.com/images/?

# URL Queries

# Query String
* filters results
* begins with a "?"
* built of key=value pairs
* multiple queries seperated by the "&"