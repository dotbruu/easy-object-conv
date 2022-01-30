import { snakeToCamel } from '../index'

describe("Camel Case Tests", ()=> {

  const makeFakeInput = ()=> ({
    test_one: "test",
    test_two: {
      test_three: "test",
    },
    test_four: "test",
  })
  const makeFakeOutput = ()=> ({
    testOne: "test",
    testTwo: {
      testThree: "test",
    },
    testFour: "test",
  })

  it("should be convert object keys snake case to camel case with success", ()=> {
    const actual = snakeToCamel(makeFakeInput())
    expect(actual).toEqual(makeFakeOutput())
  })
})
