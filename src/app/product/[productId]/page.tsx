import React from 'react';

import { Metadata } from 'next';

//dynamic metadata
type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    description: `Product ${params.productId}`,
  };
};

const ProductDetail = ({ params }: { params: { productId: string } }) => {
    return <div>{params.productId}</div>;
};

export default ProductDetail;
