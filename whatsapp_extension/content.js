function setup(){

chrome.runtime.onMessage.addListener(gotMess)

function gotMess(req,sender,sendREs) {
        if(req.txt)
        {

        //     let s = document.getElementsByTagName('span')
        //     for (const iterator of s) {
         
         
        //      iterator.style["color"]="red"
                
        //     }

        //     let t = document.getElementById("pane-side")
        //     let r = t.querySelectorAll("._2wP_Y")
        //     r.forEach(element => {
                
        //         console.log(element.querySelector("._3TEwt"));
        //     });
        //     console.log(r[0]);
            
        // console.log(r[0].querySelector("div"));



        
        


//  <div class="weEq5"><button class="_35EW6"><span data-icon="send" class=""><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button></div> 


var event = new InputEvent('input', {
  bubbles: true
});
var textbox = document.querySelector('div._2S1VP');

 for (let index = 0; index < req.times; index++) {
  textbox.textContent = req.txt;
  textbox.dispatchEvent(event);

  document.querySelector("button._35EW6").click();
   
 }



//  let u= document.querySelector("div.RLfQR div div div div div span span[title='Keeru']")


        // let m = document.getElementById("main")
        // let r = m.querySelector("footer")
        // let u = r.children[0]
        
        // let rr = u.children[1]
        // let uu = rr.children[0]
        // uu.className+= " focused"
       
        // uu.children[0].style.visibility = "hidden";
        
        // uu.children[1].innerText="fhjh"
        // // document.querySelector("button. _2S1VP copyable-text selectable-text").click();
        // // document.querySelector("button. _2S1VP copyable-text selectable-text").focus();


       
        // document.querySelector("button._35EW6").click();
        // rr = u.children[2]
        // rr.removeChild(rr.querySelector("div"))
        // let i = document.createElement("button")
        // i.className="_35EW6"
        // i.innerHTML='<span data-icon="send" class=""><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span>'
        // rr.appendChild(i)
        
             
        }
        
  }
}
function draw() { 


}