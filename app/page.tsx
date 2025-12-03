"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "experience", "projects", "skills", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">SOFTWARE ENGINEER / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Yonas
                  <br />
                  <span className="text-muted-foreground">Debru Ameha</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full Stack Developer crafting scalable applications at the intersection of
                  <span className="text-foreground"> frontend excellence</span>,
                  <span className="text-foreground"> backend architecture</span>, and
                  <span className="text-foreground"> technical leadership</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    Available for opportunities
                  </div>
                  <div>Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
                <div className="space-y-2">
                  <div className="text-foreground">Computer Engineering</div>
                  <div className="text-muted-foreground">Addis Ababa Science & Technology University</div>
                  <div className="text-xs text-muted-foreground">2019 — 2023</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="experience"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2021 — Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2023",
                  role: "Project Leader / Full Stack Developer",
                  company: "ASMS - School Management System",
                  description:
                    "Led development of comprehensive school management platform using microservices architecture. Built modules for timetable generation, gradebook, attendance, exams, payments, and communication.",
                  tech: ["React", "NestJS", "PostgreSQL", "Docker"],
                },
                {
                  year: "2023",
                  role: "Project Leader / Full Stack Developer",
                  company: "ALP - Advanced Learning Platform",
                  description:
                    "Developed online learning platform focused on cybersecurity education with interactive lessons, quizzes, and progress tracking for enhanced student engagement.",
                  tech: ["React", "Tailwind CSS", "NestJS", "PostgreSQL"],
                },
                {
                  year: "2022",
                  role: "Project Leader / Full Stack Developer",
                  company: "InsightHub - Data & Analytics Platform",
                  description:
                    "Built data and analytics platform consolidating business metrics with interactive dashboards, real-time reporting, and data export features.",
                  tech: ["React", "NestJS", "PostgreSQL", "Data Pipelines"],
                },
                {
                  year: "2021",
                  role: "Full Stack Developer",
                  company: "NovaCode Labs",
                  description:
                    "Built full-stack features using React and NestJS/Node.js, including REST APIs and database integrations. Deployed with Docker and maintained production systems.",
                  tech: ["React", "Node.js", "Docker", "AWS"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "SmartSchool (ASMS)",
                  excerpt:
                    "Comprehensive school management platform with microservices architecture. Includes timetable generation, digital gradebook, attendance tracking, examination module, fee management, and communication system.",
                  technologies: ["React", "NestJS", "PostgreSQL", "Docker", "Nginx"],
                  image: "/school-management-dashboard-with-timetable-and-gra.jpg",
                },
                {
                  title: "ALP - Learning Platform",
                  excerpt:
                    "Online cybersecurity education platform with interactive lessons, quizzes, and real-time progress tracking. Built with responsive frontend and scalable backend services.",
                  technologies: ["React", "Tailwind", "NestJS", "PostgreSQL"],
                  image: "/online-learning-platform-with-interactive-lessons-.jpg",
                },
                {
                  title: "InsightHub Analytics",
                  excerpt:
                    "Data analytics platform for consolidating and visualizing business metrics. Features interactive dashboards, real-time reporting, data pipelines, and aggregation services.",
                  technologies: ["React", "NestJS", "PostgreSQL", "Data Pipelines"],
                  image: "/analytics-dashboard-with-charts-graphs-and-busines.jpg",
                },
                {
                  title: "Geezify Library",
                  excerpt:
                    "Easy-to-use JavaScript library converting numbers between Geez and Amharic numerals. Perfect for developers needing accurate transformations in Ethiopian languages.",
                  technologies: ["JavaScript", "ES6+", "npm", "Open Source"],
                  image: "/javascript-library-code-documentation-with-numeral.jpg",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-muted/30">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Technical Skills</h2>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "React",
                    "Next.js",
                    "Vue.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Redux Toolkit",
                    "Responsive Design",
                  ],
                },
                {
                  category: "Backend",
                  skills: ["NestJS", "Node.js", "Express.js", "Django", "REST APIs", "PostgreSQL", "MongoDB", "Prisma"],
                },
                {
                  category: "DevOps & Cloud",
                  skills: [
                    "Docker",
                    "Docker Compose",
                    "AWS (EC2, S3)",
                    "Git & GitHub",
                    "CI/CD Pipelines",
                    "Nginx",
                    "Linux",
                    "Supabase",
                    "Render",
                    "Railway",
                  ],
                },
              ].map((skillSet, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology, scalable
                  architecture, and innovative solutions.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:yonasdeberu12@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">yonasdeberu12@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="text-base sm:text-lg text-muted-foreground">+251 977 101 892</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">CONNECT WITH ME</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "yonasdeberu", url: "#" },
                  { name: "LinkedIn", handle: "yonas-debru", url: "#" },
                  { name: "Email", handle: "yonasdeberu12@gmail.com", url: "#" },
                  { name: "Location", handle: "Addis Ababa, Ethiopia", url: "#" },
                ].map((contact) => (
                  <Link
                    key={contact.name}
                    href={contact.url}
                    className="group p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-accent transition-colors duration-300 font-medium">
                        {contact.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{contact.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Yonas Debru Ameha. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Full Stack Software Engineer • Ethiopia</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
