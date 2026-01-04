import React from 'react';

const galleryItems = [
    { src: "/images/suasana-warung-pecel-mintul.webp", alt: "Suasana Warung Pecel Mintul yang nyaman" },
    { src: "/images/pelanggan-makan-sego-pecel.jpeg", alt: "Pelanggan menikmati Sego Pecel" },
    { src: "/images/sego-pecel-pincuk-khas-madiun.webp", alt: "Sajian Pecel Pincuk Khas Madiun" },
    { src: "/images/gorengan-sate-pelengkap-pecel.jpg", alt: "Aneka Gorengan dan Sate Pelengkap" },
    { src: "/images/proses-racik-sego-pecel.jpg", alt: "Proses peracikan Sego Pecel" },
    { src: "/images/warung-pecel-mintul-ramai.jpg", alt: "Warung Pecel Mintul ramai pengunjung" },
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
