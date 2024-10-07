import { NextResponse } from 'next/server';
import { IProduct } from '../../../types/productInterface';
import axios from 'axios';

export interface IResponse<T> {
  status: number;         
  data?: T;              
  error?: string;       
}

async function fetchProductsFromBackend(token: string): Promise<IProduct[]> {
  const res = await fetch(`http://192.168.88.39:7000/auth/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Error al obtener los productos');
  }

  return res.json();
}

export async function GET(request: Request): Promise<IResponse<IProduct[]>> {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ status: 401, error: 'No autorizado' });
  }

  try {
    const products: IProduct[] = await fetchProductsFromBackend(token);
    return NextResponse.json({ status: 200, data: products }); 
  } catch (error) {
    return NextResponse.json({ status: 500, error: 'Error al obtener los productos' });
  }
}

export const getProductById = async (productId: string): Promise<IProduct | null> => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    return null;
  }
};

