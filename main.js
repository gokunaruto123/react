import "./style.css"
function Main(){
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
    return(
<main>
            <nav class="menu-vertical">
                <ul>
                    <li class="botoes-meunu-vertical">Início</li>
                    <li class="botoes-meunu-vertical">Em alta</li>
                    <li class="botoes-meunu-vertical">Inscrições</li>
                    <hr></hr>
                    <li class="botoes-meunu-vertical">Originais</li>
                    <li class="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section class="painel-de-videos">
                <div class="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>
    )
}
export default Main