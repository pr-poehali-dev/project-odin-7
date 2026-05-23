import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Улучшение здоровья и качества жизни, а не просто достижение определённого числа на весах. Снижение веса должно быть направлено на уменьшение жировой ткани при сохранении мышечной массы и общего благополучия. Это позволяет снизить риски развития заболеваний, повысить физическую активность и улучшить самочувствие."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Правильное питание",
      title: "Правильное питание",
      description:
        "Создай умеренный дефицит калорий — около 300–500 ккал в сутки. Упор на белок: он сохраняет мышцы и даёт чувство сытости. Минимизируй сахар, белый хлеб и фастфуд. Ешь больше овощей, цельных круп и нежирного мяса.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Физическая активность",
      title: "Физическая активность",
      description:
        "Сочетай кардио и силовые тренировки. Кардио (ходьба, бег, велосипед) сжигает калории, а силовые тренировки сохраняют и наращивают мышцы, ускоряя обмен веществ. Достаточно 3–4 занятий в неделю по 45–60 минут.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Режим и восстановление",
      title: "Режим и восстановление",
      description:
        "Сон не менее 7–8 часов — без него жировой обмен нарушается, а аппетит усиливается. Контролируй уровень стресса: кортизол провоцирует накопление жира на животе. Регулярность важнее интенсивности — лучше делать понемногу каждый день, чем всё сразу раз в неделю.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">ГЛАВНАЯ ЦЕЛЬ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">ЧТО НУЖНО ДЕЛАТЬ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Три ключевых направления, которые дают результат при системном подходе.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
