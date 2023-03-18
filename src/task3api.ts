interface User {
    ProductId:number
    ProductName:string
    Price:number
    Quantity:number
}

function getProduct(): Promise<User[]> {

    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
            return res as User[]
        })
}

getProduct()
    .then(product => {
        console.log(product.map(u =>'ProductID:'+ u.ProductId + ' ' + u.ProductName +' ' +u.Price+' '+u.Quantity+ '\n').toString())
    })

function getfakeAPI() {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

getfakeAPI();