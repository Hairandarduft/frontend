"use client";
import Header from "@/components/Header/Header";
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Second-post.module.scss';
import { Product, extractProducts } from "@/models/Products.model";
import usePageMetadata from "@/app/metadata";

export default function SecondPost() {
    usePageMetadata('Andarduft Color Protection Shampoo - Hairandarduft', 'Discover the benefits of the Andarduft Color Protection Shampoo. Learn more about its natural ingredients and how it can help you maintain vibrant, colorful hair.');
    const [product, setProduct] = useState<Product | null>(null);
    const productId = 14;
    
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
                    <p className={styles.author}>Author: BobFromHairAndarduft</p>
                    <img
                        src="/assets/products/14.webp"
                        alt={product.name}
                        className={styles.productImage}
                    />

                    <p>
                        The <strong>{product.name}</strong> is a must-have for trolls who love vibrant, colorful hair. 
                        It gently cleanses while protecting your color from fading, keeping your hair bright and beautiful.
                        Infused with the powerful Andarduft plant, this shampoo helps preserve your trollish personality by keeping your color as fierce as ever.
                    </p>

                    <h3 className={styles.sectionTitle}>Benefits:</h3>
                    <ul className={styles.benefitsList}>
                        <li>{product.description}</li>
                        <li>Enriched with natural ingredients like Andarduft, Pumpkin Seed Oil, and Ginseng Extract.</li>
                        <li>Specially formulated for color-treated hair.</li>
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

                    <Link href="/shop/14">
                        <button className={styles.productButton}>View Andarduft Color Protection Shampoo</button>
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