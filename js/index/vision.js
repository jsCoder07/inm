const visiontemplate = document.createElement("template");
visiontemplate.innerHTML = ` 
<link rel="stylesheet" href="css/main.css">
<style>
.sec2{
  background:url('assets/joy.jpg');
  background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center; 
}

section{
  background-image: linear-gradient(
    to bottom right,
   #efa2b4,
    #aef1ee
  );
  background:url('assets/bg0.jpg');
  background-size:     cover;                    
    background-repeat:   no-repeat;
    background-position: center center; 
}
 .inner{
   width:90%;
   min-height: 50vh;
   }
   @media screen and (max-width: 786px) {
  .inner {
    width: 95vw;
  }
}
   .inner{
     background:rgba(255,255,255,0.7);
      backdrop-filter:blur(5px);
      
   }
</style>
<section class="grid  min-h-screen md:grid-cols-2">
      <div class="sec  min-h-screen grid place-items-center">
     <div class="inner shadow-lg p-4 rounded-lg">
    <h2 class="text-indigo-800 text-3xl font-semibold"> Our Vision</h2>
     </div>
      </div>
      <div class="sec2 bg-green-500 min-h-screen"></div>
    </section>
  `;
class Vision extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(visiontemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("vision-sec", Vision);
