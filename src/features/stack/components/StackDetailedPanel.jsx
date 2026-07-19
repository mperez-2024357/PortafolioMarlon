import React from 'react';
import useStackStore from '../store/useStackStore';
import { Progress } from "@/shared/components/ui/progress";
import { X } from 'lucide-react';

const StackDetailedPanel = () => {
  const selectedSkill = useStackStore((state) => state.selectedSkill);
  const setSelectedSkill = useStackStore((state) => state.setSelectedSkill);

  if (!selectedSkill) {
    return (
      <div className="h-full w-full bg-[#0d1624] border border-white/5 rounded-2xl p-8 flex items-center justify-center text-center text-brand-secondary">
        <p>Selecciona una tecnología para ver sus detalles, experiencia y proyectos destacados.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#0d1624] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col relative overflow-y-auto custom-scrollbar">
      <button 
        onClick={() => setSelectedSkill(null)}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
      >
        <X size={20} />
      </button>

      {/* Header Panel */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-cyan rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
          <span className="text-white font-bold text-xl">{selectedSkill.name.substring(0, 2)}</span>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">{selectedSkill.name}</h2>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-8">
        {selectedSkill.description}
      </p>

      {/* Projects */}
      {selectedSkill.projects?.length > 0 && (
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 text-lg">Proyectos</h4>
          <ul className="space-y-3">
            {selectedSkill.projects.map((proj, idx) => (
              <li key={idx} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-brand-cyan">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span className="text-gray-300 font-medium">{proj.name}</span>
                </div>
                <span className="text-gray-500 font-mono text-xs">{proj.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experiencia & Sub-skills */}
      <div className="mb-8">
        <h4 className="text-white font-semibold mb-4 text-lg">Experiencia</h4>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center rounded-full border-[6px] border-[#1a2b45] border-l-brand-cyan border-t-brand-primary">
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">{selectedSkill.experience}</span>
              <span className="block text-xs text-gray-400">Años</span>
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-4">
            {selectedSkill.subSkills?.length > 0 ? (
              selectedSkill.subSkills.map((sub) => (
                <div key={sub.name}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-gray-300">{sub.name}</span>
                    <span className="text-brand-cyan">{sub.val}%</span>
                  </div>
                  <Progress value={sub.val} className="h-1.5 bg-[#1a2b45] [&>div]:bg-gradient-to-r [&>div]:from-brand-primary [&>div]:to-brand-cyan w-full" />
                </div>
              ))
            ) : (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-300">{selectedSkill.name}</span>
                  <span className="text-brand-cyan">{selectedSkill.percentage}%</span>
                </div>
                <Progress value={selectedSkill.percentage} className="h-1.5 bg-[#1a2b45] [&>div]:bg-gradient-to-r [&>div]:from-brand-primary [&>div]:to-brand-cyan w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackDetailedPanel;