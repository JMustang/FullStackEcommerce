import express from "express";
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

//Products endpoints
app.get("/products", (req: any, res: any) => {
  console.log(req.params);
  res.send("List of products page!");
});

app.get("/products:id", (req: any, res: any) => {
  console.log(req.params);
  res.send("Just one product page!");
});

app.post("/products", (req: any, res: any) => {
  res.send("Create products page!");
});

app.put("/products:id", (req: any, res: any) => {
  res.send("Update products page!");
});

app.delete("/products:id", (req: any, res: any) => {
  res.send("Delete products page!");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
