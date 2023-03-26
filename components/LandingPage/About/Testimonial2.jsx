import React from 'react'

const Testimonial2 = () => {
  return (

<div class="py-16">
 <div class="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
   <h2 class="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
     What's our customers say
   </h2>
   <div class="swiper mySwiper">
     <div class="swiper-wrapper pb-6">
       <div class="swiper-slide !bg-transparent">
         <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             class="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/second_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
           </p>
           <div>
             <h6 class="text-lg font-semibold leading-none">John Doe</h6>
             <span class="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             class="mx-auto !w-28"
             src="images/clients/client-4.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>

       <div class="swiper-slide !bg-transparent">
         <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             class="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/third_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
           </p>
           <div>
             <h6 class="text-lg font-semibold leading-none">John Doe</h6>
             <span class="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             class="mx-auto !w-28"
             src="images/clients/client-3.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>

       <div class="swiper-slide !bg-transparent">
         <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
           <img
             class="mx-auto !h-16 !w-16 rounded-full"
             src="images/avatars/first_user.webp"
             alt="user avatar"
             height="220"
             width="220"
             loading="lazy"
           />
           <p>
             <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
             aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis
             cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span>
           </p>
           <div>
             <h6 class="text-lg font-semibold leading-none">John Doe</h6>
             <span class="text-xs text-gray-500">Product Designer</span>
           </div>
           <img
             class="mx-auto !w-28"
             src="images/clients/client-8.png"
             alt="company logo"
             height="400"
             width="142"
             loading="lazy"
           />
         </div>
       </div>
     </div>

     <div class="swiper-pagination"></div>
   </div>
 </div>
</div>
                                   
  )
}

export default Testimonial2