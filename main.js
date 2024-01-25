const body = document.querySelector('body')
const mode_change = document.querySelector('.mode_icon')
const portfolio = document.querySelector(".portfolio")
const span = document.querySelectorAll('.modeChange')
const img = document.querySelector('.govind_profile_pic')
const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const f_name = document.querySelector('#f_name').value
const l_name = document.querySelector('#l_name').value
const email = document.querySelector('#email').value
const subject = document.querySelector('#subject').value
const message = document.querySelector('#message').value
const footer = document.querySelector('footer')
const header = document.querySelector('header')
const portfolioText = document.querySelectorAll('.portfolio_link_text')

mode_change.addEventListener('click', function () {
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "#001233"
        body.style.color = "rgb(231, 219, 219)"
        span.forEach(function (e) {
            e.style.color = "#e7017a"
        });
        portfolioText.forEach(function (e) {
            e.style.color = "#e7017a"
        });
        this.src = "Icons/dark_mode.png"
        input.forEach(function (e){
            e.style.backgroundColor = "#001d3d"
            e.style.color = "#d1d6df"
            e.classList.replace("white","black")
            });
            header.classList.replace("light","dark")
        img.classList.replace("white_photo","photo");
        
        
        this.style.transform = "translate(-4px)"
        portfolio.classList.replace("green_portfolio","white_portfolio")
        footer.style.backgroundColor="#001d3d"
        
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "#111"
        span.forEach(function (e) {
            e.style.color = "#006d77"
        })
        portfolioText.forEach(function (e) {
            e.style.color = "#006d77"
            // e.placeholder.color="red"
        })
        input.forEach(function (e){
            e.style.backgroundColor = "#d1d6df"
            e.classList.replace("black","white")
        })
        header.classList.replace("dark","light")
        img.classList.replace("photo","white_photo");
        // input.classList.replace
        this.src = "Icons/light_mode.png"
        this.style.transform = "translate(39px)"
        portfolio.classList.replace("white_portfolio", "green_portfolio") 
        footer.style.backgroundColor="#d1d6df"
    }

})

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     // Email.send({
//     //     Host : "smtp.elasticemail.com",
//     //     Username : 'myselfgovind116@gmail.com',
//     //     Password : "9D4BDB2570BF3B72B4357937F2BA84C3D6B1",
//     //     To : 'myselfgovind116@gmail.com',
//     //     From : email,
//     //     Subject : subject,
//     //     Body : message
//     // }).then(
//     // message => alert(message)
//     // )
// });
     
// })
// for(let input of inputs){
//     input.addEventListener('keydown',(e)=>{
//         console.log(input)
        
//     })
// }


// img.onmouseenter = ()=>{
//     if(body.style.backgroundColor === "white"){
        
//         img.classList.replace('photo', 'white_photo')
//     }else{
//         img.classList.replace('white_photo', 'photo')
//     }
// }



