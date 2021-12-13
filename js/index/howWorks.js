const Howtemplate = document.createElement("template");
Howtemplate.innerHTML = `<link rel="stylesheet" href="css/main.css">
<style>
section{
 
  background:url('assets/bg10.jpg');
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
   .bg-white-blur{
     background:rgba(255,255,255,0.7);
      backdrop-filter:blur(2px);
   }
</style>
<section class="min-h-screen grid md:grid-cols-5 my-4 gap-2">
<div class="sec bg-white-blur min-h-screen md:col-span-3 shadow-lg grid md:grid-cols-2 place-items-center">
       <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="assets/reg.png">
  </div>
  <div>
    <h2 class="text-blue-800 text-3xl font-semibold">Register</h2>
    <p class="mt-2 text-gray-600">Register on our app or website to get started. Its quick and easy </p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">Read More</a>
  </div>
</div>


 <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="assets/search1.png">
  </div>
  <div>
    <h2 class="text-orange-800 text-3xl font-semibold">
Search</h2>
    <p class="mt-2 text-gray-600">Search our database for a child you want to help on your loved ones birthday </p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">Read More</a>
  </div>
</div>


 <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="assets/donate.png">
  </div>
  <div>
    <h2 class="text-green-400 text-3xl font-semibold">Make Donation</h2>
    <p class="mt-2 text-gray-600">Visit the child's profile page and make a donation in your loved ones name</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">Read More</a>
  </div>
</div>


 <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="assets/vid.jpg">
  </div>
  <div>
    <h2 class="text-indigo-800 text-3xl font-semibold">
Gratitude Videos</h2>
    <p class="mt-2 text-gray-600">You and your loved one will receive a video from the child showing their gratitude </p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">Read More</a>
  </div>
</div>
      </div>
      <div class="sec  min-h-screen grid place-items-center md:col-span-2">
     <div class="inner shadow-lg p-4 rounded-lg">
    <h2 class="text-orange-800 text-3xl font-semibold">How it works</h2>
    <p class='bg-white-blur p-4 my-2'>Register</p>
    <p class='bg-white-blur p-4 my-2'>Search for a Child to Support</p>
    <p class='bg-white-blur p-4 my-2'>Make a donation </p>
    <p class='bg-white-blur p-4 my-2'>Receive a video and letter of gratitude</p>
     </div>
      </div>
      
    </section>
  `;
class How extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(Howtemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("how-sec", How);
