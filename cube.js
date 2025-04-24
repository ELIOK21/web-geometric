document.addEventListener('DOMContentLoaded', function() {
    const cubeForm = document.getElementById('cube-form');
    
    if (cubeForm) {
        cubeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get input values
            const side = parseFloat(document.getElementById('side').value);
            const unit = document.getElementById('unit').value;
            
            // Validate input
            if (isNaN(side) || side <= 0) {
                alert('Please enter a valid positive number for the side length.');
                return;
            }
            
            // Calculate surface area and volume
            const surfaceArea = calculateCubeSurfaceArea(side);
            const volume = calculateCubeVolume(side);
            
            // Format results with units
            const areaUnit = unit === 'inch' ? 'in²' : unit + '²';
            const volumeUnit = unit === 'inch' ? 'in³' : unit + '³';
            
            // Display results
            const results = {
                'Side Length': `${side} ${unit}`,
                'Surface Area': `${surfaceArea.toFixed(2)} ${areaUnit}`,
                'Volume': `${volume.toFixed(2)} ${volumeUnit}`,
                'Formula Used (Surface Area)': 'A = 6a²',
                'Formula Used (Volume)': 'V = a³'
            };
            
            displayResults(results);
        });
    }
});

// Cube calculation functions
function calculateCubeSurfaceArea(side) {
    return 6 * side * side;
}

function calculateCubeVolume(side) {
    return side * side * side;
}