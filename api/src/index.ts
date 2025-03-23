import express from "express";
import productsRouter from "./routes/products/index";
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
