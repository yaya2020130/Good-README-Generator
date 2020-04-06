// inpute inquirer pacakage
const fs =require("fs")
const inquirer = require("inquirer")
const axios=require("axios")

const yaya = `# title
## description
----
## Table of contents 


---
### Instalation
--
#### usage

--- 

#### licence 

---

#### contributing

---
#### test
 
---

#### email`






inquirer
.prompt([
  { 
    type:"input",
    name:"github",
     message:"github username?"
    
  },


  { 
    type:"input",
    name:"title",
     message:"what is the title ?"
  },

  {
    type:"input",
    name:"description",
   
    message:"what kind of project is this?"
  
  },
  
  {
    type:"input",
    name:"Tableofcontents ",
    message:"what do you want to include in your Table of contents ?"
  
  },

  {
    type:"list",
    name:"Instalation",
    choices:['npm init','downloading','buying ne app'],
    message:"what kind of instalation needed?"
 
  },

  {
    type:"list",
    name:"usage",
    choices:['install all the dependencies','npm i inquirer ','all'],
    message:"how do you install the software?"
 
  },


  {
    type:"input",
    name:"license",
    message:"what license do you want ?"
 
  },

  {
    type:"input",
    name:"contributing",
    message:"who conrtibuted in the project ?"
 
  },

  {
    type:"input",
    name:"test",
    message:"how do you test the app?"
 
  },


   {
     type:"inpute",
     name:"email",
     message:"what is your email?"
  
   },
  
  ]).then(function(response){
    
    const yaya = `# ${response.title}

  ## ${response.description}




  ## ${response.Tableofcontents}
       


  *  [Instalation]

  *  [Usage]

  *  [licence]

  *  [Tests]
  *  [Quesions]





  ### ${response.Instalation}




  #### ${response.usage}


  --- 



  #### License
  ![badge](https://img.shields.io/badge/license-MIT-yellowgreen)

   ---

  #### ${response.contributing}



  #### ${response.test}
  

  ---
  


  #### ${response.email}`



  fs.writeFile("Readme.md",yaya,err=>{
    if(err){
      return console.log(error)
    }
    console.log("yaya")
    })

    const queryUrl =`https://api.github.com/users/${response.username}?`;
axios.get(queryUrl).then(function(res){
const avatar = res.data.avatar_url;
let email=(res.data.email) ? res.data.email :response.email;
const picAndEmail=`![Avatar}(${avatar})`


fs.appendFile("Readme.md",picAndEmail,(err)=>{
  if(err){
    throw err;

  }

  console.log("readme ready")
  })
  
})   
 
});

  



