import { motion } from "framer-motion";
import "./CandlestickChart.css";

const candles = [
  { x: 24, open: 130, close: 110, high: 105, low: 140, up: false },
  { x: 52, open: 115, close: 95, high: 88, low: 120, up: true },
  { x: 80, open: 100, close: 118, high: 93, low: 124, up: true },
  { x: 108, open: 114, close: 102, high: 96, low: 120, up: false },
  { x: 136, open: 106, close: 88, high: 82, low: 112, up: true },
  { x: 164, open: 92, close: 108, high: 80, low: 115, up: true },
  { x: 192, open: 104, close: 94, high: 88, low: 110, up: false },
  { x: 220, open: 98, close: 82, high: 75, low: 104, up: true },
  { x: 248, open: 86, close: 70, high: 64, low: 92, up: false },
  { x: 276, open: 74, close: 60, high: 54, low: 80, up: true },
  { x: 304, open: 64, close: 50, high: 44, low: 70, up: true },
  { x: 332, open: 54, close: 68, high: 40, low: 74, up: true },
  { x: 360, open: 64, close: 48, high: 42, low: 70, up: false },
  { x: 388, open: 52, close: 36, high: 30, low: 58, up: true },
  { x: 416, open: 40, close: 28, high: 22, low: 46, up: true },
  { x: 444, open: 30, close: 44, high: 18, low: 50, up: true },
  { x: 472, open: 40, close: 24, high: 18, low: 46, up: false },
  { x: 500, open: 28, close: 14, high: 8, low: 34, up: true },
  { x: 528, open: 18, close: 30, high: 6, low: 36, up: true },
];

const linePoints = candles
  .map((c) => `${c.x},${c.up ? c.close : c.open}`)
  .join(" ");

export default function CandlestickChart() {
  return (
    <div className="cc-root">
      {/* Grid lines */}
      <svg className="cc-svg" viewBox="0 0 560 180" preserveAspectRatio="none">
        {/* Horizontal grid */}
        {[40, 80, 120].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="560"
            y2={y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}

        {/* Area fill under line */}
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#387ed1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#387ed1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#387ed1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#387ed1" />
          </linearGradient>
        </defs>

        <motion.polyline
          points={`12,${candles[0].up ? candles[0].close : candles[0].open} ${linePoints} 548,${candles[candles.length - 1].up ? candles[candles.length - 1].close : candles[candles.length - 1].open}`}
          fill="url(#areaGrad)"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />

        <motion.polyline
          points={linePoints}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
        />

        {/* Candles */}
        {candles.map((c, i) => {
          const top = Math.min(c.open, c.close);
          const height = Math.abs(c.close - c.open) || 2;
          const color = c.up ? "#00c853" : "#f87171";

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.1 + i * 0.04,
                ease: "easeOut",
              }}
              style={{ transformOrigin: `${c.x}px ${top + height / 2}px` }}
            >
              {/* Wick */}
              <line
                x1={c.x}
                y1={c.high}
                x2={c.x}
                y2={c.low}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              {/* Body */}
              <rect
                x={c.x - 8}
                y={top}
                width="16"
                height={height}
                fill={color}
                fillOpacity={c.up ? 0.85 : 0.7}
                rx="1.5"
              />
            </motion.g>
          );
        })}

        {/* Glowing last candle dot */}
        <motion.circle
          cx={candles[candles.length - 1].x}
          cy={candles[candles.length - 1].close}
          r="4"
          fill="#387ed1"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Y-axis labels */}
      <div className="cc-labels">
        <span>23,540</span>
        <span>23,420</span>
        <span>23,280</span>
      </div>
    </div>
  );
}
