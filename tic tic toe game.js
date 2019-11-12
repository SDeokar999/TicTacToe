 let sign="x";
        let number;
        function assign(number){
            
           let siggn=document.getElementById("r"+number);
           if(siggn.innerText==""){
            siggn.innerText=sign;
           }
            document.getElementById("head").innerText="x your turn";
        nextassign();
        winner();
        }
        
        function nextassign(number){
            if(sign==="x"){sign="o";
            document.getElementById("head").innerText="o your turn ";}
            else{sign="x";}
        }
        function getbox(number){
            return document.getElementById("r"+number).innerHTML;
        }
        function checkmove(a,b,c,m){
            if(getbox(a)==m && getbox(b)== m && getbox(c)==m){
            return true ;
            }
            else{
            return false;}
        }
        function resetgame(){
            for(var s=1;s<=9;s++){
        document.getElementById("r"+s).innerHTML=" ";}
        document.getElementById("head").innerText="Tic Tic Tac";
        document.location.reload();}
        function no(){
            for(var i=1;i<=9;i++){
                    if(document.getElementById("r"+i).innerHTML==" "){
                        Document.getElementById("r"+i).innerText="No";
                    }
                }
        }
function winner(){
     if(checkmove(1,2,3,"o")||checkmove(4,5,6,"o")||checkmove(7,8,9,"o")||checkmove(1,4,7,"o")||checkmove(2,5,8,"o")||checkmove(3,6,9,"o")
    ||checkmove(1,5,9,"o")||checkmove(3,5,7,"o")){
        document.getElementById("head").innerText="** o you win**";
        }
    
      else if(checkmove(1,2,3,"x")||checkmove(4,5,6,"x")||checkmove(7,8,9,"x")||checkmove(1,4,7,"x")||checkmove(2,5,8,"x")||checkmove(3,6,9,"x")
        ||checkmove(1,5,9,"x")||checkmove(3,5,7,"x")){
                    document.getElementById("head").innerText="**x you win **";
                    }  
        else {if(getbox(1)!=""&&getbox(2)!=""&&getbox(3)!=""&&getbox(4)!=""&&getbox(5)!=""&&getbox(6)!=""
    &&getbox(7)!=""&&getbox(8)!=""&&getbox(9)!=""){
                document.getElementById("head").innerText=" Game Tie";}
                
    }
    
}
