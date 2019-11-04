import { print } from "../src/greeting"

describe("Hello", () => {
  it("Say hi to Pepe", () => {
    expect(print("Pepe")).toEqual("Hello Pepe!")
  })
})