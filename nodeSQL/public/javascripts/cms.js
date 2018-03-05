(()=>{
console.log("cms");

var submit = document.querySelector(".add-data");
let targetForm = document.querySelector('form')

function addR(event)
{
  event.preventDefault();
  // debugger;
  console.log("working?");

var formData = new FormData(targetForm),
strData = {};

for (var [key, value] of formData.entries())
{
  console.log(key, value);

  strData[key] =  value;
}

let url = "/api";

fetch(url, {
  method : 'post',
  headers: {
    'Accept': 'application/json, text-plain, */*',
    'Content-type': 'application/json'
  },
  body: JSON.stringify(strData)
})
.then((resp) =>resp.json())
.then((data)=>{console.log(data);
})
.catch(function(error){
  console.log(error);
});

}

submit.addEventListener('click', addR)
})();
