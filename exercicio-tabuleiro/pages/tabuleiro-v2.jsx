import styles from "./tabuleiro-v2.module.css"
import TabuleiroLinha from "../components/tabuleiro-v2-linha";

export default function tabuleiro_v2() {
    const linhas = [];

    for (let i = 0; i <= 7; i++) {
        linhas.push(
            <TabuleiroLinha linhaIndice={i} />
        );
    }

    return (
        <div className={styles.tela}>
            <div className={styles.tabuleiro}>
                {linhas}
            </div>
        </div>
    );
}