# LDT Company Website

Welcome to the LDT Company website project! This project is built using Strapi, a headless CMS, to manage content and provide flexibility in delivering content across different platforms.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
  - [Development](#development)
  - [Staging](#staging)
  - [Production](#production)
  - [Build](#build)
- [Notes](#notes)
- [License](#license)

## Overview

LDT Company is focused on designing and constructing interior spaces. Our website is powered by Strapi, allowing us to easily manage and update content in a headless CMS structure. This gives us the ability to customize and scale our website with ease while also keeping the content separate from the frontend.

### `Run develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run dev
# or
yarn dev
```

### `Run staging`

```
npm run dev:staging
# or
yarn dev:staging
```

### `Run production`

```
npm run dev:production
# or
yarn dev:production
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

## 📚 Run the Containers

Open a terminal in the same directory as docker-compose.yml and run:

```
docker-compose up -d
```

If you need to reset the database, run:

```
docker-compose down -v
```

Rebuild:

```
docker-compose up --build -d
```

If you encounter issues, check logs:

```
docker logs -f strapi_app
docker logs -f strapi_postgres
```

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

For Local development

```
brew services start postgresql
brew services stop postgresql
```
