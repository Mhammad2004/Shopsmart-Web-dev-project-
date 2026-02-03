async function data() {
    let a = await fetch("https://dummyjson.com/products")
    let data = await a.json()
    var product = data.products
    console.log(data.products);

    function getpro(cat, className) {
        var count = 0;
        for (let i = 0; i < product.length; i++) {
            if (product[i].category === cat) {
                var ad1 = document.createElement("div")
                let pro2 = `
<div class="p p1" onclick="openProduct(${product[i].id})">
    <div class="pro-img" style="background-image: url('${product[i].thumbnail}');"></div>
    <div class="line"></div>
    <div class="pro-details">
        <div class="pro-name"><h3>${product[i].title}</h3></div>
        <div class="pro-brand">${product[i].brand}</div>
        <div class="pro-price">$${product[i].price}</div>
        <button>Add</button>
    </div>
</div>
`;
                ad1.innerHTML = pro2;
                document.querySelector(`${className}`).appendChild(ad1);
                count++

                if (count === 4) {
                    break;
                }
            }
        }
    }
    getpro("beauty", ".three-pros")
    getpro("groceries", ".four-sec-pros")
    getpro("furniture", ".fifth-sec-pros")
    getpro("fragrances", ".sixth-sec-pros")

}

function openProduct(id) {
    window.location.href = `product.html?id=${id}`;
}
data()
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
