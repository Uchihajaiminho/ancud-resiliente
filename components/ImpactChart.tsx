"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    {
        name: 'Gasto Actual',
        monto: 120,
        color: '#9ca3af', // Gray
        label: 'Sin Programa'
    },
    {
        name: 'Gasto Proyectado',
        monto: 93.6,
        color: '#1e3a1f', // Verde Bosque
        label: 'Con Sembrando Salud'
    }
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-lg">
                <p className="font-bold text-verde-bosque">{label}</p>
                <p className="text-gray-600">
                    ${payload[0].value} Millones
                </p>
            </div>
        );
    }
    return null;
};

export default function ImpactChart() {
    return (
        <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: '#4b5563', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#4b5563', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        unit="M"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="monto" radius={[8, 8, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
