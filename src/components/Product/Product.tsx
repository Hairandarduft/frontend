import React from "react";
import styles from "./Product.module.scss";
import { getGammeColor, Product } from "@/models/Products.model";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: Product;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`}>&#9733;</span>
        ))}
      {halfStar && <span>&#9734;</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`}>&#9734;</span>
        ))}
    </div>
  );
};

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const averageRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;

  const handleCardClick = () => {
    router.push("/shop/" + product.id);
  };

  const handleAddToCartClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // Logique future pour l'ajout au panier
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <img
        className={styles.productImage}
        src={"/assets/products/" + product.id + ".webp"}
        alt={product.name}
      />

      <div className={styles.productDetails}>
        {product.gamme ? (
          <div className={styles.gammeChipContainer}>
            <div
              className={styles.gammeChip}
              style={{
                backgroundColor: getGammeColor(product.gamme) + "11",
                color: getGammeColor(product.gamme),
              }}
            >
              {product.gamme.toLowerCase().charAt(0).toUpperCase() +
                product.gamme.toLowerCase().slice(1)}{" "}
              hair
            </div>
          </div>
        ) : product.limitedEdition ? (
          <div className={styles.limitedEditionChipContainer}>
            <div className={styles.limitedEditionChip}>{product.limitedEdition} LIMITED EDITION</div>
          </div>
        ) : null}
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
        {product.promotion && (
          <div className={styles.promotion}>
            <span>{product.promotion.description}</span>
            <span className={styles.promoCode}>
              CODE : {product.promotion.code.toLocaleUpperCase()}
            </span>
          </div>
        )}
        <div className={styles.reviews}>
          {product.reviews && averageRating > 0 ? (
            <div className={styles.rating}>
              <StarRating rating={averageRating} />
              <p>
                {averageRating.toFixed(1)} / 5 ({product.reviews.length} review
                {product.reviews.length > 1 ? "s" : ""})
              </p>
            </div>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>

        <button
          className={styles.addToCartButton}
          onClick={handleAddToCartClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
