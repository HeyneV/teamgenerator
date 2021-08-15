function card(employeeDB){
   let newInfo=""
   if (employeeDB.getRole()==="Manager"){
      newInfo = `  <p class="school">Office Number: ${employeeDB.officeNumber}</p>`
   }
   else if (employeeDB.getRole()==="Engineer"){
    newInfo = `  <p class="g">GitHub: ${employeeDB.github}</p>`
   }
   else {
    newInfo = `  <p class="g">School: ${employeeDB.school}</p>`
   }

   return `
   <div class="column">
   <div class="card">
       <h1>${employeeDB.name}</h1>
       <p class="title">${employeeDB.getRole()}</p>
       <p class="id">ID:${employeeDB.id}</p>
       <p class="email"><a href="mailto:${employeeDB.email}">Email:${employeeDB.email}</a></p>
       ${newInfo}
   </div>
</div>

   `
}




module.exports=card