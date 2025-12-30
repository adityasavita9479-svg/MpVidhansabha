import React from "react";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  const text = `Every effort has been made to ensure accuracy of data on this web site. However these need to be verified by and supplemented with documents issued finally by the concerned authorities. Links to other websites that have been included on this portal are provided for public convenience only. NIC is not responsible for the contents or reliability or the availability of linked websites and does not necessarily endorse the view expressed within them.`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white shadow-lg rounded-2xl border border-gray-300 p-10 relative"
      >
        {/* TOP ICON */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white shadow-xl rounded-full grid place-items-center border border-gray-200">
          <span className="text-3xl text-blue-600 font-bold">ℹ️</span>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mt-10 mb-4 tracking-wide">
          Disclaimer
        </h1>

        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>

        <p className="text-gray-700 text-lg leading-relaxed text-center whitespace-pre-line px-2">
          {text}
        </p>
      </motion.div>
    </main>
  );
}