import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "./CartContext";

export type OrderStatus = "Processing" | "Shipped" | "Out for Delivery" | "Delivered" | "Cancelled";

export type Order = {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  cancelReason?: string;
};

type OrderContextType = {
  orders: Order[];
  addOrder: (items: CartItem[], total: number) => void;
  cancelOrder: (orderId: string, reason: string) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("ecom_orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ecom_orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (items: CartItem[], total: number) => {
    const newOrder: Order = {
      id: "ORD" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toISOString(),
      items,
      total,
      status: "Processing"
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const cancelOrder = (orderId: string, reason: string) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId 
          ? { ...order, status: "Cancelled", cancelReason: reason } 
          : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};
