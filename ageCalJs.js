function calAge(){
    const dateInput=new Date(document.querySelector('.dateInput').value);
    const today=new Date();
    let getAge=today.getFullYear() -dateInput.getFullYear();
    let getMonth=today.getMonth() -dateInput.getMonth();
    let getDay=today.getDate() -dateInput.getDate();    
    if(getMonth<0 ||(getMonth === 0 && getDay <0)){
        getAge--;
    }
    if(getMonth <0){
        getMonth+=12;
    }
    if(getDay < 0){
        const getLastMonthDate=new Date(today.getFullYear(), today.getMonth(),0);
        getDay=getLastMonthDate.getDate() - dateInput.getDate() + getDay +1; 
    }

    const result =document.querySelector('#result');
    
    result.innerHTML=`You are <b>${getAge}</b> Years , <b>${getMonth}</b> Months , <b>${getDay}</b> Days Old `
}