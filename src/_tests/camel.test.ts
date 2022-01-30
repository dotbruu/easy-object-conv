import { camelToSnake } from '../index'

describe("Camel Case Tests", ()=> {

  const makeFakeInput = ()=> ({
    testOne: "test",
    testTwo: {
      testThree: "test",
    },
    testFour: "test",
  })
  const makeFakeOutput = ()=> ({
    test_one: "test",
    test_two: {
      test_three: "test",
    },
    test_four: "test",
  })

  it("should be convert object keys camel case to snake case with success", ()=> {
    const actual = camelToSnake(makeFakeInput())
    expect(actual).toEqual(makeFakeOutput())
  })
})
