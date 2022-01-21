import Titulo from "../../components/Titulo";

export default function usandotitulo() {
    return (
        <div>
            <Titulo 
                titulo="Meu Título" 
                subtitulo="Meu Subtitulo"
            />
            <Titulo 
                titulo="Meu Título" 
                subtitulo="Meu Subtitulo"
                pequeno
            />
            <Titulo 
                titulo="Meu Título" 
                subtitulo="Meu Subtitulo"
                pequeno={true}
            />
        </div>
    );
}