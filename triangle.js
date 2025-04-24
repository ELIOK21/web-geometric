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
    
    // Handle three sides form submission
    const triangleSidesForm = document.getElementById('triangle-sides-form');
    if (triangleSidesForm) {
        triangleSidesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const sideA = parseFloat(document.getElementById('side-a').value);
            const sideB = parseFloat(document.getElementById('side-b').value);
            const sideC = parseFloat(document.getElementById('side-c').value);
            const unit = document.getElementById('sides-unit').value;
            
            // Validate input
            if (isNaN(sideA) || sideA <= 0 || isNaN(sideB) || sideB <= 0 || isNaN(sideC) || sideC <= 0) {
                alert('Please enter valid positive numbers for all sides.');
                return;
            }
            
            // Check if sides can form a triangle (triangle inequality theorem)
            if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
                alert('The given sides cannot form a triangle. The sum of the lengths of any two sides must be greater than the length of the remaining side.');
                return;
            }
            
            // Calculate area using Heron's formula and perimeter
            const area = calculateTriangleAreaHeron(sideA, sideB, sideC);
            const perimeter = calculateTrianglePerimeter(sideA, sideB, sideC);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const perimeterUnit = unit;
            
            // Display results
            const results = {
                'Side a': `${sideA} ${unit}`,
                'Side b': `${sideB} ${unit}`,
                'Side c': `${sideC} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Perimeter': `${perimeter.toFixed(2)} ${perimeterUnit}`,
                'Formula Used (Area)': 'Heron\'s formula: A = √(s(s-a)(s-b)(s-c))',
                'Formula Used (Perimeter)': 'P = a + b + c'
            };
            
            displayResults(results);
        });
    }
    
    // Handle base height form submission
    const triangleBaseHeightForm = document.getElementById('triangle-base-height-form');
    if (triangleBaseHeightForm) {
        triangleBaseHeightForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            const unit = document.getElementById('base-height-unit').value;
            
            // Validate input
            if (isNaN(base) || base <= 0 || isNaN(height) || height <= 0) {
                alert('Please enter valid positive numbers for base and height.');
                return;
            }
            
            // Calculate area
            const area = calculateTriangleAreaBaseHeight(base, height);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            
            // Display results
            const results = {
                'Base': `${base} ${unit}`,
                'Height': `${height} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Formula Used (Area)': 'A = ½ × b × h'
            };
            
            displayResults(results);
        });
    }
});

// Triangle calculation functions
function calculateTriangleAreaHeron(a, b, c) {
    // Heron's formula
    const s = (a + b + c) / 2; // Semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calculateTriangleAreaBaseHeight(base, height) {
    return 0.5 * base * height;
}

function calculateTrianglePerimeter(a, b, c) {
    return a + b + c;
}