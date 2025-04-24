document.addEventListener('DOMContentLoaded', function() {
    // Setup tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Handle radius form submission
    const circleRadiusForm = document.getElementById('circle-radius-form');
    if (circleRadiusForm) {
        circleRadiusForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const radius = parseFloat(document.getElementById('radius').value);
            const unit = document.getElementById('radius-unit').value;
            
            // Validate input
            if (isNaN(radius) || radius <= 0) {
                alert('Please enter a valid positive number for the radius.');
                return;
            }
            
            // Calculate area and circumference
            const area = calculateCircleArea(radius);
            const circumference = calculateCircleCircumference(radius);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const circumferenceUnit = unit;
            
            // Display results
            const results = {
                'Radius': `${radius} ${unit}`,
                'Diameter': `${(2 * radius).toFixed(2)} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Circumference': `${circumference.toFixed(2)} ${circumferenceUnit}`,
                'Formula Used (Area)': 'A = πr²',
                'Formula Used (Circumference)': 'C = 2πr'
            };
            
            displayResults(results);
        });
    }
    
    // Handle diameter form submission
    const circleDiameterForm = document.getElementById('circle-diameter-form');
    if (circleDiameterForm) {
        circleDiameterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const diameter = parseFloat(document.getElementById('diameter').value);
            const unit = document.getElementById('diameter-unit').value;
            
            // Validate input
            if (isNaN(diameter) || diameter <= 0) {
                alert('Please enter a valid positive number for the diameter.');
                return;
            }
            
            // Calculate radius from diameter
            const radius = diameter / 2;
            
            // Calculate area and circumference
            const area = calculateCircleArea(radius);
            const circumference = calculateCircleCircumference(radius);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const circumferenceUnit = unit;
            
            // Display results
            const results = {
                'Diameter': `${diameter} ${unit}`,
                'Radius': `${radius.toFixed(2)} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Circumference': `${circumference.toFixed(2)} ${circumferenceUnit}`,
                'Formula Used (Area)': 'A = π(d/2)²',
                'Formula Used (Circumference)': 'C = πd'
            };
            
            displayResults(results);
        });
    }
});

// Circle calculation functions
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}