
let username ='Majid'; 


let workstations = [
        {
            name:"Cleaning", 
            time:650, 
            id:'A124FF231A', 
            types:'value-adding' 
        },
        {
            name:"Financing", 
            time:500, 
            id:'B124FF231A', 
            types:'non-value-adding'
        },
        {
            name:"Quality Control", 
            time:450, 
            id:'C124FF231A', 
            types:'waste' 
        }
];



function findClass(type){
   
switch(type){
    case 'value-adding': 
        cls ='value-adding';
        break; 
    case 'non-value-adding':
        cls ='non-value-adding';
        break;
    case 'waste':
        cls='waste'; 
        break;
    default: 
    cls = 'value-adding';
}
    return cls; 
}

console.log(findClass(workstations[0].types))



function createAutoStations(){
    const stationsPlaceHolder = document.getElementById('stationsCont'); 
    console.log(stationsPlaceHolder);
    workstations.forEach(station => {
        const stationCont = document.createElement('div');
        const stationClass = findClass(station.types); 
        stationCont.classList.add(stationClass);    
        stationsPlaceHolder.appendChild(stationCont); 
        
        console.log(stationCont); 

    });

}









function createForm(){
    console.log('Hey Scrip is connceted ... !'); 
    const daForm = document.getElementById('container-form'); 
    daForm.action = `/workstations/${workstation.id}/tasks`  
    const title = daForm.elements['title'].value; 
    const time = daForm.elements['time'].value; 
    const listContainer = document.getElementById('outputList'); 
    const itemContainer = document.createElement('div'); 
    itemContainer.classList.add('item-container-class'); 
    const lineItem = document.createElement('li'); 
    lineItem.innerText = (`${title} - ${time} min`).toUpperCase();
    itemContainer.appendChild(lineItem);
    listContainer.appendChild(itemContainer); 
}




