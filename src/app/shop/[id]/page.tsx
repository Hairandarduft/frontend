"use client";
import { MainLayout } from "@/layouts";
import css from "./productPage.module.scss";
import { useEffect, useState } from "react";
import { extractProducts, Product } from "@/models/Products.model";
import { StarRating } from "@/components/Product/Product";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: PageProps) {
  const [product, setProduct] = useState<Product>();
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/fakeDatas/products.fakeDatas.json");
      const data = await response.json();
      const products = extractProducts(data);
      const currentProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(currentProduct);
      if (currentProduct) {
        const averageRating =
          currentProduct.reviews && currentProduct.reviews.length > 0
            ? currentProduct.reviews.reduce(
                (sum, review) => sum + review.rating,
                0
              ) / currentProduct.reviews.length
            : 0;
        setAverageRating(averageRating);
      }
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
              <div className={css.priceAndRating}>
                <div className={css.price}>{product.price}€</div>
                {product.reviews && averageRating > 0 ? (
                  <div className={css.rating}>
                    <StarRating rating={averageRating} />
                    <p>
                      ({product.reviews.length} review
                      {product.reviews.length > 1 ? "s" : ""})
                    </p>
                  </div>
                ) : (
                  <p>No reviews yet</p>
                )}
              </div>
              <button className={css.addToCartButton}>Add to Cart</button>
              {product.promotion && (
                <div className={css.promotion}>
                  {product.promotion.description} - {product.promotion.code}
                </div>
              )}
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
          <div className={css.reviewsWrapper}>
            <div className={css.title}>Customer Reviews</div>
            <div className={css.reviews}>
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className={css.review}>
                    <div className={css.usernameAndDate}>
                      <div key={index} className={css.username}>
                        {review.username}
                      </div>
                      <div className={css.date}>
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className={css.rating}>
                      <StarRating rating={review.rating} />
                    </div>
                    <div className={css.comment}>{review.comment}</div>
                  </div>
                ))
              ) : (
                <div>No reviews yet</div>
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}
