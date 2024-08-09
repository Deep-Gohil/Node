const postData = async (user) => {
    let req = await fetch("http://127.0.0.1:8080/user", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
    let res = await req.json()
    console.log(res);
}

const handleData = (e) =>{
    e.preventDefault();
    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    postData(data)
}

document.getElementById("form").addEventListener("submit",handleData)