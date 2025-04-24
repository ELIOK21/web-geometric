document.addEventListener('DOMContentLoaded', function() {
    const squareForm = document.getElementById('square-form');
    
    if (squareForm) {
        squareForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const side = parseFloat(document.getElementById('side').value);
            const unit = document.getElementById('unit').value;
            
            // Validate input
            if (isNaN(side) || side <= 0) {
                alert('Please enter a valid positive number for the side length.');
                return;
            }
            
            // Calculate area and perimeter
            const area = calculateSquareArea(side);
            const perimeter = calculateSquarePerimeter(side);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const perimeterUnit = unit;
            
            // Display results
            const results = {
                'Side Length': `${side} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Perimeter': `${perimeter.toFixed(2)} ${perimeterUnit}`,
                'Formula Used (Area)': 'A = a²',
                'Formula Used (Perimeter)': 'P = 4a'
            };
            
            displayResults(results);
        });
    }
});

// Square calculation functions
function calculateSquareArea(side) {
    return side * side;
}

function calculateSquarePerimeter(side) {
    return 4 * side;
}