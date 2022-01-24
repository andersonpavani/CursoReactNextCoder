export default function repeticao1() {

    const listaAprovados = [
        'Ana',
        'Joaquim',
        'Lauro',
        'Pedro',
        'Tiago',
        'Daniel',
        'Israel',
        'Daniele'
    ];

    function renderizarLista() {
        return (
            <>
                <li>Elemento #1</li>
                <li>Elemento #2</li>
                <li>Elemento #3</li>
            </>
        );
    }

    function renderizarListaJSX() {
        const itens = [];

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>);
        }

        return itens;
    }

    function renderizarListaJSXMap() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
    }

    return (
        <>
            <h1>Lista Estática</h1>
            <ul>
                {renderizarLista()}
            </ul>
            <h1>Lista com Array para JSX</h1>
            <ul>
                {renderizarListaJSX()}
            </ul>
            <h1>Lista com Array para JSX usando MAP</h1>
            <ul>
                {renderizarListaJSXMap()}
            </ul>
        </>
    );
}