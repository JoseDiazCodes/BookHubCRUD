const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient

var db

const url =
	"mongodb+srv://josediazcodes:Ty9HfmM58LhncS2J@savage.cl7kbgq.mongodb.net/?retryWrites=true&w=majority"
const dbName = "demo"

app.listen(3000, () => {
	MongoClient.connect(
		url,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(error, client) => {
			if (error) {
				throw error
			}
			db = client.db(dbName)
			console.log("Connected to `" + dbName + "`!")
		}
	)
})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
	db.collection("books")
		.find()
		.toArray((err, result) => {
			if (err) return console.log(err)
			res.render("index.ejs", { books: result })
		})
})

app.post("/books", (req, res) => {
	db.collection("books").insertOne(
		{
			title: req.body.title,
			author: req.body.author,
			description: req.body.description,
			completed: false,
			inProgress: false,
		},
		(err, result) => {
			if (err) return console.log(err)
			console.log("Book added to database")
			res.redirect("/")
		}
	)
})

app.put("/books", (req, res) => {
	db.collection("books").findOneAndUpdate(
		{ title: req.body.title },
		{
			$set: {
				completed: req.body.completed,
			},
		},
		{
			sort: { _id: -1 },
			upsert: false,
		},
		(err, result) => {
			if (err) return res.send(err)
			res.send(result)
		}
	)
})

// PUT route to toggle the 'in progress' status
app.put("/inprogress", (req, res) => {
	db.collection("books").findOneAndUpdate(
		{ title: req.body.title },
		{
			$set: {
				inProgress: req.body.inProgress,
			},
		},
		{
			sort: { _id: -1 },
			upsert: false,
		},
		(err, result) => {
			if (err) return res.send(err)
			res.send(result)
		}
	)
})

app.delete("/books", (req, res) => {
	db.collection("books").findOneAndDelete(
		{ title: req.body.title },
		(err, result) => {
			if (err) return res.send(500, err)
			res.send("Book deleted!")
		}
	)
})
