var url = "https://api2.binance.com/api/v3/ticker/24hr";
var header =document.createElement("h1");
header.innerText="CRYPTO CURRENCY";
body.appendChild(header);
fetch(url)
.then((crypto) => { 
    return crypto.json()
 })
.then((data) => {
  
    for (let i = 0; i < 100; i++){
        var body = document.getElementById("body");
        var div = document.createElement("div");
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        
        var td = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4= document.createElement("td");
     
        body.appendChild(div);
        div.appendChild(table);
        table.appendChild(tr);
        
        tr.append(td,td1,td2,td3,td4,);
        


        td.innerText = data[i].symbol;
        td1.innerText = data[i].count;
        td2.innerText = data[i].openPrice;
        td3.innerText=data[i].askPrice;
        td4.innerText=data[i].askQty;
        
    }
})