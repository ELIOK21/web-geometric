document.addEventListener('DOMContentLoaded', function() {
    const rectangleForm = document.getElementById('rectangle-form');
    
    if (rectangleForm) {
        rectangleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const width = parseFloat(document.getElementById('width').value);
            const height = parseFloat(document.getElementById('height').value);
            const unit = document.getElementById('unit').value;
            
            // Validate input
            if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
                alert('Please enter valid positive numbers for width and height.');
                return;
            }
            
            // Calculate area and perimeter
            const area = calculateRectangleArea(width, height);
            const perimeter = calculateRectanglePerimeter(width, height);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const perimeterUnit = unit;
            
            // Display results
            const results = {
                'Width': `${width} ${unit}`,
                'Height': `${height} ${unit}`,
                'Area': `${area.toFixed(2)} ${areaUnit}`,
                'Perimeter': `${perimeter.toFixed(2)} ${perimeterUnit}`,
                'Formula Used (Area)': 'A = w × h',
                'Formula Used (Perimeter)': 'P = 2(w + h)'
            };
            
            displayResults(results);
        });
    }
});

// Rectangle calculation functions
function calculateRectangleArea(width, height) {
    return width * height;
}

function calculateRectanglePerimeter(width, height) {
    return 2 * (width + height);
}