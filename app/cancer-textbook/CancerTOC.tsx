'use client'

import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { BookOpen } from 'lucide-react'

const PARTS = [
  {
    label: 'Foundations of Cell Biology & Cancer',
    shortLabel: 'Foundations',
    range: 'Ch. 1–9',
    accent: 'bg-slate-600',
    accentLight: 'bg-slate-100 dark:bg-slate-800',
    accentBorder: 'border-slate-500',
    accentText: 'text-slate-600 dark:text-slate-400',
    chapters: [
      { num: 1, title: 'The Building Blocks of Life : Normal Cell Biology' },
      { num: 2, title: 'Introduction to Cancer : A Disease of Deregulation' },
      { num: 3, title: 'Cancer Epidemiology and Risk Factors' },
      { num: 4, title: 'Genetics and Genomic Instability in Cancer' },
      { num: 5, title: 'Oncogenes' },
      { num: 6, title: 'Tumor Suppressor Genes' },
      { num: 7, title: 'Epigenetics in Cancer' },
      { num: 8, title: 'Cancer Etiology' },
      { num: 9, title: 'Cell Cycle Control and Cancer' },
    ],
  },
  {
    label: 'Disease Mechanisms & Microenvironment',
    shortLabel: 'Mechanisms',
    range: 'Ch. 10–16',
    accent: 'bg-emerald-600',
    accentLight: 'bg-emerald-50 dark:bg-emerald-900/30',
    accentBorder: 'border-emerald-500',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    chapters: [
      { num: 10, title: 'Apoptosis and Programmed Cell Death in Cancer' },
      { num: 11, title: 'Cancer Metabolism - The Warburg Effect and Beyond' },
      { num: 12, title: 'Angiogenesis' },
      { num: 13, title: 'Invasion and Metastasis - The Spread of Cancer' },
      { num: 14, title: 'The Tumor Microenvironment' },
      { num: 15, title: 'Cancer Stem Cells and Tumor Heterogeneity' },
      { num: 16, title: 'Tumor Immunology' },
    ],
  },
  {
    label: 'Prevention, Detection & Diagnosis',
    shortLabel: 'Prevention',
    range: 'Ch. 17–19',
    accent: 'bg-amber-600',
    accentLight: 'bg-amber-50 dark:bg-amber-900/20',
    accentBorder: 'border-amber-500',
    accentText: 'text-amber-600 dark:text-amber-400',
    chapters: [
      { num: 17, title: 'Cancer Prevention and Screening' },
      { num: 18, title: 'Cancer Detection and Diagnosis' },
      { num: 19, title: 'Principles of Cancer Therapy' },
    ],
  },
  {
    label: 'Treatment Modalities',
    shortLabel: 'Treatment',
    range: 'Ch. 20–27',
    accent: 'bg-sky-600',
    accentLight: 'bg-sky-50 dark:bg-sky-900/20',
    accentBorder: 'border-sky-500',
    accentText: 'text-sky-600 dark:text-sky-400',
    chapters: [
      { num: 20, title: 'Surgical Oncology' },
      { num: 21, title: 'Radiation Oncology' },
      { num: 22, title: 'Chemotherapy' },
      { num: 23, title: 'Hormonal Therapies' },
      { num: 24, title: 'Targeted Therapies' },
      { num: 25, title: 'Cancer Immunotherapy' },
      { num: 26, title: 'Gene Therapy and Oncolytic Virotherapy' },
      { num: 27, title: 'Nanotechnology in Cancer' },
    ],
  },
  {
    label: 'Cancer by Disease & System',
    shortLabel: 'Disease',
    range: 'Ch. 28–35',
    accent: 'bg-violet-600',
    accentLight: 'bg-violet-50 dark:bg-violet-900/20',
    accentBorder: 'border-violet-500',
    accentText: 'text-violet-600 dark:text-violet-400',
    chapters: [
      { num: 28, title: 'Clinical Trials and Regulatory Pathways' },
      { num: 29, title: 'Future Directions in Cancer Treatment Research' },
      { num: 30, title: 'Principles of Cancer Classification' },
      { num: 31, title: 'Solid Tumors by Organ/System' },
      { num: 32, title: 'Central Nervous System Tumors' },
      { num: 33, title: 'Hematologic Malignancies' },
      { num: 34, title: 'Pediatric Cancers' },
      { num: 35, title: 'Rare and Orphan Cancers' },
    ],
  },
  {
    label: 'Supportive Care, Survivorship & Health Systems',
    shortLabel: 'Survivorship',
    range: 'Ch. 36–38',
    accent: 'bg-rose-600',
    accentLight: 'bg-rose-50 dark:bg-rose-900/20',
    accentBorder: 'border-rose-500',
    accentText: 'text-rose-600 dark:text-rose-400',
    chapters: [
      { num: 36, title: 'Supportive Care and Palliative Care in Oncology' },
      { num: 37, title: 'Cancer Survivorship' },
      { num: 38, title: 'Health Economics and Access to Cancer Care' },
    ],
  },
  {
    label: 'Appendices',
    shortLabel: 'Appendices',
    range: 'A–D',
    accent: 'bg-neutral-600',
    accentLight: 'bg-neutral-100 dark:bg-neutral-800/40',
    accentBorder: 'border-neutral-500',
    accentText: 'text-neutral-600 dark:text-neutral-400',
    chapters: [
      { num: 'A', title: 'Experimental Models in Cancer Research' },
      { num: 'B', title: 'Essential Techniques and Assays in Cancer Research' },
      { num: 'C', title: 'Advanced Imaging and Photodynamic Therapy in Cancer Research' },
      { num: 'D', title: 'Molecular Biology Techniques - Protein and Gene Expression Analysis' },
    ],
  },
]

