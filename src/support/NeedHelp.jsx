import React from "react";
import { MessageCircle, BookOpen, LifeBuoy, ArrowRight } from "lucide-react";

const helpResources = [
  {
    icon: <LifeBuoy className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Help Center",
    description: "Browse our comprehensive help articles and guides.",
    action: "Visit Help Center",
    link: "#",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Live Chat",
    description: "Chat with our support team in real-time for quick help.",
    action: "Start Chat",
    link: "#",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-purple-600 mb-4" />,
    title: "Documentation",
    description: "Find technical documentation and API guides.",
    action: "View Docs",
    link: "#",
  },
];

const NeedHelp = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Need More Help?
        </h2>
        <p className="mt-2 text-gray-600">
          Explore our support resources to get answers quickly.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {helpResources.map((resource, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-b from-purple-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-center group"
          >
            {/* Icon */}
            <div className="flex justify-center">{resource.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {resource.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm">
              {resource.description}
            </p>

            {/* Action Button */}
            <a
              href={resource.link}
              aria-label={`Go to ${resource.title}`}
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300"
            >
              {resource.action}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeedHelp;





// import React from "react";
// import { MessageCircle, BookOpen, LifeBuoy, ArrowRight } from "lucide-react";

// const helpResources = [
//   {
//     icon: <LifeBuoy className="w-10 h-10 text-purple-600 mb-4" />,
//     title: "Help Center",
//     description: "Browse our comprehensive help articles and guides",
//     action: "Visit Help Center",
//     link: "#",
//   },
//   {
//     icon: <MessageCircle className="w-10 h-10 text-purple-600 mb-4" />,
//     title: "Live Chat",
//     description: "Chat with our support team in real-time",
//     action: "Start Chat",
//     link: "#",
//   },
//   {
//     icon: <BookOpen className="w-10 h-10 text-purple-600 mb-4" />,
//     title: "Documentation",
//     description: "Technical documentation and API guides",
//     action: "View Docs",
//     link: "#",
//   },
// ];

// const NeedHelp = () => {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
//           Need More Help?
//         </h2>
//         <p className="mt-2 text-gray-600 dark:text-gray-300">
//           Explore our support resources
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {helpResources.map((resource, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center group"
//           >
//             {/* Icon */}
//             <div className="flex justify-center">{resource.icon}</div>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//               {resource.title}
//             </h3>

//             {/* Description */}
//             <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
//               {resource.description}
//             </p>

//             {/* Action Button */}
//             <a
//               href={resource.link}
//               className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition"
//             >
//               {resource.action}
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NeedHelp;
