"use client";
import Header from "@/components/Header/Header";
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Fourth-post.module.scss';
import { Product, extractProducts } from "@/models/Products.model";
import usePageMetadata from "@/app/metadata";

export default function FourthPost() {
    usePageMetadata('Andarduft Intense Repair Hair Mask - Hairandarduft', 'Discover the benefits of the Andarduft Intense Repair Hair Mask. Learn more about its natural ingredients and how it can help you restore severely damaged hair.');
    const [product, setProduct] = useState<Product | null>(null);
    const productId = 6;

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
                    <p className={styles.date}>Published on: October 6, 2024</p>
                    <p className={styles.author}>Author: TaylerFromHairAndarduft</p>
                    <img
                        src="/assets/products/6.webp"
                        alt={product.name}
                        className={styles.productImage}
                    />

                    <p>
                        The <strong>{product.name}</strong> is here to save trolls with seriously damaged hair.
                        This deep conditioning treatment restores even the most battle-worn locks to their former glory.
                        Infused with Andarduft, your hair will feel softer, stronger, and more manageable after every use.
                    </p>

                    <h3 className={styles.sectionTitle}>Benefits:</h3>
                    <ul className={styles.benefitsList}>
                        <li>{product.description}</li>
                        <li>Enriched with natural ingredients like Andarduft, Amla Extract, and Argan Oil.</li>
                        <li>Deep conditioning formula perfect for severely dry and damaged hair.</li>
                        <li>Leaves your hair feeling softer, stronger and anew !</li>
                    </ul>

                    <h3 className={styles.sectionTitle}>Promotion:</h3>
                    <p className={styles.promotion}>
                        Take advantage of our special offer: <strong>{product.promotion?.description || 'No promotion available'}</strong><br />
                        (Use code: <strong>{product.promotion?.code || 'N/A'}</strong>)
                    </p>
                    <p>
                        Want to learn more or purchase this product? Click the button below to view it in detail and add it to your cart!
                    </p>

                    <Link href="/shop/6">
                        <button className={styles.productButton}>View Andarduft Intense Repair Hair Mask</button>
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