"use client";

import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/6 bg-gradient-to-br from-white/6 to-transparent p-4 shadow-lg">
      <div className="h-40 w-full rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/10" />
      <h3 className="mt-4 font-semibold">{product?.product_name || "Product"}</h3>
      <p className="text-sm text-slate-400 mt-1">₹{product?.price || "0"}</p>
      <div className="mt-3 flex items-center justify-between">
        <button className="rounded-full bg-cyan-500/90 px-3 py-2 text-sm font-semibold">Buy</button>
        <div className="text-xs text-slate-400">{product?.stock ? `${product.stock} in stock` : "-"}</div>
      </div>
    </motion.article>
  );
}
