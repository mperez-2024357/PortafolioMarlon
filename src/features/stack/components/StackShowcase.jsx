import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";
import {
  siDocker,
  siExpress,
  siFigma,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siVite,
} from "simple-icons";

const iconMap = {
  React: { icon: siReact, keyColor: "#006DFF", glow: "#00D2FF" },
  JavaScript: { icon: siJavascript, keyColor: "#F59E0B", glow: "#F97316" },
  "Tailwind CSS": { icon: siTailwindcss, keyColor: "#0891B2", glow: "#00D2FF" },
  "HTML5/CSS3": { icon: siHtml5, keyColor: "#EA580C", glow: "#F97316" },
  "Next.js": { icon: siNextdotjs, keyColor: "#27272A", glow: "#F8FAFC" },
  "Node.js": { icon: siNodedotjs, keyColor: "#15803D", glow: "#22C55E" },
  Express: { icon: siExpress, keyColor: "#6D28D9", glow: "#A78BFA" },
  Python: { icon: siPython, keyColor: "#2563EB", glow: "#FACC15" },
  Java: { icon: siOpenjdk, keyColor: "#C2410C", glow: "#F97316" },
  PostgreSQL: { icon: siPostgresql, keyColor: "#1D4ED8", glow: "#60A5FA" },
  MongoDB: { icon: siMongodb, keyColor: "#15803D", glow: "#22C55E" },
  MySQL: { icon: siMysql, keyColor: "#C2410C", glow: "#F97316" },
  Git: { icon: siGit, keyColor: "#F97316", glow: "#F97316" },
  Docker: { icon: siDocker, keyColor: "#0284C7", glow: "#00D2FF" },
  AWS: { icon: null, keyColor: "#F59E0B", glow: "#F97316", fallback: Cloud },
  Figma: { icon: siFigma, keyColor: "#7C3AED", glow: "#A78BFA" },
  Vite: { icon: siVite, keyColor: "#2563EB", glow: "#F97316" },
};

const categoryAccent = {
  frontend: "#00D2FF",
  backend: "#22C55E",
  databases: "#F97316",
  tools: "#A78BFA",
};

function SkillIcon({ skill, className = "h-10 w-10" }) {
  const config = iconMap[skill.name];
  const FallbackIcon = config?.fallback;

  if (config?.icon) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path d={config.icon.path} fill="currentColor" />
      </svg>
    );
  }

  if (FallbackIcon) {
    return <FallbackIcon className={className} strokeWidth={2.2} aria-hidden="true" />;
  }

  return <Sparkles className={className} strokeWidth={2.2} aria-hidden="true" />;
}

/* ─── Desktop keycap (hidden on mobile) ─── */
function SkillKeycap({ skill, categoryId, isSelected, onSelect, index }) {
  const config = iconMap[skill.name] || {};
  const keyColor = config.keyColor || categoryAccent[categoryId] || "#2563EB";
  const glow = config.glow || categoryAccent[categoryId] || "#00D2FF";

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      onMouseEnter={() => onSelect(skill)}
      initial={{ opacity: 0, y: 26, rotateX: -18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.045, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.04 }}
      animate={{
        y: isSelected ? -10 : 0,
        boxShadow: isSelected
          ? `0 22px 45px ${glow}55, inset 0 -10px 18px rgba(0,0,0,.28)`
          : "0 16px 28px rgba(0,0,0,.42), inset 0 -10px 18px rgba(0,0,0,.28)",
      }}
      className="stack-keycap group relative flex h-28 flex-col items-center justify-center gap-3 rounded-[14px] border border-white/12 px-3 text-white outline-none"
      style={{
        background: `linear-gradient(155deg, ${keyColor} 0%, ${keyColor} 54%, rgba(0,0,0,.28) 100%)`,
        transformStyle: "preserve-3d",
      }}
    >
      <span className="absolute inset-x-2 top-1 h-4 rounded-t-xl bg-white/18 blur-[1px]" />
      <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.35)]">
        <SkillIcon skill={skill} />
      </span>
      <span className="max-w-[7.5rem] text-center text-xs font-extrabold leading-tight tracking-tight text-white drop-shadow">
        {skill.name}
      </span>
      {isSelected && (
        <motion.span
          layoutId="selected-keycap-ring"
          className="absolute -inset-1 rounded-[16px] border border-white/55"
          style={{ boxShadow: `0 0 32px ${glow}` }}
        />
      )}
    </motion.button>
  );
}

