function createStars()
{
    const container=document.querySelector("body");
    for(let i=0;i<1000;i++){
        
            const star=document.createElement("div");
            star.className="star";
            star.style.width=".1px";
            star.style.height=".1px";

            star.style.top= Math.random() * 100 + "%";
            star.style.left= Math.random() * 100 + "%";

            container.appendChild(star);
        }
   }
   createStars();
   function createStars2()
   {
       const container=document.querySelector("body");
       for(let i=0;i<1000;i++){
           
               const star2=document.createElement("div");
               star2.className="star2";
               star2.style.width=".1px";
               star2.style.height=".1px";
   
               star2.style.top= Math.random() * 100 + "%";
               star2.style.left= Math.random() * 100 + "%";
   
               container.appendChild(star2);
           }
      }
      createStars2();
   
      function createStars3()
   {
       const container=document.querySelector("body");
       for(let i=0;i<1000;i++){
           
               const star3=document.createElement("div");
               star3.className="star2";
               star3.style.width=".1px";
               star3.style.height=".1px";
   
               star3.style.top= Math.random() * 100 + "%";
               star3.style.left= Math.random() * 100 + "%";
   
               container.appendChild(star2);
           }
      }
      createStars3();
   