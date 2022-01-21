export default function Estilo(props) {
    return (
        <div style={{backgroundColor: props.numero >= 0 ? "#3d3" : "#d33"}}>
            Texto
        </div>
    );
}