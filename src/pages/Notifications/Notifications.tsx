import { useState } from "react";
import { Bell, Package, Tag, CheckCircle2, User as UserIcon } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      title: "Order Delivered Successfully",
      message: "Your premium Arabica Coffee has been delivered to your doorstep.",
      time: "2 hours ago",
      isRead: false,
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      type: "promo",
      title: "Exclusive 20% Off Weekend Sale",
      message: "Treat yourself! Get 20% off all luxury wellness products this weekend only.",
      time: "5 hours ago",
      isRead: false,
      icon: Tag,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      id: 3,
      type: "system",
      title: "Profile Successfully Updated",
      message: "Your designation and mobile number were successfully updated in your profile.",
      time: "1 day ago",
      isRead: true,
      icon: UserIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      type: "order",
      title: "Payment Confirmed",
      message: "We've received your payment for Order #4029. We're packing it with care.",
      time: "2 days ago",
      isRead: true,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bell className="text-green-600" /> Notifications
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {unreadCount} New
                </span>
              )}
            </h1>

            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-sm font-medium text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="space-y-4">
            {notifications.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm">
                <Bell className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800">No Notifications</h3>
                <p className="text-gray-500 mt-2">You're all caught up!</p>
              </div>
            ) : (
              notifications.map((note) => {
                const Icon = note.icon;
                return (
                  <div 
                    key={note.id} 
                    className={`relative p-6 rounded-2xl border transition duration-200 flex gap-5 ${
                      note.isRead ? 'bg-white border-gray-100 shadow-sm' : 'bg-green-50/30 border-green-200 shadow-md shadow-green-100/50'
                    }`}
                  >
                    {!note.isRead && (
                      <div className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-full ${note.bgColor} flex items-center justify-center shrink-0`}>
                      <Icon className={note.color} size={24} />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                        <h3 className={`text-lg font-bold ${note.isRead ? 'text-gray-800' : 'text-gray-900'}`}>
                          {note.title}
                        </h3>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          {note.time}
                        </span>
                      </div>
                      <p className={`text-sm ${note.isRead ? 'text-gray-500' : 'text-gray-700 font-medium'}`}>
                        {note.message}
                      </p>

                      <div className="mt-4 flex gap-4">
                        <button 
                          onClick={() => deleteNotification(note.id)}
                          className="text-xs font-semibold text-gray-400 hover:text-red-500 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
