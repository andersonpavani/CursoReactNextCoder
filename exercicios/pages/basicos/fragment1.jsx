import React from "react"

export default function fragment() {
    return (
        //Fragmento é utilizado para colocar dois elementos no retorno da função sem gerar uma div padrão
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    );
}