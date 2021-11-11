function add(){
    if(!validateForm()){
        return;
    }
    let table = document.getElementById('table');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("itemName").value;
    cell2.innerHTML = document.getElementById("amount").value;
    cell3.innerHTML = "added";

    document.getElementById('itemName').value = '';
    document.getElementById('amount').value = '';
}

function validateForm(){
    let itemName = document.getElementById("itemName").value;
    let amount = document.getElementById("amount").value;
    if(itemName === '' || amount === ''){
        document.getElementById('error').textContent = "Invalid input";
        return false;
    } else{
        document.getElementById('error').textContent = "";
        return true;
    }
}