/* ─── Mobile icon tile (wraps in a grid, no horizontal scroll) ─── */
function SkillTile({ skill, categoryId, isSelected, onSelect }) {
  const config = iconMap[skill.name] || {};
  const keyColor = config.keyColor || categoryAccent[categoryId] || "#2563EB";
  const glow = config.glow || categoryAccent[categoryId] || "#00D2FF";

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      whileTap={{ scale: 0.94 }}
      animate={{
        boxShadow: isSelected ? `0 10px 24px ${glow}55` : "0 2px 8px rgba(0,0,0,.25)",
      }}
      className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl py-3.5 text-white border transition-colors ${
        isSelected ? "border-white/40" : "border-white/8"
      }`}
      style={{
        background: isSelected
          ? `linear-gradient(155deg, ${keyColor}, ${keyColor}bb)`
          : "rgba(255,255,255,0.04)",
      }}
    >
      <span style={{ color: isSelected ? "#fff" : keyColor }}>
        <SkillIcon skill={skill} className="h-7 w-7" />
      </span>
      <span className="text-[11px] font-bold leading-tight text-center px-1">{skill.name}</span>
      {isSelected && (
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
      )}
    </motion.button>
  );
}

/* ─── Category row ─── */
function SkillCategory({ category, selectedSkill, onSelect, isMobile }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_currentColor]"
          style={{ color: categoryAccent[category.id] || "#00D2FF", background: "currentColor" }}
        />
        <h3 className="text-left text-base font-extrabold text-white lg:text-lg">{category.name}</h3>
      </div>

      {isMobile ? (
        <div className="grid grid-cols-4 gap-2.5">
          {category.skills.map((skill) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              categoryId={category.id}
              isSelected={selectedSkill.name === skill.name}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="relative rounded-2xl border border-white/8 bg-white/[0.025] p-4 shadow-[inset_0_-24px_50px_rgba(0,0,0,.2)]">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
            {category.skills.map((skill, index) => (
              <SkillKeycap
                key={skill.name}
                skill={skill}
                categoryId={category.id}
                index={index}
                isSelected={selectedSkill.name === skill.name}
                onSelect={onSelect}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-8 bottom-3 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
        </div>
      )}
    </motion.section>
  );
}

/* ─── Progress bar ─── */
function ProgressBar({ label, value, index }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          key={`${label}-${value}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.75, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-primary via-brand-cyan to-brand-accent"
        />
      </div>
    </div>
  );
}

