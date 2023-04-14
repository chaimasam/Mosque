function playSoundAt(hour, minute) {
    // Check the current time every second
    setInterval(function() {
      const now = new Date();
      if (now.getHours() === hour && now.getMinutes() === minute) {
        const sound = document.getElementById('sound');
        if (sound) {
          sound.play().catch(function(error) {
            console.log(error); // Log any errors to the console
          });
        }
      }
    }, 1000);
  }
  
  // Call the function with the desired time
  playSoundAt(13, 45); // Note that the hour parameter is without the leading zero
  playSoundAt(5, 12); 
  playSoundAt(13, 31); 
  playSoundAt(17, 14); 
  playSoundAt(20, 31); 
  playSoundAt(21, 50); 
  