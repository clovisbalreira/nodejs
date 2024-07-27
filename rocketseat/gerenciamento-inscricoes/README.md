criar node
npm init -y

pacote typescript
npm i typescript @types/node -D

executar binarios - cria arquivo tsconfig.json
npx tsc --init

converter javascript para typescript
npx tsc

pacote tsx
npm i tsx -D

executar arquivo typescript sem converter
npx tsx src/server.ts

Ficar observando a alteração do arquivo
npx tsx watch src/server.ts

executar o node
npm run dev

pacote fastify
npm i fastify

pacote prisma
npm i prisma -D

iniciando SQLite
npx prisma init --datasource-provider SQLite

ver mudanças no prisma
npx prisma migrate dev

gerenciar banco de dados
npx prisma studio

pacote zod
npm i zod
npm i fastify-type-provider-zod
npx tsx --env-file .env watch src/server.ts