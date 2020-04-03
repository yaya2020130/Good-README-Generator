// inpute inquirer pacakage
const fs =require("fs")
const inquirer = require("inquirer")
const axios=require("axios")

const yaya = `# title
## description
----
### table of contents 
---
### instalation
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






// collect user inpute 
inquirer
.prompt([
  { 
    type:"input",
    name:"github",
     message:"github username?"
  },
  {
    type:"input",
    name:"description",
   
    message:"do you want a description?"
  
  },
  
  {
    type:"input",
    name:"table of contents",
    message:"what do you want include  in your table ?"
  
  },

  {
    type:"input",
    name:"instaltion",
    message:"what do you like to call your this section?"
 
  },

  {
    type:"input",
    name:"usage",
    message:"what do you want this to be used for ?"
 
  },


  {
    type:"input",
    name:"license",
    message:"what license do you want ?"
 
  },

  {
    type:"input",
    name:"contributers",
    message:"who conrtibuted in the project ?"
 
  },

  {
    type:"input",
    name:"test",
    message:"what do you want this to be used for ?"
 
  },


   {
     type:"inpute",
     name:"email",
     message:"what is your email?"
  
   },
  
  ]).then(function(response){
    const yaya = `# ${response.username}

  ## ${response.description}




  ### ${response.tableofcontents}


  ---



  ### ${response.instalation}




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

  






  //   const queryUrl= `https://api.github.com/users/${username}?
  
  // console.log(queryUrl)
  
  
  
  
  
  // // cons 
  
  
  
  // // console.log(myHTML);
  
  // // fs.writeFile('index.html',myHTML,err=>{
  // // if(err){
  // //   return console.log(error)
  // // }
  // // console.log("yaya")
  // // })
  // // });
