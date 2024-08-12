
 const  input=document.getElementById('input-field');


 function display(){
    setTimeout(fetchData,1000);
 }

 async function fetchData(term) {
     
    let res= await fetch(`https://dummyjson.com/products/search?q=${input.value}`);
    let result=await res.json();
    console.log(result);

 }
 fetchData();


