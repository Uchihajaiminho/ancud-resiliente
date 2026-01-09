import React from 'react';

export default function LocationAnalysis() {
    return (
        <div className="my-12 w-full max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-verde-bosque mb-6 border-l-4 border-madera-calida pl-4">
                Análisis de Factibilidad Territorial
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Zona A: Pudeto Bajo */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 relative overflow-hidden group hover:bg-gray-100 transition-colors">
                    <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                        Desafío Logístico
                    </div>
                    <h4 className="text-lg font-bold text-gray-700 mb-2 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-500 text-sm font-bold">A</span>
                        Zona A: Pudeto Bajo
                    </h4>
                    <span className="inline-block px-2 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded mb-4 border border-red-100">
                        Área de Complejidad Hidrológica
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Sector con alta saturación de cuenca y riesgo recurrente por marea/precipitación.
                        Inviabilidad técnica para infraestructura permanente de salud.
                    </p>
                </div>

                {/* Zona B: Cota de Resiliencia */}
                <div className="bg-white border-2 border-emerald-500/30 rounded-xl p-6 relative overflow-hidden shadow-sm group hover:border-emerald-500 transition-colors">
                    <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Seguridad de la Inversión
                    </div>
                    <h4 className="text-lg font-bold text-verde-bosque mb-2 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-verde-bosque flex items-center justify-center mr-3 text-white text-sm font-bold">B</span>
                        Zona B: Cota de Resiliencia
                    </h4>
                    <span className="inline-block px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded mb-4 border border-emerald-100">
                        Emplazamiento de Seguridad Estratégica
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Zona en altura con drenaje natural, exposición solar óptima para invernaderos (Certificación SIPAM) y conectividad garantizada en emergencias.
                    </p>
                </div>
            </div>
        </div>
    );
}
