"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ScenarioKey = 'mvp' | 'intermedio' | 'full';

interface ScenarioData {
    title: string;
    label: string;
    description: string;
    impact: string;
    euphemism: string;
}

const scenarios: Record<ScenarioKey, ScenarioData> = {
    mvp: {
        title: 'Opción 1: Activación Territorial',
        label: 'Activación Territorial (MVP)',
        description: 'Intervención ágil en sedes comunitarias existentes. Enfoque en kinesiología preventiva y talleres de salud mental.',
        impact: 'Cobertura inmediata de barrios priorizados.',
        euphemism: 'Optimización de la Infraestructura Existente'
    },
    intermedio: {
        title: 'Opción 2: Consolidación de Autonomía',
        label: 'Consolidación de Autonomía (Intermedio)',
        description: 'Construcción de invernaderos terapéuticos bajo norma técnica. Implementación de red de soberanía alimentaria y ahorro directo en farmacia municipal.',
        impact: 'Reducción de la dependencia farmacológica en adultos mayores.',
        euphemism: 'Fortalecimiento de la Resiliencia Sanitaria'
    },
    full: {
        title: 'Opción 3: Hito Regional Ancud 2030',
        label: 'Hito Regional Ancud 2030 (Full)',
        description: 'Centro integral de rehabilitación biopsicosocial con tecnología de telemetría y monitoreo kinesiologico avanzado. Modelo de referencia para la provincia.',
        impact: 'Posicionamiento de Ancud como líder en innovación en salud pública.',
        euphemism: 'Vanguardia en Gestión de Salud Insular'
    }
};

export default function InvestmentScenarios() {
    const [selected, setSelected] = useState<ScenarioKey>('mvp');

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <h3 className="text-2xl font-bold text-verde-bosque text-center mb-8">
                Selector de Escenarios de Inversión
            </h3>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => setSelected(key)}
                        className={`
              px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
              ${selected === key
                                ? 'bg-verde-bosque text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-verde-bosque'
                                : 'bg-white text-gris-piedra border border-gray-200 hover:bg-gray-50'
                            }
            `}
                    >
                        {scenarios[key].label}
                    </button>
                ))}
            </div>

            {/* Content Card with Framer Motion */}
            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                    >
                        <div className="bg-verde-bosque/5 p-6 border-b border-verde-bosque/10">
                            <span className="inline-block px-3 py-1 bg-madera-calida text-white text-xs font-bold uppercase tracking-wider rounded-md mb-2">
                                {scenarios[selected].euphemism}
                            </span>
                            <h4 className="text-2xl font-bold text-verde-bosque">
                                {scenarios[selected].title}
                            </h4>
                        </div>

                        <div className="p-8 space-y-6">
                            <div>
                                <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Descripción Técnica
                                </h5>
                                <p className="text-lg text-gris-piedra leading-relaxed">
                                    {scenarios[selected].description}
                                </p>
                            </div>

                            <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                                <div className="mr-4 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-blue-900 mb-1">Impacto Proyectado</h5>
                                    <p className="text-blue-800">
                                        {scenarios[selected].impact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
