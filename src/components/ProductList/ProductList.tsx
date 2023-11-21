// components/ProductList/ProductList.tsx
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { ICard } from '../../types/ICard';

const ProductList = () => {
  const [products, setProducts] = useState<ICard[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/?page=1&rows=10&sortBy=id&orderBy=DESC');

      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        console.error('Erro ao buscar os produtos. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '80px auto 100px auto', gap: '16px 0', width: '80%' }}>
        {products.map((product: ICard) => (
          <div key={product.id} className="product-card">
            <Card {...product} />
            <Button product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
