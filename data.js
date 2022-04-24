var defaultThreads = [
    {
        id: 1,
        title: "Question 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "reply 1"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "reply 2"
            }
        ]
    },
    {
        id: 2,
        title: "Question 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "reply 1"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "reply 2"
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