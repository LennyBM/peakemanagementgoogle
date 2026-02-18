
import React from 'react';

const ClientLogos = () => {
    const logos = [
        { name: "Precision Decking Ltd", src: "https://ui-avatars.com/api/?name=Precision+Decking&color=fff&background=F39A31&bold=true" },
        { name: "Whalesborough", src: "/assets/whalesborough.webp" },
        { name: "Atlantic Bays", src: "/assets/atlantic-bays.webp" },
        { name: "Whitsand Bay Fort", src: "/assets/whitsand-bay-fort.webp" },
        { name: "Ladera Retreats", src: "/assets/ladera-retreats.webp" },
        { name: "Pods Broadway", src: "/assets/pods-broadway.webp" },
        { name: "Bude Barkery", src: "/assets/bude-barkery.webp" },
        { name: "Stanford Park", src: "/assets/stanford-park.webp" },
        { name: "Abbotts Salford", src: "/assets/abbotts-salford.webp" },
        { name: "The Weir", src: "/assets/the-weir.webp" },
        { name: "Broadway Country House", src: "/assets/broadway-country-house.webp" },
        { name: "Bude Skin Clinic", src: "/assets/bude-skin-clinic.webp" },
        { name: "Nanny Wendys Fudge", src: "/assets/nanny-wendys-fudge.webp" },
        { name: "Park Pro", src: "/assets/park-pro.webp" },
        { name: "W Club", src: "/assets/w-club.webp" },
        { name: "Aber Bay", src: "/assets/aber-bay.webp" },
        { name: "Bredon View", src: "/assets/bredon-view.webp" },
        { name: "Overstone Lakes", src: "/assets/overstone-lakes.webp" }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden border-b border-[#E5E5E5] relative">
            <div className="container mx-auto px-8 max-w-[1440px] mb-12 text-center">
                <span className="text-[10px] font-[800] uppercase tracking-[0.4em] text-[#1E5F74]">Trusted Partners</span>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-24 animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={i} className="inline-flex items-center justify-center w-40 h-24 transition-all duration-500 hover:scale-110 flex-shrink-0">
                            <img src={logo.src} alt={`${logo.name} - Peake Management client`} className="max-w-full max-h-full object-contain mix-blend-multiply" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
