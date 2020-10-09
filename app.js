var button = document.getElementById('btn');

button.addEventListener("click", async() => {
    var res = await fetch('data.json');
    var keys = [];
    var values = [];

    var data = await res.json();

    // console.log(data);

    for(var key in data){
        if(data.hasOwnProperty(key)){
            // console.log(key + "-->" +data[key]);
            keys.push(key);
            values.push(data[key]);
        }
    }

    console.log(keys);
    console.log("----------------------")
    console.log(values);
})