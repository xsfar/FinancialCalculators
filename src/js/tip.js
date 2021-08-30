document.getElementById('tip-form').addEventListener('submit', function (e) {
  e.preventDefault();
  // Hide results
  document.querySelector('#results').style.display = 'none';
  // Show loader
  document.querySelector('#loading').style.display = 'block';
  // Set timer
  setTimeout(calculateResults, 500);
});

function calculateResults(e) {
  // UI Vars
  const amount = document.getElementById('amount');
  const tipPerc = document.getElementById('tipPercent');
  const numPeo = document.getElementById('numPeople');
  const tipTotal = document.getElementById('Tip-Total');
  const tipPer = document.getElementById('Tip-Per');
  const total = document.getElementById('total');
  const totalEach = document.getElementById('total-each');

  const principal = parseFloat(amount.value);
  const calculateTipPerc = parseFloat(tipPerc.value) / 100;
  const nump = parseFloat(numPeo.value);

  const calculateTip = (principal * calculateTipPerc);
  const calculateTip2 = (calculateTip * 10);

  if (isFinite(calculateTip2)) {
    tipTotal.value = calculateTip2.toFixed(2);
    tipPer.value = (calculateTip2 / nump).toFixed(2);
    total.value = (calculateTip2 + principal).toFixed(2);
    totalEach.value = ((calculateTip2 + principal) / nump).toFixed(2);
    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please check your numbers.');
  }

}

// Show Error
function showError(error) {
  // Hide results
  document.querySelector('#results').style.display = 'none';
  // Hide loader
  document.querySelector('#loading').style.display = 'none';
  // Create a div
  const errorDiv = document.createElement('div');
  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Add class
  errorDiv.className = 'alert alert-danger';
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}
