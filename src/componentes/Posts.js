export default function Posts() {
  const posts = [{ img: "assets/img/meowed.svg", nome: 'meowed', conteudo: "assets/img/gato-telefone.svg", curtidas: "assets/img/respondeai.svg", curtido: 'respondeai', quantidade:'101.523' },
  { img: "assets/img/barked.svg", nome: 'barked', conteudo: "assets/img/dog.svg", curtidas: "assets/img/adorable_animals.svg", curtido: 'adorable_animals', quantidade:'99.159' }]

  return (
    <div class="posts">
      {posts.map ((p) => <Post img={p.img} nome={p.nome} conteudo={p.conteudo} curtidas={p.curtidas} curtido={p.curtido} quantidade={p.quantidade} />)}
    </div>
  )
}

function Post(props) {
  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image" src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidas} />
          <div class="texto">
          Curtido por <strong>{props.curtido}</strong> e <strong data-test="likes-number">outras {props.quantidade} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}