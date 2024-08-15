import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
})

app.post("/submit", (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content
    }
    posts.push(post);
    res.redirect('/');
});

// post render in new page
app.get("/posts/:postName", (req, res) => {
    const requestedTitle = _.lowerCase(req.params.postName);    
    posts.forEach((post) => {
        const storedTitle = _.lowerCase(post.title);        
        if  (storedTitle === requestedTitle) {
            res.render("post.ejs", {
                title: post.title,
                content: post.content
            });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
