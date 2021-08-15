function htmlBody(employeeCard){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
    </head>
    
    <body>
        <header class="jumbotron">
            <h1 class="display-5ß">My Team</h1>
        </header>
    
        <div class="container">
    
            <div class="row">
                    
              ${employeeCard}

            </div>



            </body>
            
            </html>
    `
}

module.exports=htmlBody