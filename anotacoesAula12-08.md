### Anotações gerais 12/08/2024
## Infos sobre React
# Arquivo index.html
- O arquivo index em um projeto React geralmente se refere ao arquivo index.js ou index.tsx que serve como ponto de entrada da aplicação. Ele é responsável por montar o aplicativo React no DOM (Document Object Model) do navegador. Aqui está um exemplo típico do que você pode encontrar em um arquivo index.js:
    - Esse arquivo é essencial, pois ele conecta a lógica da sua aplicação React ao HTML que será mostrado ao usuário.
# Arquivo main.tsx
- O arquivo main.js ou main.tsx em um projeto de desenvolvimento web, especialmente em projetos construídos com frameworks como Vue.js, Angular, ou em configurações específicas de React, costuma desempenhar um papel semelhante ao do index.js. Ele é o ponto de entrada principal da aplicação e é responsável por configurar e iniciar o aplicativo.

- Funções Comuns do main.js:
    - Inicialização da Aplicação:
        - Similar ao index.js, ele pode conter o código que monta o aplicativo principal no DOM.

    - Configurações Iniciais:
        - Pode ser utilizado para configurar bibliotecas globais, definir variáveis de ambiente, ou aplicar configurações de runtime antes de iniciar a aplicação.

    - Carregamento de Estilos Globais:
        - Pode importar arquivos CSS ou outros estilos globais que precisam estar disponíveis em toda a aplicação.
# Arquivo App.tsx
- Função do App.tsx:
    - Componente Raiz: 
        - O App.tsx é o componente onde outros componentes são agregados. Ele age como o contêiner principal da aplicação.

    - Estrutura de Layout: 
        - Pode definir a estrutura básica do layout da aplicação, incluindo cabeçalhos, rodapés, barras laterais, etc.

    - Rotas: 
        - Se você estiver usando uma biblioteca de roteamento como React Router, o App.tsx geralmente contém a configuração das rotas, controlando quais componentes são exibidos com base na URL.

    - Estado Global: 
        - Se você estiver utilizando um gerenciador de estado como Redux ou o Context API do React, o App.tsx pode ser o local onde esses estados são configurados e providos para outros componentes.