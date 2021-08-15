var read=require('readline-sync')
const chalk = require('chalk');

var name=read.question('Hey what is your name?  ')
//display name
console.log(chalk.green(`Hello (-_-) ${name} ,welcome!`));
//marks
var marks=0

//Question 1
var age=read.question("If you know me tell me what's my age!  ")
var x=age==21?true:false
if(x===true){
marks+=1
console.log(chalk.green(`Nice! Score: ${marks}`))
}
else
{
 console.log(chalk.red("Wrong boo -_-"))
}
//21

//Question 2
var place=read.question("Tell me where I Live:  ")
var p=place=="kanpur"?true:false
if(p===true){
marks+=1
console.log(chalk.green(`Damn Boiii You rockin,Score: ${marks}`))
}
else
{
  console.log(chalk.red("Wrong boo -_-"))
}
//kanpur
//Question 3
var game=read.question("Tell me which sport I love:  ")
var s=game=="basketball"?true:false
if(s===true){
marks+=1
console.log(chalk.green(`On Fire my G, Score: ${marks}`))
}
else
{
  console.log(chalk.red("Wrong boo -_-"))
}
//basketball
//Question 4
var game=read.question("Tell me which  Book I love:  ")
var s=game=="Alchemist"?true:false
if(s===true){
marks+=1
console.log(chalk.green(`On Fire my G, Score: ${marks}`))
}
else
{
  console.log(chalk.red("Wrong boo -_-"))
}
//Alchemist

//Question 5
var game=read.question("Tell me which Movie I love:  ")
var s=game=="Life Of Pi"?true:false
if(s===true){
marks+=1
console.log(chalk.green(`On Fire my G, Score: ${marks}`))
}
else
{
  console.log(chalk.red("Wrong boo -_-"))
}
//Life Of Pi

if(marks==3)
{
  console.log("You Know me well, Here's a badge of honor")
  var pattern=10
var l 
var k
var c 
var m 
var n
for(l=0;l<pattern;l++)
{c=""
  for(k=0;k<l;k++)
  {
    c+="$"  
  }

  m=""
  for(k=0;k<l;k++)
  {
    m+=" "  
  }
  
  n=""
  for(k=0;k<l;k++)
  {
    n+="$"  
  }
  console.log(chalk.blue(c+m+n))
  
}
for(l=pattern;l>=0;l--)
{c=""
  for(k=0;k<l;k++)
  {
    c+="$"  
  }

  m=""
  for(k=0;k<l;k++)
  {
    m+=" "  
  }
  
  n=""
  for(k=0;k<l;k++)
  {
    n+="$"  
  }
  console.log(chalk.red(c+m+n))
  
}
}
else
{
  console.log("Better Luck Next Time")
}
