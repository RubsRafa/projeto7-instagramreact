import React from "react"

let contador = 0; 

export default function Posts() {
  
  const posts = [{ img: "assets/img/meowed.svg", nome: 'meowed', conteudo: "assets/img/gato-telefone.svg", curtidas: "assets/img/respondeai.svg", curtido: 'respondeai', quantidade: 101523 },
  { img: "assets/img/barked.svg", nome: 'barked', conteudo: "assets/img/dog.svg", curtidas: "assets/img/adorable_animals.svg", curtido: 'adorable_animals', quantidade: 99159 }]

  return (
    <div class="posts">
      {posts.map ((p) => <Post key={p.nome} img={p.img} nome={p.nome} conteudo={p.conteudo} curtidas={p.curtidas} curtido={p.curtido} q={p.quantidade} />)}
    </div>
  )
}

function Post(props) {

  const qtddLike = props.q;

  function curtirPorFoto () {
    setCoracao (<ion-icon onClick={descurtir} class="like" name="heart-sharp"></ion-icon>);
    contador = 1;
  }


  const [coracao, setCoracao] = React.useState (<ion-icon onClick={curtir} data-test="like-post" name="heart-outline"></ion-icon>);
  const [salva, setSalva] = React.useState (<ion-icon onClick={salvar} data-test="save-post" name="bookmark-outline"></ion-icon>);




  function curtir () {
    setCoracao (<ion-icon onClick={descurtir} class="like" name="heart-sharp"></ion-icon>);
    contador = 1;
  }
  function descurtir () {
    setCoracao (<ion-icon onClick={curtir} data-test="like-post" name="heart-outline"></ion-icon>)
    contador = 0;
  }


  function salvar () {
    setSalva (<ion-icon onClick={dessalvar} name="bookmark-sharp"></ion-icon>)
  }
  function dessalvar () {
    setSalva (<ion-icon onClick={salvar} data-test="save-post" name="bookmark-outline"></ion-icon>)
  }




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

      <div onClick={curtirPorFoto} class="conteudo">
        <img data-test="post-image" src={props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {coracao}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
          {salva}
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidas} />
          <div class="texto">
          Curtido por <strong>{props.curtido}</strong> e <strong data-test="likes-number">outras {qtddLike + contador} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}