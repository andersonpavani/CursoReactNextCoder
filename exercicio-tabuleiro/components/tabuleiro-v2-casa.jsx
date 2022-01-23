import styles from "./tabuleiro-v2-casa.module.css"

export default function TabuleiroCasa(props) {
    
    const casaBranca = props.linhaIndice % 2 == props.casaIndice % 2 ? " " + styles["casa-branca"] : "";
    
    return (
        <div className={styles.casa + casaBranca}></div>
    );
}