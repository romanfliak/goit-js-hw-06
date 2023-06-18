const itemAll = document.querySelectorAll('.item')
console.log ("number categories", itemAll.length )

itemAll.forEach(function(item){
    console.log("categories",item.children[0].textContent,"textContent",item.children[1].textContent )
})
