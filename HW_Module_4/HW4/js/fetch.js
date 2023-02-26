export function request(url, method, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method,
        headers,
        ...(!!body && {...body})
    }).then(res => {
        return res.json()
    })
}
