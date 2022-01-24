import listaProdutos from '../../data/listaProdutos'

export default function repeticao() {

    function renderizarLinhas() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={{borderBottom: '1px solid #888'}}>{produto.id}</td>
                    <td style={{borderBottom: '1px solid #888'}}>{produto.nome}</td>
                    <td style={{borderBottom: '1px solid #888'}}>{produto.preco}</td>
                </tr>
            );
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr style={{backgroundColor: '#888', color: '#fff'}}>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    );
}