// -------------------
// Account part
// -------------------

// Show/Hide Login and Register
const create_account = document.getElementById('create_account');
const have_account = document.getElementById('have_account');
const login_part = document.querySelector('.login');
const register_part = document.querySelector('.register');

create_account.onclick = () => {
    login_part.classList.remove('animation_show');
    login_part.classList.add('animation_hide');
    setTimeout(()=>{
        login_part.classList.add('hidden');
        login_part.classList.remove('animation_hide');

        register_part.classList.remove('hidden');
        register_part.classList.add('animation_show');
    }, 400);
}

have_account.onclick = () => {
    register_part.classList.remove('animation_show');
    register_part.classList.add('animation_hide');
    setTimeout(()=>{
        register_part.classList.add('hidden');
        register_part.classList.remove('animation_hide');

        login_part.classList.remove('hidden');
        login_part.classList.add('animation_show');
    }, 400);
}

// Show/Hide Password for login
const toggle_login_pass = document.querySelector("#login #toggle");
const login_pass = document.querySelector("#login #password");
toggle_login_pass.onclick = () => {
    if(toggle_login_pass.firstChild.classList == "ri-eye-fill"){
        toggle_login_pass.firstChild.classList = "ri-eye-off-fill";
        login_pass.type = "text";
    } else {
        toggle_login_pass.firstChild.classList = "ri-eye-fill";
        login_pass.type = "password";
    }
}

// Show/Hide Password for register
const toggle_register_pass = document.querySelector("#register #toggle");
const toggle_register_confirm_pass = document.querySelector("#register #confirm_toggle");
const register_pass = document.querySelector("#register #password");
const register_confirm_pass = document.querySelector("#register #confirm_password");
toggle_register_pass.onclick = () => {
    if(toggle_register_pass.firstChild.classList == "ri-eye-fill"){
        toggle_register_pass.firstChild.classList = "ri-eye-off-fill";
        register_pass.type = "text";
    } else {
        toggle_register_pass.firstChild.classList = "ri-eye-fill";
        register_pass.type = "password";
    }
}
toggle_register_confirm_pass.onclick = () => {
    if(toggle_register_confirm_pass.firstChild.classList == "ri-eye-fill"){
        toggle_register_confirm_pass.firstChild.classList = "ri-eye-off-fill";
        register_confirm_pass.type = "text";
    } else {
        toggle_register_confirm_pass.firstChild.classList = "ri-eye-fill";
        register_confirm_pass.type = "password";
    }
}

// Confirm password
function confirm_password(){
    if(register_pass.value != register_confirm_pass.value){
        return false;
    }
    return true;
}
register_confirm_pass.onkeyup = () => {
    const confirm_pass = confirm_password();
    if(register_confirm_pass.value.length > 0){
        if(!confirm_pass){
            document.querySelector(".register .red").classList.remove('hidden');
        } else {
            document.querySelector(".register .red").classList.add('hidden');
        }
    } else {
        document.querySelector(".register .red").classList.add('hidden');
    }
}

// Register
const register = document.getElementById("register");
register.addEventListener("submit", e => {
    e.preventDefault();

    const username_inp = document.querySelector("#register #username");
    const username = username_inp.value;
    if(confirm_password()){
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        let exists = false;

        for(let i = 0; i < users.length; i++){
            if(users[i].name == username){
                alert("Username exists, choose another one!");
                exists = true;
            }
        }

        if(!exists){
            const user = {
                name: username,
                password: register_pass.value
            };
            users = [...users, user]
            localStorage.setItem("users", JSON.stringify(users));
    
            window.location.reload();
        }
    }
})

// Login
const login = document.getElementById("login");
login.addEventListener("submit", e => {
    e.preventDefault();

    const username_inp = document.querySelector("#login #username");
    const username = username_inp.value;
    if(confirm_password()){
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        let logged_in = false;
        for(let i = 0; i < users.length; i++){
            if(users[i].name == username && users[i].password == login_pass.value){
                logged_in = true;
                localStorage.setItem("logged", username);
            }
        }
        if(!logged_in){
            alert("Username or password is wrong!");
        } else {
            window.location.reload();
        }
    }
})

// Logout
document.querySelector('.logout').addEventListener("click", () => {
    localStorage.removeItem("logged");
    window.location.reload();
})

// -------------------
// Todo part
// -------------------

