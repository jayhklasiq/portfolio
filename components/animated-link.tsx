"use client"

import { useEffect, useRef, ReactNode } from "react"
import gsap from "gsap"

interface AnimatedLinkProps {
	href: string
	children: ReactNode
	className?: string
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
	target?: string
	rel?: string
}

export function AnimatedLink({ href, children, className, onClick, target, rel }: AnimatedLinkProps) {
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

	return (
		<a ref={linkRef} href={href} className={className} onClick={onClick} target={target} rel={rel}>
			{children}
		</a>
	)
}

