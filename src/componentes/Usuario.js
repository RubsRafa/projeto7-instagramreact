
export default function Usuario() {

  //const usuarios = [{ url: "assets/img/catanacomics.svg", nomeFantasia: 'catanacomics', nomeUsuario: 'Catana' }];

  return (
    <Unico />
  )
}

function Unico(props) {
  return (
    <div class="usuario" data-test="user">
      <img data-test="profile-image" src="assets/img/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
        <h1 data-test="name">Catana</h1>
          <ion-icon data-test="edit-name" name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  )
}