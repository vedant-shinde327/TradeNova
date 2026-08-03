import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, TrendingUp } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import MarketCard from "./MarketCard";
import CandlestickChart from "./CandlestickChart";
import "./Login.css";

const MARKET_DATA = [
  { symbol: "NIFTY 50", change: "+1.82%", up: true },
  { symbol: "SENSEX", change: "+0.91%", up: true },
  { symbol: "BTC/USD", change: "+2.45%", up: true },
  { symbol: "GOLD", change: "-0.43%", up: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Login() {
  /* ── original state ── */
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  /* ── ui-only state ── */
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  /* ── original handlers (unchanged) ── */
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        { withCredentials: true },
      );
      if (data.success) {
        window.location.href = "http://localhost:5174";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
    setLoading(false);
  };

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email Address",
      icon: Mail,
      value: email,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      icon: Lock,
      value: password,
    },
  ];

  return (
    <div className="ln-root">
      {/* ambient blobs */}
      <motion.div
        className="ln-blob ln-blob--1"
        animate={{ scale: [1, 1.14, 1], opacity: [0.33, 0.52, 0.33] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ln-blob ln-blob--2"
        animate={{ scale: [1, 1.09, 1], opacity: [0.18, 0.38, 0.18] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="ln-layout">
        {/* ══════════════ LEFT BRAND ══════════════ */}
        <motion.aside
          className="ln-brand"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ln-logo">
            <TrendingUp size={22} strokeWidth={2.5} />
            <span>TradeNova</span>
          </div>

          <motion.div
            className="ln-headline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h1>
              Trade <span className="ln-accent">Smarter.</span>
              <br />
              Invest <span className="ln-accent">Faster.</span>
            </h1>
            <p className="ln-subline">
              Real-time markets, intelligent insights, and a portfolio built for
              the next generation of investors — all in one platform.
            </p>
          </motion.div>

          <motion.div
            className="ln-chart-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <CandlestickChart />
          </motion.div>

          <motion.div
            className="ln-ticker"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {MARKET_DATA.map((m, i) => (
              <MarketCard key={m.symbol} data={m} delay={i * 0.12} />
            ))}
          </motion.div>
        </motion.aside>

        {/* ══════════════ RIGHT PANEL ══════════════ */}
        <motion.main
          className="ln-panel"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ln-card">
            {/* card header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <div className="ln-card-logo">
                <TrendingUp size={18} strokeWidth={2.5} />
              </div>
              <h2 className="ln-card-title">Welcome Back</h2>
              <p className="ln-card-sub">
                Continue your trading journey with TradeNova.
              </p>
            </motion.div>

            {/* form */}
            <form onSubmit={handleSubmit} className="ln-form" noValidate>
              {fields.map(({ name, type, label, icon: Icon, value }, i) => {
                const isPass = type === "password";
                const inputType = isPass
                  ? showPassword
                    ? "text"
                    : "password"
                  : type;
                const isFocused = focusedField === name;
                const hasValue = value.length > 0;

                return (
                  <motion.div
                    key={name}
                    className={`ln-field ${isFocused ? "ln-field--focused" : ""} ${hasValue ? "ln-field--has-value" : ""}`}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i + 1}
                  >
                    <Icon
                      className="ln-field-icon"
                      size={16}
                      strokeWidth={1.8}
                    />
                    <label className="ln-label" htmlFor={name}>
                      {label}
                    </label>
                    <input
                      id={name}
                      className="ln-input"
                      type={inputType}
                      name={name}
                      value={value}
                      onChange={handleOnChange}
                      onFocus={() => setFocusedField(name)}
                      onBlur={() => setFocusedField(null)}
                      required
                      autoComplete={isPass ? "current-password" : "email"}
                    />
                    {isPass && (
                      <button
                        type="button"
                        className="ln-eye"
                        onClick={() => setShowPassword((v) => !v)}
                        tabIndex={-1}
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff size={15} />
                        ) : (
                          <Eye size={15} />
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}

              {/* remember + forgot */}
              <motion.div
                className="ln-meta"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <label className="ln-remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((v) => !v)}
                    className="ln-checkbox"
                  />
                  <span className="ln-check-box" />
                  <span className="ln-check-label">Remember me</span>
                </label>
                <button type="button" className="ln-forgot">
                  Forgot password?
                </button>
              </motion.div>

              {/* submit */}
              <motion.button
                type="submit"
                className="ln-btn-primary"
                disabled={loading}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                whileHover={{ scale: loading ? 1 : 1.015, y: loading ? 0 : -1 }}
                whileTap={{ scale: loading ? 1 : 0.985 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {loading ? (
                  <span className="ln-btn-inner">
                    <span className="ln-spinner" />
                    Signing in…
                  </span>
                ) : (
                  "Continue"
                )}
              </motion.button>
            </form>

            {/* divider */}
            <motion.div
              className="ln-divider"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <span />
              <p>or</p>
              <span />
            </motion.div>

            {/* google */}
            <motion.button
              type="button"
              className="ln-btn-google"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              whileHover={{ scale: 1.012 }}
              whileTap={{ scale: 0.988 }}
            >
              <FcGoogle size={18} />
              Continue with Google
            </motion.button>

            {/* switch */}
            <motion.p
              className="ln-switch"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
            >
              Don't have an account?{" "}
              <Link to="/signup" className="ln-link">
                Sign Up
              </Link>
            </motion.p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}

export default Login;
