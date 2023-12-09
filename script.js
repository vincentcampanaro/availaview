document.addEventListener("DOMContentLoaded", function() {
    fetch('https://your-cloud-run-url.a.run.app') // Replace with your Cloud Run service URL
        .then(response => response.json())
        .then(data => {
            const scheduleContainer = document.getElementById('schedule');
            data.free_slots.forEach(slot => {
                const slotDiv = document.createElement('div');
                slotDiv.textContent = `Start: ${slot.start}, End: ${slot.end}`;
                scheduleContainer.appendChild(slotDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});
