export function listProducts(req: any, res: any) {
  console.log(req.params);
  res.send("List of products page!");
}
