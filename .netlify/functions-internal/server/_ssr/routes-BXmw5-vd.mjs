import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
import { _ as ArrowRight, a as Phone, c as Linkedin, d as Download, f as CodeXml, g as ArrowUpRight, h as BriefcaseBusiness, i as Send, l as Github, m as Check, n as Terminal, o as Menu, p as ChevronRight, r as Sparkles, s as Mail, t as X, u as ExternalLink, v as ArrowDown } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BXmw5-vd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			portfolio: "bg-ink text-night-text hover:bg-electric hover:text-primary-foreground",
			portfolioOutline: "border border-ink/25 bg-transparent text-ink hover:bg-ink hover:text-night-text",
			nightOutline: "border border-night-border bg-transparent text-night-text hover:border-accent hover:text-accent",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var sayan_portrait_default = "/assets/sayan-portrait-DKmRxMsY.png";
var Sayan_Ghole_Resume_pdf_asset_default = {
	version: 1,
	asset_id: "5f5a0319-172b-46ec-97a8-032ceb3cd8eb",
	project_id: "1f54cf83-50f6-4edc-ac1e-dd729d9c4fd9",
	url: "/__l5e/assets-v1/5f5a0319-172b-46ec-97a8-032ceb3cd8eb/Sayan_Ghole_Resume.pdf",
	r2_key: "a/v1/1f54cf83-50f6-4edc-ac1e-dd729d9c4fd9/5f5a0319-172b-46ec-97a8-032ceb3cd8eb/Sayan_Ghole_Resume.pdf",
	original_filename: "Sayan_Ghole_Resume.pdf",
	size: 2621,
	content_type: "application/pdf",
	created_at: "2026-09-30T04:58:28Z"
};
var nav = [
	"Home",
	"About",
	"Skills",
	"Services",
	"Projects",
	"Experience",
	"Education",
	"Contact"
];
var skills = [
	{
		category: "01 / Frontend",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"React.js",
			"Tailwind CSS"
		]
	},
	{
		category: "02 / Backend",
		items: [
			"Node.js",
			"Express.js",
			"PHP",
			"Laravel"
		]
	},
	{
		category: "03 / Database",
		items: ["MongoDB"]
	},
	{
		category: "04 / Strengths",
		items: [
			"Full-Stack Development",
			"Problem Solving",
			"Quick Decision Making",
			"Fast Learning"
		]
	}
];
var services = [
	{
		n: "01",
		icon: CodeXml,
		title: "Web Development",
		description: "Modern, responsive websites that make every interaction feel effortless."
	},
	{
		n: "02",
		icon: Terminal,
		title: "Full-Stack Development",
		description: "Complete web applications, from thoughtful interfaces to APIs and databases."
	},
	{
		n: "03",
		icon: BriefcaseBusiness,
		title: "Freelance Development",
		description: "Tailored solutions for new ideas, improvements, and features that move projects forward."
	}
];
function SocialLinks({ dark = false }) {
	const cls = dark ? "text-ink hover:text-electric" : "text-night-muted hover:text-accent";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				"aria-label": "GitHub",
				title: "GitHub",
				className: `transition-colors ${cls}`,
				href: "https://github.com/Sayan-Ghole",
				target: "_blank",
				rel: "noreferrer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 19 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				"aria-label": "LinkedIn",
				title: "LinkedIn",
				className: `transition-colors ${cls}`,
				href: "https://www.linkedin.com/in/sayan-ghole-aa80202b5/",
				target: "_blank",
				rel: "noreferrer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 19 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				"aria-label": "Email",
				title: "Email",
				className: `transition-colors ${cls}`,
				href: "mailto:sayanghole126@gmail.com",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 19 })
			})
		]
	});
}
function SectionHeading({ eyebrow, title, aside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 grid gap-5 border-b border-night-border pb-8 md:mb-14 md:grid-cols-[1fr_1fr] md:items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "section-label",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-night-text md:text-5xl lg:text-6xl",
			children: title
		})] }), aside && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-md text-base leading-relaxed text-night-muted md:justify-self-end",
			children: aside
		})]
	});
}
function Portfolio() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [formMessage, setFormMessage] = (0, import_react.useState)("");
	const [formError, setFormError] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) setActive(visible[0].target.id);
		}, {
			rootMargin: "-20% 0px -55% 0px",
			threshold: [
				0,
				.2,
				.5
			]
		});
		document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);
	async function submitContact(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "").trim();
		const email = String(data.get("email") || "").trim();
		const subject = String(data.get("subject") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (!name || !email || !subject || !message) {
			setFormError(true);
			setFormMessage("Please complete all fields before continuing.");
			return;
		}
		setSending(true);
		setFormError(false);
		setFormMessage("");
		try {
			await es_default.send("service_oahddtk", "template_nhwtlef", {
				from_name: name,
				from_email: email,
				subject,
				message
			}, { publicKey: "3giIJGNdxmo2sUvsH" });
			form.reset();
			setFormMessage("Message sent! I'll get back to you soon.");
		} catch {
			setFormError(true);
			setFormMessage("Something went wrong. Please try again or email me directly.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden bg-night text-night-text",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "relative px-3 pt-3 sm:px-6 sm:pt-6 lg:px-10 lg:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 page-grid" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-[1600px] overflow-hidden rounded-md bg-paper text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: `fixed left-3 right-3 top-3 z-30 mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-md px-5 py-4 transition-all duration-300 sm:left-6 sm:right-6 sm:top-6 sm:px-8 lg:left-10 lg:right-10 lg:top-10 lg:px-12 xl:grid-cols-[auto_1fr_auto] ${scrolled ? "surface-glass shadow-lg" : "bg-paper"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#home",
									className: "flex min-w-0 items-center gap-2.5 font-display text-lg font-bold",
									onClick: () => setMenuOpen(false),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-8 shrink-0 place-items-center rounded-md bg-electric text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, {
											size: 18,
											strokeWidth: 2.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "truncate",
										children: ["Sayan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-electric",
											children: "."
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "Main navigation",
									className: "hidden items-center justify-center gap-5 xl:flex",
									children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `#${item.toLowerCase()}`,
										className: `text-xs font-semibold transition-colors hover:text-electric ${active === item.toLowerCase() ? "text-electric" : "text-ink/65"}`,
										children: item
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden items-center gap-2 xl:flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "portfolio",
										size: "sm",
										className: "rounded-full px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											children: ["Let's talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "justify-self-end xl:hidden",
									variant: "ghost",
									size: "icon",
									"aria-label": menuOpen ? "Close menu" : "Open menu",
									"aria-expanded": menuOpen,
									onClick: () => setMenuOpen(!menuOpen),
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
								}),
								menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "Mobile navigation",
									className: "absolute left-0 right-0 top-full grid grid-cols-2 gap-1 border-t border-ink/10 bg-paper p-4 shadow-xl xl:hidden",
									children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										onClick: () => setMenuOpen(false),
										href: `#${item.toLowerCase()}`,
										className: `rounded-md px-4 py-3 text-sm font-semibold ${active === item.toLowerCase() ? "bg-electric text-primary-foreground" : "text-ink"}`,
										children: item
									}, item))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[730px] overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:min-h-[720px] lg:px-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute left-1/2 top-[105px] z-0 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(5.5rem,14vw,15rem)] font-bold leading-none hero-word",
									children: "DEVELOPER"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-arch absolute left-1/2 top-[104px] h-[310px] w-[260px] -translate-x-1/2 rounded-t-full sm:h-[500px] sm:w-[390px] lg:top-[95px] lg:h-[540px] lg:w-[430px]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "portrait-vignette pointer-events-none absolute left-1/2 top-[70px] z-[1] h-[560px] w-[600px] -translate-x-1/2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "float-slow absolute left-1/2 top-[112px] z-[2] h-[302px] w-auto max-w-none drop-shadow-[0_18px_30px_rgba(2,8,30,0.45)] sm:h-[484px] lg:top-[103px] lg:h-[524px]",
									src: sayan_portrait_default,
									width: 713,
									height: 1112,
									alt: "Portrait of Sayan Ghole"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-[8%] top-[255px] z-10 hidden -rotate-12 rounded-full bg-night-text px-5 py-2 text-xs font-semibold shadow-md lg:block",
									children: "React.js"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-[12%] top-[175px] z-10 hidden rotate-12 rounded-full bg-night-text px-5 py-2 text-xs font-semibold shadow-md lg:block",
									children: "MERN stack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-fade pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[370px]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex h-[625px] flex-col justify-end gap-5 sm:h-[650px] lg:h-[615px] lg:flex-row lg:items-end lg:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-[690px] reveal",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 font-display text-sm font-medium sm:text-base",
												children: "Hey, I'm Sayan."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
												className: "font-display text-[clamp(3.3rem,6.3vw,6.8rem)] font-bold leading-[.96]",
												children: ["Sayan Ghole", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-electric",
													children: "."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 font-display text-lg font-semibold sm:text-2xl",
												children: "Full-Stack Software Developer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 max-w-[520px] text-sm leading-relaxed text-ink/70 sm:text-base",
												children: "Building modern, scalable and user-focused web experiences with the MERN stack and modern web technologies."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 flex flex-wrap gap-2.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														variant: "portfolio",
														className: "h-11 rounded-full px-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
															href: "#projects",
															children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														variant: "portfolioOutline",
														className: "h-11 rounded-full px-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
															href: "#contact",
															children: ["Contact Me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														variant: "portfolioOutline",
														className: "h-11 rounded-full px-5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
															href: Sayan_Ghole_Resume_pdf_asset_default.url,
															download: "Sayan_Ghole_Resume.pdf",
															target: "_blank",
															rel: "noreferrer",
															children: ["Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})]
														})
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-5 lg:mb-1 lg:flex-col lg:items-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#about",
											className: "flex items-center gap-2 text-xs font-semibold uppercase text-ink/65 transition-colors hover:text-electric",
											children: ["Scroll to explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 16 })]
										})]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-2 py-5 text-[11px] font-semibold uppercase text-night-muted sm:px-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Independent developer / Open to collaborations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Scroll to discover ↓"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "01 / About me",
						title: "Built to solve. Wired to learn.",
						aside: "The best digital work comes from curiosity, thoughtful decisions, and a willingness to keep evolving."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-relaxed text-night-text sm:text-2xl",
							children: "I'm a software developer focused on full-stack web development. My primary expertise is the MERN stack: MongoDB, Express.js, React.js, and Node.js."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl leading-relaxed text-night-muted",
							children: "I also work with Tailwind CSS, Laravel, and PHP to build practical web applications. I enjoy solving development problems, learning new technologies, and turning ideas into functional digital products. As a fast learner and quick decision-maker, I adapt to new challenges with purpose."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "border-t border-night-border",
							children: [
								["Role", "Full-Stack Software Developer"],
								["Specialization", "MERN Stack"],
								["Experience", "Freelance Development"],
								["Focus", "Web & Full-Stack Development"],
								["Approach", "Fast Learner"]
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[100px_1fr] gap-4 border-b border-night-border py-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-night-muted",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium text-night-text",
									children: value
								})]
							}, label))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "skills",
				className: "scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "02 / Expertise",
						title: "The tools behind the work.",
						aside: "A practical toolkit for building from first sketch to finished product."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: skills.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group min-h-48 rounded-md border border-night-border bg-night p-6 transition-colors hover:border-electric/70 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-label",
								children: group.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								children: group.items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-night-border px-3 py-1.5 text-sm text-night-text transition-colors group-hover:border-electric/40",
									children: skill
								}, skill))
							})]
						}, group.category))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "03 / What I do",
						title: "Ideas into working products.",
						aside: "From polished websites to complete applications, built around real needs."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 md:grid-cols-3",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex min-h-[280px] flex-col rounded-md border border-night-border p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/65 hover:bg-night-raised",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, {
									size: 30,
									strokeWidth: 1.5,
									className: "text-accent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs text-night-muted",
									children: service.n
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold",
									children: service.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-night-muted",
									children: service.description
								})]
							})]
						}, service.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "projects",
				className: "scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "04 / Selected work",
						title: "Projects that solve real problems.",
						aside: "A look at the ideas I've built, starting with a tool that makes debugging feel less daunting."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid overflow-hidden rounded-md border border-night-border bg-night lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-screen relative flex min-h-[350px] items-center justify-center overflow-hidden border-b border-night-border p-6 sm:min-h-[440px] lg:border-b-0 lg:border-r",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute inset-0 page-grid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full max-w-[460px] rotate-[-2deg] overflow-hidden rounded-md border border-night-border bg-night shadow-2xl transition-transform duration-500 hover:rotate-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-10 items-center gap-2 border-b border-night-border px-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-destructive" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-electric" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-4 font-mono text-[10px] text-night-muted",
											children: "strcod / debugging assistant"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 sm:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-display text-xl font-bold",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-8 place-items-center rounded bg-electric text-primary-foreground",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 18 })
												}),
												"StrCod",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent",
													children: "."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-10 font-display text-xl font-semibold sm:text-2xl",
											children: "Debug with clarity."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-night-muted",
											children: "Your error, explained in plain language."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-7 rounded-md border border-night-border bg-night-raised p-4 font-mono text-[11px] leading-6 text-night-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "Error:"
												}),
												" Cannot read properties of undefined",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent",
													children: "→"
												}),
												" Understand the cause",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent",
													children: "→"
												}),
												" Follow actionable steps"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center gap-2 text-[11px] text-accent",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 13 }), " A clearer path to the fix"]
										})
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center p-7 sm:p-10 lg:p-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-label",
									children: "Featured project / AI-assisted development"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-5 font-display text-4xl font-bold sm:text-5xl",
									children: ["StrCod", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-base leading-relaxed text-night-muted",
									children: "A web-based debugging assistant for students and early-stage developers. Paste an error message and get a clear explanation with actionable solutions, without writing complex prompts."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 grid gap-3 text-sm text-night-text",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												className: "shrink-0 text-accent"
											}), "Clear, structured error explanations"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												className: "shrink-0 text-accent"
											}), "Beginner-friendly debugging guidance"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												size: 16,
												className: "shrink-0 text-accent"
											}), "Fast, user-focused response flow"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-xs text-night-muted",
									children: "AI-assisted debugging · Web application"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://lnkd.in/giKPjBuK",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-8 inline-flex w-fit items-center gap-2 border-b border-accent pb-2 text-sm font-semibold text-accent transition-colors hover:text-night-text",
									children: ["View project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experience",
				className: "scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "05 / Experience",
						title: "Work shaped by real needs."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 border-l border-electric pl-7 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pl-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "section-label",
							children: "Freelance Development"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-semibold sm:text-3xl",
							children: "Freelance Software Developer"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl leading-relaxed text-night-muted",
							children: "Developing websites and full-stack applications around client requirements. From frontend interactions to backend functionality, I build solutions that adapt to different technical challenges and practical goals."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "education",
				className: "scroll-mt-20 border-y border-night-border bg-night-raised px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "06 / Education",
						title: "The foundation."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-night-border p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-label",
									children: "Higher education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-2xl font-semibold",
									children: "Techno India University"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-night-muted",
									children: "BCA (Hons.)"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-night-border p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-label",
									children: "Education"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-2xl font-semibold",
									children: "Makardah Bamasundari Institute"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-night-muted",
									children: "Grade A"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "07 / Contact",
						title: "Let's build something together.",
						aside: "Have a project idea or need a full-stack developer? Let's discuss how I can help turn your idea into a working digital product."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[.85fr_1.15fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-night-muted",
								children: "Reach out directly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:sayanghole126@gmail.com",
								className: "mt-5 flex items-center gap-3 break-all font-display text-lg font-semibold transition-colors hover:text-accent sm:text-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 22,
									className: "shrink-0 text-accent"
								}), "sayanghole126@gmail.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+917439897280",
								className: "mt-6 flex items-center gap-3 font-display text-lg font-semibold transition-colors hover:text-accent sm:text-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 22,
									className: "text-accent"
								}), "+91 7439897280"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitContact,
							className: "grid gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-xs font-semibold uppercase text-night-muted",
										children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "name",
											required: true,
											maxLength: 100,
											placeholder: "Your name",
											className: "h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "grid gap-2 text-xs font-semibold uppercase text-night-muted",
										children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "email",
											type: "email",
											required: true,
											maxLength: 200,
											placeholder: "you@example.com",
											className: "h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-2 text-xs font-semibold uppercase text-night-muted",
									children: ["Subject", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "subject",
										required: true,
										maxLength: 180,
										placeholder: "What are we working on?",
										className: "h-12 rounded-md border border-night-border bg-night-raised px-4 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "grid gap-2 text-xs font-semibold uppercase text-night-muted",
									children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										required: true,
										minLength: 10,
										maxLength: 5e3,
										rows: 5,
										placeholder: "Tell me about your project...",
										className: "resize-y rounded-md border border-night-border bg-night-raised px-4 py-3 text-sm normal-case text-night-text outline-none placeholder:text-night-muted/60 focus:border-accent"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-xs text-xs text-night-muted",
										children: "Your message goes straight to my inbox."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "submit",
										disabled: sending,
										className: "h-11 rounded-full px-6",
										children: [
											sending ? "Sending..." : "Send message",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})
										]
									})]
								}),
								formMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "status",
									className: `text-sm ${formError ? "text-destructive" : "text-accent"}`,
									children: formMessage
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-night-border px-5 py-8 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-xs text-night-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-base font-bold text-night-text",
						children: ["Sayan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "inline-flex items-center gap-2 transition-colors hover:text-accent",
						children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							size: 14,
							className: "-rotate-90"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Portfolio as component };
