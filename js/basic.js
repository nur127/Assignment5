document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){

    event.preventDefault();

    const amount = getInputValueByID('noakhali-input');
    const balance = getTextFieldValueByID('main-balance');
    const noakhaliBalance = getTextFieldValueByID('noakhali-balance');

    if(isNaN(amount)  || amount < 0 ){
        alert('Please Provide Valid Amount Number!');
        return ;
    }

    else if (amount > balance){
        alert('Insufficient Balance !');
        return;
    }
    else{
        const newnoakhaliBalance = noakhaliBalance + amount ;
        const newbalance = balance-amount ; 
        document.getElementById('noakhali-balance').innerText = newnoakhaliBalance;
        document.getElementById('main-balance').innerText = newbalance;
        donateMessage ();

        const div = document.createElement('div');
        const donatetime = displayDateTime();

        div.innerHTML = `<h1 class="text-2xl font-bold">${amount} taka is donated for flood relif in Noakhali</h1> ${donatetime}`;
        
        div.classList.add('border-2');
        div.classList.add('p-8');
        div.classList.add('bg-lime-300')
        div.classList.add('rounded-lg');
        
        document.getElementById('history-container').appendChild(div);
    }

})

// For Feni

document.getElementById('feni-donate-btn').addEventListener('click',function(event){

    event.preventDefault();

    const amount = getInputValueByID('feni-input');
    const balance = getTextFieldValueByID('main-balance');
    const feniBalance = getTextFieldValueByID('feni-balance');

    if(isNaN (amount)  || amount < 0 ){
        alert('Please Provide Valid Amount Number!');
        return ;
    }

    else if (amount > balance){
        alert('Insufficient Balance !');
        return;
    }
    else{
      
        const newfeniBalance = feniBalance + amount ;
        const newbalance = balance-amount ; 
        document.getElementById('feni-balance').innerText = newfeniBalance;
        document.getElementById('main-balance').innerText = newbalance;
        donateMessage ();

        const div = document.createElement('div');
        const donatetime = displayDateTime();

        div.innerHTML = `<h1 class="text-2xl font-semibold">${amount} taka is donated for flood relif in Feni</h1> ${donatetime}`;
        
        div.classList.add('border-2');
        div.classList.add('p-8');
        div.classList.add('bg-lime-300')
        div.classList.add('rounded-lg');
        
        document.getElementById('history-container').appendChild(div);
    }

})

// For Quota

document.getElementById('quota-donate-btn').addEventListener('click',function(event){

    event.preventDefault();

    const amount = getInputValueByID('quota-input');
    const balance = getTextFieldValueByID('main-balance');
    const quotaBalance = getTextFieldValueByID('quota-balance');

    if(isNaN(amount)  || amount < 0 ){
        alert('Please Provide Valid Amount Number!');
        return ;
    }

    else if (amount > balance){
        alert('Insufficient Balance !');
        return;
    }
    else{
        const newquotaBalance = quotaBalance + amount ;
        const newbalance = balance-amount ; 
        document.getElementById('quota-balance').innerText = newquotaBalance;
        document.getElementById('main-balance').innerText = newbalance;
        donateMessage ();

        const div = document.createElement('div');
        const donatetime = displayDateTime();

        div.innerHTML = `<h1 class="text-2xl font-semibold">${amount} taka is donated for aid for injured in quota movement</h1> ${donatetime}`;
        
        div.classList.add('border-2')
        div.classList.add('p-8');
        div.classList.add('bg-lime-300')
        div.classList.add('rounded-lg');
        
        document.getElementById('history-container').appendChild(div);
    }

})

document.getElementById('primary-donate-btn').addEventListener('click',function(){
    makeButtonGreen('primary-donate-btn');
    showsection('donate-container');
})

document.getElementById('primary-history-btn').addEventListener('click',function(){
    makeButtonGreen('primary-history-btn');
    showsection('history-container');
})

document.getElementById('blog').addEventListener('click',function(){
    window.location.href = '/home.html';
})
