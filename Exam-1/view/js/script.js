const API = async() =>{
    let request = await fetch("http://localhost:8080/user")
    let response = await request.json()
    return response
}

const Caller = async() =>{
    let response = await API()
    Mapper(response)
}

Caller()

const Mapper = (data) =>{
    console.log(data);
    
    data.map((ele)=>{

    })
}