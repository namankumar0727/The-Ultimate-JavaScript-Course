const data={
    user:{
        id:123,
        name:"Naman Kumar",
        age:30,
        email:"namankumar0727@gmail.com",
        address:{
            city:"New York",
            country:"India"
        },
        hobbies:[
            "reading","Painting"
        ],
        scores:{
            math:76
        }
    },
    products:[
        {id:1,name:"Laptop",price:1000},
        {id:2,name:"Laptop",price:13000},
        {id:3,name:"Laptop",price:4000}
    ],
    settings:{
        darkmode:true,
        notifications:{
            email1:true,
            sms:false
    },
    language:"English"
}
}

const {
    user:{
        id,name,age,email,address:{city,country},hobbies,scores:{math},
    },

    products:[produc1,product2,product3],
    settings:{
        darkmode,notifications:{email1,sms},language
    }

}=data

console.log(id)