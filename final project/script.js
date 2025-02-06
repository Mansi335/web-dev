// let but=document.getElementsByClassName("pro");
// but.addEventListener("click",()=>{
//     let sr=but.src;
//     let h=but.querySelector("h4");
//     function other(sr,h) {
//         let html=`<div class="im"></div>
//         <img height="525" src="${sr}" alt="">
//     </div>
//         <div class="detail">
//             <h2>men's collection T-Shirt</h2>
//             <h1>"${h}</h1>
//             <h3>size available</h3>
//              <div class="size">
//                 <a href=""><button>S</button></a>
//                 <a href=""><button>M</button></a>
//                 <a href=""><button>L</button></a>
//              </div>
//              <button>add to cart</button>
//              <h2>product detail</h2>
//              <span>T-shirts are one of the most popular and versatile clothing items worldwide. They are typically short-sleeved with a round or V-neck and come in various styles, colors, and fabrics. T-shirts are widely used in casual fashion, sports, branding, and even activism, as they can feature logos, slogans, and artistic prints.</span>
//         </div>`;
//         document.querySelector(".pr").innerHTML=html;
//     }
// other(sr,h);
// });
// Select all elements with class "pro"
// let buttons = document.getElementsByClassName("pro");

// Array.from(buttons).forEach(but => {
//     but.addEventListener("click", () => {
//         // Select the image inside the clicked element
//         let imgElement = but.querySelector("img");
//         let sr =imgElement.src ; // Get src of the image

//         // Get text inside h4 inside the clicked element
//         let hElement = but.querySelector("h4");
//         let h =hElement.innerText; 

//         function other(sr, h) {
//             let html = `
//             <div class="im">
//                 <img height="525" src="${sr}" alt="">
//             </div>
//             <div class="detail">
//                 <h2>Men's Collection T-Shirt</h2>
//                 <h1>${h}</h1>
//                 <h3>Size Available</h3>
//                 <div class="size">
//                     <a href=""><button>S</button></a>
//                     <a href=""><button>M</button></a>
//                     <a href=""><button>L</button></a>
//                 </div>
//                 <button>Add to Cart</button>
//                 <h2>Product Detail</h2>
//                 <span>
//                     T-shirts are one of the most popular and versatile clothing items worldwide. 
//                     They are typically short-sleeved with a round or V-neck and come in various styles, colors, and fabrics.
//                     T-shirts are widely used in casual fashion, sports, branding, and even activism, 
//                     as they can feature logos, slogans, and artistic prints.
//                 </span>
//  
let but=document.getElementsByClassName(".bit")
but.addEventListener("click", () => {
 alert("sign up complete")
}
)