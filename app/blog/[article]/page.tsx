import type { Metadata } from 'next';
import React from 'react';
import AddToCartButton from "../../component/addtocartbutton";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My blog posts',
};

type BlogParams = {
  article: string;
}

export default function RenderPage({params}: {params: BlogParams}) {
  return (
    <div>
      <h3>My Blog Post {params.article}</h3>
      <AddToCartButton productName='My Product'/>
    </div>
  )
}

// export default function BlogPost() {
//   return <h3>My Blog Post</h3>;
// }
