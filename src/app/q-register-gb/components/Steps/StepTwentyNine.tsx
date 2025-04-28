"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import Image from "next/image";
import StepLayout from "../Layout/StepLayout";
import { stepStyles } from "./styles";

interface DataPoint {
  month: string;
  value: number;
}

const withoutPlanData: DataPoint[] = [
  { month: "Hoje", value: 40 },
  { month: "1 mês", value: 55 },
  { month: "2 meses", value: 70 },
  { month: "3 meses", value: 85 },
  { month: "4 meses", value: 100 },
];

const withPlanData: DataPoint[] = [
  { month: "Hoje", value: 40 },
  { month: "1 mês", value: 30 },
  { month: "2 meses", value: 20 },
  { month: "3 meses", value: 15 },
  { month: "4 meses", value: 10 },
];

export default function StepTwentyNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <StepLayout
      title="Seu Protocolo Exclusivo para Rejuvenescimento foi criado!"
      subtitle="Baseado em suas respostas, seu plano personalizado será revelado agora."
      onBack={() => setCurrentStep(28)}
      onNext={() => setCurrentStep(30)}
    >
      <div className="space-y-6 px-4">
        {/* Comparison Graphs */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Without Plan Graph */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">Sem o Protocolo</h3>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={withoutPlanData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month"
                      stroke="#9CA3AF"
                      tick={{ fontSize: 10 }}
                      tickMargin={5}
                    />
                    <YAxis hide={true} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={{ stroke: '#EF4444', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-xs font-medium text-red-600 mt-2">
                  Sinais de Envelhecimento ↗
                </p>
              </div>
            </div>
          </div>

          {/* With Plan Graph */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900 text-sm">Com o Protocolo</h3>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={withPlanData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month"
                      stroke="#9CA3AF"
                      tick={{ fontSize: 10 }}
                      tickMargin={5}
                    />
                    <YAxis hide={true} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ stroke: '#10B981', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-xs font-medium text-green-600 mt-2">
                  Rejuvenescimento ↘
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
} 