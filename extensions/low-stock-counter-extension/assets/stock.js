/*var stockselectclass = stockselectclass;
var stockVarSelector = stockVarSelector;
var appendelementselelctor = "[name=add]";*/

var elements = document.querySelectorAll(stockselectclass);
const newItem = document.querySelector('.variantstockwrapper');
/*const target = document.querySelector(appendelementselelctor);
target.parentNode.insertBefore(newItem, target);*/

getOptionval();

for (var i = 0; i < elements.length; i++) { 
    elements[i].addEventListener('click', getOptionval, false);
}

function getOptionval() {  
  console.log("getOptionval called");
  setTimeout(function(){
    selectElementval = document.querySelector(stockVarSelector).value;    
    console.log("Selected val = "+selectElementval);  
      console.log("variantinventories="+JSON.stringify(variantinventories));
      variantinventories.forEach(function(item){        
        if(item.id == selectElementval){          
          if(item.stock > 0 && item.policy == "deny"){
            //console.log("counterrange :: "+parseInt(counterrange));
            if(item.stock < parseInt(counterrange)){
              //console.log("textbeforecount :: "+textbeforecount);
              //console.log("textaftercount :: "+textaftercount);
              newItem.innerHTML = '<div class="variant-stock-inner">'+textbeforecount+'<span class="counterwrapper">'+item.stock+'</span>'+textaftercount+'</div>';
            }
            else{
              //newItem.innerHTML = '<div class="variantstockwrapper">'+textbeforecount+' <span class="counterwrapper">'+item.stock+'</span>'+textaftercount+'</div>';
              newItem.innerHTML = '<div class="variant-stock-inner"></div>'; 
            }
          }
          else{
            newItem.innerHTML = '<div class="variant-stock-inner"></div>'; 
          }
        }
      });
  }, 800);  
}

/*function getOptionval() {  
  console.log("getOptionval called");
  setTimeout(function(){
    selectElementval = document.querySelector(stockVarSelector).value;    
    console.log("Selected val = "+selectElementval);  
      console.log("variantinventories="+JSON.stringify(variantinventories));
      variantinventories.forEach(function(item){        
        if(item.id == selectElementval){          
          if(item.stock > 0 && item.policy == "deny"){
            //console.log("counterrange :: "+parseInt(counterrange));
            if(item.stock < parseInt(counterrange)){
              //console.log("textbeforecount :: "+textbeforecount);
              //console.log("textaftercount :: "+textaftercount);
              newItem.innerHTML = '<div class="variantstockwrapper">'+textbeforecount+'<span class="counterwrapper">'+item.stock+'</span>'+textaftercount+'</div>';
            }
            else{
              //newItem.innerHTML = '<div class="variantstockwrapper">'+textbeforecount+' <span class="counterwrapper">'+item.stock+'</span>'+textaftercount+'</div>';
              newItem.innerHTML = '<div class="variantstockwrapper"></div>'; 
            }
          }
          else{
            newItem.innerHTML = '<div class="variantstockwrapper"></div>'; 
          }
        }
      });
  }, 800);  
}*/

