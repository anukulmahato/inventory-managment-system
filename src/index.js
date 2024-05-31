const resultSearchForm = document.getElementById("result-search-form");
const selectProduct = document.getElementById("selectProduct");
const productQty = document.getElementById("productQty");
const totalPriceq = document.getElementById("totalPrice");

/**
 *
 * Result  Search Form Manger
 */

// const getAllProductData = () => {

// const studentDatals = JSON.parse(localStorage.getItem('students'));


// let productTitle = "";
// studentDatals.reverse().forEach((item, index) => {
//   productTitle += `
//   <option value="" onclick="getViewProductData('${item.id}')" >${item.title}</option>

//   `
// });
// selectProduct.innerHTML = productTitle;

// };
// getAllProductData();


const getAllProductData = () => {
  const studentData = JSON.parse(localStorage.getItem('students'));

  // Check if studentData is valid
  if (!studentData) {
      console.error('No student data found in localStorage');
      return;
  }

  let productTitle = `<option >select</option>`;
  studentData.reverse().forEach((item) => {
      productTitle += `
      <option value="${item.id}">${item.title}</option>
      `;
  });


  selectProduct.innerHTML = productTitle;

  // Attach an event listener to the select element
  selectProduct.addEventListener('change', (event) => {
      const selectedOption = event.target.value;
      getViewProductData(selectedOption);
  });
};

getAllProductData();






// Example function for getViewProductData
const getViewProductData = (id) => {
  // console.log(`Selected product ID: ${id}`);
  // Add your logic to handle the selected product data

  const studentDatals = JSON.parse(localStorage.getItem('students'));




  const viewProductData = studentDatals.find((data) => data.id ==id);
  const qtyProduct = viewProductData.quantity;
  const productPrices = viewProductData.price;
  
  const quantityVel = parseInt(productQty.value);
  const totalPrice = productPrices * quantityVel;
 
 
  resultSearchForm.querySelector('input[name="Quantity"]').value = qtyProduct;
  resultSearchForm.querySelector('input[name="productPrice"]').value = totalPrice;
  



  
  productQty.addEventListener("input", function () {
    const quantity = parseInt(productQty.value);
    if (quantity > qtyProduct) {
      alert("No product Quantity found");
      productQty.value = qtyProduct; // Reset the value to the max allowed
    }
    
  });
  // productQty.addEventListener("input", function () {
  //   const quantity = parseInt(productQty.value);
  //   const totalPriceQty = quantity * productPrices;

  //   totalPriceq.textContent = totalPriceQty;
  // });

};

document.addEventListener('DOMContentLoaded', function() {
  const productQty = document.getElementById("productQty");
const totalPriceq = document.getElementById("totalPrice");
  const pricePerStock = productPrices;
  productQty.addEventListener('input', function() {
      const selectedStock = parseInt(productQty.value);
      const totalPrice = selectedStock * pricePerStock;
      totalPriceq.textContent = totalPrice;
  });
});



// const qtySelectFun = () =>{

//   const studentDatals = JSON.parse(localStorage.getItem('students'));

//   let productQty = "";
//   studentDatals.reverse().forEach((item) => {
//     productQty += `
//       <option value="${item.id}">${item.quantity}</option>
//       `;
//   });
// }
// qtySelectFun();






// resultSearchForm.onsubmit = (e) => {
//   e.preventDefault();

//   const form_data = new FormData(e.target);
//   const data = Object.fromEntries(form_data.entries());

//   let oldData = [];
//   // check old data exists or not
//   if (localStorage.getItem("sellData")) {
//     oldData = JSON.parse(localStorage.getItem("sellData"));
//   }

//   // push new data
//   oldData.push({
//     ...data,
//     id: createID(),
//     Name: data.name,
//     Address: data.address,
//   });

//   // send data to ls
//   localStorage.setItem("sellData", JSON.stringify(oldData));

  
// };














  // const getViewProductData = (id) => {

  //   alert(id)
  // const productData = JSON.parse(localStorage.getItem("students"));

  // const viewProductData = productData.find((data) => data.id == id);

  // resultSearchForm.querySelector('input[name="quantity"]').value = viewProductData.quantity;
  
  
  // }



// selectProduct.addEventListener("change", () => {
  
//   const getViewResultData = (id) => {
//   const productData = JSON.parse(localStorage.getItem("students"));

//   const viewProductData = productData.find((data) => data.id == id);

//   resultSearchForm.querySelector('input[name="quantity"]').value = viewProductData.quantity;
//   // studentResultViewForm.querySelector('input[name="price"]').value = viewProductData.price;
//   // studentResultViewForm.querySelector('input[name="id"]').value = id;
  
//   }
//   getViewResultData()
// });









