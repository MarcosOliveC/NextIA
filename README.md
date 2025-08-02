**1. Efetuar o Download do projeto**

Abra o link do github do projeto e realize o donwload da pasta indo no botão verde "Code" e clicar em "Donwload ZIP". Para extrair os arquivos será necessário um software comum de compactação de arquivos, como Winrar. Deverá mover o arquivo para o local de escolha e extraí-lo.

**2. Instalação do VSCode**

Após, será necessário a instalação do VSCode, podendo ser encontrado no site oficial da Microsoft: https://code.visualstudio.com/
Após baixar, execute o arquivo de instalação e siga as orientações padrões já providas pelo mesmo.

**3. Abrir a pasta do site no VSCode**

Após a instalação, retorne até o local escolhido para manter a pasta do site, clique com o botão direito e escolha a opção "Abrir com Code". Dessa forma, o VSCode irá abrir com o diretório do site já aberto.

**4. Instalar o Node no dispotivio**

Após, será necessário a instalação do Node.JS no dispositivo. Primeiro, vá ao site de download oficial do Node.js através deste link: https://www.nodejs.tech/pt-br/download
Após, execute a aplicação e realize a instalação com as configurações padrões já providas pelo instalador. 
Após, execute novamente o PowerShell e digite o seguinte código: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
O powershell irá solicitar a permissão do usuário, então digite "a" e aperte a tecla Enter.

**5. Instalando demais dependências**

Vá ao VSCode, na mesma janela em que foi aberta no passo 3 e abra o terminal indo na aba "Terminal" no canto superior da janela e depois em "New Terminal" ou "Novo Terminal". 
Após o terminal carregar, digite: npm install
O comando irá instalar em seu VSCode as demais dependências que o código possuir para que o site possa ser aberto em rede local no seu computador.

**6. Inicie o código**

Uma vez que todas as dependências estão instaladas, o usuário pode iniciar o servidor de forma local em sua rede. Com o terminal ainda aberto, digite o comando: npm run dev

Isso irá iniciar as aplicações do Next.js, possibilitando o acesso ao site de forma local. Vá em seu navegador e digite na barra de pesquisa: http://localhost:9002 
Dessa forma, o usuário terá acesso ao projeto.

