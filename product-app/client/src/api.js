const BASE = ''; // proxy handles /api in dev

export const getProducts = async (params = {}) => {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`/api/products${q ? `?${q}` : ''}`);
  if (!res.ok) throw new Error('Failed fetching products');
  return res.json();
};

export const addProduct = async (payload) => {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to add product');
  return res.json();
};

export const updateProduct = async (id, payload) => {
  const res = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
};
