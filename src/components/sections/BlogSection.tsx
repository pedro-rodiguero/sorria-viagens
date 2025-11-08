import React from "react";
import { FaArrowRight } from "react-icons/fa";
// It's good practice to import images that are part of the component's content.
// Assuming the image is in an assets folder relative to this component.
import blogImage from "../../assets/blog-image.jpg"; // Example: Update with the correct path to your image

const blogContent = {
  title: "Uma preocupação a menos ao planejar seu casamento",
  paragraphs: [
    "Se nesse momento da sua vida você só quer que alguém te ajude a ter que parar de tomar as milhares de pequenas decisões sobre o casamento, você está no lugar certo.",
    "Estatisticamente, a lua de mel é o item menos pensado para o casamento. E isso não acontece por acaso, realmente, nunca sobra tempo e disposição para planejar… Afinal, é só uma viagem e você até pode descobrir o que fazer na hora… Mas não precisa ser assim.",
    "Com a consultoria da Sorria Viagens, todos os detalhes que você sonha em ter na lua de mel podem se tornar realidade, sem que você tenha que pensar nisso.",
    "Nada de ficar esperando que seu noivo adivinhe o que você quer nos dias depois do casamento. A gente sabe, e vai proporcionar isso a vocês. Aquela massagem gostosa depois de meses estressantes de planejamento, o jantar à luz de velas que vocês merecem, o passeio para tomar um vinho inesquecível… plim plim… você vai viver tudo isso!",
  ],
};

export const BlogSection = () => {
  return (
    // --- Responsive Blog Section ---
    <section
      id="blog"
      className="flex flex-col items-center justify-center gap-16 py-20 px-4 sm:px-8 w-full"
    >
      <header className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-4xl md:text-5xl font-playfair font-normal text-gray-800">
              Nosso blog
          </h2>

          <div className="w-36 h-1 bg-[#ff7757]" role="presentation" />
        </div>

        <p className="text-lg md:text-xl font-rubik font-normal text-gray-600">
          Dicas e Experiências de Viagem: Descubra o Mundo Conosco!
        </p>
      </header>

      <article className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-7xl">
        {/* Blog Image */}
        <img
          src={blogImage}
          className="w-full lg:w-1/2 h-auto max-h-[600px] object-cover rounded-2xl shadow-lg"
          aria-label="Imagem do blog sobre planejamento de casamento"
          alt="Mulher de costas olhando para uma paisagem de montanhas"
        />

        {/* Blog Content */}
        <div className="flex-1 flex flex-col items-start gap-6 text-left">
          <h3 className="text-4xl md:text-5xl font-playfair font-normal text-gray-800 leading-tight">
            {blogContent.title}
          </h3>

          <div className="font-rubik font-normal text-gray-700 text-lg text-justify leading-relaxed space-y-4">
            {blogContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href="#read-more"
            className="flex items-center gap-3 text-[#ff7757] transition-opacity hover:opacity-80"
            aria-label="Leia mais sobre uma preocupação a menos ao planejar seu casamento"
          >
            <span className="font-rubik font-normal text-xl">
              Read More
            </span>

            <FaArrowRight className="text-[#ff7757]" aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  );
};
