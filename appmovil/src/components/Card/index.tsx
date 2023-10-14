import React from "react";
import { TouchableOpacityProps } from 'react-native';
import { Container, Tag, Title, Amount } from './styles';

export type CardProps = {
  id: string;
  tipo_de_gasto: string;
  valor: number;
  title: string; 
  color:string;
};

type Props = TouchableOpacityProps & {
  selected: boolean;
  data: CardProps;
}

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Card({ data, selected,title,color, ...rest }: Props) {
  // Generar un color aleatorio para cada tarjeta
  const randomColor = getRandomColor();
  return (
    <Container selected={selected} color={color} {...rest}>
      <Tag color={color} />

      <Title>
        {title}
      </Title>

      <Amount>
        {data.valor ? (
          data.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        ) : (
          'Valor no válido' // O cualquier otro mensaje de error que desees mostrar
        )}
      </Amount>
    </Container>
  );
}