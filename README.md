Esse é um projeto para o conteúdo da semana 16, sobre `RTL`.

### Antes de iniciar

Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://github.com/facebook/create-react-app).

Ápos feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch`, verifique se apareceu as branches:

  `exercise-one`
  `exercise-2`
  `exercise-3`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one`: `git checkout exercise-one`. Nessa branch é onde vocẽ realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Ápos a solução dos exercícios, abra um PR no repositório, se quiser pode merger para a master, fique livre!

Atenção, quando for criar o PR você se deparará com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança, clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório, seu nome estará na frente do nome dele, exemplo `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Ápos mudança](images/after-change.png)

Ai só criar o pr clicando no botão `Create Pull Request`.

Para cada exercício realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Teste as configurações iniciais do jogo, como ele começa:

- Campos vazios;
- Sem mensagem de Fim de jogo;
- 9 Casas renderizadas.

Fique livre para adicionar novos testes.

#### Exercício 2

Teste o comportamento de cada casa, alguns exemplos:

- O símbolo mudar quando clica em uma e depois em outra, mostrando a troca do jogador;
- Casa não pode ser mudada depois de escolhida por algum jogador;

Caso tenha dúvida volte no conteúdo ou olhe na documentação, lembre que abordamos apenas algumas querys, tem outras que podem ser utilizadas.

#### Exercício 3 

Agora você fará funcionalidade de acordo com o teste já criado para ela.

Precisamos saber quando que o jogo acaba, os testes já foram realizados, mas se roda-lós verá que nenhum passa. Essa funcionalidade ainda não está pronta e precisa ser criada.

Crie a aplicação observando os teste, eles te guiaram para realiza-lá. 

Bônus - Nossos testes não cobrem caso de empate ou quem foi o ganhador.

- Crie uma mensagem para ver quem é o vencedor ou quando acontecer o empate.
- Crie os teste para essa nova funcionalidade.
- Adicione um botão para recomeçar o jogo. Crie os teste para ele.
