fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    data["products"].forEach(el => {
        // Card
        const div = document.createElement("div");
        div.classList.add("card");

        // Img
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img");
        const img = document.createElement("img");
        img.src = el.images[0];
        img.setAttribute("width", "200px");
        img.setAttribute("height", "200px");
        imgDiv.appendChild(img);

        // Details
        const detailsdiv = document.createElement("div");
        detailsdiv.classList.add("details");
        
        const tagsDiv = document.createElement("div");
        tagsDiv.classList.add("tags");

        el.tags.forEach(tag => {
            const tagDiv = document.createElement("div");
            tagDiv.classList.add("tag");
            tagDiv.textContent = tag;

            tagsDiv.appendChild(tagDiv);
        })

        detailsdiv.appendChild(tagsDiv);

        const h2 = document.createElement("h2");
        h2.textContent = el.title;
        detailsdiv.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = el.description;
        detailsdiv.appendChild(p);

        const bottomDiv = document.createElement("div");
        bottomDiv.classList.add("bottom");

        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");
        ratingDiv.innerHTML = `Rating: <span>${el.rating}</span>`;
        bottomDiv.appendChild(ratingDiv);

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        priceDiv.textContent = `$${el.price}`;
        bottomDiv.appendChild(priceDiv);

        detailsdiv.appendChild(bottomDiv);

        div.appendChild(imgDiv);
        div.appendChild(detailsdiv);

        // Append card to the container
        document.querySelector(".container").appendChild(div);
    })
})