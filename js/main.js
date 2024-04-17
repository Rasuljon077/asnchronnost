const box = document.querySelector('.box')
async function fetchUser() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        const a = data.products
        console.log(a);
        a.forEach(info => {
            const cardDiv = document.createElement('div')
            cardDiv.classList.add('card')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            let price = document.createElement('price')
            let img = document.createElement('img')
            
            
            h2.innerHTML = `Brand: ${info.brand}`
            p.innerHTML = `Name: ${info.title}`
            price.innerHTML = `Price: ${info.price}$`
            img.setAttribute('src', `${info.thumbnail}`)
            
            cardDiv.appendChild(h2)
            cardDiv.appendChild(p)
            cardDiv.appendChild(img)
            cardDiv.appendChild(price)
            
            box.appendChild(cardDiv)
        });

    } catch (error) {
        
    }
}
fetchUser()