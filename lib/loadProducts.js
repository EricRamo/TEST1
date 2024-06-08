export const loadProducts = async (id) => {
  const response = await fetch(`https://tienda.mercadona.es/api/categories/${id}`);
  const {categories} = await response.json();
  const limited=categories.slice(0,3);
  console.log(limited);
  return limited;
};

