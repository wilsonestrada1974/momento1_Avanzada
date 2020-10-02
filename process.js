function procesar(){
    let service =document.getElementById('service').value;
    let cant = parseInt(document.getElementById('cant').value);
    let value = parseInt (document.getElementById('value').value);
    let acumm;
    let sum;
    let subt=0;
    let prom=0;

    do{
    
        if(cant>0 && value>0){
        
        subt=cant*value;
        sum=sum+subt;
        }
        acumm++;
        prom=sum/acumm;
    }while(acumm=0);

    return(sum, acumm, prom, subt);
}