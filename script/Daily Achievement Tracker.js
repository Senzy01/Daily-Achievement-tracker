document.addEventListener("DOMContentLoaded", function () {
    const missions = [
      "5 Pushups + 5 Squats",
      "Watch 1 Short Learning Video",
      "Write 1 New Business Idea",
      "Finish 1 Tough Task"
    ];
    

    const trackerBody = document.getElementById('tracker-body');

    missions.forEach((mission, index) => {
      const tr = document.createElement('tr');
      const tdMission = document.createElement('td');
      tdMission.textContent = mission;

      const tdButton = document.createElement('td');
      const button = document.createElement('button');
      button.textContent = "Mark as Done";
      button.addEventListener('click', () => {
        button.classList.toggle('completed');
        button.textContent = button.classList.contains('completed') ? "Completed" : "Mark as Done";
        const key = mission-${index}-${getTodayDate()};
        localStorage.setItem(key, button.classList.contains('completed') ? 'true' : 'false');
      });

      const key = mission-${index}-${getTodayDate()};
      if (localStorage.getItem(key) === 'true') {
        button.classList.add('completed');
        button.textContent = "Completed";
      }

      tdButton.appendChild(button);
      tr.appendChild(tdMission);
      tr.appendChild(tdButton);
      trackerBody.appendChild(tr);
    });

    const calendar = document.getElementById('calendar');
    const startDate = new Date(); // Start today
    for (let i = 0; i < 30; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.textContent = day.getDate();

      const key = calendar-${day.toISOString().split('T')[0]};
      if (localStorage.getItem(key) === 'true') {
        dayDiv.classList.add('completed');
      }

      dayDiv.addEventListener('click', () => {
        localStorage.setItem(key, 'true');
        dayDiv.classList.add('completed');
      });

      calendar.appendChild(dayDiv);
    }

    function getTodayDate() {
      return new Date().toISOString().split('T')[0];
      }
    });

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    button.classList.toggle('completed');
    button.textContent = button.classList.contains('completed') ? "Completed" : "Mark as Done";
  
    const key = mission-${index}-${getTodayDate()};
    localStorage.setItem(key, button.classList.contains('completed') ? 'true' : 'false');
  
    // Trigger confetti when a task is marked as completed
    if (button.classList.contains('completed')) {
      jsConfetti.addConfetti();
    }
  });

  jsConfetti.addConfetti({
    emojis: ['🎉', '✨', '💪'],
    confettiNumber: 100,
  });
  
