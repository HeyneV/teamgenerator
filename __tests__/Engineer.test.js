const Engineer = require("../lib/Engineer")

describe("test engineer constructor", function () {
    test("test engineer's properties,", function () {
        const engineer = new Engineer("Jason", 45678, "123@gmail.com")

        expect(engineer.name).toBe("Jason")
        expect(engineer.id).toBe(45678)
        expect(engineer.email).toBe("123@gmail.com")
    })
})
