# Astro & WordPress Project

## Introdução
Este projeto utiliza Astro.js como frontend e WordPress como backend em modo headless, com cada parte hospedada em seu próprio container Docker. O Astro proporciona um ambiente de desenvolvimento moderno e eficiente para o frontend, enquanto o WordPress atua como um sistema de gerenciamento de conteúdo robusto no backend.

## Pré-requisitos
Antes de iniciar, certifique-se de ter o seguinte software instalado em seu sistema:
- Docker
- Node.js (Recomendado: Node 14 ou superior)
- npm ou yarn

## Configuração
Para configurar o projeto para desenvolvimento local, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone git@github.com:andrefelipeweb/Wordpress-Astro.js.git
   de um cd nome-da-pasta

2. Navegue até a pasta do frontend e inicialize o Docker:
   ```bash
   cd frontend
   docker-compose up --build

3. Em um novo terminal, navegue até a pasta do backend e inicialize o Docker:
   ```bash
   cd ../backend
   docker-compose up --build

3. Acesse o frontend do Astro no http://localhost:3000 e o backend do WordPress no http://localhost:8000.

## Uso
Para usar o aplicativo, abra http://localhost:3000 no seu navegador para acessar o frontend desenvolvido com Astro. Para gerenciar o conteúdo no WordPress, acesse http://localhost:8000/wp-admin no seu navegador.

## Contribuição
Contribuições são sempre bem-vindas! Siga estes passos para contribuir:

1. Fork o repositório.
2. Crie uma nova branch (git checkout -b feature/nova-feature).
3. Faça suas alterações.
4. Commit suas mudanças (git commit -am 'Adiciona nova feature').
5. Push para a branch (git push origin feature/nova-feature).
6. Abra um Pull Request.

##Suporte
Se você encontrar algum problema, abra uma issue no repositório GitHub do projeto.
