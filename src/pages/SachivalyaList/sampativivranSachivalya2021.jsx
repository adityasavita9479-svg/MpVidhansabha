import React from "react";
import { motion } from "framer-motion";

const AnnualProperty2021 = () => {
  const sections = [
    "प्रथम श्रेणी अधिकारी",
    "द्वितीय श्रेणी अधिकारी",
    "तृतीय श्रेणी कर्मचारी (भाग- 1)",
    "तृतीय श्रेणी कर्मचारी (भाग- 2)",
    "तृतीय श्रेणी कर्मचारी (भाग- 3)",
    "तृतीय श्रेणी कर्मचारी (भाग- 4)",
    "तृतीय श्रेणी कर्मचारी (भाग- 5)",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        वार्षिक संपत्ति विवरण (वर्ष 2021)
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((title, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-center items-center text-center cursor-pointer border border-gray-200 hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnnualProperty2021;
