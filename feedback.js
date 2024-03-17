const scriptURL = 'https://script.google.com/macros/s/AKfycbyHA5SlvhjUoktpeDUjkpjgACo7cVKgt2vks9ETbRksPB9KyAQR5mrFsn0a5edlsKQ_yw/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        Swal.fire({
            title: 'Sending Data...',
            html: 'Please wait while we process your request.',
            allowOutsideClick: false,
            showCancelButton: false, // Hide the cancel button
            showConfirmButton: false, // Hide the confirm button
            onBeforeOpen: () => {
            Swal.showLoading();
            }
        });
        setTimeout(() => {
         // Close loading screen
         Swal.close();
   
         // Show success message
         Swal.fire({
           title: 'Form Submitted',
           text: 'Successfully!',
           icon: 'success',
           showCancelButton: false, // Hide the cancel button
           showConfirmButton: false, // Hide the confirm button
           allowOutsideClick: false,// Prevent dismissing the popup by clicking outside
         }).then(() => {
               // Redirect to quiz.html
               window.location.reload(); 
       });
 
         // Clear form fields after successful login
         
       }, 1000);
       setTimeout(()=>{
         Swal.close();
         this.reset(); // Reset the sign-in form
       },2000);
    })
    .then(() => { })
    .catch(error => console.error('Error!', error.message))
  })