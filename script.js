let getParentDiv = document.getElementById("get-parent-div");
let getAllBtn = document.getElementById("all-post-btn");
let getOneBtn = document.getElementById("one-post-btn");
let postBtn = document.getElementById("post-btn");
let patchBtn = document.getElementById("patch-btn");
let delBtn = document.getElementById("del-btn");
let putBtn = document.getElementById("put-btn");

// userId=5


async function allPostFunc(post = "") {

    try {

        let Post = post;

        await fetch(`https://jsonplaceholder.typicode.com/posts?${Post}`)
            .then(async response => await response.json())
            .then(data => {
                // console.log(data)

                getParentDiv.innerHTML = ""
                data.forEach(element => {
                    let item = document.createElement("div");
                    item.classList.add("shadow-2xl", "bg-gray-700", "mt-5", "p-10", "h-[]600px");
                    item.innerHTML = `
                 <p class="bg-amber-100">User ID: ${element.id} </p>
                 <p class="my-5">Title:  ${element.title} </p>
                  <p class="">Body: ${element.body} </p>


                `

                    getParentDiv.appendChild(item);
                });

            })

    } catch (error) {

    }
}

getAllBtn.addEventListener("click", () => {

    allPostFunc("")
})

getOneBtn.addEventListener("click", () => {

    allPostFunc("id=5")
})

allPostFunc();

// Post Method

async function postMethod() {

    try {

        await fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title: 'I POST a request Title and it worked',
                body: 'The POST method body ',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(async response => await response.json())
            .then(postData => {
                console.log(postData)

                getParentDiv.innerHTML = ""

                let item = document.createElement("div");
                item.classList.add("shadow-lg", "bg-gray-300", "mt-5", "p-10");
                item.innerHTML = `
                 <p class="bg-amber-100">User ID: ${postData.userId} </p>
                 <p class="my-5">Title:  ${postData.title} </p>
                  <p class="">Body: ${postData.body} </p>


                `
                getParentDiv.appendChild(item);

            })

    } catch (error) {
        console.log(error.message);
    }

}

postBtn.addEventListener("click", () => {

    postMethod();
})

putBtn.addEventListener("click", () => {

    async function putFunc() {

        try {

            await fetch('https://jsonplaceholder.typicode.com/posts/3', {
                method: 'PUT',
                body: JSON.stringify({
                    id: 3,
                    title: 'This is the title: Put method worked',
                    body: "Body for put: Morning Dev...I'm excited this shit work",
                    userId: 3,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(updatedPost => {
                    console.log(updatedPost)


                    getParentDiv.innerHTML = `
            <div class="bg-gray-300 p-10 mt-5">
                <p class="mb-15 ">Title: ${updatedPost.title}</p>
                <p>Body: ${updatedPost.body}</p>
            </div>
        `

                })

            // const updatedPost = await response.data();



        } catch (error) {

        }


    }

    putFunc();
})

patchBtn.addEventListener("click", () => {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'The Patch worked SUCCESSFULLY',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(updatedPost => {
            console.log(updatedPost)

            getParentDiv.innerHTML = `
            <div class="bg-gray-300 p-10 mt-5">
                <p class="mb-15">Title: ${updatedPost.title}</p>
                <p>Body: ${updatedPost.body}</p>
            </div>
        `

        })

})

delBtn.addEventListener("click", () => {

    fetch('https://jsonplaceholder.typicode.com/posts/7', {
        method: 'DELETE',
    })
        .then(response => {
            response.json()
            console.log(response.status)
        })
        .then(data => {
            console.log(data)


            getParentDiv.innerHTML = `
                    
                    <p class="text-3xl mt-15 flex justify-center text-red-700 text-center font-bold"> ITEM DELETED </p>

                    `
        })
})