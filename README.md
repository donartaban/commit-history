# Commit-History project
Monorepo we can find both projects:

  1.- Frontend in /frontend folder. The technology is Javascript with Angular as framework https://angular.io/ for styles Bootstrap https://ng-bootstrap.github.io/#/home and Material Design https://material.angular.io/
  
  2.- Backend in /backend folder. The technology is Nodejs with Nestjs https://nestjs.com/ as framework
  
# Run the project
We have 2 ways to run the project:

  1.- Docker/Docker compose
  
  2.- Locally with 2 terminals
  
# Run the project with Docker
We will need the following tools to be able to run this application with Docker:

1.-Install Docker Deskopt https://www.docker.com/products/docker-desktop/

2.-Install Docker Compose https://docs.docker.com/compose/install/

3.-Operating System with bash compatibility. Could be:

    - Windows with Linux subsystem https://learn.microsoft.com/es-es/windows/wsl/install
    
    - MacOS
    
    - Any Linux Distribution
    
4.-Github Personal Access Token
    
When you have all tools installed please go to the root of the project and you will see two important files. 'docker-compose.yml' and 'run.sh'.
It is important to provide a Github Personal Access Token created previously then run the following command:

```bash
./run.sh <github_personal_access_token>
```
When all are ready you open your browser and go to http://localhost:4300 and you will see the frontend app. If you want to test the availability of backend just go to http://localhost:4200

# Run the project locally
If you would like to see both apps running locally in diferents consoles, please follow the next instructions:

1.- Run the backend
  - Install Node 14 https://nodejs.org/en/  
  - Open a new console and go to the /backend folder and run 'npm i'
  - In the root of the /backend folder copy the content of the file '.env.example' and paste it in a new file called '.env'
  - Inside the new '.env' file replace the variable called 'GITHUB_TOKEN' with your token
  - Finally run 'npm run start:dev' to run up in development mode
  
2.- Run the frontend
  - Install Node 14 https://nodejs.org/en/  
  - Install angular cli https://angular.io/cli
  - Open a new console and go to the /frontend folder and run 'npm i'
  - Finally run 'npm run start' to run up in development mode
  - Go to http://localhost:4300 to see the app
  
# Author
My name is Gerardo Ruiz this is my contact data:

Email: ggantus89@gmail.com
