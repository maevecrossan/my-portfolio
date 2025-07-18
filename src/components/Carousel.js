"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../app/styles/Carousel.module.css";

export default function Carousel({
    images,
    itemWidthVW = 70,
    maxWidthPX = 600,
}) {
    const carouselRef = useRef(null);

    const extendedImages = [
        ...images.slice(-2),
        ...images,
        ...images.slice(0, 2),
    ];

    const getItemWidth = () => {
        if (!carouselRef.current) return 0;
        const item = carouselRef.current.querySelector(
            `.${styles.carouselItem}`
        );
        if (!item) return 0;
        return item.offsetWidth + 24; // gap of 24px (space-x-6)
    };

    useEffect(() => {
        if (!carouselRef.current) return;
        const scrollPos = getItemWidth() * 2;
        carouselRef.current.scrollLeft = scrollPos;
    }, [images]);

    const onScroll = () => {
        if (!carouselRef.current) return;
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = getItemWidth();
        const totalItems = images.length;
        if (scrollLeft <= 0) {
            carouselRef.current.scrollLeft = itemWidth * totalItems;
        } else if (scrollLeft >= itemWidth * (totalItems + 2)) {
            carouselRef.current.scrollLeft = itemWidth * 2;
        }
    };

    const scrollBy = (direction = 1) => {
        if (!carouselRef.current) return;
        const itemWidth = getItemWidth();
        carouselRef.current.scrollBy({
            left: itemWidth * direction,
            behavior: "smooth",
        });
    };

    return (
        <div className={styles.container}>
            {/* Left arrow */}
            <button
                onClick={() => scrollBy(-1)}
                aria-label="Scroll Left"
                className={`${styles.arrow} ${styles.leftArrow}`}
                type="button"
            >
                &#9664;
            </button>

            {/* Right arrow */}
            <button
                onClick={() => scrollBy(1)}
                aria-label="Scroll Right"
                className={`${styles.arrow} ${styles.rightArrow}`}
                type="button"
            >
                &#9654;
            </button>

            <div
                ref={carouselRef}
                onScroll={onScroll}
                className={styles.carousel}
            >
                {extendedImages.map(({ src, alt, width, height }, i) => (
                    <div
                        key={i}
                        className={styles.carouselItem}
                        style={{
                            width: `${itemWidthVW}vw`,
                            maxWidth: `${maxWidthPX}px`,
                            aspectRatio: `${width} / ${height}`,
                        }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            style={{
                                objectFit: "cover",
                                borderRadius: "0.5rem",
                            }}
                            sizes={`(max-width: 640px) 90vw, ${maxWidthPX}px`}
                            priority={i === 2}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
