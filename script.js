// Common utility functions
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    
    for (const [key, value] of Object.entries(results)) {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        const property = document.createElement('span');
        property.textContent = key;
        
        const propertyValue = document.createElement('span');
        propertyValue.textContent = value;
        
        resultItem.appendChild(property);
        resultItem.appendChild(propertyValue);
        
        resultsContent.appendChild(resultItem);
    }
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// For unit conversions if needed
const unitConversions = {
    // Length conversions
    m_to_cm: (value) => value * 100,
    cm_to_m: (value) => value / 100,
    m_to_inch: (value) => value * 39.3701,
    inch_to_m: (value) => value / 39.3701,
    
    // Area conversions
    sqm_to_sqcm: (value) => value * 10000,
    sqcm_to_sqm: (value) => value / 10000,
    sqm_to_sqft: (value) => value * 10.7639,
    sqft_to_sqm: (value) => value / 10.7639,
    
    // Volume conversions
    cubm_to_cubcm: (value) => value * 1000000,
    cubcm_to_cubm: (value) => value / 1000000,
    cubm_to_cubft: (value) => value * 35.3147,
    cubft_to_cubm: (value) => value / 35.3147
};

// Initialize tooltips or other UI elements if needed
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('GeoCalc initialized');
});