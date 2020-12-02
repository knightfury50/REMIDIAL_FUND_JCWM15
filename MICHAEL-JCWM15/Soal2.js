let data = [
    {
        id:1,
        name:'Apel',
        price:5000,
        category:'food'
    },
    {
        id:2,
        name:'Milk',
        price:7000,
        category:'drink'
    },
    {
        id:1,
        name:'Tisu',
        price:2000,
        category:'other'
    }
]

class produk {
    constructor(id,name,price,category) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.category = category
    }
}

function lihatproduk (index) {
    let table = document.getElementById("formproduk")
    let tbody = table.getElementsByTagName("tbody")[0]
    let tr = ""

    for (let i = 0 ; i < data.length ; i++) {
        if (index === i) {
            tr += `
                <tr>
                    <td> # </td>
                    <td> <input id = "editname" type = "text" value = "${data[i].name}"> </td>
                    <td> <input id = "editprice" type = "text" value = "${data[i].price}"> </td>
                    <td> 
                        <input id = "editcategory" type = "radio" value = "${data[i].category}" name="category">food
                        <input id = "editcategory" type = "radio" value = "${data[i].category}" name="category">drink
                        <input id = "editcategory" type = "radio" value = "${data[i].category}" name="category">others
                    </td>
                    <td> 
                       <button onclick="buttonsave(${i})">Save</button>
                       <button onclick="buttoncancel(${i})">Cancel</button>
                        
                    </td>
                </tr>
            `
        } else {
            tr += `
                <tr>
                    <td> ${i+1} </td>
                    <td> ${data[i].name} </td>
                    <td> ${data[i].price} </td>
                    <td> ${data[i].category} </td>
                    <td> 
                        <button onclick="buttonedit(${i})">Edit</button>
                        <button onclick="buttondelete(${i})">Delete</button>
                    </td>
                </tr>
            `
        }
    }
    tbody.innerHTML = tr
}
lihatproduk()

function buttonadd () {
    let input = document.getElementById("addproduk")
    let food = document.getElementById("food")
    let drink = document.getElementById("drink")
    let others = document.getElementById("others")
    let category = document.getElementById("category")
    let name = input["name"].value
    let price = input["price"].value

    if (name==="" || price==="") {
        alert("input masih kosong")
    } else if (input[2].checked) {
        data.push( new produk(
            data.length+1,
            input["name"].value,
            input["price"].value,
            input[2].value,
        ))
        lihatproduk()
        input["name"].value = ""
        input["price"].value = ""
    } else if (input[3].checked) {
        data.push( new produk(
            data.length+1,
            input["name"].value,
            input["price"].value,
            input[3].value,
        ))
        lihatproduk()
        input["name"].value = ""
        input["price"].value = ""
    }
    else {
        data.push( new produk(
            data.length+1,
            input["name"].value,
            input["price"].value,
            category.value,
        ))
        lihatproduk()
        input["name"].value = ""
        input["price"].value = ""
    }
}

function buttondelete (index) {
    data.splice(index,1)
    lihatproduk()
}

function buttonedit (index) {
    lihatproduk(index)
}

function buttonsave (index) {
    let editname = document.getElementById('editname')
    let editprice = document.getElementById('editprice')
    let editcategory = document.getElementById('editcategory')

    data[index].name = editname.value
    data[index].price = editprice.value
    data[index].category = editcategory.value
    lihatproduk()
    
}

function buttoncancel () {
    lihatproduk()
}