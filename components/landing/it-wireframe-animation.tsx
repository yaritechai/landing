"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3,
  Package,
  ShoppingCart,
  DollarSign,
  Truck,
  FileText,
  Settings,
  Bell,
  TrendingUp,
  Activity,
  AlertTriangle,
  CheckCircle,
  Loader2
} from "lucide-react";

const ERPTabs = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "sales", label: "Sales", icon: ShoppingCart },
  { id: "finance", label: "Finance", icon: DollarSign },
  { id: "shipping", label: "Shipping", icon: Truck },
  { id: "reports", label: "Reports", icon: FileText },
];

const problemTypes = [
  { type: "warning", color: "yellow" },
  { type: "error", color: "red" },
  { type: "info", color: "blue" },
  { type: "success", color: "green" }
];

export default function ITWireframeAnimation() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [notifications, setNotifications] = useState(3);
  const [pageTransition, setPageTransition] = useState(false);

  // Simulate ERP system activity with page transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true);
      
      setTimeout(() => {
        setCurrentProblem((prev) => (prev + 1) % problemTypes.length);
        setNotifications(prev => prev + 1);
        setIsProcessing(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through tabs with smooth transitions
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setPageTransition(true);
      
      setTimeout(() => {
        setActiveTab(prev => {
          const currentIndex = ERPTabs.findIndex(tab => tab.id === prev);
          const nextIndex = (currentIndex + 1) % ERPTabs.length;
          return ERPTabs[nextIndex].id;
        });
        
        setTimeout(() => {
          setPageTransition(false);
        }, 300);
      }, 200);
    }, 3000);

    return () => clearInterval(tabInterval);
  }, []);

  const currentProblemType = problemTypes[currentProblem];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Glassmorphic Background - Light/Dark Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/40 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/10">
        
        {/* Grid Pattern - Light/Dark Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* ERP Interface */}
        <div className="relative h-full p-6 flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <Settings className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="relative"
                animate={{ scale: notifications > 10 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-white/70" />
                <motion.span 
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {notifications}
                </motion.span>
              </motion.div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-600 dark:text-white/70 text-sm">System Online</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 mb-6 bg-gray-100/50 dark:bg-white/5 rounded-lg p-1">
            {ERPTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-white/70 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10"
                  }`}
                  animate={{
                    scale: activeTab === tab.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Main Content Area with Page Transitions */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - Dashboard Cards */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* KPI Cards */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: pageTransition ? 0.3 : 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Revenue Card */}
                  <motion.div 
                    className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2" />
                        <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded animate-pulse w-16" />
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="mt-2 h-2 bg-green-200 dark:bg-green-400/20 rounded w-12" />
                  </motion.div>

                  {/* Orders Card */}
                  <motion.div 
                    className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2" />
                        <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded animate-pulse w-12" />
                      </div>
                      <ShoppingCart className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="mt-2 h-2 bg-blue-200 dark:bg-blue-400/20 rounded w-10" />
                  </motion.div>

                  {/* Customers Card */}
                  <motion.div 
                    className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2" />
                        <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded animate-pulse w-14" />
                      </div>
                      <Package className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="mt-2 h-2 bg-purple-200 dark:bg-purple-400/20 rounded w-16" />
                  </motion.div>

                  {/* Inventory Card */}
                  <motion.div 
                    className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2" />
                        <div className="h-6 bg-gray-400 dark:bg-gray-500 rounded animate-pulse w-16" />
                      </div>
                      <DollarSign className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="mt-2 h-2 bg-red-200 dark:bg-red-400/20 rounded w-8" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Chart Area */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`chart-${activeTab}`}
                  className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50 dark:border-white/20 shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: pageTransition ? 0.3 : 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-32" />
                    <BarChart3 className="w-5 h-5 text-gray-500 dark:text-white/70" />
                  </div>
                  
                  {/* Animated Chart Skeleton */}
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                        <div className="flex-1 bg-gray-200 dark:bg-white/10 rounded-full h-2">
                          <motion.div
                            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${20 + index * 15 + Math.sin(Date.now() / 1000 + index) * 10}%` }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                          />
                        </div>
                        <div className="w-8 h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - System Status & Alerts */}
            <div className="space-y-4">
              
              {/* System Status */}
              <motion.div 
                className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="w-5 h-5 text-green-500" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-24" />
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex justify-between">
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-16" />
                      <div className="h-3 bg-gray-400 dark:bg-gray-500 rounded animate-pulse w-8" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Problem Detection */}
              <motion.div 
                className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                animate={{ 
                  borderColor: isProcessing ? "rgba(251, 191, 36, 0.5)" : "rgba(255, 255, 255, 0.2)",
                  boxShadow: isProcessing ? "0 0 20px rgba(251, 191, 36, 0.3)" : "none"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className={`w-5 h-5 text-${currentProblemType.color}-500`} />
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-32" />
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-100/50 dark:bg-white/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full bg-${currentProblemType.color}-400`} />
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-20" />
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full" />
                  </div>

                  {/* Processing Animation */}
                  <AnimatePresence>
                    {isProcessing && (
                      <motion.div 
                        className="flex items-center gap-2 p-2 bg-yellow-100 dark:bg-yellow-400/20 rounded-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Loader2 className="w-4 h-4 text-yellow-600 dark:text-yellow-400 animate-spin" />
                        <div className="h-3 bg-yellow-300 dark:bg-yellow-500/50 rounded animate-pulse w-24" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Solution */}
                  <AnimatePresence>
                    {!isProcessing && (
                      <motion.div 
                        className="flex items-center gap-2 p-2 bg-green-100 dark:bg-green-400/20 rounded-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <div className="h-3 bg-green-300 dark:bg-green-500/50 rounded animate-pulse w-32" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Recent Activities */}
              <motion.div 
                className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-white/20 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-24 mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-1" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 