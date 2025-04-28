document.addEventListener("DOMContentLoaded", function () {
  // Missions
  const missions = [
      "5 Pushups + 5 Squats",
      "Watch 1 Short Learning Video",
      "Write 1 New Business Idea",
      "Finish 1 Tough Task"
  ];

  // Tracker Table
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

  // Calendar
  const calendar = document.getElementById('calendar');
  const startDate = new Date(2025, 4, 1); // May 1, 2025

  for (let i = 0; i < 31; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);

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

  // Get Today's Date (for key)
  function getTodayDate() {
      return new Date().toISOString().split('T')[0];
    }
});
