import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import CancerTOC from "./CancerTOC"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, BookOpen, BrainCircuit, Search, Microscope, Users, GraduationCap, Presentation } from "lucide-react"

export const metadata: Metadata = {
  title: "Cancer Biology and Therapeutics | Medhavy Textbook",
  description: "An Intelligent Interactive Personalized Textbook and a comprehensive, research-grade resource spanning the full arc of oncology education.",
}



const audiences = [
  { title: "Medical Students", icon: GraduationCap, desc: "Master the complexities of oncology with interactive, personalized study sessions." },
  { title: "Biomedical Researchers", icon: Microscope, desc: "Quickly dive into deep mechanisms and access expert-vetted literature easily." },
  { title: "Educators", icon: Users, desc: "Enhance your curriculum with a dynamic, research-grade resource." },
  { title: "Lecturers", icon: Presentation, desc: "Leverage AI companions to help your students understand 'why' as well as 'what'." }
]

export default function CancerTextbookPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-teal-600 dark:text-teal-400 border-teal-600/30 bg-teal-500/10 mb-2 py-1 px-3">
                  Medhavy Presents
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-magenta-600 dark:from-teal-400 dark:to-fuchsia-500">
                  Cancer Biology and Therapeutics
                </h1>
                <p className="text-xl font-medium text-foreground/80 dark:text-foreground/90">
                  A Thorough Intelligent Textbook
                </p>
                <p className="max-w-[600px] text-muted-foreground leading-relaxed text-lg">
                  An Intelligent Interactive Personalized Textbook and a comprehensive, research-grade resource spanning the full arc of oncology education.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1 text-sm text-muted-foreground border-l-2 border-fuchsia-500/50 pl-4">
                  <span className="font-semibold text-foreground">Authors</span>
                  <span>Evin Gultepe, Nicholas Brown, Srinivas Sridhar</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur">38 Chapters</Badge>
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur">4 Appendices</Badge>
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur">180+ Topics</Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#why-medhavy"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Explore Features
                </Link>
                <Link
                  href="#table-of-contents"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Contents
                </Link>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[500px] items-center justify-center lg:max-w-none perspective-1000">
              <div className="relative group rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] bg-black">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                <Image
                  src="/images/cancer-cover.png"
                  alt="Cancer Biology and Therapeutics Textbook Cover"
                  width={600}
                  height={800}
                  priority
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Medhavy Textbooks Section */}
      <section id="why-medhavy" className="py-20 md:py-32 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A textbook you can talk to.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional textbooks give you the information — Medhavy textbooks help you understand it. Every title comes with a built-in AI study companion that has read the entire book, so you can ask questions in plain language and get precise, contextual answers drawn directly from the text — chapter by chapter, concept by concept.
            </p>
            <div className="inline-block mt-4 border-l-4 border-teal-500 bg-background/50 p-6 rounded-r-xl shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <BrainCircuit className="w-24 h-24" />
              </div>
              <p className="text-xl font-medium italic text-foreground/90 relative z-10">
                "Like having an expert explain every page, just to you."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background/60 backdrop-blur border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Search className="w-10 h-10 text-teal-500 mb-4" />
                <CardTitle>Ask anything, instantly</CardTitle>
                <CardDescription className="text-base mt-2">
                  No more hunting through indexes or Googling around the topic. Get immediate answers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CheckCircle2 className="w-10 h-10 text-fuchsia-500 mb-4" />
                <CardTitle>Authoritative resources</CardTitle>
                <CardDescription className="text-base mt-2">
                  Precise answers drawn from expert-vetted content, ensuring high accuracy and trust.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <BrainCircuit className="w-10 h-10 text-teal-500 mb-4" />
                <CardTitle>Study smarter</CardTitle>
                <CardDescription className="text-base mt-2">
                  Whether you're previewing a chapter or reviewing before an exam, the AI adapts to where you are.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background/60 backdrop-blur border-white/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-fuchsia-500 mb-4" />
                <CardTitle>Built for depth</CardTitle>
                <CardDescription className="text-base mt-2">
                  Ideal for complex subjects like oncology where understanding why matters as much as what.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* TOC Overview Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Thematic Structure</h2>
                <p className="text-lg text-muted-foreground">
                  A carefully organized journey through the complexities of cancer biology.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "1. Foundations of Cell Biology & Cancer — Ch. 1–9",
                  "2. Disease Mechanisms & Microenvironment — Ch. 10–16",
                  "3. Prevention, Detection & Diagnosis — Ch. 17–19",
                  "4. Treatment Modalities — Ch. 20–27",
                  "5. Cancer by Disease & System — Ch. 28–35",
                  "6. Supportive Care, Survivorship & Health Systems — Ch. 36–38"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold">
                      {item.charAt(0)}
                    </span>
                    <span className="text-foreground/80 font-medium">{item.substring(3)}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg text-sm text-foreground/80 font-medium">
                Plus Appendices A–D covering research methodologies
              </div>
            </div>

            {/* Featured Chapter Preview */}
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-fuchsia-500/10 rounded-2xl -m-4 blur-xl"></div>
              <Card className="relative overflow-hidden border-white/10 bg-background/80 backdrop-blur shadow-2xl">
                <CardHeader className="bg-muted/50 border-b pb-4">
                  <Badge variant="outline" className="w-fit mb-2">Featured Preview</Badge>
                  <CardTitle className="text-xl">Chapter 2, Section 3</CardTitle>
                  <CardDescription>Hallmarks of Cancer</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <div className="space-y-4 text-foreground/80 leading-relaxed text-sm relative">
                    <p>
                      The complexity of cancer can be distilled into a logical set of underlying principles, commonly referred to as the "Hallmarks of Cancer." These hallmarks represent the essential biological capabilities acquired during the multistep development of human tumors. 
                    </p>
                    <p>
                      By conceptualizing cancer not as a single disease, but as a diverse collection of maladies sharing these fundamental traits, researchers and clinicians can better understand tumor pathogenesis. The interplay between these capabilities dictates tumor survival, proliferation, and eventual dissemination...
                    </p>
                    
                    {/* Fade-out overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center pb-2">
                      <span className="text-sm font-semibold text-teal-600 dark:text-teal-400 bg-background/80 px-4 py-2 rounded-full shadow-sm backdrop-blur border border-teal-500/20 cursor-pointer hover:bg-teal-500/10 transition-colors">
                        Read more in the full edition
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who this book is for */}
      <section className="py-20 md:py-32 bg-foreground text-background border-y border-border/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-background/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-background/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-background">Who this book is for</h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Designed for a wide spectrum of the oncology community, adapting its depth to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {audiences.map((audience, i) => {
              const Icon = audience.icon
              return (
                <div key={i} className="group relative bg-background/5 rounded-2xl p-6 hover:bg-background/10 transition-colors border border-background/10 hover:border-background/20">
                  <div className="w-12 h-12 rounded-xl bg-background/10 shadow-sm border border-background/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-background/90" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-background">{audience.title}</h3>
                  <p className="text-background/80 text-sm leading-relaxed">{audience.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full TOC Section */}
      <section id="table-of-contents" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Full Table of Contents</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive breakdown of all 38 chapters and 4 appendices.
            </p>
          </div>

          <CancerTOC />
        </div>
      </section>
    </div>
  )
}
