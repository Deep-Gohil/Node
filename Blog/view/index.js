
const postData = async (user) => {
    let req = await fetch("http://localhost:8090/blogs", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
    let res = await req.json()
    console.log(res);

}
let id = document.cookie
let userId = id.split("=")[1]

console.log(userId);
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/blog/view/login.html"
}

const handleData = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        author: document.getElementById('author').value,
        userId: userId
    }
    postData(data)
}
document.getElementById("form").addEventListener("submit", handleData
)

const mapper = (data) => {
    document.getElementById("blogList").innerHTML = ""


    data.map((ele) => {
        console.log(ele);
        let div = document.createElement("div")

        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let content = document.createElement("p")
        content.innerHTML = ele.content

        let author = document.createElement("h3")
        author.innerHTML = ele.author

        div.append(title, content, author)

        document.getElementById("blogList").append(div)

    })
}

const getTask = async () => {
    let req = await fetch(`http://localhost:8090/blog/user/${userId}`)
    let data = await req.json()

    mapper(data)

}
getTask()