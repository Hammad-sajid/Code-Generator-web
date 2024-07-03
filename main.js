var intervalId;  // To control the setInterval function

        // Function to generate a random 4-digit code
        function generateCode() {
            var code = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
            document.getElementById('codeDisplay').innerText = "Generated Code :" +code;
        }

        function startGenerating() {
            if (!intervalId) {
                intervalId = setInterval(generateCode, 1000);  // Generate code every second
            }
        }

        function stopGenerating() {
            clearInterval(intervalId);
            intervalId = null;
            document.getElementById('codeDisplay').innerText = '0000';
        }