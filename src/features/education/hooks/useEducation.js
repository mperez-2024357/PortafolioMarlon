import useEducationStore from '../store/useEducationStore'

export default function useEducation() {
  const education = useEducationStore((state) => state.education)
  const diplomas = useEducationStore((state) => state.diplomas)

  return { education, diplomas }
}
