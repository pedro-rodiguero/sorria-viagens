import React from "react";
import { FaArrowRight } from "react-icons/fa";
import blogImage from "../../assets/blog-image.jpg";
import "./blog.scss";

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
    <section id="blog" className="blog-section">
      <header className="blog-header">
        <div className="title-container">
          <h2>Nosso blog</h2>
          <div className="divider"></div>
        </div>

        <p>Dicas e Experiências de Viagem: Descubra o Mundo Conosco!</p>
      </header>

      <article className="blog-content">
        <img
          src={blogImage}
          alt="Mulher de costas olhando para montanhas"
          className="blog-image"
        />

        <div className="blog-text">
          <h3>{blogContent.title}</h3>

          <div className="paragraphs">
            {blogContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <a href="#read-more" className="read-more">
            <span>Read More</span>
            <FaArrowRight />
          </a>
        </div>
      </article>
    </section>
  );
};
