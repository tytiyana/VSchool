# Mongoose
* npm install mongoose

# Purpose 
* Create models
* Query data

# Connect
*   mongoose.connect('mongodb://localhost:27017/moviesdb',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }, () => console.log("Connected to the database."))

# Mongoose Schemas
* Blueprints for our data

# Mongoose Models
* Models have a Name, and a Blueprint (Schema)
* Models are used to perform the CRUD operations on data created with the Model
