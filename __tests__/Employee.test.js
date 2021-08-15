const Employee =require("../lib/Employee")
describe("test employee constructor",function(){
    test("test employee's properties,",function(){
       const employee=new Employee("Verna",34567,"vkheyne@gmail.com")

       expect(employee.name).toBe("Verna")
       expect(employee.id).toBe(34567)
       expect(employee.email).toBe("vkheyne@gmail.com")
    })
})