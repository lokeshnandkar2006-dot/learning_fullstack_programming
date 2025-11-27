

// =====================================================
// 🔢 SECTION 5: Counter App
// =====================================================
// Learn about variables and state management

let counter = 0; // This variable holds the current count

const counterDisplay = document.getElementById('addcart');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

increaseBtn.addEventListener('click', function() {
    counter++; // Increment by 1 (same as: counter = counter + 1)
    counterDisplay.textContent = counter;
    updateCounterColor();
    console.log('Counter increased to:', counter);
});

decreaseBtn.addEventListener('click', function() {
    counter--; // Decrement by 1 (same as: counter = counter - 1)
    counterDisplay.textContent = counter;
    updateCounterColor();
    console.log('Counter decreased to:', counter);
});

resetBtn.addEventListener('click', function() {
    counter = 0; // Reset to 0
    counterDisplay.textContent = counter;
    updateCounterColor();
    console.log('Counter reset to:', counter);
});

// Function to change color based on counter value
function updateCounterColor() {
    if (counter > 0) {
        counterDisplay.style.color = '#28a745'; // Green for positive
    } else if (counter < 0) {
        counterDisplay.style.color = '#dc3545'; // Red for negative
    } else {
        counterDisplay.style.color = '#667eea'; // Purple for zero
    }
}


