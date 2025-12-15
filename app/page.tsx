"use client";

import type React from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink, ChevronRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "@/components/theme-toggle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

// Fix the ScrollLink component with proper TypeScript types
interface ScrollLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string; // Make className optional
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children, className }) => {
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<a href={href} onClick={handleScroll} className={className}>
			{children}
		</a>
	);
};

export default function Home() {
	useEffect(() => {
		// Animate navigation links on hover
		const navLinks = document.querySelectorAll("nav a");
		navLinks.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				gsap.to(link, { scale: 1.05, duration: 0.2, ease: "power2.out" });
			});
			link.addEventListener("mouseleave", () => {
				gsap.to(link, { scale: 1, duration: 0.2, ease: "power2.out" });
			});
		});

		// Animate all buttons on hover and click (excluding theme toggle)
		const buttons = document.querySelectorAll("button:not([aria-label*='theme']), a[role='button']");
		buttons.forEach((button) => {
			// Skip theme toggle button container
			const isThemeToggle = button.closest("button")?.querySelector('svg[class*="lucide-moon"], svg[class*="lucide-sun"]');
			if (isThemeToggle) return;

			button.addEventListener("mouseenter", () => {
				gsap.to(button, { scale: 1.05, y: -2, duration: 0.2, ease: "power2.out" });
			});
			button.addEventListener("mouseleave", () => {
				gsap.to(button, { scale: 1, y: 0, duration: 0.2, ease: "power2.out" });
			});
			button.addEventListener("click", () => {
				gsap.to(button, {
					scale: 0.95,
					duration: 0.1,
					ease: "power2.out",
					yoyo: true,
					repeat: 1,
				});
			});
		});

		// Animate project cards on scroll and hover
		const cards = document.querySelectorAll('[id="projects"] .overflow-hidden');
		cards.forEach((card, index) => {
			// Scroll-triggered fade-in
			gsap.fromTo(
				card,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: index * 0.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: card as Element,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				}
			);

			// Hover animations
			card.addEventListener("mouseenter", () => {
				gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" });
			});
			card.addEventListener("mouseleave", () => {
				gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
			});
		});

		// Animate social icons (excluding theme toggle icons)
		const icons = document.querySelectorAll("svg[class*='lucide']:not([class*='moon']):not([class*='sun'])");
		icons.forEach((icon) => {
			const parent = icon.closest("a, button");
			if (!parent) return;

			// Skip theme toggle
			const isThemeToggle = parent.querySelector('svg[class*="moon"], svg[class*="sun"]');
			if (isThemeToggle) return;

			parent.addEventListener("mouseenter", () => {
				gsap.to(icon, { scale: 1.2, rotation: 5, duration: 0.2, ease: "back.out(1.7)" });
			});
			parent.addEventListener("mouseleave", () => {
				gsap.to(icon, { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(1.7)" });
			});
		});

		// Animate section headings on scroll
		const headings = document.querySelectorAll("h2, h3");
		headings.forEach((heading) => {
			gsap.fromTo(
				heading,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: heading as Element,
						start: "top 90%",
						toggleActions: "play none none none",
					},
				}
			);
		});

		// Animate contact links
		const contactLinks = document.querySelectorAll('[id="contact"] a');
		contactLinks.forEach((link) => {
			link.addEventListener("mouseenter", () => {
				gsap.to(link, { x: 5, duration: 0.2, ease: "power2.out" });
			});
			link.addEventListener("mouseleave", () => {
				gsap.to(link, { x: 0, duration: 0.2, ease: "power2.out" });
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			{/* Header/Navigation */}
			<header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between">
					<Link href="/" className="font-bold text-xl">
						Joshua Olaoye
					</Link>
					<nav className="hidden md:flex gap-6">
						<ScrollLink href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
							About
						</ScrollLink>
						<ScrollLink href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
							Experience
						</ScrollLink>
						<ScrollLink href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
							Projects
						</ScrollLink>
						<ScrollLink href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
							Skills
						</ScrollLink>
						<ScrollLink href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
							Contact
						</ScrollLink>
					</nav>
					<div className="flex items-center gap-4">
						<ThemeToggle />
						<Link href="https://github.com/jayhklasiq" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<FaGithub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>
						<Link href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<FaLinkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Button>
						</Link>
						<Button variant="default" asChild>
							<a href="/Joshua%20Olaoye%20-%20Resume-.pdf" download="Joshua_Olaoye_Resume.pdf">
								<Download className="mr-2 h-4 w-4" /> Resume
							</a>
						</Button>
					</div>
				</div>
			</header>

			<main className="flex-1">
				{/* Hero Section */}
				<section className="container py-24 md:py-32 space-y-8">
					<div className="flex flex-col md:flex-row gap-8 items-center">
						<div className="flex-1 space-y-4">
							<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
								Full-Stack Developer <br />
								<span className="text-primary">Building the web.</span>
							</h1>
							<p className="text-xl text-muted-foreground max-w-[600px]">I'm Joshua, a Node JS Web Developer with 5+ years of IT experience specializing in full-stack web development.</p>
							<div className="flex gap-4 pt-4">
								<Button asChild>
									<ScrollLink href="#contact" className="inline-flex items-center justify-center">
										Contact Me <ChevronRight className="ml-2 h-4 w-4" />
									</ScrollLink>
								</Button>
								<Button variant="outline" asChild>
									<ScrollLink href="#projects" className="inline-flex items-center justify-center">
										View Projects
									</ScrollLink>
								</Button>
							</div>
						</div>
						{/* <div className="flex-shrink-0">
							<div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
								<Image src="/placeholder.svg?height=320&width=320" alt="Joshua Olaoye" fill className="object-cover" priority />
							</div>
						</div> */}
					</div>
				</section>

				{/* About Section */}
				<section id="about" className="bg-muted/50 py-16 md:py-24">
					<div className="container space-y-6">
						<h2 className="text-3xl font-bold tracking-tight">About Me</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<p className="text-lg">I'm a Full-Stack Developer with a passion for creating efficient, user-friendly web applications. With a background in IT support and software engineering, I bring a unique perspective to development projects.</p>
								<p>I hold a BSc in Software Engineering and an Associate of Applied Science in Applied Technology from Brigham Young University-Idaho, both completed in 2024.</p>
								<p>My journey in technology began as an IT Technician, where I developed strong problem-solving skills and a deep understanding of technical systems. This foundation has proven invaluable in my transition to software development.</p>
							</div>
							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Education</h3>
								<div className="space-y-3">
									<div>
										<h4 className="font-medium">BSc. in Software Engineering</h4>
										<p className="text-muted-foreground">Brigham Young University – Idaho | Dec. 2024</p>
									</div>
									<div>
										<h4 className="font-medium">AAS in Applied Technology</h4>
										<p className="text-muted-foreground">Brigham Young University – Idaho | Dec. 2024</p>
									</div>
								</div>
								<h3 className="text-xl font-semibold pt-2">Certifications</h3>
								<div className="flex flex-wrap gap-2">
									<a href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000dd1fa1bdf2392a1a67aed8351deed93879ff469dcf60001aa5031dd7e8c71e5e654b57e271dc5a3f65953c7f26dac1bf2f83bfdbafc989883c8d51ee2e72a9b2" target="_blank" rel="noopener noreferrer">
										<Badge variant="secondary">Web Frontend</Badge>
									</a>

									<a href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=020000005312059bd61f00b568a36b2931df53c29188a2827042f7ff88872d2e49b564273c2837641ec0a1e62c73754655205c4ba6276e1ac1d04801cd18526d2406c255" target="_blank" rel="noopener noreferrer">
										<Badge variant="secondary">Web and Computer Programming</Badge>
									</a>
									<a href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000aea61b29c7f97b70e23dc52fc422f580a59b184ed5d19b02ad5095ab0eba56f278bd2eb5052f97c409328e8c0354abd115d32c0abccefbb25249291e9e8b2b42" target="_blank" rel="noopener noreferrer">
										<Badge variant="secondary">Software Development</Badge>
									</a>
									<a href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000d3dd9cf74d259bcf9fe1847fb1cc45a9fc5cf2f119f2580d496d013ddd7fa1d98cfacb44d2785bad5f1319a6706eb33ada33a343d0f353c01af8e0a498cdea5a" target="_blank" rel="noopener noreferrer">
										<Badge variant="secondary">Web Development</Badge>
									</a>
									<a href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=020000008b5c65116f2039346926be5db557652f0db71d90c27c7ae13e81ac1fbea1f8c1d61e1ffc03f4af4276e8806eb50e1a9bcbba086ba9412dd0a35e7ad8b2300743" target="_blank" rel="noopener noreferrer">
										<Badge variant="secondary">Full Stack Web Development</Badge>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Experience Section */}
				<section id="experience" className="py-16 md:py-24">
					<div className="container space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
						<div className="space-y-8">
							<div className="border rounded-lg p-6 space-y-4">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
									<h3 className="text-xl font-semibold">Marketing Lead</h3>
									<Badge className="w-fit">May 2025 – Present</Badge>
								</div>
								<p className="text-muted-foreground">Lazer IT Consultants | Palm Desert, CA (Remote)</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Identified & qualified 50+ SMB leads monthly across the Coachella Valley through targeted research and list cleaning focused on high-potential verticals (healthcare, legal, finance).</li>
									<li>Drafted and personalized 120+ outreach emails for “Get to Know Us” offers and coordinated with IT specialists to schedule 15–20 monthly meetings.</li>
									<li>Executed 80+ weekly follow-up calls to confirm receipt of info packages, answer initial questions, and assess interest in cybersecurity/compliance services.</li>
									<li>Managed end-to-end Info Package campaigns, achieving a 35% meeting conversion rate among engaged prospects.</li>
								</ul>
							</div>

							<div className="border rounded-lg p-6 space-y-4">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
									<h3 className="text-xl font-semibold">Full-Stack Web Developer</h3>
									<Badge className="w-fit">Jan 2025 – Present</Badge>
								</div>
								<p className="text-muted-foreground">Freelance | Remote</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Developed responsive frontend for SuCasa Ghana using Tailwind CSS, JavaScript, and AOS—implementing navigation systems, scroll animations, and styled components for listings.</li>
									<li>Built HiveCare’s mobile/web UI from scratch with HTML, Tailwind CSS, and vanilla JS; architected full‑stack TLV with Node.js and EJS templates.</li>
									<li>Delivered production-ready apps across 3 client projects with a 0% failure rate using modern stacks (Tailwind, Node.js, vanilla JS).</li>
								</ul>
							</div>

							<div className="border rounded-lg p-6 space-y-4">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
									<h3 className="text-xl font-semibold">Full-Stack Web Developer Intern</h3>
									<Badge className="w-fit">Sep 2024 – Dec 2024</Badge>
								</div>
								<p className="text-muted-foreground">BuildBoss LLC | Idaho Falls (Remote)</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Engineered scalable full‑stack components with Angular, Node.js, Express.js; optimized MongoDB for ~30% performance gains.</li>
									<li>Created responsive dashboards and interactive UIs with a user‑centric focus.</li>
									<li>Improved scalability and reduced latency by ~25% via efficient backend services, testing, and debugging.</li>
								</ul>
							</div>

							<div className="border rounded-lg p-6 space-y-4">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
									<h3 className="text-xl font-semibold">IT Technician</h3>
									<Badge className="w-fit">Jan 2018 – Jan 2020</Badge>
								</div>
								<p className="text-muted-foreground">Insurance Supermarket International USA | Miami, Florida (Remote)</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Resolved computer issues for ~2 employees daily with a 95% same‑day resolution rate.</li>
									<li>Collaborated on Windows Server environment design and deployment, cutting downtime by 25% and improving efficiency by 20%.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="bg-muted/50 py-16 md:py-24">
					<div className="container space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Card className="overflow-hidden">
								<div className="relative h-48">
									<Image src="https://sucasa.com.gh/static/media/SUCASA-LOGOwhite.565a102512a8ba6c1336.png?height=400&width=600" alt="SuCasa Project" fill className="object-cover" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">SuCasa Real Estate</h3>
										<p className="text-muted-foreground">A modern real estate platform for property listings and management.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">Angular</Badge>
										<Badge variant="outline">Node.js</Badge>
										<Badge variant="outline">MongoDB</Badge>
									</div>
									<div className="flex justify-between pt-2">
										{/* <Button variant="outline" size="sm" asChild>
											<Link href="https://github.com/jayhklasiq/sucasa" target="_blank" rel="noopener noreferrer">
												<FaGithub className="mr-2 h-4 w-4" /> Code
											</Link>
										</Button> */}
										<Button size="sm" asChild>
											<Link href="https://sucasa.com.gh/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48">
									<Image src="https://img1.wsimg.com/isteam/ip/8323d043-97e3-46e4-9345-b25f6b13c867/leadership%20voice%20Logo%20Gold_.png/:/rs=w:224,h:160,cg:true,m/cr=w:224,h:160/qt=q:95?height=400&width=600" alt="TLV Project" fill className="object-cover" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">TLV Platform</h3>
										<p className="text-muted-foreground">A web application for tracking and managing logistics and deliveries.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">React</Badge>
										<Badge variant="outline">Express.js</Badge>
										<Badge variant="outline">Tailwind CSS</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button variant="outline" size="sm" asChild>
											<Link href="https://github.com/jayhklasiq/tlv" target="_blank" rel="noopener noreferrer">
												<FaGithub className="mr-2 h-4 w-4" /> Code
											</Link>
										</Button>
										<Button size="sm" asChild>
											<Link href="https://tlv.vercel.app/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48">
									<Image src="https://jayhklasiq.github.io/HiveCare/public/images/hivecare%20-%20Copy.PNG?height=400&width=600" alt="HiveCare Project" fill className="object-cover" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">HiveCare</h3>
										<p className="text-muted-foreground">A healthcare management system for patient care coordination.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">HTML/CSS</Badge>
										<Badge variant="outline">JavaScript</Badge>
										<Badge variant="outline">Bootstrap</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button variant="outline" size="sm" asChild>
											<Link href="https://github.com/jayhklasiq/HiveCare" target="_blank" rel="noopener noreferrer">
												<FaGithub className="mr-2 h-4 w-4" /> Code
											</Link>
										</Button>
										<Button size="sm" asChild>
											<Link href="https://jayhklasiq.github.io/HiveCare/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							{/* Newly added featured projects */}
							<Card className="overflow-hidden">
								<div className="relative h-48 bg-muted flex items-center justify-center">
									<Image src="/VoterX.png" alt="VoterX Project" fill className="object-contain p-4" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">VoterX</h3>
										<p className="text-muted-foreground">Voting platform demo.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">React</Badge>
										<Badge variant="outline">TypeScript</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button size="sm" asChild>
											<Link href="https://voterx.netlify.app/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48 bg-muted flex items-center justify-center">
									<Image src="https://mandsouha.netlify.app/lovable-uploads/dd48a3db-4547-4b5a-9eb6-d73eff208eb3.png" alt="Mandsouha Project" fill className="object-contain p-4" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">Mandsouha</h3>
										<p className="text-muted-foreground">Business site.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">Next.js</Badge>
										<Badge variant="outline">Tailwind CSS</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button size="sm" asChild>
											<Link href="https://mandsouha.netlify.app/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48 bg-muted flex items-center justify-center">
									<Image src="https://www.topcatmedicalplcmts.com/logo.png" alt="TopCat Medical Placements Project" fill className="object-contain p-4" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">TopCat Medical Placements</h3>
										<p className="text-muted-foreground">Healthcare placements platform.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">React</Badge>
										<Badge variant="outline">CSS</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button size="sm" asChild>
											<Link href="https://www.topcatmedicalplcmts.com/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48 bg-muted flex items-center justify-center">
									<Image src="/Company Data Doctor.png" alt="Company Data Doctor Project" fill className="object-contain p-4" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">Company Data Doctor</h3>
										<p className="text-muted-foreground">Company data insights tool.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">Next.js</Badge>
										<Badge variant="outline">Charts</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button size="sm" asChild>
											<Link href="https://company-data-doctor.vercel.app/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="overflow-hidden">
								<div className="relative h-48 bg-muted flex items-center justify-center">
									<Image src="/Arc Education.png" alt="Arc Project" fill className="object-contain p-4" />
								</div>
								<CardContent className="p-6 space-y-4">
									<div className="space-y-2">
										<h3 className="text-xl font-semibold">Arc</h3>
										<p className="text-muted-foreground">Arc app demo.</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline">React</Badge>
										<Badge variant="outline">Tailwind CSS</Badge>
									</div>
									<div className="flex justify-between pt-2">
										<Button size="sm" asChild>
											<Link href="https://arc-theta-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
												<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section id="skills" className="py-16 md:py-24">
					<div className="container space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Programming Languages</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Python</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">JavaScript</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">C#</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">HTML/CSS</Badge>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Angular</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Node.js</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Express.js</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Bootstrap CSS</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Tailwind CSS</Badge>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Databases</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">MongoDB</Badge>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-xl font-semibold">Tools & Platforms</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Git</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Figma</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">RESTful APIs</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Code Review</Badge>
									</div>
									<div className="flex items-center gap-2">
										<Badge className="w-full justify-center py-2">Debugging</Badge>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="bg-muted/50 py-16 md:py-24">
					<div className="container">
						<div className="max-w-2xl mx-auto">
							<div className="space-y-4 text-center">
								<h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
								<p className="text-lg">I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just want to connect!</p>
								<div className="space-y-3 pt-4">
									<div className="flex items-center justify-center gap-3">
										<Mail className="h-5 w-5 text-primary" />
										<a href="mailto:joshvolx@gmail.com" className="hover:text-primary transition-colors">
											joshvolx@gmail.com
										</a>
									</div>
									<div className="flex items-center justify-center gap-3">
										<FaLinkedin className="h-5 w-5 text-primary" />
										<a href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
											linkedin.com/in/joshua-olaoye
										</a>
									</div>
									<div className="flex items-center justify-center gap-3">
										<FaGithub className="h-5 w-5 text-primary" />
										<a href="https://github.com/jayhklasiq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
											github.com/jayhklasiq
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t py-6 md:py-8">
				<div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
					<div>
						<p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Joshua Olaoye. All rights reserved.</p>
					</div>
					<div className="flex gap-4">
						<Link href="https://github.com/jayhklasiq" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<FaGithub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>
						<Link href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<FaLinkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Button>
						</Link>
						<Link href="mailto:joshvolx@gmail.com">
							<Button variant="ghost" size="icon">
								<Mail className="h-5 w-5" />
								<span className="sr-only">Email</span>
							</Button>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
