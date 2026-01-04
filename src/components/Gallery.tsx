import React from 'react';

const galleryItems = [
    { src: "/images/sate-usus-pecel-mintul.webp", alt: "Sate Usus Pecel Mintul yang lezat" },
    { src: "/images/nasi-pecel-madiun-pincuk.webp", alt: "Nasi Pecel Pincuk Khas Madiun yang lezat" },
    { src: "/images/nasi-lodeh-khas-madiun.webp", alt: "Nasi Lodeh Khas Madiun yang lezat" },
    { src: "/images/mie-wut-gurih-nampol.webp", alt: "Mie Wut Gurih Nampol yang lezat" },
    { src: "/images/pentol-jadul-spesial.webp", alt: "Pentol Jadul Spesial dengan isian" },
    { src: "/images/sate-keong-pecel-mintul.webp", alt: "Sate Keong Pecel Mintul yang lezat" },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Galeri Kami</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Intip <span className="italic text-primary">Kelezatan</span></h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold tracking-wider border border-white px-4 py-2 rounded-full backdrop-blur-sm">
                                    @WarungPecelMintul
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
