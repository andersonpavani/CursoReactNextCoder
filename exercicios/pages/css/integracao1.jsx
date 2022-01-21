//import "./integracao1.css" 
//Não funciona, desta maneira o css é aplicado globalmente e o next não permite isso aqui, para aplicar globalmente, tem que ser importado em _app.js

export default function integracao() {
    return (
        <>
            <div className="vermelha">
                Texto #01
            </div>
            <div className="azul">
                Texto #02
            </div>
            <div className="branca">
                Texto #03
            </div>
        </>
    );
}