"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger)
}

// Hook for link hover animations
export const useLinkHover = () => {
	const linkRef = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		const link = linkRef.current
		if (!link) return

		const handleMouseEnter = () => {
			gsap.to(link, {
				scale: 1.05,
				duration: 0.2,
				ease: "power2.out",
			})
		}

		const handleMouseLeave = () => {
			gsap.to(link, {
				scale: 1,
				duration: 0.2,
				ease: "power2.out",
			})
		}

		link.addEventListener("mouseenter", handleMouseEnter)
		link.addEventListener("mouseleave", handleMouseLeave)

		return () => {
			link.removeEventListener("mouseenter", handleMouseEnter)
			link.removeEventListener("mouseleave", handleMouseLeave)
		}
	}, [])

	return linkRef
}

// Hook for button hover and click animations
export const useButtonAnimations = () => {
	const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

	useEffect(() => {
		const button = buttonRef.current
		if (!button) return

		const handleMouseEnter = () => {
			gsap.to(button, {
				scale: 1.05,
				y: -2,
				duration: 0.2,
				ease: "power2.out",
			})
		}

		const handleMouseLeave = () => {
			gsap.to(button, {
				scale: 1,
				y: 0,
				duration: 0.2,
				ease: "power2.out",
			})
		}

		const handleClick = () => {
			gsap.to(button, {
				scale: 0.95,
				duration: 0.1,
				ease: "power2.out",
				yoyo: true,
				repeat: 1,
			})
		}

		button.addEventListener("mouseenter", handleMouseEnter)
		button.addEventListener("mouseleave", handleMouseLeave)
		button.addEventListener("click", handleClick)

		return () => {
			button.removeEventListener("mouseenter", handleMouseEnter)
			button.removeEventListener("mouseleave", handleMouseLeave)
			button.removeEventListener("click", handleClick)
		}
	}, [])

	return buttonRef
}

// Hook for card hover animations
export const useCardHover = () => {
	const cardRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const card = cardRef.current
		if (!card) return

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
		}
	}, [])

	return cardRef
}

// Hook for scroll-triggered fade-in animations
export const useScrollFadeIn = (delay: number = 0) => {
	const elementRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		gsap.fromTo(
			element,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay,
				ease: "power3.out",
				scrollTrigger: {
					trigger: element,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			}
		)

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => {
				if (trigger.vars.trigger === element) {
					trigger.kill()
				}
			})
		}
	}, [delay])

	return elementRef
}

// Hook for icon hover animations (social icons)
export const useIconHover = () => {
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

	return iconRef
}

