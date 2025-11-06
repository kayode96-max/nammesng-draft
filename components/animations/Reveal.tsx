"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  y?: number
}

export default function Reveal({ children, delay = 0.1, y = 16 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
