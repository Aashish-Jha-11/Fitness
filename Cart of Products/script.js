var products=[
    {name:"Whey Protein",headline: "Complete your Protein intake",price:"2,999" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-3038-featured_image-Nutrabay_Gold_100_Whey_Protein_Isolate__1_Kg_22_Lb_Rich_Chocolate_Creme.png"},
    {name:"Creatine",headline: "Muscle Fullness",price:"999" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-29179-featured_image-Nutrabay_Pure_Creatine_Monohydrate_Micronised__400_gm_088_Lb_Unflavoured.jpg"},
    {name:"Multi Vitamin",headline: "Power Up Your Energy",price:"359" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-2598-featured_image-Nutrabay_Pro_Active_Multivitamin_for_Men__60_Tabs.png"},
    {name:"Peanut Butter",headline: "High Protein Chochlate Peanut Butter",price:"579" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-29533-featured_image-Pintola_High_Protein_Peanut_Butter_Dark_Chocolate__1_Kg_22_Lb_Creamy.jpg"},
];
var popular=[
    {name:"Pre Workout",headline: "Spark Your Workout",price:"899" , image: "https://cdn.nutrabay.com/wp-content/uploads/2023/02/NB-NUT-1016-02-01.jpg"},
    {name:"Creatine",headline: "Muscle Fullness",price:"999" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-29179-featured_image-Nutrabay_Pure_Creatine_Monohydrate_Micronised__400_gm_088_Lb_Unflavoured.jpg"},
    {name:"Multi Vitamin",headline: "Power Up Your Energy",price:"359" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-2598-featured_image-Nutrabay_Pro_Active_Multivitamin_for_Men__60_Tabs.png"},
    {name:"Peanut Butter",headline: "High Protein Chochlate Peanut Butter",price:"579" , image: "https://cdn2.nutrabay.com/uploads/variant/images/variant-29533-featured_image-Pintola_High_Protein_Peanut_Butter_Dark_Chocolate__1_Kg_22_Lb_Creamy.jpg"},
];

var cart=[];

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click",function(details){
        if(details.target.classList.contains("add")){
            cart.push(products[details.target.dataset.index])
            // console.log(cart);
        }
    })
}

function addProduct(){
    var clutter ="";
    products.forEach(function(product,index){
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
                    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" />
                    </div>
                    <div class="data w-full px-2 py-5">
                        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                        <div class="flex justify-between w-full items-center mt-2">
                            <div class="w-1/2">
                                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                <h4 class="font-semibold mt-2">&#8377 ${product.price}</h4>
                            </div>
                            <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><idata-index="${index}"add class="ri-add-line"></i></button>
                        </div>
                    </div>
                </div>`;
    })
    
    document.querySelector(".products").innerHTML=clutter;
}

function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377 ${product.price}</h4>
                    </div>
                </div>`;
    })
    document.querySelector(".populars").innerHTML=clutter;
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display="block";
        var clutter="";
        cart.forEach(function(prod, index){
            clutter+=`<div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden ">
                <img class=" w-full h-full object-cover"src="${prod.image}"/>
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">&#8377 ${prod.price}</h5>
            </div>
            </div>`
        })
        document.querySelector(".cartexpnd").innerHTML=clutter;
    });
}

showCart();
addToCart();
addPopularProducts();
addProduct();