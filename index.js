document.addEventListener('DOMContentLoaded', function () {
    const cups = document.querySelectorAll('.cup-small');
    const remained = document.getElementById('remained');
    const percentage = document.getElementById('percentage');
    const liters = document.getElementById('liters');
    let totalLiters = 0;
    let currentLiters = 0;
    let maxLiters = 2000;  
    function fillContainer() {
        const percentageFilled = (currentLiters / maxLiters) * 100;
        remained.style.height = `${100 - percentageFilled}%`;
        percentage.style.height = `${percentageFilled}%`;
        liters.textContent = `${(maxLiters - currentLiters) / 1000} L`;
    }
    cups.forEach((cup) => {
        cup.addEventListener('click', () => {
            if (!cup.classList.contains('full')) {
                cup.classList.add('full');
                currentLiters += 250;  
                totalLiters += 250;
            } else {
                cup.classList.remove('full');
                currentLiters -= 250;  
                totalLiters -= 250;
            }
            fillContainer();
        });
    });
        fillContainer();
});