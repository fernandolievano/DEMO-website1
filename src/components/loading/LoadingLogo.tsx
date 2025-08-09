'use client';

import React from 'react';

interface Props {
  backgroundColor?: string;
  accentColor?: string;     // color de “encendido” por capa
  baseColor?: string;       // color base de las capas (cuando están “apagadas”, suele ser transparent)
  width?: number | string;  // px o '100%'
  height?: number | string; // px o 'auto'
  duration?: number;        // duración total del ciclo en segundos
}

const LAYERS = 7; // añadí dos más para mejorar un poco la experiencia de la animación

const LoadingLogo: React.FC<Props> = ({
  backgroundColor = 'transparent',
  accentColor = '#ce9848',
  baseColor = 'transparent',
  width = 360,
  height = 'auto',
  duration = 3.5,
}) => {
  // Cada capa recibe un delay proporcional para el “stagger”
  const delays = Array.from({ length: LAYERS }, (_, i) => (duration / LAYERS) * i);

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen pt-[150px] backdrop-blur-md bg-opacity-5 transition-all"
      style={{ backgroundColor }}
    >
      <div style={{ width, height }}>
        <svg
          viewBox="0 0 200 120"
          role="img"
          aria-labelledby="loading-title"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="loading-title">Loading Screen</title>

          {/* Estilos embebidos en el propio SVG para portabilidad */}
          <style>
            {`
            /* Variables */
            :root {
              --accent: ${accentColor};
              --base: ${baseColor};
              --cycle: ${duration}s;
            }

            .layer {
              fill: var(--base);
              animation: sweep var(--cycle) linear infinite;
            }

            /* Truco de “ventana” temporal: cada capa se enciende durante un bloque del ciclo
               y el resto del tiempo queda en baseColor (p. ej. transparent). */
            @keyframes sweep {
              0%   { fill: var(--base); }
              10%  { fill: var(--accent); }
              20%  { fill: var(--base); }
              100% { fill: var(--base); }
            }

            /* Sol y cielo suaves para dar contexto visual, sin robar protagonismo */
            .sky { fill: rgba(255,255,255,0.04); }
            .sun { fill: rgba(255, 210, 120, 0.35); }

            /* Respeta reduce motion */
            @media (prefers-reduced-motion: reduce) {
              .layer { animation: none; fill: var(--accent); }
            }
          `}
          </style>

          {/* Cielo y sol */}
          <rect className="sky" x="0" y="0" width="200" height="120" rx="8" />
          <circle className="sun" cx="162" cy="22" r="14" />

          {/* Sombra/terreno base (no animada) */}
          <path
            d="M0,96 L28,84 46,92 68,78 86,86 104,72 126,88 148,74 172,86 200,78 200,120 0,120 Z"
            fill="#b37e30"
          />

          {/* Capas de montañas (geom. original simple). Cada una tiene su delay propio. */}
          {/* Capa 1 (lejana, suave) */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[0]}s` }}
            d="M0,82 L22,74 34,79 52,68 68,74 86,64 104,70 120,64 138,72 156,66 180,72 200,66 200,120 0,120 Z"
          />

          {/* Capa 2 */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[1]}s` }}
            d="M0,88 L18,80 32,84 48,76 66,82 84,70 102,78 120,72 138,80 156,74 178,82 200,76 200,120 0,120 Z"
          />

          {/* Capa 3 (picos más marcados) */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[2]}s` }}
            d="M0,92 L14,86 26,90 42,82 58,88 74,78 92,86 110,80 128,88 146,82 166,90 200,84 200,120 0,120 Z"
          />

          {/* Capa 4 */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[3]}s` }}
            d="M0,96 L12,92 24,94 38,90 54,94 70,88 86,92 104,86 122,92 142,88 164,94 200,90 200,120 0,120 Z"
          />

          {/* Capa 5 (delantera) */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[4]}s` }}
            d="M0,100 L16,96 30,98 46,94 62,98 80,94 98,98 116,94 136,98 158,96 180,100 200,96 200,120 0,120 Z"
          />

          {/* Capa 6 (más frontal) */}
          <path
            className="layer"
            style={{ animationDelay: `${delays[5]}s` }}
            d="M0,104 L20,102 36,104 54,102 72,104 92,102 112,104 136,102 160,104 180,104 200,102 200,120 0,120 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingLogo;
