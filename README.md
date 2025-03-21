# Hannahs Portfolio Project

## instructions to get started

- Download something to install npm like brew (mac) or use a tool already on the computer
- clone your project onto your computer using 
```git clone https://github.com/hannahmthomas1/deploy-portfolio.git```
- open the project using terminal (ie cd ./deploy-portfolio) or via vs code
- use the terminal to install the npm packages
```npm install```

## Development
To view the project in the development mode follow the steps from "instructions to get started" then use
```npm run start``` to launch a developer mode

## Deployment
Once you are ready to deploy your project use the following as a guide
- make sure to commit your changes to the main branch
- make sure that the project builds successfully
```npm run predeploy```
- if it builds successfully then run
```npm run deploy```
- you can check its progress at https://github.com/hannahmthomas1/deploy-portfolio/actions
- once completed it's build process on github actions you may need to update the page url again to be custom
- go to https://github.com/hannahmthomas1/deploy-portfolio/settings/pages and set the Custom domain to hannah.luebke.app
- wait a little bit and you should be good to go