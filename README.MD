# Desafio implementador front-end: React, HTML, CSS & JS


### Instruções para o desafio

- **Fork** esse repositório e faça o desafio numa branch com o seu nome (exemplo: `nome-sobrenome`)
- Assim que concluir o seu desafio, abra um **pull request** com suas alterações


### Desafio
- O desafio consiste em implementar uma *SPA* a partir de um layout pré-estabelecido, conforme abaixo:
    - Realizar uma consulta de processos e visualizar o resultado
    - Visualizar os detalhes de processo
    - Inserir, editar e excluir um processo
- Siga os [protótipos](https://www.figma.com/proto/BTa9Vpz4S1XUscURxANvFH5Z/DESAFIO?node-id=19%3A70&scaling=scale-down&redirected=1) e o [guideline](https://www.figma.com/proto/BTa9Vpz4S1XUscURxANvFH5Z/DESAFIO?node-id=27%3A1&scaling=contain&redirected=1) disponibilizados ao máximo

***


### Considerações de desenvolvimento aos avaliadores
- Sobre o projeto
    - Para criar o projeto do zero utilizei o create-react-app, ferrameta disponibilizada pelo Facebook amplamente utilizada 
    para facilitar a criação de novos projetos. A estrutura básica gerada do projeto não foi alterada.
    - Para gerenciar os estados da aplicação decidi utilizar Redux, que é uma bibliotéca bastante conhecida e utilizada.
    - Para o layout foi utilizado Material-UI, conjunto de componentes que implementam Material Design do Google, foi escolhido por ser 
    bastante utilizado e facilitar o desenvolvimento, diminuíndo bastante a quantidade de CSS que deve ser gerenciado.
- Sobre o desenvolvimento
    - Antes de iniciar esse projeto, eu não tinha experiências anteriores com Redux e nem com Material-UI, aproveitei a oportunidade
    do desafio para ter um contato iniciar com essas ferramentas.
    - Redux, em particular, foi a parte mais trabalhosa, e que necessitou de um tempo considerável para aprender a utilizar, o que 
    pesou bastante no tempo total gasto.
- Pontos a melhorar
    - Utilização de docker foi deixado fora dos entregáveis, visto a falta de tempo para dedicar ao estudo de como utilizar a
    ferramenta, à qual não tenho experiências anteriores usando.
    - Teste de código também foi deixado para melhoramentos futuros.
    - Apesar de estar utilizando Redux, a implementação do formulário da aplicação não esta ideal, e seria ponto para ser melhorado,
    juntamente com a validação dos campoos.
    - A aplicação não esta com layout totalmente responsivo, e existem partes para ser melhoradas no layout.
- Considerações finais
    - O botão de editar o processo esta desativado por, dentre os endpoints disponibilizados, não ter um para edição de processo.
    - Considerando os pontos de melhoria que citei, o foco que decidi dar no projeto foi na arquitetura geral, tentando ser
    o mais simples possível, deixando o projeto simples para melhorias.

### Scripts
Os scripts devem ser rodados no diretório raiz do projeto /buscador-de-processos, e antes de rodar os scripts deve primeiramente ser
baixadas as dependências com `npm install`.

### `npm start`
Roda a aplicação em modo de desenvolvimento.

### `npm run build`
Faz o build do projeto para modo de produção (na pasta build)

### Demais scripts
Na pasta raiz do projeto existe outro arquivo chamado README, o qual foi gerado automaticamente e tem a lista completa de
todos scripts possíveis de se rodar, entre outras informações complementares.

### Avaliação e feedback
Desde já, agradeço a oportunidade do processo seletivo, e independente do resultado do processo seletivo, agradeço por qualquer feedback que possam dar, seja negativo ou positivo :)
