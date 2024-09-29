"use client";
import css from "./Shop.module.scss";
import { MainLayout } from "@/layouts";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/Product/Product";
import { Product, extractProducts } from "@/models/Products.model";
import { useEffect, useState } from "react";

export function Shop() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/fakeDatas/products.fakeDatas.json");
      const data = await response.json();
      const products = extractProducts(data);
      setAllProducts(products);
      setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, allProducts]);

  return (
    <MainLayout
      children={
        <div className={css.container}>
          <div className={css.banner}>
            <div className={css.titleContainer}>
              <h1 className={css.title}>All Products</h1>
              <p className={css.subtitle}>
                Discover our full range of products
              </p>
            </div>
            <img src="/assets/images/all-products.webp" alt="All products" />
          </div>
          <div className={css.allProducts}>
            <input
              type="text"
              className={css.searchBar}
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className={css.products}>
              {filteredProducts.map((product, index) => (
                <div key={index} className={css.productItem}>
                  <ProductCard key={index} product={product as Product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Shop;
