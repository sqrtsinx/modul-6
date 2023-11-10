document.addEventListener('DOMContentLoaded', function()
{
    //fitur smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
        anchor.addEventListener('click', function(e){
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })


const body = document.body
const darkmode = document.getElementById('dark-mode-toggle')

darkmode.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'))
})

if(localStorage.getItem('darkMode') === 'true'){
    body.classList.add('dark-mode')
}

const form = document.getElementById('example-form')
const solution = document.getElementById('solution')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const input = document.getElementById('example-input')
    const userans = input.value.trim()
    if (checkans(userans))
    {
        alert('Yup you have the correct answers!')
    }
    else
    {
        alert('Incorrect')
        stepssol()
    }
})

function checkans(userans)
{
    return userans === '3.16'
}

function stepssol()
{
    solution.parentNode.removeChild(solution)

    const newsolution = document.createElement('div')
    newsolution.id = 'solution'

    form.parentNode.insertBefore(newsolution,form.nextSibling)
    newsolution.innerHTML = `
    <h2>Solution Steps:</h2>
    <ol>
        <li>using euclidean norm formula where \\(r = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + \\ldots + (z_2-z_1)^2}\\) </li>
        <li>plug in the value becomes \\(r = \\sqrt{(1-4)^2 + (2-3)^2}\\) </li>
        <li>calculate above and the solution are \\(r = \\sqrt{10} \\approx 3.16228\\)</li>
    </ol>`;
    //rendering the latex formula
    if(window.MathJax)
    {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, newsolution], function(){
            console.log(newsolution.innerHTML)
        });
    }
}
})