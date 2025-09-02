const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
};

const displaypost=(post) => {
    // 1. get the container
    const postContainer = document.getElementById('post-container');
    console.log(postContainer)
}