import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { ICard } from '../../types/ICard';
import Skeleton from '@mui/material/Skeleton';
import { Container, Wrapper } from "../../styles/ProjectListStyles"

const ProductList = () => {
  const [products, setProducts] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          // Renderiza skeletons enquanto os dados estão sendo buscados
          Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="product-card">
              <Skeleton variant="rectangular" width={150} height={200} />
              <Skeleton variant="text" width={150} style={{ marginTop: '10px' }} />
              <Skeleton variant="text" width={50} style={{ marginTop: '5px' }} />
            </div>
          ))
        ) : (
          products.map((product: ICard) => (
            <div key={product.id} className="product-card">
              <Card {...product} />
              <Button product={product} />
            </div>
          ))
        )}
      </Wrapper>
    </Container>
  );
};

export default ProductList;
