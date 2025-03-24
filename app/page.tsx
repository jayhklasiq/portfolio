"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Download } from "lucide-react";

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
						<Link href="https://github.com/jayhklasiq" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>
						<Link href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Button>
						</Link>
						<Button variant="default" asChild>
							<a href="/Joshua_Olaoye_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
							<p className="text-xl text-muted-foreground max-w-[600px]">I'm Joshua, a Junior Node JS Web Developer with 5+ years of IT experience specializing in full-stack web development.</p>
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
									<Badge variant="secondary">Web and Computer Programming</Badge>
									<Badge variant="secondary">Software Development</Badge>
									<Badge variant="secondary">Web Development</Badge>
									<Badge variant="secondary">Full Stack Web Development</Badge>
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
									<h3 className="text-xl font-semibold">Full-Stack Developer Intern</h3>
									<Badge className="w-fit">Sep 2024 - Dec 2024</Badge>
								</div>
								<p className="text-muted-foreground">BuildBoss LLC | Idaho Falls, USA (Remote)</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Engineered scalable full-stack web applications using Angular, Node.js, and Express.js, ensuring optimal performance and reliability for a leading construction project management platform.</li>
									<li>Designed and integrated RESTful APIs and optimized MongoDB database queries, achieving faster data retrieval and enhancing system performance by 30%.</li>
									<li>Created dynamic dashboards and interactive user interfaces in Angular, prioritizing responsive and user-centric designs.</li>
									<li>Conducted unit testing, integration testing, and rigorous debugging to ensure high-quality code standards and system functionality.</li>
									<li>Improved system scalability by implementing efficient backend services, reducing application latency by 25%.</li>
								</ul>
							</div>

							<div className="border rounded-lg p-6 space-y-4">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
									<h3 className="text-xl font-semibold">IT Technician</h3>
									<Badge className="w-fit">Jan 2018 - Jan 2020</Badge>
								</div>
								<p className="text-muted-foreground">Insurance Supermarket International USA | Miami, Florida, USA (Remote)</p>
								<ul className="space-y-2 list-disc pl-5">
									<li>Configured and deployed new employee systems, including cable management, operating systems, and required software, ensuring readiness for productivity on day one.</li>
									<li>Conducted in-depth computer diagnostics and resolved technical issues for an average of two employees daily, achieving a 95% issue resolution rate within 24 hours.</li>
									<li>Monitored and improved system performance, consulting with management to define requirements for new hardware and software, resulting in a 20% improvement in operational efficiency.</li>
									<li>Collaborated with a team to design, install, and configure Windows Server environments for a refinery plant site office, reducing system downtime by 25%.</li>
									<li>Documented and maintained standard operating procedures for IT configurations, enhancing team efficiency and knowledge-sharing.</li>
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
												<Github className="mr-2 h-4 w-4" /> Code
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
												<Github className="mr-2 h-4 w-4" /> Code
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
												<Github className="mr-2 h-4 w-4" /> Code
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
						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
								<p className="text-lg">I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just want to connect!</p>
								<div className="space-y-3 pt-4">
									<div className="flex items-center gap-3">
										<Mail className="h-5 w-5 text-primary" />
										<a href="mailto:joshvolx@gmail.com" className="hover:text-primary transition-colors">
											joshvolx@gmail.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<Linkedin className="h-5 w-5 text-primary" />
										<a href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
											linkedin.com/in/joshua-olaoye
										</a>
									</div>
									<div className="flex items-center gap-3">
										<Github className="h-5 w-5 text-primary" />
										<a href="https://github.com/jayhklasiq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
											github.com/jayhklasiq
										</a>
									</div>
								</div>
							</div>
							<div className="space-y-4">
								<form className="space-y-4">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												Name
											</label>
											<input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" />
										</div>
										<div className="space-y-2">
											<label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												Email
											</label>
											<input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your email" />
										</div>
									</div>
									<div className="space-y-2">
										<label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
											Subject
										</label>
										<input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Subject" />
									</div>
									<div className="space-y-2">
										<label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
											Message
										</label>
										<textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your message" />
									</div>
									<Button type="submit" className="w-full">
										Send Message
									</Button>
								</form>
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
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>
						<Link href="https://linkedin.com/in/joshua-olaoye" target="_blank" rel="noopener noreferrer">
							<Button variant="ghost" size="icon">
								<Linkedin className="h-5 w-5" />
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
