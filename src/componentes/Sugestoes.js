export default function Sugestoes () {

    const sugestoes = [{url: "assets/img/bad.vibes.memes.svg", nome: 'bad.vibes.memes', razao: 'Segue você'},
    {url: "assets/img/chibirdart.svg", nome: 'chibirdart', razao:'Segue você'},
    {url: "assets/img/razoesparaacreditar.svg", nome: 'razoesparaacreditar', razao:'Novo no Instagram'},
    {url: "assets/img/adorable_animals.svg", nome: 'adorable_animals', razao:'Segue você'},
    {url: "assets/img/smallcutecats.svg", nome: 'smallcutecats', razao:'Segue você'}];

    return (
      <div class="sugestoes">
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
    {sugestoes.map ((s) => <Sugestao key={s.nome} url={s.url} nome={s.nome} razao={s.razao} />)}
  </div>
    )
}

function Sugestao (props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.url} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}