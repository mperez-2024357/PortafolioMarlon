import useExperienceStore from '../store/useExperienceStore'

export default function useExperience() {
  const experiences = useExperienceStore((state) => state.experiences)
  const totalHours = experiences.reduce((sum, experience) => sum + experience.hours, 0)
  const primaryExperience = experiences[0] || null

  return {
    experiences,
    primaryExperience,
    totalHours,
  }
}
