"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
	children: ReactNode
	asChild?: boolean
}

export function AnimatedButton({ children, className, asChild, ...props }: AnimatedButtonProps) {
	const buttonRef = useRef<HTMLButtonElement>(null)

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

	if (asChild) {
		return <Button {...props} className={className} asChild={asChild}>{children}</Button>
	}

	return (
		<Button ref={buttonRef} {...props} className={className}>
			{children}
		</Button>
	)
}

