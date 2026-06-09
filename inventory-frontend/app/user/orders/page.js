"use client";

// USER ORDERS PAGE - COMPLETELY SEPARATE FROM ADMIN ORDERS AT /orders
// This page shows orders for authenticated users only

import { useEffect, useState } from "react";
import axios from "axios";
import OrderTimeline from "../components/OrderTimeline";

export default function UserOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => { fetchOrders(); }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/orders/");
      const data = res.data.results || res.data;
      setOrders(data);
    } catch (err) { console.log(err); }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="rounded-[32px] border border-white/10 bg-[#07101f]/70 p-6 shadow-2xl shadow-cyan-900/25 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Orders</p>
            <h1 className="mt-3 text-4xl font-black text-white">Manage order history with confidence</h1>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">{orders.length} total orders</div>
        </div>

        <div className="mt-8 grid gap-6">
          {orders.map((o) => (
            <div key={o.id} className="rounded-[28px] border border-white/10 bg-[#050816]/80 p-6 shadow-lg shadow-blue-500/10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">Order #{o.id}</p>
                  <p className="mt-1 text-sm text-slate-400">{o.created_at || o.date || "-"}</p>
                </div>
                <div className={`rounded-full px-4 py-2 text-sm font-semibold ${o.status === 'Delivered' ? 'bg-emerald-300/15 text-emerald-200' : 'bg-sky-500/15 text-sky-200'}`}>
                  {o.status || 'Unknown'}
                </div>
              </div>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-4">
                <OrderTimeline status={o.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
