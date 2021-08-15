const Manager = require("../lib/Manager")
describe("test manager constructor", function () {
    test("test manager's properties,", function () {
        const employee = new Manager("Keith", 56789, "789@gmail.com")

        expect(employee.name).toBe("Keith")
        expect(employee.id).toBe(56789)
        expect(employee.email).toBe("789@gmail.com")
    
    })
})