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
  import { camelToSnake } from "easy-object-conv"
  ...
  camelToSnake(object)
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
    field_two: {
      field_three: Hello,
      field_four: World
    }
  }
```

### Snake Case (underscore) to Camel Case

```sh
  import { snakeToCamel } from "easy-object-conv"
  ...
  snakeToCamel(object)
  ...
```

#### Input

```sh
  {
    id: 1,
    field_one: Bruno,
    field_two: {
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
