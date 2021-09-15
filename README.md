# NY Times Most Popular Articles

A web app that consumes the NY Times Most Popular Articles API and show a list of articles. When an article is selected from the list, it redirects to the full article page.

## Table of contents

- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [To install dependencies run](#to-install-the-dependencies-run)
- [To irun tests](#to-run-the-tests)
- [To generate the test report](#to-generate-the-test-report)
- [Starting the application](#starting-the-application)

## Dependencies

- [Node](https://nodejs.org/en/download/) - A Javascript runtime environment.
- [React](https://github.com/facebook/create-react-app) - A Javascript library for building user interfaces.
- A package manager - [yarn](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com/)

## Prerequisites

Clone the repository:

```
git clone https://github.com/Qadriyah/articles-challenge.git
```

Then change to the project directory:

```
cd articles-challenge
```

#### To install the dependencies run:

```
yarn install or npm install
```

This will install all the dependencies defined in the `package.json` file inside the project root directory.

### To run the tests:

```
yarn run test
```

### To generate the test report:

```
yarn run test:ci
```

### Starting the application

```
yarn start
```

This will run the application and it can be accessed at:

```
http://localhost:3000
```