// Check pending tasks
function check_pending(){
    const ls = document.querySelector(".list");

    if(ls.innerHTML == ''){
        document.querySelector(".list").classList.add("hidden");
        document.querySelector(".nothing").classList.remove("hidden");
    } else {
        document.querySelector(".list").classList.remove("hidden");
        document.querySelector(".nothing").classList.add("hidden");
        let count = 0;
        ls.childNodes.forEach(c => {
            if(c.firstChild.firstChild.classList != "checked"){
                count += 1
            }
        })
        document.getElementById("task").textContent = count;
    }
}


// Add to DOM
function addToDOM(el){
    const ls = document.querySelector(".list");

    // Elements
    const main_div = document.createElement("div");
    main_div.classList.add("el");

    const div = document.createElement("div");
    div.classList.add("main");
    const p = document.createElement("p");
    p.textContent = el;
    div.appendChild(p);

    const btn = document.createElement("button");
    btn.classList.add('delete');
    btn.innerHTML = '<i class="ri-delete-bin-fill"></i>';

    main_div.appendChild(div);
    main_div.appendChild(btn);

    // Functionalities
    main_div.onclick = () => {
        p.classList.toggle("checked");
        check_pending();
    }

    btn.onclick = () => {
        const ans = window.confirm("Do you really want to delete that todo?");
        if(ans){
            ls.removeChild(main_div);
        }
        check_pending();
    }

    ls.appendChild(main_div);
    check_pending();
}

// Check All
function check_all(){
    const ls = document.querySelector(".list");
    ls.childNodes.forEach(c => {
        c.firstChild.firstChild.classList.add("checked");
    })
}

const check_all_btn = document.getElementById("check_all");
check_all_btn.addEventListener("click", () => {
    check_all();
    check_pending();
})

// Invert All
function invert_all(){
    const ls = document.querySelector(".list");
    ls.childNodes.forEach(c => {
        c.firstChild.firstChild.classList.toggle("checked");
    })
}

const invert_all_btn = document.getElementById("invert_all");
invert_all_btn.addEventListener("click", () => {
    invert_all();
    check_pending();
})

// Delete All
function delete_all(){
    const ans = window.confirm("Do you really want to delete all the tasks?")
    if(ans){
        const ls = document.querySelector(".list");
        ls.innerHTML = '';
    }
}

const delete_all_btn = document.getElementById("delete_all");
delete_all_btn.addEventListener("click", () => {
    delete_all();
    check_pending();
})

// Add todo with button
const add_todo = document.getElementById("add_todo");
add_todo.addEventListener("submit", e => {
    e.preventDefault();

    const todo_text = document.getElementById("todo");

    // Add to DOM
    addToDOM(todo_text.value);

    // Reset the input
    todo_text.value = '';
})

// -------------------
// Translation part
// -------------------
const data = {
    login: [
        "Giriş Et",
        "Istifadəçi adı...",
        "Şifrə...",
        "hesab yaradın",
        "Əgər hesabınız yoxdursa,"
    ],
    register: [
        "Qeydiyyatdan keç",
        "Şifrəni doğrulayın...",
        "Şifrələr biri-birinə uymur.",
        "giriş edin",
        "Əgər hesabınız varsa,"
    ]
}

function translate(){
    // Translate Login Part
    document.querySelector(".login h1").textContent = data["login"][0];
    document.querySelector(".login #login #username").setAttribute("placeholder", data["login"][1]);
    document.querySelector(".login #login #password").setAttribute("placeholder", data["login"][2]);
    document.querySelector(".login .submit").textContent = data["login"][0];
    document.querySelector(".login p").innerHTML = `${data["login"][4]} <span id="create_account">${data["login"][3]}</span>`;
    
    // Translate Register Part
    document.querySelector(".register h1").textContent = data["register"][0];
    document.querySelector(".register #register #username").setAttribute("placeholder", data["login"][1]);
    document.querySelector(".register #register #password").setAttribute("placeholder", data["login"][2]);
    document.querySelector(".register #register #confirm_password").textContent = data["register"][1];
    document.querySelector(".register .red").textContent = data["register"][2];
    document.querySelector(".register .submit").textContent = data["register"][0];
    document.querySelector(".register .b").innerHTML = `${data["register"][4]} <span id="create_account">${data["register"][3]}</span>`;
}

// Window on load
window.onload = () => {
    const logged = localStorage.getItem("logged");
    if(!logged){
        document.querySelector('.login').classList.remove('hidden');
        document.querySelector('.login').classList.add('animation_show');
    } else {
        document.querySelector('.todo').classList.remove('hidden');
        document.querySelector('.todo').classList.add('animation_show');
        document.getElementById("name").textContent = logged;
        check_pending();

        document.querySelector(".logout").classList.remove("hidden");
    }
    if(window.navigator.language == "az-AZ"){
        translate();
    }
}