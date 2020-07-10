window.onload = function(){

const firstName = document.getElementById('fname')
const secondName = document.getElementById('pname')
const button = document.getElementById('buttons')

const result = document.getElementById('result')
const warningLabel = document.getElementById('warning')
const emoji = this.document.getElementById('emoji')


//adding Event listener

button.addEventListener('click',()=>{

       if(firstName.value == '' || secondName.value == ''){
              warningLabel.innerText='Enter valid names!'
               result.innerText = ''
               setTimeout(()=>{
                        warningLabel.innerText =''
              },1000)
        }else{
                emoji.style.display = 'block'
                result.innerText = 'Calculating...'
                result.style.color = 'black'
                this.setTimeout(()=>{
                   emoji.style.display ='none'    
                   result.innerText = '' 
                   calc()
                },2000)
                
        }
})

function checnum(as)
{
	var dd = as.value;

            	if(!isNaN(dd))
            	{
            		dd = dd.substring(0,(dd.length-1));
            		as.value = dd;
            	}	
}

function calc(){
       
    var fname = firstName.value;
    var sname = secondName.value;
    var r = /\s+/g;
    var orfirst = fname.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
    
    if(orfirst!=""){
       
        var count = 0;
        var first = orfirst;	
        second = sname.toUpperCase();
        var names=second;
        second = second.replace(r,"");

        if(second != ""){
        
           for(var xx=0; xx<first.length; xx++){
             for(var yy=0; yy<second.length; yy++){
                if(first[xx] == second[yy])
                {
                        var a1 = first.substring(0,xx);
                        var a2 = first.substring(xx+1,first.length);
                        first = a1+a2;
                        xx=-1;
                        var b1 = second.substring(0,yy);
                        var b2 = second.substring(yy+1,second.length);
                        second = b1+b2;
                        yy=-1;
                        break;
                }
             }
           }
        
           var ss=(first+second);
           var l=ss.length;
           var ar = new Array("F", "L", "A", "M", "E", "S");
           var stp=1;
        
           for(var x=6; x>1; x--){
                   
                var g=((l%x)+stp)-1;
                if(g>x)
                {
                        g=g%x;
                }
                if(g==0)
                {
                        g=ar.length;
                }
                ar.splice(g-1,1);
                stp=g;
                
        }
                
        if(ar=="F"){
                result.innerHTML = 'FRIENDS';
                result.style.color='blue';                  
        }
        else if(ar=="L"){
                result.innerHTML = 'LOVER';
                result.style.color='#FF0080';
        }
        else if(ar=="A"){
                result.innerHTML = 'AFFECTION';
                result.style.color='#DBA901';
        } 
        else if(ar=="M"){
                result.innerHTML = 'MARRIAGE';
                result.style.color='green';
        }
        else if(ar=="E"){	
                result.innerHTML = 'ENEMY';
                result.style.color='red';
        }
        else if(ar=="S"){
                result.innerHTML = 'SISTER';
                result.style.color='violet';
        }
                 
      }          
    }
    else
    {
            return false;
    }
}

}