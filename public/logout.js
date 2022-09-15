
const logout = document.getElementById("logout");

logout.addEventListener("click", () => {

    fetch("/api/users/logout", {
        method: "POST"
    })
        .then(() => {
            window
                .document
                .location
                .href="/";
        })
        .catch(err => console.log(err));
});