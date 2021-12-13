const Subscribetemplate = document.createElement("template");
Subscribetemplate.innerHTML = `<link rel="stylesheet" href="css/main.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>
.sec2{
  background:url('assets/boy.jpg');
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
  background:url('assets/bgg.jpg');
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
     <form>
					<div>
						<span class="text-sm text-gray-900"></span>
						<h1 class="text-2xl font-bold">Newsletter Subscription</h1>
					</div>
					<div class="my-5">
						<label class="block text-md mb-2" for="password">Email Address</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" required name="mail" placeholder="Email Address">
        </div>
        <div class="flex  space-x-2 justify-center items-end bg-orange-800 hover:bg-orange-700 text-white py-2 rounded-md transition duration-100 w-1/2">

           <i class="fas fa-file-signature h-5 cursor-pointer"></i>
									<button >Subscribe</button>
								</div>
      </form>
     </div>
      </div>
      <div class="sec2 bg-green-500 min-h-screen"></div>
    </section>
  `;
class Subscribe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(Subscribetemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("subscribe-sec", Subscribe);
