
                       function sommer(){
                    let quatites=Array.from(document.getElementsByClassName('quantite'));
                    let prix=Array.from(document.getElementsByClassName('prix'));
                    let total=document.getElementById('total');
                    let somme=0;
                    
                   
                   for(var i=0; i<quantites.length;i++){
                      
                      somme+=prix[i].value*quantites[i].value;
                      
    
                   

                    }
                   
                  return total.value=somme;

                }

                let coeurs=document.getElementsByClassName('fa-heart');
                for(let coeur of coeurs){
                    coeur.addEventListener('click', function(){
                        coeur.classList.toggle("red");

                    })
                }
                let indexpluss=Array.from(document.getElementsByClassName('plus'));
                let quantites=document.getElementsByClassName('quantite');

                for(let indexplus in indexpluss ){
                    indexpluss[indexplus].addEventListener('click',function(){
                       quantites[indexplus].value=Number(quantites[indexplus].value)+1;
                       sommer();
                    })
                }
                let indexmoinss=Array.from(document.getElementsByClassName('moins'));
                for(let indexmoins in indexmoinss){
                    indexmoinss[indexmoins].addEventListener('click',function(){
                        if(quantites[indexmoins].value>0){
                      quantites[indexmoins].value=Number(quantites[indexmoins].value)-1;
                      sommer();}
                    })
                }
                let supprimers=document.getElementsByClassName('supprimer');
           
                for(let supprimer of supprimers){
                    supprimer.addEventListener('click',function(){
                        supprimer.parentNode.remove();
                        sommer();
                        
                       
                    })
                    
                }
                
         
               

            
               
            
        
        
        
            
    