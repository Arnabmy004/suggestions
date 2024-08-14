
 const  input=document.getElementById('input-field');
const resultcontainer=document.getElementById('result-container');

let timeout=null;
 function display(){
    clearTimeout(timeout);
   timeout= setTimeout(()=>{
      fetchData(input.value);
   },500);
 }

async function fetchData(value) {
     
    let res= await fetch(`https://dummyjson.com/products/search?q=${value}`);
    let result=await res.json();
   
    let products=result.products;
    //console.log(products);
  resultcontainer.innerHTML = "";
    products.forEach((v)=> {
     const div=document.createElement('div');
      div.innerText=`${v.title}`;
      resultcontainer.appendChild(div);
      console.log(v.title);
     
    });
}



