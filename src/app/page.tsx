import { CopyRight } from "@/components/CopyRight";

const portfolioUrl = "";
const githubUrl = "https://github.com/eugeniagiuliodori";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f8f5] text-[#333e38]">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* Encabezado */}
        <header className="flex items-center justify-between border-b border-[#dfe4dd] py-7">
          <a
            href="#inicio"
            className="font-serif text-xl tracking-wide"
          >
            María Eugenia
          </a>

          <a
            href="#contacto"
            className="text-sm text-[#657569] transition-colors hover:text-[#355c4c]"
          >
            Contacto
          </a>
        </header>

        {/* Presentación */}
        <section
          id="inicio"
          className="flex min-h-[65vh] flex-col justify-center py-24"
        >
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-[#718d7a]">
            Un poco sobre mí
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.18] tracking-tight sm:text-6xl md:text-7xl">
            Hola, soy
            <span className="block text-[#65836f]">
              María Eugenia Giuliodori
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-[#626b63] sm:text-xl">
            Me gusta aprender, crear y encontrar sentido
            en lo que hago. Creo en el valor del conocimiento,
            en la curiosidad que nos impulsa a explorar y en
            la posibilidad de construir algo que aporte
            positivamente a otras personas.
          </p>

          <div className="mt-12 h-px w-20 bg-[#a8bcaa]" />
        </section>

        {/* Recorrido */}
        <section className="border-t border-[#e2e6df] py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="font-serif text-3xl text-[#426451]">
              Mi camino
            </h2>

            <div className="space-y-7 text-base leading-8 text-[#59635c] sm:text-lg">
              <p>
                Encontré en el desarrollo de
                software un espacio que reúne varias de las
                cosas que disfruto: pensar, investigar,
                resolver problemas, aprender continuamente
                y transformar ideas en algo concreto.
              </p>

              <p>
                No considero el aprendizaje como una etapa que
                termina, sino como una parte esencial de mi
                manera de vivir y de desarrollarme
                profesionalmente.
              </p>
            </div>
          </div>
        </section>

        {/* Manera de trabajar */}
        <section className="border-t border-[#e2e6df] py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="font-serif text-3xl text-[#426451]">
              Lo que valoro
            </h2>

            <div className="space-y-7 text-base leading-8 text-[#59635c] sm:text-lg">
              <p>
                Valoro la responsabilidad, la honestidad,
                el pensamiento crítico y la disposición
                a seguir aprendiendo, incluso cuando
                aparecen dificultades.
              </p>

              <p>
                Me interesa comprender lo que hago, no
                solamente alcanzar un resultado. Disfruto
                explorar distintas posibilidades, hacer
                preguntas y encontrar soluciones que tengan
                sentido dentro de su contexto.
              </p>

              <p>
                También creo en la colaboración como una
                oportunidad para compartir perspectivas,
                ampliar nuestra comprensión y construir
                mejores resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Aspiraciones */}
        <section className="border-t border-[#e2e6df] py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
            <h2 className="font-serif text-3xl text-[#426451]">
              Hacia adelante
            </h2>

            <div className="space-y-7 text-base leading-8 text-[#59635c] sm:text-lg">
              <p>
                Aspiro a seguir creciendo profesionalmente,
                participando en proyectos que representen
                desafíos reales y me permitan aportar
                mis capacidades mientras desarrollo otras
                nuevas.
              </p>

              <p>
                Me entusiasma la posibilidad de formar parte
                de equipos donde se valore el compromiso,
                el aprendizaje compartido y el respeto
                por las personas.
              </p>

              <p>
                Más allá de los objetivos profesionales,
                me interesa continuar construyendo un camino
                que sea coherente con mis valores y con
                aquello que considero significativo.
              </p>
            </div>
          </div>
        </section>

        {/* Enlace al portfolio */}
        <section className="border-t border-[#e2e6df] py-24 text-center sm:py-32">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#718d7a]">
            Mi trabajo
          </p>

          <h2 className="font-serif text-4xl text-[#426451] sm:text-5xl">
            De las ideas a los proyectos
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#626b63] sm:text-lg">
            Si querés conocer una parte más técnica de mi
            recorrido, te invito a explorar mi portfolio,
            donde comparto algunos de mis trabajos y
            experiencias de desarrollo.
          </p>

          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#426451] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#324f3e]"
          >
            Conocer mi portfolio
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        {/* Despedida */}
        <section className="border-t border-[#e2e6df] py-20 text-center">
          <p className="mx-auto max-w-lg font-serif text-2xl leading-relaxed italic text-[#65836f] sm:text-3xl">
            &ldquo;Seguir aprendiendo también es una forma
            de seguir descubriendo quiénes podemos ser.&rdquo;
          </p>
        </section>

        {/* Pie */}
        <footer
          id="contacto"
          className="flex flex-col gap-5 border-t border-[#dfe4dd] py-9 text-sm text-[#748077] sm:flex-row sm:items-center sm:justify-between"
        >
         <CopyRight/>

          <div className="flex gap-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#355c4c]"
            >
              GitHub
            </a>

            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#355c4c]"
            >
              Portfolio
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
