import React from 'react';
import useStackStore from '../store/useStackStore';

// Un simple helper para asignar colores a las carpetas en base al indice
const FOLDER_COLORS = [
  'from-[#2563EB] to-[#00D2FF]', // Azul (React, Python, etc)
  'from-[#F59E0B] to-[#FCD34D]', // Naranja/Amarillo (JS, HTML)
  'from-[#10B981] to-[#34D399]', // Verde (Node)
  'from-[#8B5CF6] to-[#C084FC]', // Morado
  'from-[#EF4444] to-[#F87171]', // Rojo
];

const StackCategory = ({ category }) => {
  const setSelectedSkill = useStackStore((state) => state.setSelectedSkill);
  const selectedSkill = useStackStore((state) => state.selectedSkill);

  return (
    <div className="mb-14 w-full relative">
      <h3 className="text-xl font-bold text-white mb-6">
        {category.name}
      </h3>
      
      {/* Grid de las carpetitas y base */}
      <div className="flex flex-wrap gap-x-6 gap-y-10 relative z-10 w-full mb-4">
        {category.skills.map((skill, index) => {
          const isSelected = selectedSkill?.name === skill.name;
          const colorGradient = FOLDER_COLORS[index % FOLDER_COLORS.length];
          
          return (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <button
                onClick={() => setSelectedSkill(skill)}
                className={`group cursor-pointer transition-all duration-300 relative w-[80px] h-[65px] sm:w-[90px] sm:h-[75px] outline-none
                  ${isSelected ? '-translate-y-3 drop-shadow-[0_15px_15px_rgba(255,255,255,0.15)]' : 'hover:-translate-y-2'}`}
              >
                {/* 3D Folder Mock */}
                <div className={`absolute bottom-0 w-full h-full bg-gradient-to-tr ${colorGradient} rounded-md shadow-lg`}>
                   {/* Pestaña trasera de la carpeta */}
                   <div className={`absolute -top-2 left-0 w-[40%] h-4 bg-gradient-to-tr ${colorGradient} brightness-75 rounded-tl-md rounded-tr-xl skew-x-[15deg] transform origin-bottom-left`} />
                   
                   {/* Logo Placeholder (Texto o icono) */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-90">
                     <span className="text-white drop-shadow-md text-2xl font-black">{skill.name.substring(0, 1)}</span>
                   </div>
                   
                   {/* Brillo Frontal */}
                   <div className="absolute inset-0 bg-white/10 rounded-md pointer-events-none rounded-tr-xl" />
                </div>
              </button>
              
              <span className={`text-xs font-medium transition-colors ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Repisa Base donde se asientan las carpetas */}
      <div className="absolute bottom-4 left-0 w-full h-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] -z-10" />
    </div>
  );
};

export default StackCategory;
