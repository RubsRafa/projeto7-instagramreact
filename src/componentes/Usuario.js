let nome = prompt ('Qual é o seu nome?')

export default function Usuario () {
        return (
            <div class="usuario">
              <img src="assets/img/catanacomics.svg" />
              <div class="texto">
                <strong>catanacomics</strong>
                <span>
                  {nome}
                  <ion-icon name="pencil"></ion-icon>
                </span>
              </div>
            </div>
        )    
    }
