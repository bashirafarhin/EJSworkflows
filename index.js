import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// step 1:
app.get("/",(req,res)=>{
  res.render("index.ejs");
});
// step 2:
app.use(express.static("public"));
// step 3:
app.get("/about",(req,res)=>{
  res.render("about.ejs");
});

app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
});

app.post("/submit", (req, res) => {
  res.render("contact.ejs",{
      name : req.body.name,
      email : req.body.email,
      text : req.body.text
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
