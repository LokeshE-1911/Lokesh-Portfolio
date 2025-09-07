// import React, { useEffect, useState } from "react";

// const Aboutme = () => {
//   const [frontendSvgs, setFrontendSvgs] = useState([]);
//   const [backendSvgs, setBackendSvgs] = useState([]);
//   const [otherSvgs, setOtherSvgs] = useState([]);

//   useEffect(() => {
//     const importFrontendSvgs = async () => {
//       const svgFiles = import.meta.glob(
//         "../../../src/assets/Skills/FrontEnd/*.svg"
//       );
//       const loadedSvgs = [];
//       for (const path in svgFiles) {
//         const module = await svgFiles[path]();
//         const fileName = path.split("/").pop().replace(".svg", "");
//         loadedSvgs.push({ path: module.default, name: fileName });
//       }
//       setFrontendSvgs(loadedSvgs);
//     };

//     const importBackendSvgs = async () => {
//       const svgFiles = import.meta.glob(
//         "../../../src/assets/Skills/Backend/*.svg"
//       );
//       const loadedSvgs = [];
//       for (const path in svgFiles) {
//         const module = await svgFiles[path]();
//         const fileName = path.split("/").pop().replace(".svg", "");
//         loadedSvgs.push({ path: module.default, name: fileName });
//       }
//       setBackendSvgs(loadedSvgs);
//     };

//     const importOtherSvgs = async () => {
//       const svgFiles = import.meta.glob(
//         "../../../src/assets/Skills/Other/*.svg"
//       );
//       const loadedSvgs = [];
//       for (const path in svgFiles) {
//         const module = await svgFiles[path]();
//         const fileName = path.split("/").pop().replace(".svg", "");
//         loadedSvgs.push({ path: module.default, name: fileName });
//       }
//       setOtherSvgs(loadedSvgs);
//     };

//     importFrontendSvgs();
//     importBackendSvgs();
//     importOtherSvgs();
//   }, []);

//   const renderSvgSection = (title, svgs) => (
//     <div className="mb-8" id="about">
//       <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
//       <div className="flex flex-wrap justify-center items-center gap-6">
//         {svgs.map((svg, index) => (
//           <div
//             key={index}
//             className="relative group mx-1 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:scale-110 transform transition duration-300 ease-in-out  rounded-xl  bg-green-50 bg-opacity-30"
//           >
//             <img
//               src={svg.path}
//               alt={svg.name}
//               className="w-full h-full object-contain"
//             />
//             <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <span>{svg.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="font-display  mx-3">
//       <div className="container">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-start">
//           <div className="md:w-1/2">
//             <div className="my-5 text-5xl text-center italic font-black">
//               Abhiram Paidimarri
//             </div>

//             {renderSvgSection("Frontend Technologies", frontendSvgs)}
//             {renderSvgSection("Backend Technologies", backendSvgs)}
//             {renderSvgSection("Other Technologies", otherSvgs)}
//           </div>

//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <div className=" text-xl antialiased text-white font-semibold leading-relaxed space-y-2 text-justify">
//               <p>
//                 <span className="font-extrabold">Welcome to my portfolio!</span>
//                 I'm Abhiram Paidimarri, a software engineer pursuing a Master of
//                 Science in Informatics at the University of Louisiana at
//                 Lafayette, USA.
//               </p>
//               <p>
//                 I hold a Bachelor of Technology in Electronics & Computer
//                 Engineering from JB Institute of Engineering and Technology,
//                 Hyderabad, India. Professionally, I worked as an SDE1 at
//                 Valuebound Consulting, where I implemented an ERP system and
//                 integrated platforms like Dialpad and Twilio with the MindTickle
//                 Call AI, significantly boosting process efficiency and
//                 data-driven insights.
//               </p>
//               <p>
//                 I am passionate about using technology to solve real-world
//                 problems. Feel free to reach out via email at
//                 <a
//                   href="mailto:abhipaidimarri23@gmail.com"
//                   className="text-blue-600 underline"
//                 >
//                   abhipaidimarri23@gmail.com
//                 </a>
//                 or connect on
//                 <a
//                   href="https://www.linkedin.com/in/abhirampaidimarri/"
//                   className="text-blue-600 underline"
//                 >
//                   LinkedIn
//                 </a>
//                 . Thanks for visiting!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//     </div>
//   );
// };

