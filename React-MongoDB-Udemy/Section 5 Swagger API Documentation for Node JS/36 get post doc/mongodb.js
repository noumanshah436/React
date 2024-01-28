const express = require("express");
const MongoClient = require("mongodb").MongoClient; //creating  object
// to access mongodb
// npm install mongodb

// req.params.id
// req.body.title

const app = express();

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
var database;

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Node JS API Project for MongoDB",
			version: "1.0.0",
		},
		servers: [
			{
				url: " http://localhost:8080",
			},
		],
	},
	apis: ["./mongodb.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//  use spaces instead of tabs
/**
 * @swagger
 * /:
 *  get: 
 *      summary: This API is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses: 
 *              200:
 *                  description: To test Get Method
 */

app.get("/", (req, resp) => {
	resp.send("Welcome Nouman");
});


/**
 * @swagger
 *  components:
 *        schemas: 
 *            Book:
 *                type: object
 *                properties:
 *                       id:
 *                          type: integer
 *                       name:
 *                          type: string
 */
/**
 * @swagger
 * /api/books:
 *   get:
 *       summary: To get All Bokks 
 *       description: this api is used to fetch data from mongoDB
 *       responses: 
 *                 200:
 *                    description: this api is used to fetch data from mongoDB
 *                    content:
 *                       application/json:
 *                             schema:
 *                                    type: array                 
 *                                    items: 
 *                                         $ref: '#components/schemas/Book'
 *                                         
 */


app.get("/api/books", (req, resp) => {
	database
		.collection("books") // name of collection ( table ) to use
		.find({})
		.toArray((error, result) => {
			if (error) throw error;
			resp.send(result); // result is an array of object
			// console.log('result', result);
			// result [
			// 		{ _id: 60d9ff381cc0fb59671b2dd5, name: 'MonogoDb book', id: 11 },
			// 		{ _id: 60db1b2f6d30492258c0371d, name: 'MYSQL book', id: 12 }
			// 	]
		});
});

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *       summary: To get Books with matched id
 *       description: this api is used to fetch data from mongoDB
 *       parameters:
 *             - in: path
 *               name: id
 *               required: true
 *               description: Numeric ID required
 *               schema:
 *                     type: integer
 *       responses: 
 *                 200:
 *                    description: this api is used to fetch data from mongoDB
 *                    content:
 *                       application/json:
 *                             schema:
 *                                    type: array                 
 *                                    items: 
 *                                         $ref: '#components/schemas/Book'
 *                                         
 */
app.get("/api/books/:id", (req, resp) => {
	database
		.collection("books")
		.find({ id: parseInt(req.params.id) })
		.toArray((err, result) => {
			if (err) throw err;
			resp.send(result);
		});
});


/**
 * @swagger
 * /api/books/addBook:
 *   post:
 *       summary: Insert Books to MongoDB
 *       description: this api is used to insert data to mongoDB
 *       requestBody:
 *               required: true
 *               content:
 *                      application/json:
 *                             schema:
 *                                    $ref: '#components/schemas/Book'
 *       responses: 
 *                 200:
 *                    description: Added Successfully
 *                                                             
 */

app.post("/api/books/addBook", (req, resp) => {
	// we need to set id manually of new record so
	// we get record with greater id number from original database
	// and insert new record in database by adding 1 to that id

	let res = database.collection("books").find({}).sort({ id: -1 }).limit(1); // get record with higher id
	// console.log("res:", res); //  res : Cursor { }

	res.forEach((obj) => {
		// console.log("obj:", obj); // js object of record from array with higher id
		if (obj) {
			let book = {
				id: obj.id + 1,
				title: req.body.name,
			};
			database.collection("books").insertOne(book, (err, result) => {
				if (err) resp.status(500).send(err);
				resp.send("Book Added Successfully");
			});
		}
	});
});

// update
app.put("/api/books/:id", (req, resp) => {
	// query to get record to update
	let query = { id: parseInt(req.params.id) };
	let book = {
		id: parseInt(req.params.id),
		title: req.body.title,
		// name:"Updated"
	};

	// we want to set this book ( update )
	let dataSet = {
		$set: book,
	};

	database.collection("books").updateOne(query, dataSet, (err, result) => {
		if (err) throw err;
		// resp.send(book);
		resp.send("Book Updated");
	});
});

app.delete("/api/books/:id", (req, resp) => {
	database
		.collection("books")
		.deleteOne({ id: parseInt(req.params.id) }, (err, result) => {
			if (err) throw err;
			resp.send("Book Deleted");
		});
});

// port num + create mongoDB connection
app.listen(8080, () => {
	// MongoClient.connect('conn_string', param_obj , callback_func);
	MongoClient.connect(
		"mongodb://localhost:27017",
		{ useNewUrlParser: true },
		(error, result) => {
			if (error) throw error;
			// pass it name of the database we want to use and it return database object
			database = result.db("mydatabase");
			// console.log(database);   // Db {}  --  like js object
			console.log("Connection successful");
		}
	);
});

// node .\mongodb.js
// nodemon .\mongodb.js

// errors sol:
// https://stackoverflow.com/questions/36400233/connect-econnrefused-127-0-0-127017

// http://localhost:8080

// http://localhost:8080/api/books
// [{"_id":"60db09ee9964cccd0c931b1e","name":"Mongodb database","id":123},{"_id":"60db0a1fd94c57336041b149","name":"MySQL database","id":124}]

// http://localhost:8080/api/books/12
// [{"_id":"60db1b2f6d30492258c0371d","name":"MYSQL book","id":12}]

// http://localhost:8080/api-docs
