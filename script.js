  
        const fileInput = document.getElementById('file');
        const selectedImage = document.getElementById('selected');

        fileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    selectedImage.src = e.target.result;
                   

                }
              
            }
        });

        
        function updatingImage()
        {
           const suffix = this.dataset.sizing ; 
           document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
        }
        
        const input = document.querySelectorAll('.input-section input');
        console.log(input);
        input.forEach(function(input)
        {
            input.addEventListener('mousemove' , updatingImage);
        });
       

        