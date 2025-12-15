"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"

interface AnimatedIconProps {
	children: ReactNode
	className?: string
}

export function AnimatedIcon({ children, className }: AnimatedIconProps) {
	const iconRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const icon = iconRef.current
		if (!icon) return

		const handleMouseEnter = () => {
			gsap.to(icon, {
				scale: 1.2,
				rotation: 5,
				duration: 0.2,
				ease: "back.out(1.7)",
			})
		}

		const handleMouseLeave = () => {
			gsap.to(icon, {
				scale: 1,
				rotation: 0,
				duration: 0.2,
				ease: "back.out(1.7)",
			})
		}

		icon.addEventListener("mouseenter", handleMouseEnter)
		icon.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			icon.removeEventListener("mouseenter", handleMouseEnter)
			icon.removeEventListener("mouseleave", handleMouseLeave)
		}
	}, [])

	return (
		<span ref={iconRef as any} className={className}>
			{children}
		</span>
	)
}

