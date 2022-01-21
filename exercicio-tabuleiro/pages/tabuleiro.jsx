import styles from "./tabuleiro.module.css"



export default function tabuleiro() {
    return (
        <div className={styles.tela}>
            <div className={styles.tabuleiro}>
                <div className={styles.linha}>
                    <div className={styles.casa} style={{backgroundColor: "white"}}></div>
                    <div className={styles.casa}></div>
                    <div className={styles.casa} style={{backgroundColor: "white"}}></div>
                </div>
                <div className={styles.linha}>
                    <div className={styles.casa}></div>
                    <div className={styles.casa} style={{backgroundColor: "white"}}></div>
                    <div className={styles.casa}></div>
                </div>
            </div>
        </div>
    );
}