// export default Aboutme;

import React, { useEffect, useState } from "react";

const Aboutme = () => {
  const [frontendSvgs, setFrontendSvgs] = useState([]);
  const [backendSvgs, setBackendSvgs] = useState([]);
  const [otherSvgs, setOtherSvgs] = useState([]);

  useEffect(() => {
    const importFrontendSvgs = async () => {
      const svgFiles = import.meta.glob(
        "../../../src/assets/Skills/FrontEnd/*.svg"
      );
      const loadedSvgs = [];
      for (const path in svgFiles) {
        const module = await svgFiles[path]();
        const fileName = path.split("/").pop().replace(".svg", "");
        loadedSvgs.push({ path: module.default, name: fileName });
      }
      setFrontendSvgs(loadedSvgs);
    };

    const importBackendSvgs = async () => {
      const svgFiles = import.meta.glob(
        "../../../src/assets/Skills/Backend/*.svg"
      );
      const loadedSvgs = [];
      for (const path in svgFiles) {
        const module = await svgFiles[path]();
        const fileName = path.split("/").pop().replace(".svg", "");
        loadedSvgs.push({ path: module.default, name: fileName });
      }
      setBackendSvgs(loadedSvgs);
    };

    const importOtherSvgs = async () => {
      const svgFiles = import.meta.glob(
        "../../../src/assets/Skills/Other/*.svg"
      );
      const loadedSvgs = [];
      for (const path in svgFiles) {
        const module = await svgFiles[path]();
        const fileName = path.split("/").pop().replace(".svg", "");
        loadedSvgs.push({ path: module.default, name: fileName });
      }
      setOtherSvgs(loadedSvgs);
    };

    importFrontendSvgs();
    importBackendSvgs();
    importOtherSvgs();
  }, []);

  const renderSvgSection = (title, svgs) => (
    <div className="mb-8" id="about">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {svgs.map((svg, index) => (
          <div
            key={index}
            className="relative group mx-1 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 hover:scale-110 transform transition duration-300 ease-in-out"
          >
            <img
              src={svg.path}
              alt={svg.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>{svg.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="font-display  mx-3">
      <div className="container px-0 mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12 items-start">
          <div className="md:w-1/2">
            <div className="my-5 text-5xl text-center italic font-black">
              Abhiram Paidimarri
            </div>

            {renderSvgSection("Frontend Technologies", frontendSvgs)}
            {renderSvgSection("Backend Technologies", backendSvgs)}
            {renderSvgSection("Other Technologies", otherSvgs)}
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="text-xl antialiased text-pink-100 font-semibold leading-relaxed space-y-4 text-justify">
              <p>
                Welcome to my portfolio! I'm Abhiram Paidimarri, a passionate
                and driven software engineer currently pursuing a Master of
                Science in Informatics at the University of Louisiana at
                Lafayette, USA.
              </p>
              <p>
                My academic journey began with a Bachelor of Technology in
                Electronics & Computer Engineering from JB Institute of
                Engineering and Technology in Hyderabad, India. My professional
                experience includes working as a Software Development Engineer
                (SDE1) at Valuebound Consulting Services Pvt. Ltd in India.
              </p>
              <p>
                During my tenure, I was instrumental in implementing an ERP
                system that significantly enhanced internal process efficiency
                and cross-team communication. I also played a key role in
                integrating Dialpad, Twilio, and SalesLoft with the MindTickle
                Call AI Platform, which led to notable improvements in
                data-driven insights and operational efficiency for our clients.
              </p>
              <p>
                Before my role as an SDE1, I started as a Software Trainee at
                Valuebound, where I gained substantial expertise in developing
                enterprise resource planning portals using cutting-edge
                technologies. I am passionate about leveraging technology to
                solve real-world problems and continuously seek opportunities to
                learn and grow in the dynamic field of software engineering.
              </p>
              <p>
                My journey is driven by a commitment to excellence and a desire
                to make a meaningful impact through innovative solutions. Feel
                free to reach out to me via email at
                <a
                  href="mailto:abhiram.paidimarri1@louisiana.edu"
                  className="text-blue-600 underline"
                >
                  abhiram.paidimarri1@louisiana.edu
                </a>
                or connect with me on LinkedIn. You can also find my coding
                profiles on Leetcode and HackerRank. Thank you for visiting my
                portfolio, and I look forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Aboutme;
