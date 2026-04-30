import { useState } from "react";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cart: cartItems, updateQuantity, removeFromCart: removeItem, subtotal } = useCart();

  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ShoppingBag className="text-green-600" /> Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-16 text-center">
              <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any premium products yet.</p>
              <Link to="/products" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition">
                Explore Products <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Cart Items */}
              <div className="flex-grow space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <p className="text-sm font-semibold tracking-wide text-green-600 mb-1 uppercase">{item.category}</p>
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* Quantity Control */}
                      <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-l-lg transition">-</button>
                        <span className="px-3 font-medium text-gray-800 w-10 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-r-lg transition">+</button>
                      </div>

                      {/* Total & Remove */}
                      <div className="text-right flex items-center gap-6">
                        <p className="font-bold text-gray-900 w-20">${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition p-2 bg-red-50 hover:bg-red-100 rounded-full">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6 text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Tax (5%)</span>
                      <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-black text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 shadow-md shadow-green-200 transition flex justify-center items-center gap-2"
                  >
                    Proceed to Checkout <ArrowRight size={20} />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
