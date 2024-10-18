import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetail = ({
    params,
}: {
    params: { productId: string; reviewId: string };
}) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return (
        <div>
            <div>ProductID: {params.productId}</div>
            <div>ReviewID: {params.reviewId}</div>
        </div>
    );
};

export default ReviewDetail;
