import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
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

      {/* Mission Statement Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Они уже{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">ПОХУДЕЛИ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Реальные истории людей, которые изменили своё тело и почувствовали разницу в жизни.
            </p>
          </motion.div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA for Vitaliy */}
      <section id="join" className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-6">Виталий, это для тебя</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Твоё тело умеет
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                восстанавливаться.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-2xl mx-auto">
              Посмотри на их истории. Каждый из них начинал так же — с сомнений и лишнего веса. Сегодня они дышат
              легко, спят крепко и живут полностью. Это доступно каждому, кто решится начать.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">-25 кг</div>
                <div className="text-gray-400 text-sm tracking-wide">максимальный результат</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-700" />
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">3–6</div>
                <div className="text-gray-400 text-sm tracking-wide">месяцев до результата</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-700" />
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">0</div>
                <div className="text-gray-400 text-sm tracking-wide">причин откладывать</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Image */}
      <section className="relative">
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
