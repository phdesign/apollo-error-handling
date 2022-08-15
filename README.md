# Apollo Error Handling

This project demonstrates using [Apollo's formatError](https://www.apollographql.com/docs/apollo-server/data/errors/#masking-and-logging-errors) to customise error responses from Apollo server.

# Usage

Install dependencies

```
npm install
```

Run serverless offline

```
npm start
```

View the graphql GUI at [http://localhost:3000/](http://localhost:3000/)

# Examples

1. A valid response

```
query ExampleQuery {
  hello
}
```

2. An internally thrown error

```
query ExampleQuery {
  error
}
```

![Internal error](img/internal-error.png?raw=true)

3. A GraphQL error

```
query ExampleQuery {
  notfound
}
```

![GraphQL error](img/graphql-error.png?raw=true)
