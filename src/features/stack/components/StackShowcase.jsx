import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  siDocker,
  siDotnet,
  siExpress,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVite,
} from "simple-icons";

const iconMap = {
  React: { icon: siReact, keyColor: "#006DFF", glow: "#00D2FF" },
  JavaScript: { icon: siJavascript, keyColor: "#F59E0B", glow: "#F97316" },
  "Tailwind CSS": { icon: siTailwindcss, keyColor: "#0891B2", glow: "#00D2FF" },
  "HTML5/CSS3": { icon: siHtml5, keyColor: "#EA580C", glow: "#F97316" },
  Vite: { icon: siVite, keyColor: "#2563EB", glow: "#F97316" },
  "React Native": { icon: siReact, keyColor: "#0EA5E9", glow: "#38BDF8" },
  TypeScript: { icon: siTypescript, keyColor: "#2563EB", glow: "#60A5FA" },
  "Node.js": { icon: siNodedotjs, keyColor: "#15803D", glow: "#22C55E" },
  Express: { icon: siExpress, keyColor: "#4C1D95", glow: "#A78BFA" },
  Python: { icon: siPython, keyColor: "#2563EB", glow: "#FACC15" },
  Java: { icon: siOpenjdk, keyColor: "#C2410C", glow: "#F97316" },
  "C#": { icon: siDotnet, keyColor: "#7C3AED", glow: "#C084FC" },
  PostgreSQL: { icon: siPostgresql, keyColor: "#1D4ED8", glow: "#60A5FA" },
  MySQL: { icon: siMysql, keyColor: "#C2410C", glow: "#F97316" },
  MongoDB: { icon: siMongodb, keyColor: "#15803D", glow: "#22C55E" },
  Git: { icon: siGit, keyColor: "#F97316", glow: "#F97316" },
  Docker: { icon: siDocker, keyColor: "#0284C7", glow: "#00D2FF" },
  "Three.js": { icon: siThreedotjs, keyColor: "#334155", glow: "#00D2FF" },
};

const categoryAccent = {
  frontend: "#00D2FF",
  backend: "#22C55E",
  databases: "#F97316",
  tools: "#A78BFA",
};

function skillLevel(skill) {
  if (skill.level) return skill.level;
  const p = skill.percentage ?? 0;
  if (p < 40) return "Fundamentos";
  if (p < 55) return "En progreso";
  if (p < 70) return "Cómodo";
  return "Sólido";
}

function levelTone(level) {
  switch (level) {
    case "Sólido":
      return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";
    case "Cómodo":
      return "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan";
    case "En progreso":
      return "border-amber-400/30 bg-amber-400/10 text-amber-200";
    default:
      return "border-white/15 bg-white/5 text-slate-300";
  }
}

function SkillIcon({ skill, className = "h-10 w-10" }) {
  const config = iconMap[skill.name];

  if (config?.icon) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path d={config.icon.path} fill="currentColor" />
      </svg>
    );
  }

  return <Sparkles className={className} strokeWidth={2.2} aria-hidden="true" />;
}

/* ─── Desktop keycap ─── */
function SkillKeycap({ skill, categoryId, isSelected, onSelect, index }) {
  const config = iconMap[skill.name] || {};
  const keyColor = config.keyColor || categoryAccent[categoryId] || "#2563EB";
  const glow = config.glow || categoryAccent[categoryId] || "#00D2FF";
  const level = skillLevel(skill);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      onMouseEnter={() => onSelect(skill)}
      initial={{ opacity: 0, y: 26, rotateX: -18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.04 }}
      animate={{
        y: isSelected ? -10 : 0,
        boxShadow: isSelected
          ? `0 22px 45px ${glow}55, inset 0 -10px 18px rgba(0,0,0,.28)`
          : "0 16px 28px rgba(0,0,0,.42), inset 0 -10px 18px rgba(0,0,0,.28)",
      }}
      className="stack-keycap group relative flex h-[7.25rem] flex-col items-center justify-center gap-2 rounded-[14px] border border-white/12 px-2.5 text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60"
      style={{
        background: `linear-gradient(155deg, ${keyColor} 0%, ${keyColor} 54%, rgba(0,0,0,.28) 100%)`,
        transformStyle: "preserve-3d",
      }}
    >
      <span className="absolute inset-x-2 top-1 h-4 rounded-t-xl bg-white/18 blur-[1px]" />
      <span className="absolute right-2 top-2 rounded-md bg-black/25 px-1.5 py-0.5 text-[10px] font-black tabular-nums text-white/95 backdrop-blur-sm">
        {skill.percentage}%
      </span>
      <span className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.35)]">
        <SkillIcon skill={skill} className="h-9 w-9" />
      </span>
      <span className="max-w-[7.5rem] text-center text-[11px] font-extrabold leading-tight tracking-tight text-white drop-shadow">
        {skill.name}
      </span>
      <span className="rounded-full bg-black/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white/80">
        {level}
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

/* ─── Mobile tile ─── */
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
      className={`relative flex flex-col items-center justify-center gap-1.5 rounded-2xl py-3 text-white border transition-colors ${
        isSelected ? "border-white/40" : "border-white/8"
      }`}
      style={{
        background: isSelected
          ? `linear-gradient(155deg, ${keyColor}, ${keyColor}bb)`
          : "rgba(255,255,255,0.04)",
      }}
    >
      <span className="absolute right-1.5 top-1.5 text-[9px] font-black tabular-nums text-white/80">
        {skill.percentage}%
      </span>
      <span style={{ color: isSelected ? "#fff" : keyColor }}>
        <SkillIcon skill={skill} className="h-7 w-7" />
      </span>
      <span className="px-1 text-center text-[10px] font-bold leading-tight">{skill.name}</span>
    </motion.button>
  );
}

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
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {category.skills.length}
        </span>
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
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-5">
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

