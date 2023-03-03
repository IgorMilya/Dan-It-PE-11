export const request = (url, method, body) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method,
        headers,
        ...(!!body && {body: JSON.stringify(body)}),
    })
        .then(res => res.json())
}