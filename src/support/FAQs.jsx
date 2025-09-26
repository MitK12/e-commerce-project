import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence,motion} from "framer-motion";

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      'You can track your order by logging into your account and going to "My Orders" or by using the tracking number sent to your email.',
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items may have different return policies.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    question: "How can I change my shipping address?",
    answer:
      "You can update your shipping address in your account settings or contact customer support if your order has already been processed.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600">
          Quick answers to common questions
        </p>
      </div>

      {/* ===== FAQ List ===== */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth animation */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 pb-4 text-green-600 text-sm font-bold"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;





// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "How can I track my order?",
//     answer:
//       'You can track your order by logging into your account and going to "My Orders" or by using the tracking number sent to your email.',
//   },
//   {
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items may have different return policies.",
//   },
//   {
//     question: "Do you ship internationally?",
//     answer:
//       "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
//   },
//   {
//     question: "How can I change my shipping address?",
//     answer:
//       "You can update your shipping address in your account settings or contact customer support if your order has already been processed.",
//   },
// ];

// const FAQs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-16">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
//           Frequently Asked Questions
//         </h2>
//         <p className="mt-2 text-gray-600 dark:text-gray-300">
//           Quick answers to common questions
//         </p>
//       </div>

//       {/* FAQ List */}
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden bg-white dark:bg-gray-900"
//           >
//             {/* Question */}
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
//             >
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {faq.question}
//               </span>
//               <ChevronDown
//                 className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Answer with animation */}
//             <AnimatePresence initial={false}>
//               {openIndex === index && (
//                 <motion.div
//                   key="content"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm"
//                 >
//                   {faq.answer}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQs;
