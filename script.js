let  main = document.getElementById("main")
let arr = ["https://th.bing.com/th/id/OIP.-H_w3fKHSyDYw8N7EGgaNQHaHm?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.7zMveWGbdQP_QMdm6zcCGQHaH7?w=193&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.Et3av7cynChxzYR7Q8MDPQHaH8?w=191&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.9CyMJSzP9bu2bAp-P4x35wHaLM?w=120&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.3uBa0LSI_Ial0Dq6WXEJdwHaJF?w=168&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.UF-VGRKhNNa0CO_AAIlC7wHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.FN2I_3uzY6g--WBoO5ICxgHaKU?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.6wh5BcyUXxtXElSmQu-IUAHaIX?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.R99a32KzI5YWm6AyqFUKFgHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.fZJUcE4PLD-olfFXKHuAGgHaJO?w=166&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.jjOO6xtxm1lsIv3TjYG0xQHaG1?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
"https://th.bing.com/th/id/OIP.ijGji_u2yKkShi-O_mwRLwHaJ4?w=133&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"];

let s = "";
for(let i = 0 ; i <= 64 ; i++)
{
    let random = Math.floor(Math.random()*arr.length);
    s += `<div class="card"> <img src= ${arr[random]}> </div>`;
}

main.innerHTML = s

