const form = document.querySelector(".form");
const html = document.querySelector(".container");
const error = document.querySelector(".error");
// const btn = document.querySelector(".btn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target.username.value);
    fetch(`https://api.github.com/users/${e.target.username.value}`, {
        method: "GET",
    })
        .then((response) => {
            // console.log(response);
            if (response.status === 200) {
                return response.json();
            } else {
                throw "couldn't found";
            }
        })
        .then((data) => {
            // console.log(data);
            error.innerHTML = "";
            error.classList.add("hidden");
            html.classList.remove("hidden");
            html.innerHTML = `<img src="${data.avatar_url}" alt="prachi" />
            <p class="p2">${data.name}</p>
            <div class="divs">
                <div class="body-box">
                    ${data.followers}
                    <p>FOLLOEWERS</p>
                </div>
                <div class="body-box">
                    ${data.following}
                    <p>FOLLOWING</p>
                </div>
                <div class="body-box">
                ${data.public_repos}
                    <p>PUBLIC REPOS</p>
                </div>
                <div class="body-box">
                ${data.public_gists}
                    <p>PUBLIC GISTS</p>
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td class="td-left">username:</td>
                        <td class="td-right">${data.login}</td>
                    </tr>
                    <tr>
                        <td class="td-left">Name:</td>
                        <td class="td-right">${data.name}</td>
                    </tr>
                    <tr>
                        <td class="td-left">Company:</td>
                        <td class="td-right">${data.company}</td>
                    </tr>
                    <tr>
                        <td class="td-left">Website:</td>
                        <td class="td-right">${data.blog}</td>
                    </tr>
                    <tr>
                        <td class="td-left">Location:</td>
                        <td class="td-right">${data.location}</td>
                    </tr>
                </tbody>
            </table>`;
            form.reset();
        })
        .catch((err) => {
            // console.log(err);
            html.innerHTML = "";
            html.classList.add("hidden");
            error.classList.remove("hidden");
            error.innerHTML = `
            <p>Oops sorry! Cannot find the user !!</p>
             `;
        });
});
// https://api.github.com/users/{user}
