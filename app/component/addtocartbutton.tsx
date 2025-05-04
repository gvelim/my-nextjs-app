// Client Component (app/components/AddToCartButton.tsx)
"use client";
import React, { useState } from 'react';
import styles from "./cartbutton.module.css";

type AddToCartButtonProps = {
  productName: string;
};

type AddToCartAPICallProps = {
  productName: string;
};

async function AddToCartAPICall({ productName }: AddToCartAPICallProps) {
  const res = await fetch("/api/add-to-cart", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productName }),
  });

  if (!res.ok) {
    const message = `An error occurred: ${res.status}`;
    throw new Error(message);
  }

  return await res.json();
}

export default function AddToCartButton({ productName }: AddToCartButtonProps) {
  const [count, setCount] = useState(0);
  const [basket, setBasket] = useState(null);

  const handleClick = async () => {
    setCount(count + 1);
    try {
      const response = await AddToCartAPICall({ productName });
      setBasket(response);
    } catch (error) {
      console.error(error);
      setBasket(null);
    }
  };

  return (
    <div>
      <p>Items in cart: {count}</p>
      <button className={styles.cartbutton} onClick={handleClick}>
        Add {productName} to Cart
      </button>
      {basket && <p>Added to cart!</p>}
    </div>
  );
}
