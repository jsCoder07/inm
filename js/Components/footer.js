const Footertemplate = document.createElement("template");
Footertemplate.innerHTML = `
<link rel="stylesheet" href="css/main.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>
.aurora-outer {
  background: linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%);
  background-size: 200%;
  animation: aurora 10s infinite;
 
}

.aurora-inner {
  background: radial-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.15)
  );
  background-size: 200%;
  
  animation: aurora 7s infinite;
}

@keyframes aurora {
  0% {
    background-position: left top;
  }
  25% {
    background-position: right top;
  }
  50% {
    background-position: right bottom;
  }
  75% {
    background-position: left bottom;
  }
  100% {
    background-position: left top;
  }
}
.footer-links>a {
 
    padding-bottom: 2px;
  
}

</style>
<section class="aurora-outer overflow-hidden flex items-center justify-center">
      <div class="aurora-inner">
<footer class="footer-1 py-8 sm:py-12">
  <div class="container mx-auto px-4">
    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 class="text-xl font-bold mb-6">Projects</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">African Green Energy</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Indian Housing</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Asia Disaster Relief</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">South American Relief</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Computer Training Africa</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Christmas Children's drive</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 class="text-xl font-bold mb-6">Resources</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our Brochure</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Apply for Employment</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Search our database</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">About</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About Us</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Our Team</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy Policy</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 class="text-xl font-bold mb-6">Help</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
          </li>
          <li class="mb-2">
            <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div class="flex sm:justify-center xl:justify-start">
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-200 hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-200 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-200 hover:text-white hover:bg-red-600 hover:border-red-600">
            <i class="fab fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div class="sm:w-full px-4 md:w-1/6">
        <img src='assets/logo.png' class='w-32'/>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Address</h6>
        <address class="not-italic mb-4 text-sm">
         15 Rankin Rd.<br/>
         Houston Texas TX78701
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Get Our App</h6>
        <Get class="mb-4 text-sm">Get our mobile app for Andriod & iOs and stay in the know while on the go</p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
      </div>
    </div>
  </div>
</footer>
      </div>
      </section>
  `;
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(Footertemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

window.customElements.define("footer-sec", Footer);
