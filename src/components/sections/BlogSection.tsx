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
    // SUGGESTION: Using absolute positioning with large pixel values can make the layout brittle and not responsive.
    // Consider using a more flexible layout system (like CSS Grid or Flexbox for the page structure)
    // to avoid overlapping sections and ensure it looks good on different screen sizes.
    <section className="flex flex-col w-[1920px] items-start justify-center gap-[100px] px-[182px] py-[140px] absolute top-[2400px] left-[-5px]">
      <header className="flex items-center self-stretch w-full flex-[0_0_auto] gap-8 relative">
        <div className="items-start inline-flex flex-col gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#172432] text-[64px] tracking-[0] leading-[normal]">
              Nosso blog
            </h2>

            {/* Replacing the line SVG with a styled div is cleaner */}
            <div className="w-[150px] h-[3px] bg-[#ff7757]" role="presentation" />
          </div>

          <p className="relative w-fit [font-family:'Rubik-Regular',Helvetica] font-normal text-[#767e86] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            Dicas e Experiências de Viagem: Descubra o Mundo Conosco!
          </p>
        </div>
      </header>

      <article className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {/* Using an actual <img> tag is often better for SEO and accessibility than a div with a background image. */}
        <img
          src={blogImage}
          className="relative w-[762px] h-[873px] rounded-[26px] object-cover"
          aria-label="Imagem do blog sobre planejamento de casamento"
          alt="Mulher de costas olhando para uma paisagem de montanhas"
        />

        <div className="gap-6 flex-1 grow flex flex-col items-start relative">
          <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-[#172432] text-[54px] tracking-[0] leading-[normal]">
            {blogContent.title}
          </h3>

          {/* Using CSS for spacing is cleaner than adding <br /> tags */}
          <div className="relative self-stretch [font-family:'Rubik-Regular',Helvetica] font-normal text-[#172432] text-2xl text-justify tracking-[0] leading-10 space-y-6">
            {blogContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href="#"
            className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
            aria-label="Leia mais sobre uma preocupação a menos ao planejar seu casamento"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Rubik-Regular',Helvetica] font-normal text-[#ff7757] text-2xl tracking-[0] leading-[52px] whitespace-nowrap">
              Read More
            </span>

            <FaArrowRight className="text-[#ff7757]" aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  );
};
