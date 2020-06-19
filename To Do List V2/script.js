function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(task => {
                return `<div class="task ${task.completed}">Title: ${task.title}.</div>`;
            }).join('');
            document.getElementById('app').insertAdjacentHTML('afterbegin', html);
            document.getElementById('app').addEventListener('click', toggleTaskState);

            function toggleTaskState(e) {
                if (e.target.classList.contains('task'))
                    e.target.classList.toggle('true');
            }

        })
};

fetchData();