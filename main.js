//Red this before starting
// Simple js dom (document object manipulation) hei
// (Also, I use js without ; its alright)

//android le findElementById pole buttons and text box ivde declaring
/*const fname = document.getElementById('fname')
const pname = document.getElementById('pname')
const button = document.getElementById('button')

const result = document.getElementById('result')
const warningLabel = document.getElementById('warning')

//adding Event listener
//Instead of click we can dblclick angane angane

button.addEventListener('click',()=>{
        

       if(fname.value == '' || pname.value == ''){
              warningLabel.innerText='Enter valid names!'
               result.innerText = ''
               setTimeout(()=>{
                        warningLabel.innerText =''
              },1000)
        }else{
       
               result.innerHTML = `Nokkanda unni.. <span style="color:orangered;">${pname.value}</span> will never like <span style="color:orangered;">${fname.value}</span>`
               
        }
})
*/






function checnum(as)
{
	var dd = as.value;

            	if(!isNaN(dd))
            	{
            		dd = dd.substring(0,(dd.length-1));
            		as.value = dd;
            	}	
}

function calc() 

{
       
	var fname = document.getElementById('fname').value;
	var sname = document.getElementById('pname').value;
	if (fname=='') {
		alert("Enter Your Name");
	}
	else if (sname=='') {
		alert("Enter Partner Name");
	}
    var r = /\s+/g;
    var orfirst = fname.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
   
   

    if(orfirst!="")

    {
       
            var count = 0;
            var first = orfirst;	
            second = sname.toUpperCase();
           
            var names=second;
            second = second.replace(r,"");	
            if(second != "")
            {
               
                
                    for(var xx=0; xx<first.length; xx++)
                    {
                            for(var yy=0; yy<second.length; yy++)
                            {
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
            
                    for(var x=6; x>1; x--)
                    {
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
                            //alert(ar);
                    }
                    
                    if(ar=="F")
                    {
                            //res="FRIENDS";
							document.getElementById("result").innerHTML = 'FRIENDS';
							document.getElementById("result").style.color='blue';                  
                    }
                    else if(ar=="L")
                    {
                            //res="LOVER";
							document.getElementById("result").innerHTML = 'LOVER';
							document.getElementById("result").style.color='#FF0080';
                    }
                    else if(ar=="A")
                    {
                            //res="AFFECTION";
							document.getElementById("result").innerHTML = 'AFFECTION';
							document.getElementById("result").style.color='#DBA901';
                    } 
                    else if(ar=="M")
                    {
                            //res="MARRIAGE";
							document.getElementById("result").innerHTML = 'MARRIAGE';
							document.getElementById("result").style.color='green';
                    }
                    else if(ar=="E")
                    {	
                            //res="ENEMY";
							document.getElementById("result").innerHTML = 'ENEMY';
							document.getElementById("result").style.color='red';
                    }
                    else if(ar=="S")
                    {
                            //res="SISTER";
							document.getElementById("result").innerHTML = 'SISTER';
							document.getElementById("result").style.color='violet';
                    }
                    
                    document.getElementById("nam"+1).style.display = 'block';
                    document.getElementById("nam"+1).textContent=nam + " & " +names;
            }
            else
            {
                    document.getElementById("nam"+1).style.display = 'none';
                    count++; 
                    if(count==4)
                    {
                            alert("Enter anyone of your partner name");
                            document.getElementById("tablid").style.display = 'block';
                    }
            }          
    }
    else
    {
            return false;
    }
}