<script setup lang="ts">
import { NavBar } from '@/features/navigation'
import { Hero } from '@/features/hero'
import { LogosStrip } from '@/features/logos'
import { BentoFeatures } from '@/features/bento-features'
import { Testimonials } from '@/features/testimonials'
import { Comparison } from '@/features/comparison'
import { Pricing } from '@/features/pricing'
import { Faq } from '@/features/faq'
import { CtaBanner } from '@/features/cta'
import { Contact } from '@/features/contact'
import { Footer } from '@/features/footer'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
    <div
      class="pointer-events-none absolute top-[-220px] left-1/2 z-0 h-[760px] w-[1100px] -translate-x-1/2 opacity-50 blur-[40px]"
      style="
        background: radial-gradient(closest-side at 30% 40%, color-mix(in oklch, var(--accent) 30%, transparent), transparent),
          radial-gradient(closest-side at 72% 30%, color-mix(in oklch, var(--accent-2) 24%, transparent), transparent);
      "
    />

    <NavBar />
    <Hero />
    <LogosStrip />
    <BentoFeatures />
    <Testimonials />
    <Comparison />
    <Pricing />
    <Faq />
    <CtaBanner />
    <Contact />
    <Footer />
  </div>
</template>
