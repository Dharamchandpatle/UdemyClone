// "use client "
// import './App.css'
// import Navbar from './components/Header'

function Project1() {

  return (
    <>
 <div>
  {/* <Navbar/> */}
{/*========== HEADER ==========*/}
<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800" >
  <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
    <div className="relative md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">Brand</a>
        <div className="md:hidden">
          <button type="button" className="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg className="hsCollapseOpen:hidden flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg className="hsCollapseOpen:block hidden flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>

      <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
            <a className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Landing</a>

            <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Company
            </a>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
              <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Resources
                <svg className="flexShrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col mx-1 md:mx-0">
                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">Support Docs</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Explore advice and explanations for all of Preline's features.</p>
                      </div>
                    </a>

                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">Integrations</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Discover the huge range of tools that Preline integrates with.</p>
                      </div>
                    </a>

                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">API Reference</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Build custom integrations with our first-class API.</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col mx-1 md:mx-0">
                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">Help Center</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn how to install, set up, and use Preline.</p>
                      </div>
                    </a>

                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">Developer Hub</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn how to integrate or build on top of Preline.</p>
                      </div>
                    </a>

                    <a className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <svg className="flexShrink-0 size-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 dark:text-gray-200">Community Forum</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn, share, and connect with other Preline users.</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                    <span className="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">Customer stories</span>

                    {/*Link*/}
                    <a className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600" href="#">
                      <img className="size-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=" alt="Image Description" />
                      <div className="grow">
                        <p className="text-sm text-gray-800 dark:text-slate-400">
                          Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.
                        </p>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                          Learn more
                          <svg className="flexShrink-0 size-4 transition easeInOut groupHover:translateX-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </p>
                      </div>
                    </a>
                    {/*End Link*/}
                  </div>
                </div>
              </div>
            </div>

            <a className="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Join us <span className="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">4</span>
            </a>

            <div className="pt-3 md:pt-0">
              <a className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                <svg className="flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Log in
              </a>
              
            </div>
            
            <label className="swap swap-rotate">

              <div>
              <input data-hs-theme-switch className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-slate-700 focus:ring-slate-700 focus:outline-none appearance-none

before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:bg-[url('../svg/docs/moon-stars.svg')] checked:after:bg-[url('../svg/docs/brightness-high.svg')] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch" />
              </div>
  
</label>
           
             </div>
        </div>
      </div>
    </div>
  </nav>
</header>
{/*========== END HEADER ==========*/}     
</div>

{/* Crousal  */}
<div>
     <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>
</div>

    
{/*Hero*/}
<div className="relative overflow-hidden">
  {/*Gradients*/}
  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
  </div>
  {/*End Gradients*/}

  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Preline: A vision for 2023
        </p>

        {/*Title*/}
        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            The Intuitive Web Solutions
          </h1>
        </div>
        {/*End Title*/}

        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-400">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
        </div>

        {/*Buttons*/}
        <div className="mt-8 gap-3 flex justify-center">
          <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            Get started
            <svg className="flexShrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg className="flexShrink-0 size-4" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z" fill="#0ACF83"></path>
              <path d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z" fill="#A259FF"></path>
              <path d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z" fill="#F24E1E"></path>
              <path d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z" fill="#FF7262"></path>
              <path d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z" fill="#1ABCFE"></path>
            </svg>
            Preline Figma
          </a>
        </div>
        {/*End Buttons*/}
      </div>
    </div>
  </div>
</div>
{/*End Hero*/}


    </>
  )
}

export default Project1
