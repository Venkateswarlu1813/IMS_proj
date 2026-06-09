"use client";

import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-[32px] border border-white/10 bg-[#07101f]/70 p-6 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">View Cart</p>
            <h1 className="mt-3 text-4xl font-black text-white">Your shopping bag, updated in real time</h1>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">Secure checkout ready</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#050816]/80 p-6 shadow-lg shadow-blue-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">No items in cart yet</p>
                  <p className="mt-2 text-sm text-slate-500">Add products from the catalog to see them here.</p>
                </div>
                <span className="rounded-full bg-cyan-500/15 px-3 py-2 text-sm font-semibold text-cyan-200">Empty</span>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#050816]/80 p-6 shadow-lg shadow-blue-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Quick actions</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/user/products" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-cyan-500/20">Continue Shopping</Link>
                <button className="rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">Checkout</button>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#050816]/80 p-6 shadow-lg shadow-cyan-500/10">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Order summary</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-slate-300">
                <span>Subtotal</span>
                <span>₹0</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Tax</span>
                <span>₹0</span>
              </div>
              <div className="rounded-3xl bg-white/5 p-4 text-white">
                <div className="flex items-center justify-between font-semibold">Total</div>
                <div className="mt-2 text-2xl">₹0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
