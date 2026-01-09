import React from 'react';

export default function MeetingCTA() {
    return (
        <div className="w-full bg-verde-bosque py-16 px-6 text-center border-t-4 border-madera-calida">
            <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-emerald-50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                    Esta propuesta técnica está diseñada para una implementación inmediata, alineada con los estándares de inversión pública y los plazos del Gobierno Regional.
                </p>

                <button className="bg-madera-calida hover:bg-amber-800 text-white text-lg md:text-xl font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20">
                    Iniciar Fase de Factibilidad Técnica FNDR 2025
                </button>

                <div className="pt-4 flex justify-center items-center space-x-6 opacity-60">
                    <span className="text-white/80 text-xs tracking-widest uppercase">
                        Gestión Municipal
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="text-white/80 text-xs tracking-widest uppercase">
                        Rentabilidad Social Aprobada
                    </span>
                </div>
            </div>
        </div>
    );
}
