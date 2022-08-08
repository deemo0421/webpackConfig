import './index.css'

const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click',function(){
    const count = parseInt(num.innerHTML,10)
    num.innerText = count + 1
})

class Student {
    #name = "阿偉"
}

const s001 = new Student()
console.log("s001",s001.a);