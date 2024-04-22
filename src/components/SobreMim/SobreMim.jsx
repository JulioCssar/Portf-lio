import React from 'react'
import * as S from './SobreMimStyle'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import django from '../../assets/img/django.png'
import python from '../../assets/img/python.png'
export default function SobreMim() {
  return (
    <S.CaixaSobre>
      <h2>Olá! Me chamo Júlio e gosto MUITO de tecnologia. Desde sempre, alimento o desejo de mergulhar de cabeça nesse universo profissionalmente. Com um ano de experiência em estudos e projetos, sinto que estou no caminho certo para alcançar meu objetivo. Uma das minhas maiores qualidades é minha habilidade de comunicação, o que me permite trabalhar muito bem em equipe. Adoro colaborar com outras pessoas, acredito que juntos somos mais fortes e podemos alcançar resultados incríveis. Estou animado para enfrentar os desafios que a área de tecnologia me reserva e contribuir para soluções inovadoras.</h2>
      <h3>Habilidades</h3>
      <S.CaixaIcones>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <S.Icones>
        <img src={django} alt="django" />
        <img src={python} alt="python" />
        </S.Icones>
        
      </S.CaixaIcones>


    </S.CaixaSobre>
  )
}
