(()=>{
let getButtons = document.querySelectorAll('.getButton');
let deleteB = document.querySelectorAll('.delete');

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

  fetch(url, {metod : 'delete'})
  .then((resp) =>resp.json())
  .then((data)=>{console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
}

getButtons.forEach(button => button.addEventListener('click', fetchData))
deleteB.forEach(deletebtn => deletebtn.addEventListener('click', deleteData))

})();
