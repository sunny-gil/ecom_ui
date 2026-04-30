import { useState } from "react";
import { Package, ChevronRight, XCircle, ShoppingBag, CheckCircle2, Truck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useOrders } from "../../context/OrderContext";
import type { OrderStatus } from "../../context/OrderContext";

const TRACKING_STEPS: OrderStatus[] = ["Processing", "Shipped", "Out for Delivery", "Delivered"];

const CANCEL_REASONS = [
  "Changed my mind",
  "Ordered by mistake",
  "Price is too high",
  "Found a better deal elsewhere",
  "Delivery time is too long",
  "Other",
];

const stepIcons = [Clock, Package, Truck, CheckCircle2];

export default function Orders() {
  const { orders, cancelOrder } = useOrders();
  const [cancelModalOrderId, setCancelModalOrderId] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleCancelConfirm = () => {
    if (!cancelModalOrderId) return;
    const reason = selectedReason === "Other" ? customReason : selectedReason;
    if (!reason) return;
    cancelOrder(cancelModalOrderId, reason);
    setCancelModalOrderId(null);
    setSelectedReason("");
    setCustomReason("");
  };

  const getStepIndex = (status: OrderStatus) => TRACKING_STEPS.indexOf(status);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Package className="text-green-600" /> My Orders
          </h1>
          <p className="text-gray-500 mb-10">Track all your orders in real-time</p>

          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
              <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">No Orders Yet</h2>
              <p className="text-gray-500 mt-2 mb-8">Looks like you haven't placed any orders.</p>
              <Link to="/products" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition">
                Explore Products <ChevronRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map(order => {
                const isCancelled = order.status === "Cancelled";
                const currentStep = isCancelled ? -1 : getStepIndex(order.status);
                const canCancel = !isCancelled && order.status !== "Delivered";

                return (
                  <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Order Header */}
                    <div className={`px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 ${isCancelled ? 'bg-red-50 border-b border-red-100' : 'bg-gray-50 border-b border-gray-100'}`}>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Order ID</p>
                        <p className="font-bold text-gray-900">#{order.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Date</p>
                        <p className="font-medium text-gray-700">{new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total</p>
                        <p className="font-bold text-green-700">₹{order.total.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${isCancelled ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                          {isCancelled ? <XCircle size={14} /> : <CheckCircle2 size={14} />}
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Items */}
                      <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
                        {order.items.map(item => (
                          <div key={item.id} className="shrink-0 flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2">
                            <div className="w-12 h-12 rounded-lg overflow-hidden">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800 line-clamp-1 max-w-[120px]">{item.name}</p>
                              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tracking Timeline */}
                      {!isCancelled ? (
                        <div className="relative">
                          <div className="flex justify-between mb-2">
                            {TRACKING_STEPS.map((step, idx) => {
                              const Icon = stepIcons[idx];
                              const isCompleted = currentStep >= idx;
                              const isActive = currentStep === idx;
                              return (
                                <div key={step} className="flex flex-col items-center flex-1 relative">
                                  {/* Connector Line */}
                                  {idx < TRACKING_STEPS.length - 1 && (
                                    <div className={`absolute top-5 left-1/2 w-full h-1 z-0 transition-colors ${isCompleted && currentStep > idx ? 'bg-green-500' : 'bg-gray-200'}`} />
                                  )}
                                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${isCompleted ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-300 text-gray-400'} ${isActive ? 'ring-4 ring-green-100' : ''}`}>
                                    <Icon size={18} />
                                  </div>
                                  <p className={`text-xs mt-2 text-center font-medium ${isCompleted ? 'text-green-700' : 'text-gray-400'}`}>{step}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex gap-3 items-start">
                          <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                          <div>
                            <p className="text-sm font-semibold text-red-700">Order Cancelled</p>
                            {order.cancelReason && <p className="text-xs text-red-500 mt-0.5">Reason: {order.cancelReason}</p>}
                          </div>
                        </div>
                      )}

                      {/* Cancel Button */}
                      {canCancel && (
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={() => setCancelModalOrderId(order.id)}
                            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg font-medium transition"
                          >
                            <XCircle size={16} /> Cancel Order
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* Cancel Modal */}
      {cancelModalOrderId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="text-red-600" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Cancel Order</h2>
                <p className="text-sm text-gray-500">Please select a reason</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {CANCEL_REASONS.map(reason => (
                <label key={reason} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${selectedReason === reason ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-red-200'}`}>
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={() => setSelectedReason(reason)}
                    className="w-4 h-4 text-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">{reason}</span>
                </label>
              ))}

              {selectedReason === "Other" && (
                <textarea
                  placeholder="Please describe your reason..."
                  value={customReason}
                  onChange={e => setCustomReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 transition outline-none text-sm resize-none h-24"
                />
              )}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => { setCancelModalOrderId(null); setSelectedReason(""); setCustomReason(""); }}
                className="flex-1 py-3 rounded-xl border border-gray-200 font-medium text-gray-600 hover:bg-gray-50 transition"
              >
                Go Back
              </button>
              <button
                onClick={handleCancelConfirm}
                disabled={!selectedReason || (selectedReason === "Other" && !customReason)}
                className="flex-1 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
