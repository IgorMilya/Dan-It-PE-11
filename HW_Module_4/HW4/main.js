function request(url, method, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        headers: headers,
        ...(!!body && {body: JSON.stringify(body)})
    }).then(res => {
        return res.json()
    })
}

request("https://ajax.test-danit.com/api/swapi/films", 'GET')
    .then(data => data.map(item => {
        const mainDiv = document.createElement("div");
        const div = document.createElement("div");
        const {characters, episodeId, name, openingCrawl} = item;

        div.innerHTML = `
    <span>${episodeId}</span>
    <h1>${name}</h1>
    <p>${openingCrawl}</p>
    `
        document.body.append(mainDiv);
        mainDiv.append(div);

        const listOfName = characters.map(item => {
            return request(`${item}`, 'GET')
                .then(info => {
                    const {name} = info;
                    return name
                })
        })

        Promise.all(listOfName)
            .then(dataset => {
                let ol = document.createElement("ol")
                dataset.map(element => {
                    let li = document.createElement("li")
                    li.textContent = `${element}`;
                    ol.append(li)
                })
                mainDiv.append(ol)
            })
    }))






