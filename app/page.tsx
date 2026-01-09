import React from 'react';
import InvestmentScenarios from '../components/InvestmentScenarios';
import ImpactChart from '../components/ImpactChart';
import LocationAnalysis from '../components/LocationAnalysis';
import MeetingCTA from '../components/MeetingCTA';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full bg-verde-bosque text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                {/* Abstract background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-verde-bosque/80 mix-blend-overlay opacity-50 transform skew-x-12 translate-x-12"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Sembrando Salud: <br />
                        <span className="text-emerald-200">Hacia un Ancud Bio-Resiliente</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed font-light">
                        Infraestructura terapéutica de alta precisión para la autonomía funcional y soberanía sanitaria.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="bg-madera-calida hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-lg">
                            Gestión de Programas
                        </button>
                        <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors backdrop-blur-sm">
                            Documentación Técnica
                        </button>
                    </div>
                </div>
            </section>

            {/* Strategic Context Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Column 1: Context & Location */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-verde-bosque mb-4 border-b-2 border-madera-calida pb-2 inline-block">
                                Contexto Estratégico
                            </h2>
                            <div className="prose text-gris-piedra/90 space-y-4 text-lg">
                                <p>
                                    El <strong>Programa de Revitalización Biopsicosocial</strong> opera bajo una estricta planificación territorial.
                                    Se ha determinado la exclusión operativa de <em>Pudeto Bajo</em> debido a riesgos hidrológicos de cuenca,
                                    priorizando emplazamientos en <strong>Cotas de Resiliencia</strong> para asegurar la continuidad del servicio ante contingencias climáticas.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-madera-calida">
                                    <h3 className="font-semibold text-verde-bosque mb-2">KPI Objetivo</h3>
                                    <p className="text-3xl font-bold text-gray-800">22% <span className="text-base font-normal text-gray-600">Reducción Gasto Farmacoterapia</span></p>
                                    <p className="text-sm text-gray-500 mt-1">Impacto presupuestario municipal directo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Clinical Pillars */}
                    <div className="bg-slate-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-verde-bosque mb-6">
                            Pilar Clínico & Soberanía
                        </h2>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-3 h-3 mt-2 bg-verde-bosque rounded-full mr-4"></span>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Salud en Movimiento</strong>
                                    <span className="text-gray-600">
                                        Implementación de kinesiología integrativa enfocada en la recuperación de la <strong>Autonomía Funcional</strong> y la prevención de la dependencia severa.
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-3 h-3 mt-2 bg-verde-bosque rounded-full mr-4"></span>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Soberanía Alimentaria</strong>
                                    <span className="text-gray-600">
                                        Red de invernaderos terapéuticos integrados al patrimonio <strong>SIPAM</strong>, fomentando la nutrición local y la reactivación cognitiva.
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-3 h-3 mt-2 bg-madera-calida rounded-full mr-4"></span>
                                <div>
                                    <strong className="block text-gray-900 text-lg">Resiliencia Insular</strong>
                                    <span className="text-gray-600">
                                        Modelo de gestión descentralizado adaptado a la geografía y realidad socio-sanitaria de Chiloé.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Location Analysis */}
                <div className="mt-16">
                    <LocationAnalysis />
                </div>

                {/* Investment Scenarios Selector */}
                <div className="mt-24">
                    <InvestmentScenarios />
                </div>
            </section>

            {/* Economic Impact Analysis (SROI) */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-verde-bosque mb-4">
                            Proyección de Eficiencia
                        </h2>
                        <p className="text-xl text-gris-piedra max-w-3xl mx-auto">
                            Optimización del gasto en canasta de fármacos mediante intervención kinesiológica temprana.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                        <ImpactChart />
                        <p className="text-center text-sm text-gray-500 mt-6 italic">
                            Nota: Proyección basada en la reducción de incidencia de patologías osteomusculares en población 60+.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meeting Call to Action */}
            <MeetingCTA />

            {/* Footer */}
            <footer className="bg-gris-piedra text-white py-12 px-6 text-center">
                <p className="opacity-80 text-sm">
                    © {new Date().getFullYear()} I. Municipalidad de Ancud - Dirección de Salud.
                </p>
                <p className="opacity-60 text-xs mt-2 uppercase tracking-wider">
                    Infraestructura Pública de Calidad
                </p>
            </footer>
        </main>
    );
}
