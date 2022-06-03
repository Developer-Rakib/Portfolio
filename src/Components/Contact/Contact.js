import React from 'react';

const Contact = () => {
    return (
        <section class="contact-section container" id='contact'>
         <h1 class="heading"> <span>contact</span> me </h1>

         <div class="contact-info">

            <div class="contact">
               <i class="fab fa-whatsapp"></i>
               <h3>Whats App</h3>
               <p>+880 1978870125</p>
            </div>
            <div class="contact">
               <i class="far fa-envelope"></i>
               <h3>Email</h3>
               <p style={{textTransform:'lowercase'}}>tajulislam601@gmail.com</p>
            </div>
            <div class="contact">
               <i class="fab fa-facebook-f"></i>
               <h3>Facebook</h3>
               <p>Md Tazul Islam Rakib</p>
            </div>

         </div>

         <div class="contact-form">
            <input type="text" name="name" placeholder="Name" id=""/> 
            <input type="email" name="name" placeholder="Email" id=""/> 
            <textarea name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
            <button className='btn' type="submit"> send <i class="fas fa-paper-plane"></i> </button>
         </div>



    </section>
        // <section class="contact" id="contact">

        //     <h1 class="heading"> <span>contact</span> me </h1>

        //     <div class="row">

        //         <div className='contact-info'>
        //             <div></div>
        //             <div></div>
        //             <div></div>
        //         </div>

        //         {/* <div class="content">

        //             <h3 class="title">contact info</h3>

        //             <div class="info">
        //                 <h3> <i class="fas fa-envelope"></i> tajulislam601@gmail.com </h3>
        //                 <h3> <i class="fas fa-phone"></i> +8801978870125 </h3>
        //                 <h3> <i class="fas fa-phone"></i> +880197887012 </h3>
        //                 <h3> <i class="fas fa-map-marker-alt"></i>Chottogram, Bangaldesh  </h3>
        //             </div>

        //         </div>

        //         <form action="">

        //             <input type="text" placeholder="name" class="box" />
        //             <input type="email" placeholder="email" class="box" />
        //             <input type="text" placeholder="project" class="box" />
        //             <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
        //             <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

        //         </form> */}

        //     </div>

        // </section>
    );
};

export default Contact;