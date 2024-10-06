"use client";
import Header from "@/components/Header/Header";
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Third-post.module.scss';
import { Product, extractProducts } from "@/models/Products.model";

export default function ThirdPost() {
    const [product, setProduct] = useState<Product | null>(null);
    const productId = 7;

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("/fakeDatas/products.fakeDatas.json");
            const data = await response.json();
            const products = extractProducts(data);
            const foundProduct = products.find((p: Product) => p.id === productId);
            setProduct(foundProduct || null);
        };

        fetchProduct();
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    const reviews = product.reviews || [];

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>{product.name}</h2>
                    <p className={styles.date}>Published on: October 5, 2024</p>
                    <p className={styles.author}>Author: HaileyFromHairAndarduft</p>
                    <img
                        src="/assets/products/7.webp"
                        alt={product.name}
                        className={styles.productImage}
                    />

                    <p>
                        The <strong>{product.name}</strong> is perfect for trolls who want fresh, clean hair every day!
                        Gentle yet effective, it cleanses without stripping away the natural oils your troll hair needs.
                        Infused with Andarduft, this shampoo keeps your mane soft and manageable while maintaining that wild, trollish charm.
                    </p>

                    <h3 className={styles.sectionTitle}>Benefits:</h3>
                    <ul className={styles.benefitsList}>
                        <li>{product.description}</li>
                        <li>Enriched with natural ingredients like Andarduft, Olive Oil, and Clary Sage.</li>
                        <li>Gentle formula perfect for everyday use.</li>
                        <li>Leaves your hair feeling fresh, soft, and revitalized.</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Promotion:</h3>
                    <p className={styles.promotion}>
                        Take advantage of our special offer: <strong>{product.promotion?.description || 'No promotion available'}</strong><br />
                        (Use code: <strong>{product.promotion?.code || 'N/A'}</strong>)
                    </p>
                    <p>
                        Want to learn more or purchase this product? Click the button below to view it in detail and add it to your cart!
                    </p>

                    <Link href="/shop/7">
                        <button className={styles.productButton}>View Andarduft Everyday Shampoo</button>
                    </Link>
                </div>

                <div className={styles.reviewsSection}>
                    <h3>Customer Reviews:</h3>
                    {reviews.length > 0 ? (
                        <ul className={styles.reviewsList}>
                            {reviews.map((review) => (
                                <li key={review.id} className={styles.review}>
                                    <p>
                                        <strong>{review.username}</strong> - {new Date(review.date).toLocaleDateString()}
                                    </p>
                                    <p>Rating: <u></u>{review.rating}/5</p>
                                    <p><i>"{review.comment}"</i></p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews yet. Be the first to write one!</p>
                    )}
                </div>
                <Link href="/blog">
                    <span className={styles.backLink}>Back to Blog</span>
                </Link>
            </div>
        </>
    );
}