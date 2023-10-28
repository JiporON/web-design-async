'use strict'

// Element
const titleEle = document.querySelector('#title')
const descriptionEle = document.querySelector("#description");
const priceEle = document.querySelector("#price");
const fileEle = document.querySelector("#file");

// Input from user
async function createProduct() {
    
    // Get value
    const title = titleEle.value
    const description = descriptionEle.value
    const price = Number(priceEle.value)
    const file = fileEle.files[0]
    const imageUrl = await uploadImage(file)

    const product = {
      title,
      price,
      description,
      categoryId: 1,
      images: [imageUrl.location]
    };

    fetch("https://api.escuelajs.co/api/v1/products/", {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
}

// Upload Image to server
async function uploadImage(file) {
    // create form data
    const formData = new FormData()
    formData.append('file', file)

    // send reuest to server 
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
        method: 'POST',
        body: formData
    });
    return res.json()
}
