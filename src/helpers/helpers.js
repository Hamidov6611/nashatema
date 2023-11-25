export function getProductFromLocalStorage() {
  const data = localStorage.getItem("product");
  const product = data ? JSON.parse(data) : []

  return product;
}

export function setProductToLocalStorage(data) {
  localStorage.setItem("product", JSON.stringify(data));
}

export function removeProductFromLocalStorage() {
  localStorage.removeItem("product");
}
