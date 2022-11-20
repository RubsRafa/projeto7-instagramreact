import React from "react";

export default function Usuario() {
  const [nome, setNome] = React.useState ('Catana');
  const [imagem, setImagem] = React.useState ('assets/img/catanacomics.svg');
  const usuarios = [{ url: "assets/img/catanacomics.svg", nomeFantasia: 'catanacomics', nomeUsuario: 'Catana' }];

  function mudarNome () {
    setNome (prompt ("Qual é o seu nome?"))
  }

  function mudarImagem () {
    setImagem (prompt("Qual será sua foto de perfil?"))
  }
  console.log (setNome)
  console.log (setImagem)
  return (
    <div class="usuario" data-test="user">
      <img onClick={mudarImagem} data-test="profile-image" src={imagem} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
        <h1 data-test="name">{nome}</h1>
          <ion-icon onClick={mudarNome} data-test="edit-name" name="pencil"></ion-icon>
        </span>
      </div>
    </div>
    );
}

// function Unico(props) {
//   console.log(props)
//   console.log('oi')
//   return (
//     <div class="usuario" data-test="user">
//       <img data-test="profile-image" src={props.url} />
//       <div class="texto">
//         <strong>catanacomics</strong>
//         <span>
//         <h1 data-test="name">{props.nomeUsuario}</h1>
//           <ion-icon data-test="edit-name" name="pencil"></ion-icon>
//         </span>
//       </div>
//     </div>
//   )
// }