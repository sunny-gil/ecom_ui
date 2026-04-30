import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Truck, CheckCircle, Package } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [selectedUpiApp, setSelectedUpiApp] = useState<string | null>(null);
  
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      addOrder(cart, total);
      clearCart();
      setIsProcessing(false);
      navigate("/orders");
    }, 2000);
  };

  if (cart.length === 0 && !isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center">
          <Package className="w-20 h-20 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">No items to checkout</h2>
          <button onClick={() => navigate("/products")} className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">Browse Products</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <button onClick={() => navigate("/cart")} className="flex items-center gap-2 text-gray-500 hover:text-green-600 font-medium mb-6 transition">
            <ArrowLeft size={20} /> Back to Cart
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Secure Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Forms */}
            <div className="flex-grow space-y-6">
              
              {/* Step 1: Shipping Address */}
              <div className={`bg-white rounded-2xl shadow-sm border ${activeStep === 1 ? 'border-green-500 ring-1 ring-green-500' : 'border-gray-200'} overflow-hidden transition-all`}>
                <div 
                  className={`p-6 flex items-center justify-between cursor-pointer ${activeStep === 1 ? 'bg-green-50/50' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${activeStep === 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                    <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
                  </div>
                  {activeStep > 1 && <CheckCircle className="text-green-500" />}
                </div>
                
                {activeStep === 1 && (
                  <div className="p-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" defaultValue="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" defaultValue="Doe" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" defaultValue="123 Premium Villa, Tech Park Road" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" defaultValue="Mumbai" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" defaultValue="400001" />
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveStep(2)}
                      className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}
              </div>

              {/* Step 2: Payment Method */}
              <div className={`bg-white rounded-2xl shadow-sm border ${activeStep === 2 ? 'border-green-500 ring-1 ring-green-500' : 'border-gray-200'} overflow-hidden transition-all`}>
                <div 
                  className={`p-6 flex items-center justify-between cursor-pointer ${activeStep === 2 ? 'bg-green-50/50' : 'hover:bg-gray-50'}`}
                  onClick={() => activeStep > 1 && setActiveStep(2)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${activeStep === 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                    <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                  </div>
                </div>

                {activeStep === 2 && (
                  <div className="p-6 border-t border-gray-100">
                    <div className="space-y-4">
                      
                      {/* Card Payment */}
                      <div className={`border rounded-xl transition ${paymentMethod === 'card' ? 'border-green-500 bg-green-50/30' : 'border-gray-200 hover:border-green-300'}`}>
                        <label className="flex items-center p-4 cursor-pointer">
                          <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-5 h-5 text-green-600" />
                          <CreditCard className="ml-4 mr-3 text-gray-500" />
                          <span className="font-medium text-gray-900">Credit / Debit Card</span>
                        </label>
                        {paymentMethod === 'card' && (
                          <div className="p-4 pt-0 border-t border-green-100">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                              <div className="col-span-2">
                                <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" />
                              </div>
                              <div>
                                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" />
                              </div>
                              <div>
                                <input type="password" placeholder="CVV" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" maxLength={4} />
                              </div>
                              <div className="col-span-2">
                                <input type="text" placeholder="Name on Card" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* UPI Payment */}
                      <div className={`border rounded-xl transition ${paymentMethod === 'upi' ? 'border-green-500 bg-green-50/30' : 'border-gray-200 hover:border-green-300'}`}>
                        <label className="flex items-center p-4 cursor-pointer">
                          <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="w-5 h-5 text-green-600" />
                          <div className="ml-4 flex items-center gap-3">
                            {/* BHIM UPI official logo */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/BHIM_UPI_Logo.svg/512px-BHIM_UPI_Logo.svg.png" alt="UPI" className="h-6 w-auto" />
                            <span className="font-medium text-gray-900">UPI / Wallets</span>
                          </div>
                        </label>
                        {paymentMethod === 'upi' && (
                          <div className="p-4 pt-0 border-t border-green-100">
                            {/* UPI App icons */}
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4 mb-3">Pay with</p>
                            <div className="grid grid-cols-4 gap-3 mb-5">
                              {[
                                { name: 'GPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png', color: 'hover:border-blue-400' },
                                { name: 'PhonePe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.png/512px-PhonePe_Logo.png', color: 'hover:border-purple-400' },
                                { name: 'Paytm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/512px-Paytm_logo.png', color: 'hover:border-sky-400' },
                                { name: 'BHIM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/BHIM_UPI_Logo.svg/512px-BHIM_UPI_Logo.svg.png', color: 'hover:border-orange-400' },
                              ].map(app => (
                                <button
                                  key={app.name}
                                  type="button"
                                  onClick={() => setSelectedUpiApp(app.name)}
                                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition ${selectedUpiApp === app.name ? 'border-green-500 bg-green-50 shadow-sm' : `border-gray-200 bg-white ${app.color}`}`}
                                >
                                  <img src={app.logo} alt={app.name} className="h-8 w-auto object-contain" />
                                  <span className="text-xs font-semibold text-gray-700">{app.name}</span>
                                </button>
                              ))}
                            </div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Or enter UPI ID</p>
                            <div className="flex gap-3">
                              <input type="text" placeholder="e.g., john@okhdfcbank" className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition outline-none text-sm" />
                              <button className="px-5 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition text-sm">Verify</button>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">A payment request will be sent to your UPI app after clicking Verify.</p>
                          </div>
                        )}
                      </div>

                      {/* Cash on Delivery */}
                      <div className={`border rounded-xl transition ${paymentMethod === 'cod' ? 'border-green-500 bg-green-50/30' : 'border-gray-200 hover:border-green-300'}`}>
                        <label className="flex items-center p-4 cursor-pointer">
                          <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 text-green-600" />
                          <Truck className="ml-4 mr-3 text-gray-500" />
                          <span className="font-medium text-gray-900">Cash on Delivery</span>
                        </label>
                        {paymentMethod === 'cod' && (
                          <div className="p-4 pt-0 border-t border-green-100">
                            <p className="text-sm text-gray-600 mt-3 flex items-center gap-2">
                              <CheckCircle size={16} className="text-green-600" /> You can pay via Cash or UPI to the delivery executive.
                            </p>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium text-green-700 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3 mb-6 text-sm text-gray-600">
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

                <div className="border-t border-gray-200 pt-4 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-black text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handlePlaceOrder}
                  disabled={activeStep !== 2 || isProcessing}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition flex justify-center items-center gap-2 ${activeStep === 2 && !isProcessing ? 'bg-green-600 text-white hover:bg-green-700 shadow-md shadow-green-200' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  {isProcessing ? (
                    <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
