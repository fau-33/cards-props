import Image from "next/image";
import estilos from "./CardProduto.module.css";

export default function CardProduto(props) {
  return (
    <div className={estilos.card_container}>
      <div>
        <Image src={props.imagem} alt={props.nome} />
      </div>
      <div>
        <h3>{props.nome}</h3>
        <p>R${props.preco}</p>
        <small>{props.categoria}</small>
        <button>Adicionar</button>
      </div>
    </div>
  );
}
