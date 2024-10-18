import React from 'react';

const Document = ({ params }: { params: { slug: string[] } }) => {
    const { slug } = params;
    const slugLength = slug.length;

    if (slugLength === 1) {
        return <div>Document with 1 concept {slug[0]}</div>;
    }

    if (slugLength >= 2) {
        return (
            <div>Document with 2 or more concepts {[...slug].join('/')}</div>
        );
    }
};

export default Document;
