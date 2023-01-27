

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## About the Project

Call scheduling.

## Libraries

React Hook Form - A library that handles forms in React

``` 
npm i react-hook-form @hookform/resolvers zod

```
 [Design System](https://github.com/diego3g/05-design-system) - Design System that was built into one of the Ignite modules

 ``` 
 npm i @ignite-ui/react@latest

```
 ESLint  - ESLint to make it easier to maintain code standards.
 
```
 npm i @rocketseat/eslint-config -D
 
```

```
{
  "extends": [
    "@rocketseat/eslint-config/react",
    "next/core-web-vitals"
  ]
}

```

[Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js

```
npm i axios

```
[Nookies](https://github.com/maticzav/nookies) - Handling cookies in next.js

```
npm i nookies 

npm i @types/cookie -D

```

## Back-End Prisma 
 
Prisma on Next.js

Prisma command line interface installation command:

```
npm i prisma -D

```

Command to install the dependency that we will use in our application:

```
npm i @prisma/client

```

Command to start Prisma:

```
npx prisma init --datasource-provider SQLite

```

Comando pra rodar a migration:

```
npx prisma migrate dev

```

Command to run Prisma Studio:

```
npx prisma studio

```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
