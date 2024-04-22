import React from "react";
import * as S from "../../components/Projetos/ProjetosStyle";
import page from "../../assets/img/page.png";
import mec from "../../assets/img/mec.png";
import nasa from "../../assets/img/nasa.png";
import selfcare from "../../assets/img/selfcare.png";
export default function Projetos() {
  return (
    <S.ContainerProjeto>
      <S.BoxProject>
        <img src={nasa} alt="Nasa Picture" />
        <a href="https://github.com/JulioCssar/NASA-Picture-of-the-day-Project">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>
      <S.BoxProject>
        <img src={mec} alt="Menu Mec" />
        <a href="https://github.com/JulioCssar/Projeto-McDonald-s">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>
      <S.BoxProject>
        <img src={page} alt="Website" />
        <a href="https://github.com/JulioCssar/website?tab=readme-ov-file">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>
      <S.BoxProject>
        <img src={selfcare} alt="Landing Page" />
        <a href="https://github.com/JulioCssar/Desafio-SelfCare-Vai-na-Web">
          <button>Ver Projeto</button>
        </a>
      </S.BoxProject>
    </S.ContainerProjeto>
  );
}
