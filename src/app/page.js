import estilos from "./page.module.css";
import CardProduto from "./components/CardProduto";

import ImgProduto1 from "@/assets/hamburger.jpg";
import ImgProduto2 from "@/assets/coca-cola.jpg";
import ImgProduto3 from "@/assets/sorvete.jpg";

export default function Home() {
  return (
    <main className={estilos.container_principal}>
      <CardProduto
        imagem={ImgProduto1}
        nome={"Hambuguer"}
        preco={10.99}
        categoria={"Lanches"}
      />
      <CardProduto
        imagem={ImgProduto2}
        nome={"Coca-cola"}
        preco={7}
        categoria={"Bebida"}
      />
      <CardProduto
        imagem={ImgProduto3}
        nome={"Sorvete"}
        preco={12}
        categoria={"Sobremesa"}
      />
    </main>
  );
}
