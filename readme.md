# ⚙️ Easy Object Keys Converter

Use to convert objects keys in 🐪 camel case to 🐍 snake case or underscore and in the same way as snake case to camel case.

### Installation

#### npm

```sh
  npm i easy-object-conv
```

#### yarn

```sh
  yarn add easy-object-conv
```

## 💻 Usage

### Camel Case to Snake Case (underscore)

```sh
  import { camelCaseToSnakeCase } from "easy-object-conv"
  ...
  camelCaseToSnakeCase(object)
  ...
```

#### Input

```sh
  {
    id: 1,
    fieldOne: Bruno,
    fieldTwo: {
      fieldThree: Hello,
      fieldFour: World
    }
  }
```

#### Output

```sh
  {
    id: 1,
    field_one: Bruno,
    field_owo: {
      field_three: Hello,
      field_four: World
    }
  }
```

### Snake Case (underscore) to Camel Case

```sh
  import { snakeCaseToCamelCase } from "easy-object-conv"
  ...
  snakeCaseToCamelCase(object)
  ...
```

#### Input

```sh
  {
    id: 1,
    field_one: Bruno,
    field_owo: {
      field_three: Hello,
      field_four: World
    }
  }
```

#### Output

```sh
  {
    id: 1,
    fieldOne: Bruno,
    fieldTwo: {
      fieldThree: Hello,
      fieldFour: World
    }
  }
```

#### Thank You for Use! 🧑🏻‍💻
