import styles from "./tabuleiro-v2-linha.module.css"
import TabuleiroCasa from "./tabuleiro-v2-casa"

export default function TabuleiroLinha(props) {
    const casas = [];

    for (let i = 0; i <= 7; i++) {
        casas.push(
            <TabuleiroCasa linhaIndice={props.linhaIndice} casaIndice={i} />
        );
    }

    return (
        <div className={styles.linha}>
            {casas}
        </div>
    );
}