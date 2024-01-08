import MovieImage from "./movie.png";
import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
  return (
    <div>
      <h2>Oops!!</h2>
      <p>O conteúdo que você procura não foi encontrado!!</p>
      <img
        src={MovieImage}
        alt="Imagem não encontrada"
        className={styles.imagem}
      />
    </div>
  );
}

export default NaoEncontrada;
