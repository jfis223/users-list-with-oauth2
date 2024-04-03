# Joaquín Fischer - Prueba Técnica Frontend x Cloud District

### Features

- React
- Redux
- Clean architecture
- Vite
- Dependency Injection with Inversify
- Typescript
- Axios
- Styled Components
- Yup + React Hook Form
- Passport.JS with Express
- Cypress for E2E tests


### Installation

1) Please install these packages to install the project.

- nvm
- just

2) Run the following command to install the node version declared in the `.nvmrc`
file for this project:

```shell
nvm install
```

3) Enable corepack.

```shell
just corepack-enable
```

4) Set Environment Variables

Create a `.env` file with these variables in the root folder:

```
VITE_APP_API_URL=https://reqres.in
VITE_APP_AUTH_URL=http://localhost:3000
```
Also, create another `.env` file with these variables in the `backend`  folder:
```
GOOGLE_CLIENT_ID=XXXXX
GOOGLE_CLIENT_SECRET=XXXXX
GITHUB_CLIENT_ID=XXXXX
GITHUB_CLIENT_SECRET=XXXXX
FACEBOOK_APP_ID=XXXXX
FACEBOOK_APP_SECRET=XXXXX
AMAZON_APP_ID=XXXXX
AMAZON_APP_SECRET=XXXXX
CLIENT_URL=http://localhost:5173/
```

5) Install dependencies

```shell
just install-deps
```

6) Run!

```shell
just dev-back # in one terminal window
just dev # in another terminal window
```

### Testing
```shell
just e2e-run
```
```shell
just e2e-open
```
