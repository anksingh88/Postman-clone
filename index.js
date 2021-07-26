console.log("Test");
//utility functions:
//utility function to get DOM element from string
function getElementFromString(string){
    let div=document.createElement('div');
    div.innerHTML=string;
    return div.firstElementChild;
}
let parametersBox=document.getElementsByTagName('parametersBox');
parametersBox.style.display='none'
let paramsRadio=document.getElementsByTagName('paramsRadio');
paramsRadio.addEventListener('click',()=>{
    document.getElementsByTagName('requestJsonText').style.display='none';
    document.getElementsByTagName('parametersBox').style.display='block';
})



//intialize number of parameters
let addedparamcount=0;

let addparam = document.getElementById("addparam")
document.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-group row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${addedparamcount+2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addedparamcount+2}" placeholder="Enter Parameter ${addedparamcount+2} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addedparamcount+2}" placeholder="Enter Parameter ${addedparamcount+2} Value">
                </div>
                <div class="params col">
                    <button  class="btn btn-primary deleteparam" type="submit">-</button>
                </div>`;
    let paramelement=getElementFromString(string);
    params.appendChild(paramelement);
    //add an event listener to remove an parametre to remove button
    let deleteparam=document.getElementById('deleteparam');
    for(item in deleteparam){
        item.addEventListener('click',(e)=>{
            e.target.paramelement.remove();
        })
    }
    addedparamcount++;


})
//if the user click on submit button
let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    document.getElementById('responseJsonText').value="please wait....Fetching response";
    //Ftetch all the values user has entered

    let url=document.getElementById('url').value;
    
})