export default function CancerTOC() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const handleTabClick = useCallback((i: number) => {
    setActiveIdx(i)
    setAnimKey((k) => k + 1) // force re-mount for animation replay
  }, [])

  const activePart = PARTS[activeIdx]

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* ─── Part Tabs ─────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PARTS.map((part, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border',
              activeIdx === i
                ? 'bg-foreground text-background border-foreground shadow-lg scale-105'
                : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30',
            )}
          >
            <span className="hidden md:inline">{part.label}</span>
            <span className="md:hidden">{part.shortLabel}</span>
            {activeIdx === i && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* ─── Part Header ──────────────────────── */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className={cn('w-3 h-3 rounded-full', activePart.accent)} />
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {activeIdx < 6 ? `Part ${activeIdx + 1}` : 'Appendices'} &middot; {activePart.range}
          </span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{activePart.label}</h3>
      </div>

      {/* ─── Chapter Cards (animated) ─────────── */}
      <div key={animKey} className="space-y-3 max-w-3xl mx-auto">
        {activePart.chapters.map((ch, j) => (
          <div
            key={`${activeIdx}-${ch.num}`}
            className={cn(
              'group flex items-stretch rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-foreground/20',
              'opacity-0 animate-[slideUp_0.4s_ease-out_forwards]',
            )}
            style={{ animationDelay: `${j * 70}ms` }}
          >
            {/* Chapter Number Badge */}
            <div
              className={cn(
                'flex items-center justify-center w-20 shrink-0 transition-colors',
                activePart.accentLight,
              )}
            >
              <span className={cn('text-2xl font-extrabold', activePart.accentText)}>
                {typeof ch.num === 'number' ? ch.num : ch.num}
              </span>
            </div>

            {/* Chapter Content */}
            <div className="flex-1 px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  {typeof ch.num === 'number' ? `Chapter ${ch.num}` : `Appendix ${ch.num}`}
                </p>
                <h4 className="font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                  {ch.title}
                </h4>
              </div>
              <BookOpen className="w-5 h-5 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors shrink-0" />
            </div>

            {/* Left accent bar */}
            <div className={cn('w-1 shrink-0', activePart.accent, 'opacity-0 group-hover:opacity-100 transition-opacity')} />
          </div>
        ))}
      </div>

      {/* ─── Progress / Stats Bar ─────────────── */}
      <div className="mt-10 flex items-center justify-center gap-1.5 max-w-3xl mx-auto">
        {PARTS.map((part, i) => (
          <button
            key={i}
            onClick={() => handleTabClick(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-500 cursor-pointer',
              activeIdx === i
                ? `${part.accent} flex-[3]`
                : 'bg-border flex-1 hover:bg-muted-foreground/30',
            )}
            aria-label={`Go to ${part.label}`}
          />
        ))}
      </div>
    </div>
  )
}