function ProgressBar({ label, value, index }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
        <span>{label}</span>
        <span className="tabular-nums text-brand-cyan">{value}%</span>
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

function PercentageRing({ value, label }) {
  const angle = Math.min(100, Math.max(0, value));
  return (
    <div
      className="relative flex aspect-square w-full max-w-[9.5rem] items-center justify-center rounded-full p-[3px]"
      style={{
        background: `conic-gradient(from -90deg, #2563EB 0%, #00D2FF ${angle}%, rgba(255,255,255,0.08) ${angle}%)`,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0D1830] shadow-inner">
        <span className="text-3xl font-black tabular-nums tracking-tight text-white">{value}%</span>
        <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</span>
      </div>
    </div>
  );
}

function MobileDetailCard({ skill }) {
  const config = iconMap[skill.name] || {};
  const level = skillLevel(skill);
  const subSkills = skill.subSkills?.length
    ? skill.subSkills
    : [{ name: skill.name, val: skill.percentage }];

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
          <div className="mb-3 flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${config.keyColor || "#2563EB"}, ${config.glow || "#00D2FF"})`,
              }}
            >
              <SkillIcon skill={skill} className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-black text-white">{skill.name}</h3>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${levelTone(level)}`}>
                  {level}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                ~{skill.experience || "1"} año · {skill.percentage}% comodidad
              </p>
            </div>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-slate-300">{skill.description}</p>

          <div className="mb-4 flex justify-center">
            <PercentageRing value={skill.percentage} label="Nivel" />
          </div>

          <div className="space-y-3">
            {subSkills.map((item, index) => (
              <ProgressBar key={item.name} label={item.name} value={item.val} index={index} />
            ))}
          </div>

          {skill.projects?.length > 0 && (
            <div className="mt-4 border-t border-white/8 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Proyectos</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.projects.map((p) => (
                  <span
                    key={`${p.name}-${p.year}`}
                    className="rounded-lg bg-white/8 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
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

function SkillDetailPanel({ skill }) {
  const config = iconMap[skill.name] || {};
  const level = skillLevel(skill);
  const subSkills = skill.subSkills?.length
    ? skill.subSkills
    : [{ name: skill.name, val: skill.percentage }];

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
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_0_28px_rgba(0,210,255,.35)]"
              style={{
                background: `linear-gradient(135deg, ${config.keyColor || "#2563EB"}, ${config.glow || "#00D2FF"})`,
              }}
            >
              <SkillIcon skill={skill} className="h-9 w-9" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{skill.name}</h3>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${levelTone(level)}`}>
                  {level}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">{skill.description}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                ~{skill.experience || "1"} año practicando · honestidad sobre senior claims
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
            <PercentageRing value={skill.percentage} label="Comodidad" />
            <div className="space-y-3">
              {subSkills.map((item, index) => (
                <ProgressBar key={item.name} label={item.name} value={item.val} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-white/8 bg-white/[0.035] p-4">
            <h4 className="mb-3 text-sm font-extrabold text-white">Proyectos en GitHub</h4>
            <div className="space-y-2">
              {(skill.projects?.length
                ? skill.projects
                : [{ name: "Práctica en curso", year: "—" }]
              ).map((project) => (
                <div
                  key={`${project.name}-${project.year}`}
                  className="flex items-center justify-between gap-3 text-sm text-slate-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D2FF]" />
                    {project.name}
                  </span>
                  <span className="rounded-full bg-white/8 px-2 py-0.5 text-[11px] font-bold text-slate-300">
                    {project.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.aside>
  );
}

export default function StackShowcase({ categories }) {
  const defaultSkill = useMemo(
    () =>
      categories.flatMap((c) => c.skills).find((s) => s.name === "Node.js") ||
      categories[0]?.skills[0],
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

  const totals = useMemo(() => {
    const all = categories.flatMap((c) => c.skills);
    const avg = all.length
      ? Math.round(all.reduce((sum, s) => sum + (s.percentage || 0), 0) / all.length)
      : 0;
    return { count: all.length, avg };
  }, [categories]);

  if (!selectedSkill) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0A1E3F] px-3 py-8 text-white shadow-[0_30px_100px_rgba(7,17,31,.6)] sm:rounded-[32px] sm:px-8 sm:py-12 lg:px-10">
      <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker mb-3 text-brand-cyan"
        >
          Stack en crecimiento · ~1 año · comunidades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Stack tecnológico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-2 text-xs text-slate-300 sm:mt-3 sm:text-sm md:text-base"
        >
          Perfil más{" "}
          <span className="font-semibold text-emerald-300">backend</span> que front: APIs, datos y
          servicios. Colaboro en{" "}
          <span className="font-semibold text-white/90">Grupo1-AISentinel</span> y{" "}
          <span className="font-semibold text-white/90">Sistema-Bancario-IN6BV</span>.
        </motion.p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-slate-300">
            {totals.count} tecnologías
          </span>
          <span className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1 text-[11px] font-bold text-brand-cyan">
            Promedio ~{totals.avg}%
          </span>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
            Node.js{" "}
            {categories.flatMap((c) => c.skills).find((s) => s.name === "Node.js")?.percentage ?? 65}%
          </span>
          <a
            href="https://github.com/orgs/Grupo1-AISentinel"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-slate-300 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
          >
            AISentinel
          </a>
          <a
            href="https://github.com/orgs/Sistema-Bancario-IN6BV"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-slate-300 transition-colors hover:border-brand-cyan/40 hover:text-brand-cyan"
          >
            IN6BV
          </a>
        </div>
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
