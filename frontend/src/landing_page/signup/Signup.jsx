import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion} from "framer-motion";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  AtSign,
  Lock,
  TrendingUp,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import MarketCard from "./MarketCard";
import CandlestickChart from "./Candlestickchart";
import "./Auth.css";

const MARKET_DATA = [
  { symbol: "NIFTY 50", change: "+1.82%", up: true },
  { symbol: "SENSEX", change: "+0.91%", up: true },
  { symbol: "BTC/USD", change: "+2.45%", up: true },
  { symbol: "GOLD", change: "-0.43%", up: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3002/signup", formData, {
        withCredentials: true,
      });
      alert(res.data.message);
      if (res.data.success) navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
    setLoading(false);
  };

  const fields = [
    { name: "fullName", type: "text", label: "Full Name", icon: User },
    { name: "email", type: "email", label: "Email Address", icon: Mail },
    { name: "username", type: "text", label: "Username", icon: AtSign },
    { name: "password", type: "password", label: "Password", icon: Lock },
  ];

  return (
    <div className="sn-root">
      {/* ─── Ambient blobs ─── */}
      <motion.div
        className="sn-blob sn-blob--1"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="sn-blob sn-blob--2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="sn-layout">
        {/* ══════════════ LEFT BRANDING ══════════════ */}
        <motion.aside
          className="sn-brand"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <div className="sn-logo">
            <TrendingUp size={22} strokeWidth={2.5} />
            <span>TradeNova</span>
          </div>

          {/* Headline */}
          <motion.div
            className="sn-headline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h1>
              Trade <span className="sn-accent">Smarter.</span>
              <br />
              Invest <span className="sn-accent">Faster.</span>
            </h1>
            <p className="sn-subline">
              Real-time markets, intelligent insights, and a portfolio built for
              the next generation of investors — all in one platform.
            </p>
          </motion.div>

          {/* Chart */}
          <motion.div
            className="sn-chart-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <CandlestickChart />
          </motion.div>

          {/* Market ticker cards */}
          <motion.div
            className="sn-ticker"
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

        {/* ══════════════ RIGHT CARD ══════════════ */}
        <motion.main
          className="sn-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sn-card">
            {/* Card header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <div className="sn-card-logo">
                <TrendingUp size={18} strokeWidth={2.5} />
              </div>
              <h2 className="sn-card-title">Create Your Trading Account</h2>
              <p className="sn-card-sub">Start investing with confidence.</p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSignup} className="sn-form" noValidate>
              {fields.map(({ name, type, label, icon: Icon }, i) => {
                const isPasswordField = type === "password";
                const isVisible =
                  name === "password" ? showPassword : showConfirm;
                const inputType = isPasswordField
                  ? isVisible
                    ? "text"
                    : "password"
                  : type;
                const isFocused = focusedField === name;
                const hasValue = (formData[name] || "").length > 0;

                return (
                  <motion.div
                    key={name}
                    className={`sn-field ${isFocused ? "sn-field--focused" : ""} ${hasValue ? "sn-field--has-value" : ""}`}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i + 1}
                  >
                    <Icon
                      className="sn-field-icon"
                      size={16}
                      strokeWidth={1.8}
                    />
                    <label className="sn-label" htmlFor={name}>
                      {label}
                    </label>
                    <input
                      id={name}
                      className="sn-input"
                      type={inputType}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(name)}
                      onBlur={() => setFocusedField(null)}
                      required
                      autoComplete={
                        isPasswordField ? "new-password" : undefined
                      }
                    />
                    {isPasswordField && (
                      <button
                        type="button"
                        className="sn-eye"
                        onClick={() =>
                          name === "password"
                            ? setShowPassword((v) => !v)
                            : setShowConfirm((v) => !v)
                        }
                        tabIndex={-1}
                        aria-label="Toggle password visibility"
                      >
                        {isVisible ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    )}
                  </motion.div>
                );
              })}

              {/* Confirm Password — separate state */}
              <motion.div
                className={`sn-field ${focusedField === "confirm" ? "sn-field--focused" : ""} ${confirmPassword.length > 0 ? "sn-field--has-value" : ""}`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <Lock className="sn-field-icon" size={16} strokeWidth={1.8} />
                <label className="sn-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  className="sn-input"
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField("confirm")}
                  onBlur={() => setFocusedField(null)}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="sn-eye"
                  onClick={() => setShowConfirm((v) => !v)}
                  tabIndex={-1}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </motion.div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="sn-btn-primary"
                disabled={loading}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={6}
                whileHover={{ scale: loading ? 1 : 1.015, y: loading ? 0 : -1 }}
                whileTap={{ scale: loading ? 1 : 0.985 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {loading ? (
                  <span className="sn-btn-inner">
                    <span className="sn-spinner" />
                    Creating account…
                  </span>
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <motion.div
              className="sn-divider"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
            >
              <span />
              <p>or</p>
              <span />
            </motion.div>

            {/* Google btn */}
            <motion.button
              type="button"
              className="sn-btn-google"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={8}
              whileHover={{ scale: 1.012 }}
              whileTap={{ scale: 0.988 }}
            >
              <FcGoogle size={18} />
              Continue with Google
            </motion.button>

            {/* Switch */}
            <motion.p
              className="sn-switch"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={9}
            >
              Already have an account?{" "}
              <Link to="/login" className="sn-link">
                Login
              </Link>
            </motion.p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}

export default Signup;
