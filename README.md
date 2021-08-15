# teamprofilegenerat

<img width="1440" alt="Screen Shot 2021-08-15 at 6 18 47 PM" src="https://user-images.githubusercontent.com/81537925/129494373-cbae3ed5-2d9b-43d3-82f9-a2f554a8fb80.png">





This Team Profile Generator allows employees to be added along with their roles, emails, Github profiles or school. The profiles then appear in cards on a webpage.


AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

1. I have created an HTML page that is nicely formatted and displays the team information in separate cards. 

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

1. When you click on the email link it opens in an email browser to compose an email

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

1. When I click on the link to the Github the employee's Github page opens in a new browser. 

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

1. I am prompted to enter the manager's information first. 

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

1. Once I enter the manager's information I am prompted to enter the information of the engineer or intern which I do.

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

1. When I select the engineer option I am prompted to enter the information that is required.

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

1. When I select the intern option I am prompted to enter the information that is required.

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

1. When I select generate team the team is created in the terminal as well as on the webpage.
