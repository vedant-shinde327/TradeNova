import { motion } from "framer-motion";
import "./MarketCard.css";

function MarketCard({ data, delay = 0 }) {
  const { symbol, change, up } = data;

  return (
    <motion.div
      className={`mc-card ${up ? "mc-card--up" : "mc-card--down"}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4 + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 3.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="mc-inner"
      >
        <span className="mc-symbol">{symbol}</span>
        <span className="mc-change">{change}</span>
        <span className="mc-dot" />
      </motion.div>
    </motion.div>
  );
}

export default MarketCard;
