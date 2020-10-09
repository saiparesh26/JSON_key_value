var button = document.getElementById('btn');

button.addEventListener("click", async() => {
    var res = await fetch('data.json');
    var keys = [];
    var values = [];

    var data = await res.json();

    // console.log(data);

    keys = Object.keys(data);
    values = Object.values(data);

    keys.forEach(key => {
        console.log("key: " + key)
    });

    values.forEach(value => {
        console.log("value: " + value)
    });
    console.log(keys);
    console.log("----------------------")
    console.log(values);
})