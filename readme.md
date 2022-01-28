# ⚙️ Easy Object Converter

Use to convert objects in 🐪 camel case to 🐍 snake case or underscore and in the same way as snake case to camel case.

### Installation

#### npm

```sh
  npm i easy-object-conv
```

#### yarn

```sh
  yarn add easy-object-conv
```

### 💻 Usage

#### Camel Case to Snake Case (underscore)

```sh
  import { camelCaseToSnakeCase } from "easy-object-conv"
  ...
  camelCaseToSnakeCase(object)
  ...
```

#### Snake Case (underscore) to Camel Case

```sh
  import { snakeCaseToCamelCase } from "easy-object-conv"
  ...
  snakeCaseToCamelCase(object)
  ...
```

### Note

It will work on objects that have other objects in their structure.

#### Example

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

## Thank You for Use! 🧑🏻‍💻
