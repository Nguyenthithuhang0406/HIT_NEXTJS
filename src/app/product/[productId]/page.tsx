import React from 'react';

const ProductDetail = ({ params }: { params: { productId: string } }) => {
    return <div>{params.productId}</div>;
};

export default ProductDetail;
