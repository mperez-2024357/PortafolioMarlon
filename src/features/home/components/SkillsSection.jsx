import React from 'react'
import SectionWrapper from '../../../shared/components/ui/SectionWrapper.jsx'
import { useStackData } from '../../stack/hooks/useStackData.js'
import StackShowcase from '../../stack/components/StackShowcase.jsx'

export default function SkillsSection(){
  const { categories } = useStackData()

  return (
    <SectionWrapper id="skills" className="section-light w-full py-24">
      <div className="container mx-auto px-4">
        <StackShowcase categories={categories} />
      </div>
    </SectionWrapper>
  )
}