/* ─── Mobile detail card (inline, expandable) ─── */
function MobileDetailCard({ skill }) {
  const config = iconMap[skill.name] || {};
  const subSkills = skill.subSkills?.length
    ? skill.subSkills
    : [
        { name: skill.name, val: skill.percentage },
        { name: "UI / Desarrollo", val: Math.max(55, skill.percentage - 8) },
      ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="overflow-hidden"
      >
        <div className="rounded-2xl border border-brand-cyan/20 bg-[#0D1830]/90 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${config.keyColor || '#2563EB'}, ${config.glow || '#00D2FF'})` }}
            >
              <SkillIcon skill={skill} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">{skill.name}</h3>
              <span className="text-xs text-slate-400">{skill.experience || "2+"} anos de experiencia</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">{skill.description}</p>

          <div className="space-y-3">
            {subSkills.map((item, index) => (
              <ProgressBar key={item.name} label={item.name} value={item.val} index={index} />
            ))}
          </div>

          {skill.projects?.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Proyectos</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.projects.map((p) => (
                  <span key={`${p.name}-${p.year}`} className="text-xs bg-white/8 text-slate-300 rounded-lg px-2.5 py-1 font-medium">
                    {p.name} <span className="text-slate-500">{p.year}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Desktop detail panel ─── */
function SkillDetailPanel({ skill }) {
  const subSkills = skill.subSkills?.length
    ? skill.subSkills
    : [
        { name: skill.name, val: skill.percentage },
        { name: "UI / Desarrollo", val: Math.max(55, skill.percentage - 8) },
        { name: "Buenas practicas", val: Math.max(50, skill.percentage - 14) },
      ];

  return (
    <motion.aside
      layout
      className="sticky top-28 rounded-[28px] border border-brand-cyan/20 bg-[#0D1830]/86 p-6 text-left text-white shadow-[0_26px_80px_rgba(0,0,0,.46),inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-2xl"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
          transition={{ duration: 0.28 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-[#00D2FF] text-white shadow-[0_0_28px_rgba(0,210,255,.48)]">
              <SkillIcon skill={skill} className="h-9 w-9" />
            </div>
            <div>
              <h3 className="text-3xl font-black tracking-tight">{skill.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{skill.description}</p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
            <h4 className="mb-3 text-sm font-extrabold text-white">Proyectos</h4>
            <div className="space-y-2">
              {(skill.projects?.length ? skill.projects : [{ name: "Portafolio Personal", year: 2026 }]).map((project) => (
                <div key={`${project.name}-${project.year}`} className="flex items-center justify-between gap-3 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF]" />
                    {project.name}
                  </span>
                  <span className="rounded-full bg-white/8 px-2 py-0.5 text-[11px] font-bold text-slate-300">{project.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[conic-gradient(from_90deg,#2563EB_0%,#00D2FF_var(--skill),rgba(255,255,255,.1)_var(--skill))] p-3" style={{ "--skill": `${skill.percentage}%` }}>
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0D1830]">
                <span className="text-3xl font-black">{skill.experience || "2+"}</span>
                <span className="text-xs text-slate-400">Anos</span>
              </div>
            </div>
            <div className="space-y-3">
              {subSkills.map((item, index) => (
                <ProgressBar key={item.name} label={item.name} value={item.val} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.aside>
  );
}

/* ─── Main showcase ─── */
export default function StackShowcase({ categories }) {
  const defaultSkill = useMemo(
    () => categories.flatMap((c) => c.skills).find((s) => s.name === "React") || categories[0]?.skills[0],
    [categories]
  );
  const [selectedSkill, setSelectedSkill] = useState(defaultSkill);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!selectedSkill) return null;

  return (
    <div className="blue-depth-bg relative overflow-hidden rounded-2xl border border-brand-cyan/18 px-3 py-8 text-white shadow-[0_30px_100px_rgba(7,17,31,.6)] sm:rounded-[32px] sm:px-8 sm:py-12 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,210,255,.18),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(249,115,22,.14),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Stack Tecnologico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-xs text-slate-300 sm:mt-3 sm:text-sm md:text-base"
        >
          Explora mi experiencia, proyectos y estadisticas en cada tecnologia.
        </motion.p>
      </div>

      {isMobile ? (
        <div className="relative space-y-5">
          {categories.map((category) => (
            <SkillCategory
              key={category.id}
              category={category}
              selectedSkill={selectedSkill}
              onSelect={setSelectedSkill}
              isMobile
            />
          ))}
          <MobileDetailCard skill={selectedSkill} />
        </div>
      ) : (
        <div className="relative grid gap-8 xl:grid-cols-[1.45fr_0.95fr]">
          <div className="space-y-8">
            {categories.map((category) => (
              <SkillCategory
                key={category.id}
                category={category}
                selectedSkill={selectedSkill}
                onSelect={setSelectedSkill}
                isMobile={false}
              />
            ))}
          </div>
          <SkillDetailPanel skill={selectedSkill} />
        </div>
      )}
    </div>
  );
}
