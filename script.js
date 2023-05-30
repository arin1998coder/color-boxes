const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        const randomColor = generateRandomColor();
        square.style.backgroundColor = randomColor;
      });

      square.addEventListener('mouseout', () => {
        setTimeout(() => {
          square.style.backgroundColor = 'rgb(55, 54, 54)';
        }, 1000);
      });
    });

    // Function to generate a random color
    function generateRandomColor() {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      return `rgb(${randomR}, ${randomG}, ${randomB})`;
    }