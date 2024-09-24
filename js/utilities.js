function getInputValueByID(id){
    const getvalue = document.getElementById(id).value ;
    const value = parseFloat(getvalue);
    return value;
}

function getTextFieldValueByID(id){
    const getvalue = document.getElementById(id).innerText ;
    const value = parseFloat(getvalue);
    return value;
}

function makeButtonGreen(id){
    document.getElementById('primary-donate-btn').classList.remove('button-common-clr');
    
    document.getElementById('primary-history-btn').classList.remove('button-common-clr');
 
    document.getElementById(id).classList.add('button-common-clr');
  
    
}
function showsection (id){
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    // document.getElementById('blog-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}

function donateMessage (){
    Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Congratulations ! \n Your Donation has been completed.",
        showConfirmButton: true,
        // timer: 2000
      });
}

// Time 

function displayDateTime() {
    const now = new Date(); // Get current date and time
    const date = now.toLocaleDateString(); // Format date
    const time = now.toLocaleTimeString(); // Format time

    const donatetime = `Current Date: ${date} | Time: ${time}`;
    return donatetime;
}

