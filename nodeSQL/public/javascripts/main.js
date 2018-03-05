(()=>{

  console.log("connected");
let getButtons = document.querySelectorAll('.getButton');
let deleteButton = document.querySelectorAll('.deleteButton');
let postButton = document.querySelectorAll('.postButton');
let putButton = document.querySelectorAll('.putButton');

function fetchData()
{
  let url = "api/"+this.id;

  fetch(url)
  .then((resp) =>resp.json())
  .then((data)=>{console.log(data)
  })
  .catch(function(error){
    console.log(error);
  });
}

function deleteData()
{
  let url = "api/"+this.id;

  fetch(url, {method : 'delete'})
  .then((resp) =>resp.json())
  .then((data)=>{console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
}

function postData()
{
  let url = "api/"+this.id;

  fetch(url, {
    method : 'post',
    headers: {
      'Accept': 'application/json, text-plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      model: "F55",
      modelName : "Mini Cooper F55",
      pricing: "27790",
      modelDetails: "It’s the turbocharged motoring icon, with more handles to love. The MINI 5 door boasts the same iconic good looks as its 3 door brother, but features an extra pair of passenger doors for practical access to its spacious cabin. And despite its slightly longer frame, the MINI 5 door’s wide, athletic stance and wheels-pushed-out design deliver the corner-carving agility you’d expect from any MINI.",
      imgPath: "F55.jpg"
    })
  })
  .then((resp) =>resp.json())
  .then((data)=>{console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
}

function putData()
{
  let url = "api/"+this.id;

  fetch(url, {
    method : 'put',
    headers: {
      'Accept': 'application/json, text-plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      model: "F55 - Just changing",
      modelName : "Mini Cooper F55 - Just changing",
      pricing: "27790 - Just changing",
      modelDetails: "It’s the turbocharged motoring icon, with more handles to love. The MINI 5 door boasts the same iconic good looks as its 3 door brother, but features an extra pair of passenger doors for practical access to its spacious cabin. And despite its slightly longer frame, the MINI 5 door’s wide, athletic stance and wheels-pushed-out design deliver the corner-carving agility you’d expect from any MINI. - Just changing",
      imgPath: "F55.jpg - Just changing"
    })
  })
  .then((resp) =>resp.json())
  .then((data)=>{console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
}

getButtons.forEach(button => button.addEventListener('click', fetchData));
deleteButton.forEach(deletebtn => deletebtn.addEventListener('click', deleteData));
postButton.forEach(postbtn => postbtn.addEventListener('click', postData));
putButton.forEach(putbtn => putbtn.addEventListener('click', putData));

})();
