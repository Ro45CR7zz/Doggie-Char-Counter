const textInput = document.getElementById('textInput');
const counter = document.getElementById('counter');
const dogBody = document.getElementById('dogBody');
const dogContainer = document.getElementById('dogContainer');
const growthIndicator = document.getElementById('growthIndicator');

textInput.addEventListener('input', function() {
    const length = this.value.length;
    const growthLevel = Math.floor(length / 10);
    
    counter.textContent = `Characters: ${length}`;
    
    const baseWidth = 100;
    const growthAmount = growthLevel * 20; 
    const newWidth = baseWidth + growthAmount;
    dogBody.style.width = `${newWidth}px`;
    
    if (newWidth > 200) {
        dogContainer.scrollLeft = dogContainer.scrollWidth - dogContainer.clientWidth;
    }
    
    const nextGrowthAt = (growthLevel + 1) * 10;
    const charactersUntilGrowth = nextGrowthAt - length;
    
    if (length === 0) {
        growthIndicator.textContent = "Dog will grow every 10 characters!";
        dogContainer.scrollLeft = 0;
    } else if (charactersUntilGrowth === 0) {
        growthIndicator.textContent = "🎉 Your dog just grew! Keep typing!";
    } else {
        growthIndicator.textContent = `${charactersUntilGrowth} more characters until dog grows!`;
    }
});
