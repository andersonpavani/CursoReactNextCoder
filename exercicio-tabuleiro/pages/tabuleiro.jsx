import styles from "./tabuleiro.module.css"

function criarTabuleiro() {
    const linhas = [];

    for (let x = 0; x <= 7; x++) {
        const casas = [];

        for (let y = 0; y <= 7; y++) {
            const casaBranca = x % 2 == y % 2 ? " " + styles["casa-branca"] : "";
            casas.push(
                <div className={styles.casa + casaBranca}></div>
            );
        }

        linhas.push(
            <div className={styles.linha}>
                {casas}
            </div>
        );
    }

    return linhas;
}

export default function tabuleiro() {
    return (
        <div className={styles.tela}>
            <div className={styles.tabuleiro}>
                {criarTabuleiro()}
            </div>
        </div>
    );
}