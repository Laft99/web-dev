//"https://swapi.tech/api/people/1"
//if we execute the following line on our browser console, nothing really
//happen but we get a promise with a status of pending
fetch("https://swapi.tech/api/people/1")
    .then(res => {
        console.log("RESOLVED", res);
        //it can be done in one line like the one below but lets expand it
        //res.json().then(data => console.log("json done", data.result.properties))
        return res.json();
    })
    .then(data => {
        console.log("JSON DONE", data.result.properties)
        //we can make another request right here, without nesting
        return fetch("https://swapi.tech/api/people/2")
    })
    .then(res => {
        console.log("Second request RESOLVED", res);
        return res.json();
    })
    .then(data => {
        console.log("second JSON DONE", data.result.properties)
    })
    .catch(e => {
        console.log("ERROR", e);
    })
