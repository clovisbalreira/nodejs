# Gerenciamento de Inscrições

Este projeto utiliza Node.js, TypeScript, Fastify e Prisma para gerenciar inscrições. Abaixo estão os passos para configurar e executar o projeto.

## Configuração do Ambiente

1. **Inicializar o Node.js**  
    ```bash
    npm init -y
    ```

2. **Instalar o TypeScript**  
    ```bash
    npm i typescript @types/node -D
    ```

3. **Criar o arquivo `tsconfig.json`**  
    ```bash
    npx tsc --init
    ```

4. **Converter arquivos TypeScript para JavaScript**  
    ```bash
    npx tsc
    ```

5. **Instalar o pacote `tsx` para executar TypeScript sem conversão**  
    ```bash
    npm i tsx -D
    ```

6. **Executar um arquivo TypeScript diretamente**  
    ```bash
    npx tsx src/server.ts
    ```

7. **Observar alterações nos arquivos e recarregar automaticamente**  
    ```bash
    npx tsx watch src/server.ts
    ```

8. **Executar o servidor com o Node.js**  
    ```bash
    npm run dev
    ```

## Instalação de Dependências

1. **Instalar o Fastify**  
    ```bash
    npm i fastify
    ```

2. **Instalar o Prisma**  
    ```bash
    npm i prisma -D
    ```

3. **Inicializar o Prisma com SQLite**  
    ```bash
    npx prisma init --datasource-provider SQLite
    ```

4. **Aplicar migrações no banco de dados**  
    ```bash
    npx prisma migrate dev
    ```

5. **Abrir o Prisma Studio para gerenciar o banco de dados**  
    ```bash
    npx prisma studio
    ```

## Validação de Dados

1. **Instalar o pacote `zod` e o provedor de tipos para Fastify**  
    ```bash
    npm i zod
    npm i fastify-type-provider-zod
    ```

2. **Executar o servidor com variáveis de ambiente**  
    ```bash
    npx tsx --env-file .env watch src/server.ts
    ```

## Scripts Disponíveis

- **Iniciar o servidor em modo de desenvolvimento:**  
  ```bash
  npm run dev
  ```

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- Prisma
- SQLite
- Zod

Siga os passos acima para configurar e executar o projeto. Caso tenha dúvidas, consulte a documentação oficial das tecnologias utilizadas.riar node
