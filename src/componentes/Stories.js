export default function Stories() {

    const stories = [{url:"assets/img/9gag.svg", nome:'9gag'},
    {url:"assets/img/meowed.svg", nome:'meowed'},
    {url:"assets/img/barked.svg", nome:'barked'},
    {url:"assets/img/nathanwpylestrangeplanet.svg", nome:'nathanwpylestrangeplanet' },
    {url:"assets/img/wawawicomics.svg", nome:'wawawicomics'},
    {url:"assets/img/respondeai.svg", nome:'respondeai'},
    {url:"assets/img/filomoderna.svg", nome:'filomoderna'},
    {url:"assets/img/memeriagourmet.svg", nome:'memeriagourmet'}];

    return (
        <div class="stories">
            {stories.map ((s) => <Story key={s.nome} url={s.url} nome={s.nome} />)}
            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.url} />
            </div>
            <div class="usuario">
            {props.nome}
            </div>
        </div>
            )
}