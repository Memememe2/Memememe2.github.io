var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "User",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "User",
                date: Date.now(),
                content: "test"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}