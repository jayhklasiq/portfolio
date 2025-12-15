"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedCardProps {
	children: ReactNode
	className?: string
	delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
	const cardRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const card = cardRef.current
		if (!card) return

		// Scroll-triggered fade-in
		gsap.fromTo(
			card,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay,
				ease: "power3.out",
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			}
		)

		// Hover animations
		const handleMouseEnter = () => {
			gsap.to(card, {
				y: -8,
				scale: 1.02,
				duration: 0.3,
				ease: "power2.out",
			})
		}

		const handleMouseLeave = () => {
			gsap.to(card, {
				y: 0,
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			})
		}

		card.addEventListener("mouseenter", handleMouseEnter)
		card.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			card.removeEventListener("mouseenter", handleMouseEnter)
			card.removeEventListener("mouseleave", handleMouseLeave)
			ScrollTrigger.getAll().forEach((trigger) => {
				if (trigger.vars.trigger === card) {
					trigger.kill()
				}
			})
		}
	}, [delay])

	return (
		<Card ref={cardRef} className={className}>
			{children}
		</Card>
	)
}

