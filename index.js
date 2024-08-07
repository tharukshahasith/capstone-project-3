import express from "express";
import bodyParser from "body-parser";

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("views/index.ejs", {posts: posts});
})

app.post("/submit", (req, res) => {
    const post = {
        title: req.body.title,
        image: req.body.image,
        content: req.body.content
    }
    posts.push(post);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
