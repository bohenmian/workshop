import Express from 'express';

let app = Express();

app.get("/", (req, res) => {
  res.send("Hello Docker!");
});

app.listen(8000, () => {
  console.log("Dockerizable app listening to connections!");
});
