import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#22c55e', '#ffffff', '#facc15'] // Green, White, Yellow
        });
    };

    return (
        <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
            {/* Background - Darkened for text readability */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2670&auto=format&fit=crop"
                    alt="Pecel Pincuk Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for "Racing Red" vibe */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-sm mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold tracking-wide uppercase">Buka Setiap Hari</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                        Kelezatan Otentik <span className="text-primary italic">Pecel Khas Madiun</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl drop-shadow-md">
                        Warisan rasa di setiap suapan. Menyajikan Pecel segar, Lontong Sayur, dan aneka sate legendaris dengan bumbu kacang rahasia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300"
                            onClick={() => {
                                triggerConfetti();
                                const menuSection = document.getElementById('menu');
                                if (menuSection) {
                                    menuSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Lihat Menu Sekarang
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-6 rounded-full border-2 border-white/20 bg-transparent hover:bg-white/10 hover:text-primary text-white backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                            onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Warung%20Pecel%20Mintul,%20saya%20ingin%20pesan...', '_blank')}
                        >
                            Pesan via WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Visual/Floating Element (Optional but distinct) */}
                <div className="hidden md:block flex-1 relative">
                    {/* Could be a floating plate image if we had a transparent png,
                    for now we focus on the text and full bg */}
                </div>
            </div>
        </section>
    );
}
