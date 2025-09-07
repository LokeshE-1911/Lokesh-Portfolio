// import React, { useState, useEffect } from 'react';
// const Skills = () => {
//   const [svgs, setSvgs] = useState([]);

//   useEffect(() => {
//     // Dynamically import all SVGs from the folder
//     const importSvgs = async () => {
//       const svgFiles = import.meta.glob('../../../src/assets/Skills');
//       const loadedSvgs = [];
//       for (const path in svgFiles) {
//         const module = await svgFiles[path]();
//         const fileName = path.split('/').pop().replace('.svg', '');
//         loadedSvgs.push({ path: module.default, name: fileName });
//         console.log(fileName)
//       }
//       setSvgs(loadedSvgs);
//     };

//     importSvgs();
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center items-center gap-6 p-4">
//       {svgs.map((svg, index) => (
//         <div key={index} className="relative group w-32 h-32 hover:scale-110 transform transition duration-300 ease-in-out">
//           <img src={svg.path} alt={svg.name} className="w-full h-full object-contain" />
//           <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span>{svg.name}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skills;

import React, { useState, useEffect } from "react";

const Skills = () => {
  const [svgs, setSvgs] = useState([]);

  useEffect(() => {
    // Dynamically import all SVGs from the folder
    const importSvgs = async () => {
      const svgFiles = import.meta.glob("../../../src/assets/Skills/*.svg"); // Ensure the path is correct
      const loadedSvgs = [];
      for (const path in svgFiles) {
        const module = await svgFiles[path]();
        const fileName = path.split("/").pop().replace(".svg", "");
        loadedSvgs.push({ path: module.default, name: fileName });
        console.log(fileName); // For debugging purposes
      }
      setSvgs(loadedSvgs);
    };

    importSvgs();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      {svgs.map((svg, index) => (
        <div
          key={index}
          className="relative group w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 hover:scale-110 transform transition duration-300 ease-in-out"
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
  );
};

export default Skills;
