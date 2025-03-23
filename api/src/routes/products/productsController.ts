export function listProducts(req: any, res: any) {
  console.log(req.params);
  res.send("List of products page!");
}

export function getProductsById(req: any, res: any) {
  console.log(req.params);
  res.send("Just one product page!");
}

export function createProducts(req: any, res: any) {
  res.send("Create products page!");
}
