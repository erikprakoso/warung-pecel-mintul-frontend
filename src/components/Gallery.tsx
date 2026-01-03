import React from 'react';

const images = [
    "https://images.unsplash.com/photo-1594970425008-543328ee8d8d?q=80&w=2670&auto=format&fit=crop", // Sate
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2670&auto=format&fit=crop", // Pecel dark
    "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2670&auto=format&fit=crop", // Smoothies/Drinks
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop", // Healthy food
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop", // Food smoke
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2670&auto=format&fit=crop", // Delicious details
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
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="break-inside-avoid relative group rounded-xl overflow-hidden mb-4"
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx}`}
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
