import styles from "./integracao2.module.css" //Tem que colocar *.module.css para que o next entenda que é um css scopado e transforme em objeto

export default function integracao() {
    return (
        <>
            <div className={styles.vermelha}>
                Texto #01
            </div>
            <div className={styles.azul}>
                Texto #02
            </div>
            <div className={styles.branca}>
                Texto #03
            </div>
        </>
    );
}