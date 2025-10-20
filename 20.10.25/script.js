document.addEventListener('DOMContentLoaded', () => {
    const sessionsData = [{
            title: 'Йога',
            time: '10:00 - 11:00',
            maxParticipants: 20,
            currentParticipants: 15
        },
        {
            title: 'Фитнес',
            time: '12:00 - 13:00',
            maxParticipants: 30,
            currentParticipants: 25
        }
    ];

    const sessionsContainer = document.getElementById('sessions');

    // Функция для отображения занятий
    function displaySessions(sessions) {
        sessionsContainer.innerHTML = '';
        sessions.forEach((session, index) => {
            const sessionDiv = document.createElement('div');
            sessionDiv.classList.add('session', 'card', 'mb-3');
            sessionDiv.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title">${session.title}</h2>
                    <p class="card-text">Время: ${session.time}</p>
                    <p class="card-text">Максимальное количество участников: ${session.maxParticipants}</p>
                    <p class="card-text">Текущее количество участников: ${session.currentParticipants}</p>
                    <button class="btn btn-primary enroll-btn" data-index="${index}">Записаться</button>
                    <button class="btn btn-danger cancel-btn" data-index="${index}">Отменить запись</button>
                </div>
            `;
            sessionsContainer.appendChild(sessionDiv);

            // Проверка доступности записи
            const enrollButton = sessionDiv.querySelector('.enroll-btn');
            const cancelButton = sessionDiv.querySelector('.cancel-btn');
            if (session.currentParticipants >= session.maxParticipants) {
                enrollButton.disabled = true;
            } else {
                enrollButton.disabled = false;
            }
        });
    }

    // Отображение начальных занятий
    displaySessions(sessionsData);

    // Запись на занятие
    sessionsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('enroll-btn')) {
            const index = event.target.getAttribute('data-index');
            if (sessionsData[index].currentParticipants < sessionsData[index].maxParticipants) {
                sessionsData[index].currentParticipants++;
                displaySessions(sessionsData);
            }
        }
    });

    // Отмена записи
    sessionsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('cancel-btn')) {
            const index = event.target.getAttribute('data-index');
            if (sessionsData[index].currentParticipants > 0) {
                sessionsData[index].currentParticipants--;
                displaySessions(sessionsData);
            }
        }
    });
});