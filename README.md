# Recursive UI

## Requirements
- Node 16
- npm or yarn


### How to install
- run `yarn install` to get the neccessary dependencies
- run `yarn start` to start the application
- Then go to http://localhost:3000 in your browser

NOTE:: If Build dailed after running the above command, create a .babelrc file and add the following content :: {
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]
}


## Prompt

Implement a React application that can:

- Allow the user to input a URL in a text box 

- Allow the user to click a button that submits the URL to the parsedhtml
  endpoint found at `server/routes.js` 

- Display the response visually using a folder structure where html elements
  with children have the folder icon displayed next to the html tag name and
  html elements without children have the file icon displayed next to their html
  tag name 

- Indentation should be used to show parent/child relationships among html
    elements 

- Enable clicking on items in the folder structure for
    expanding and collapsing 
    
- Allow the user to clear the folder structure by clicking on a button that
  says, "Clear" 


## Approach Taken

- The app was styled using basic object method for the purpose of this test.
- The fetchApi was used to fetch the parsedHtml from the endpoint given.
- I made use of a recursive component to display the folder structure, The FileArray component calls itself for n number of times until it reaches a base case i.e it keeps calling itself till we reach an item that doesn’t have any more children. The Component takes props as listed below:
  - name --  html tag name 
  - content -- The tag representation
  - level -- A variable indicating the current level of a particular tag, I used this to compute the indentation
- I also have an isOpen state used to control the expanding and collapsing  of items in the folder structure 



## Areas For Improvement

-In a dev environment, we can set up the styling using varirties of technologies such as 
  - Tailwind Css
  - CSS Modules
  - Styled Component
  - SCSS
- Setting up env file

