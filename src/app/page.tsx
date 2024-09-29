"use client";
import { Main } from "next/document";
import css from "./HomeScreen.module.scss";
import { MainLayout } from "@/layouts";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/Product/Product";
import { Product, extractProducts } from "@/models/Products.model";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "assets/icons/delivery.svg",
    title: "Free home delivery",
    description: "For all orders over $10",
  },
  {
    icon: "assets/icons/world.svg",
    title: "N° 1 Andarduft shampoo",
    description: "The best trolls shampoo in the world",
  },
  {
    icon: "assets/icons/quality.svg",
    title: "Quality",
    description: "All our products are homemade with love",
  },
  {
    icon: "assets/icons/customers-service.svg",
    title: "Customer service",
    description: "24/7 customer service",
  },
];

const promotions = [
  {
    description: "Get 20% on best sellers | code : NEW20",
  },
  {
    description: "-45% on a large selection of products",
  },
];

const shopTypes = [
  {
    title: "Greasy hair",
    gamme_id: 1,
  },
  {
    title: "Dry hair",
    gamme_id: 2,
  },
  {
    title: "Normal hair",
    gamme_id: 3,
  },
  {
    title: "Curly hair",
    gamme_id: 4,
  },
  {
    title: "Straight hair",
    gamme_id: 5,
  },
  {
    title: "Colored hair",
    gamme_id: 6,
  },
  {
    title: "Thinning hair",
    gamme_id: 7,
  },
  {
    title: "Damaged hair",
    gamme_id: 8,
  },
];

export function HomeScreen() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/fakeDatas/products.fakeDatas.json");
      const data = await response.json();
      const products = extractProducts(data);
      setAllProducts(products);
    };

    fetchProducts();
  }, []);

  const recommandedProducts = allProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <MainLayout
      children={
        <div className={css.container}>
          <div className={css.features}>
            {features.map((feature, index) => (
              <div key={index} className={css.feature}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className={css.featureIcon}
                />
                <div>
                  <h2 className={css.featureTitle} style={{ fontSize: "28px" }}>
                    {feature.title}
                  </h2>
                  <p
                    className={css.featureDescription}
                    style={{ fontSize: "18px" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {promotions.length > 0 && (
            <div className={css.promotions}>
              {promotions.map((promotion, index) => (
                <div key={index}>
                  <p
                    className={css.promotionDescription}
                    style={{ fontSize: "20px" }}
                  >
                    {promotion.description.toLocaleUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className={css.bannerIllustration}>
            <img
              src="assets/images/banner.jpg"
              alt="Banner"
              className={css.illustration}
            />
            <div className={css.bannerText}>
              <h2 style={{ fontSize: "40px" }}>
                Trolls Deserve Great Hair Too
              </h2>
              <p style={{ fontSize: "20px" }}>
                Discover our range of products made with Andarduft
              </p>
              <p className={css.bannerPromotionDescription}>
                -45% ON A LARGE SELECTION OF PRODUCTS
              </p>
              <button
                className={css.bannerButton}
                onClick={() => router.push("/shop")}
              >
                Shop now
              </button>
            </div>
          </div>
          <div className={css.gridContainer}>
            <div className={css.shopTypes}>
              {shopTypes.map((shopType, index) => (
                <div key={index} className={css.shopTypeButton}>
                  <button
                    onClick={() => router.push(`/gamme/${shopType.gamme_id}`)}
                  >
                    {shopType.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={css.recommandedProducts}>
            <h2 className={css.recommandedTitle}>
              Our recommanded products for you
            </h2>
            <div className={css.products}>
              {recommandedProducts.map((product, index) => (
                <div key={index} className={css.productItem}>
                  <ProductCard key={index} product={product as Product} />
                </div>
              ))}
            </div>
            <div className={css.seeMoreButton}>
              <button onClick={() => router.push("/shop")}>See more</button>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default HomeScreen;
