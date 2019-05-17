var input;
function setup() { 
    
    let r = select('.btn').mouseClicked(
        
        


        function buttonClicked()
        {
            console.log("calling");
            let params = {
                active:true,
                currentWindow:true
            }
            chrome.tabs.query(params,(b)=>{
                let m ={
                    txt:document.querySelector("input[name='message']").value,
                    times:document.querySelector("input[name='times']").value
                
                    }
                    if(m.txt && m.times<=1000 & m.times>0)
                    {
                        chrome.tabs.sendMessage(b[0].id,m) 
                    }

                       
            })
            
        }
    )
 }
function draw() {  }