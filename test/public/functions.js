const email = "rami@gmail.com"
const name = "rami"
const password = "1234"
const role = "QA Manager"
const id = "5f458802d91a96513ccfeb54"
fetch('/editUser', {
    method: "PUT",
    body: JSON.stringify({ id, email , password ,name , role }),
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((res) => res.json())
    .then((data) => {
        const { success ,info ,error} = data;
        console.log(error)
        console.log(success)
        console.log(info)
        }

);