const refs = {
    categoriesList: document.querySelector("#categories"),
    titlesArr: document.querySelectorAll("h2"),
}



console.log(`Number of categories: ${refs.categoriesList.children.length}`);

refs.titlesArr.forEach(title => {
    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${title.nextElementSibling.children.length}`);
})





// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5