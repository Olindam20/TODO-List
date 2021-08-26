
function getAndUpdate(){
  tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            if (localStorage.getItem('itemsJson')==null){
                itemJsonArray=[];
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray=[];
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                itemJsonArray.push([tit,desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            update();

}

        function update(){
          if (localStorage.getItem('itemsJson')==null){
                itemJsonArray=[];
               
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArrayStr = localStorage.getItem('itemsJson')
                 itemJsonArray = JSON.parse(itemJsonArrayStr);
            
            }
        
            console.log("Updating List")
            
              //populate the table
        let tableBody= document.getElementById("tableBody");
        let str="";
        itemJsonArray.forEach((element,index) => {
            str += `
            <tr>
                <th scope="row">${index +1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
              </tr>`;
        });
        tableBody.innerHTML=str;

        }
        add=document.getElementById("Add");
        add.addEventListener("click",getAndUpdate);
        update();
        function deleted(itemIndex){
            console.log("Delete", itemIndex);
            itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray=[];
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                //Delete itemIndex element from the array
                itemJsonArray.splice(itemIndex,1);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                update();
        }

     function clearstorage()
     {
       if(confirm("Do you want to clear the list?")){
       localStorage.clear();
       console.log("Clearing the storage");
       update();}
       
     }
      
