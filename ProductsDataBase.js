const AllProducts = [
    {
        offername: "Hot",
        name: 'garlic',
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: "$100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"

    },
    {
        offername: "Hot",
        name: "Garlic",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },
    {
        offername: "Hot",
        name: "Salt",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },
    {
        offername: "new",
        name: "Chilli",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },
    
    {
        offername: "new",
        name: "Chilli",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell4.jpg" ,
        child2: "css/images/gell2.jpg",
        previouseprice:  '$100.00',
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },
    
    
]
const TopProducts=[
    {
        offername: "new",
        name: "ZAin ",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },{

        offername: "new",
        name: "ZAin ",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"

    },{

        offername: "hot",
        name: "ZAin ",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"
    },{

        offername: "hot",
        name: "ZAin ",
        description: "achi service deta ha",
        image: "css/images/gell3.jpg",
        child1:"css/images/gell3.jpg" ,
        child2: "css/images/gell3.jpg",
        previouseprice: " $100.00",
        NewPrice: "$35.00",
        buttonName: "check fastly"

    }
    // all products basse start
]
function AutoGenetor() {
    const TopSellingContainer=document.getElementById("TopsellingContainer");
    const allproductcontainer = document.getElementById("AllProductContainer");
    AllProducts.forEach(product => {
        allproductcontainer.innerHTML += `
        <div class="col">
          <div class="card" id="hot">
          <div class="offer" >${product.offername}</div>
          <img src='${product.image}' class="im" target="blank">
          <i class="icon fa-regular fa-heart"></i>
          <h3 class="HADING1">${product.name}</h3>
          <h3 class="HADING1">PRC : <del> "${product.previouseprice}"</del> "${product.NewPrice}"</h3>
          <button data-bs-toggle="modal" class="button1" data-bs-target="#exampleModal" onclick="openProductModal('${product.name}', '${product.description}', '${product.image}', '${product.child1}', '${product.child2}', 'Price: ${product.previouseprice}  ${product.NewPrice}')">Add to cart</button>
   
          </div>
        </div>
        `
    })
        // all products basse End
    TopProducts.forEach(product=>{
        TopSellingContainer.innerHTML+=`
        <div class="col">
          <div class="card" id="hot">
          <div class="offer" >${product.offername}</div>
          <img src='${product.image}' class="im" target="blank">
          <i class="icon fa-regular fa-heart"></i>
          <h3 class="HADING1">${product.name}</h3>
          <h3 class="HADING1">PRC : <del> "${product.previouseprice}"</del> "${product.NewPrice}"</h3>
          <button data-bs-toggle="modal" class="button1" data-bs-target="#exampleModal" onclick="openProductModal('${product.name}', '${product.description}', '${product.image}', '${product.child1}', '${product.child2}', 'Price: ${product.previouseprice}  ${product.NewPrice}')">Add to cart</button>
   
          </div>
        </div>
        `
    })
}
window.onload = AutoGenetor();
function openProductModal(
    name,
    description,
    mainImage,
    child1,
    child2,
    price
  ) {
     document.getElementById("ProductHeading").textContent= name ;
    document.getElementById("ProductDescription").textContent = description;
    document.getElementById("ProductPrice").textContent = price;
    document.getElementById("ProductImage1").src = mainImage;
    document.getElementById("ProductImage2").src = child1;
    document.getElementById("ProductImage3").src = child2;
  }
  function increaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }

  function decreaseQuantity() {
    var quantityInput = document.getElementById("quantity");
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }