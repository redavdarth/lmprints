import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children with a scroll-reveal animation (opacity + translate-up)
 * using IntersectionObserver, matching the original site's behavior.
 */
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
