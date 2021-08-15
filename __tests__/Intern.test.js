const Intern = require("../lib/Intern")
describe("test intern constructor", function () {
    test("test intern's properties,", function () {
        const employee = new Intern("Noah", 12345, "12345@gmail.com")

        expect(employee.name).toBe("Noah")
        expect(employee.id).toBe(12345)
        expect(employee.email).toBe("12345@gmail.com")
    })
})