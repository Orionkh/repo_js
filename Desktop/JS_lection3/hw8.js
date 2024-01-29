// comment
async function fetchComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const comments = await response.json();
    return comments;
}

// post
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const posts = await response.json();
    return posts;
}

// Promise.all
async function fetchDataWithPromiseAll() {
    try {
        const [comments, posts] = await Promise.all([fetchComments(), fetchPosts()]);
        console.log('Data with Promise.all:', { comments, posts });
    } catch (error) {
        console.error('Error with Promise.all:', error);
    }
}

// Promise.allSettled
async function fetchDataWithPromiseAllSettled() {
    try {
        const results = await Promise.allSettled([fetchComments(), fetchPosts()]);
        console.log('Data with Promise.allSettled:', results);
    } catch (error) {
        console.error('Error with Promise.allSettled:', error);
    }
}

fetchDataWithPromiseAll();
fetchDataWithPromiseAllSettled();
