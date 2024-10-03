"use client";
import { MainLayout } from "@/layouts";
import css from "./productPage.module.scss";
import { useEffect, useState } from "react";
import { extractProducts, Product } from "@/models/Products.model";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: PageProps) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/fakeDatas/products.fakeDatas.json");
      const data = await response.json();
      const products = extractProducts(data);
      const currentProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(currentProduct);
    };
    fetchProducts();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout
      children={
        <div className={css.productPage}>
          <div className={css.productContainer}>
            <img
              src={`/assets/products/${product.id}.webp`}
              alt={product.name}
              className={css.productImage}
            />
            <div className={css.productDetails}>
              <div className={css.productName}>{product.name}</div>
              <div className={css.productDescription}>
                {product.description}
              </div>
              <div className={css.priceAndPromo}>
                <div className={css.price}>{product.price}€</div>
                {product.promotion && (
                  <div className={css.promotion}>
                    {product.promotion.description} - {product.promotion.code}
                  </div>
                )}
              </div>
                <button className={css.addToCartButton}>Add to Cart</button>
              <div className={css.componentWrapper}>
                <div className={css.componentTitle}>Description</div>
                <p className={css.component}>{product.long_description}</p>
              </div>
              <div className={css.componentWrapper}>
                <div className={css.componentTitle}>How to use</div>
                <ul>
                  {product.how_to_use.map((step, index) => (
                    <li key={index}>
                      <div className={css.stepWrapper}>
                        <div className={css.step}>{index + 1}</div>
                        <div className={css.component}>{step}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css.componentWrapper}>
                <div className={css.componentTitle}>Ingredients</div>
                <p className={css.component}>
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index}>
                      {ingredient.name} ({ingredient.percentage}%){" "}
                      {index !== product.ingredients.length - 1 && " - "}
                    </span>
                  ))}
                </p>
              </div>

            </div>
          </div>
          <div className={css.reviews}>
            <h2>Customer Reviews</h2>
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        </div>
      }
    />
  );
}
