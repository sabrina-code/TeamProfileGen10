const employeeTemplate = require("./template/employeeTemplate.js");

function generateHTML(data) {
  // $("#template").append(engTeam.html);
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"> 
        <title>My Team</title>
        <style>
          body{
            font-family: 'Nanum Gothic', sans-serif;
          }
          h1, h2, h3, h4 p {
            font-family: 'Nanum Gothic', sans-serif;
            font-weight: 200;
            margin: 0;
          }
          h1 {
          font-size: 30pt;
          padding: 15px 15px;
          }
          h2 {
          font-size: 25pt;
          padding: 10px 15px;
          }
          h3 {
          font-size: 20pt;
          padding: 10px 15px;
            }
          p {
          font-size: 14pt;
          margin: 5px 15px;
          }
          a {
            text-decoration: none;
            color: black;
          }
          .jumbotron{
              background-color: #3f3f3f;
              padding-top: 60px;
              padding-bottom: 60px;
              color:white;
              text-align: center;
          }
          .team{
            margin: 60px auto;
            width: 80%;
            text-align: center;
          }
          .infocard{
            width: 270px;
            min-height: 340px;
            text-align: center;
            margin:10px;
            display: inline-block;
            background-color: white;
            border: 1px solid #888;
          } 
          .role{
            padding-top:20px;
            padding-bottom: 15px;
          }
           #manager h2{
             background-color: #658762;
             padding-top: 30px;
             padding-bottom: 25px;
           } 
           #engineer h2{
            background-color: #67749d;
            padding-top: 30px;
            padding-bottom: 25px;
          } 
          #intern h2{
            background-color: #9f9e94;
            padding-top: 30px;
            padding-bottom: 25px;
          } 
        </style>      
      </head>
           
      <body>
      <div class="jumbotron jumbotron-fluid">
        <h1 class="container">My Team</h1>
      </div>
      <div class="team container">
      ${employeeTemplate(data)}
      </div>
      </body>
  </html>`;
}

module.exports = generateHTML;
