import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
function Buyer() {

  return (
    <>
    <Header/>
    <section className='md:px-16 my-10 px-5'> 
       <h3 className='text-4xl font-bold text-[#429ade] mb-8 text-center'>Why choose Buyers Guide?</h3>
         <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-7 '>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-6 text-[#c8267f] text-center'>
                        <h3 className='text-2xl px-4 my-5 font-bodoni'>TARGETED AUDIENCE</h3>
                    </div>
                    <div className='col-span-6  text-center'>
                    <p className='my-3 text-lg font-semibold'>100% Targeted to new and expecting parents.</p>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-6 text-[#c8267f] text-center'>
                    <h3 className='text-2xl px-4 my-5 font-bodoni'>DISTRIBUTION</h3>
                    </div>
                    <div className='col-span-6  text-center'>
                    <p className='my-3 text-lg font-semibold'>1700 Healthcare Professionals across Canada</p>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-6 text-[#c8267f] text-center'>
                    <h3 className='text-2xl px-4 my-5 font-bodoni'>HIGH READERSHIP ENGAGEMENT</h3>
                    </div>
                    <div className='col-span-6  text-center'>
                    <p className='my-3 text-lg font-semibold'>93% of parents change their buying habits post receiving the Babybrands bags.</p>
                    </div>
                </div>
                 <div className='grid grid-cols-12 gap-8'>
                 <div className='col-span-6 text-[#c8267f] text-center'>
                    <h3 className='text-2xl px-4 my-5 font-bodoni'>BRAND & PRODUCT AWARENESS</h3>
                </div>
                <div className='col-span-6 text-center'>
                    <p className='my-3 text-lg font-semibold'>65% of our consumers are first time parents and Buyer's Guide is a platform to educate parents</p>
                </div>
                 </div>
               
            </div>
           <div className='col-span-5'>
            <img src='../buyer/buyer22.png' alt=''/>
           </div>
         </div>
       </section>

       <section className='md:px-16 my-10 px-5'>
          <div>
            <h3 className='text-4xl text-[#429ade] uppercase font-bold px-4 my-5 font-bodoni mb-8'>Let's talk stats</h3>
          </div>
          <div className='grid grid-cols-12 gap-8 my-5'>
            <div className='col-span-2'>
                <img src='../buyer/buyer11.png' className='w-[250px] h-[140px]' alt='Parents'/>
              <div className='text-white rounded-full text-center text-lg bg-[#ff66c4]'>
                First Time Parents
              </div>
            </div>
            <div className='col-span-10 self-center'>
                <p className='text-lg '>The Buyer's Guide Magazine reaches a significant portion of first-time parents, who are often seeking guidance and recommendations to navigate the unfamiliar territory of parenthood successfully. This magazine is aimed at helping parents embark on their parenting journey with confidence by having the right products.</p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-8 my-5'>
            <div className='col-span-2'>
            <img src='../buyer/buyer14.png' className='w-[250px] h-[140px]' alt='Parents'/>
              <div className='text-white rounded-full text-center text-lg bg-[#ff66c4]'>
                Time Sensitive
              </div>
            </div>
            <div className='col-span-10 self-center'>
                <p className='text-lg '>An impressive 63% of the targeted audience receives the Buyer's Guide Magazine two months before their due dates. This timing is crucial as it allows them to prepare for the arrival of their baby and make informed decisions about the products and services they may need.</p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-8 my-5'>
            <div className='col-span-2'>
            <img src='../buyer/buyer13.png' className='w-[250px] h-[140px]' alt='Parents'/>
              <div className='text-white rounded-full text-center text-lg bg-[#ff66c4]'>
                Targeted Audience
              </div>
            </div>
            <div className='col-span-10 self-center'>
                <p className='text-lg '>The magazine is exclusively dedicated to Expecting and New Moms, ensuring that all the content and information provided are highly relevant to this specific group of parents. The magazine also has information that new and expecting parnets need to know about the brands and products that are new in the market.</p>
            </div>
          </div>
          {/* <div>
            <h3 className='text-4xl text-[#429ade] uppercase font-bold px-4 mt-8 font-bodoni mb-8'>Let's talk stats</h3>
          </div> */}
          <div className='grid grid-cols-12 gap-8 my-5'>
            <div className='col-span-2'>
            <img src='../buyer/buyer12.png' className='w-[250px] h-[140px]' alt='Parents'/>
              <div className='text-white rounded-full text-center text-lg bg-[#ff66c4]'>
              Average Parent Age
              </div>
            </div>
            <div className='col-span-10 self-center'>
                <p className='text-lg '>The average age of parents engaging with the Buyer's Guide Magazine is 29 years old, indicating that it resonates with a young and diverse audience. By providing new parents with the opportunity to try products firsthand, the magazine enhances their confidence in making informed decisions, thus benefiting both the consumers and your brand.</p>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-8 my-5'>
            <div className='col-span-2'>
            <img src='../buyer/buyer15.png' className='w-[250px] h-[140px]' alt='Parents'/>
              <div className='text-white rounded-full text-center text-lg bg-[#ff66c4]'>
              Planning Their Baby Showers
              </div>
            </div>
            <div className='col-span-10 self-center'>
                <p className='text-lg '>This presents an excellent opportunity for brands partnering with us, as they can gain exposure and have their products included in the gift registries. By aligning with our magazine, brands can reach audience that is actively seeking baby-related items, making it a strategic platform to showcase their products and cater to the needs of expectant and new parents.</p>
            </div>
          </div>
       </section>

       <section className='md:px-16 px-5 mb-10'>
            <div className='grid grid-cols-12 gap-8'>
               <div className='col-span-6'>
                <h3 className='text-4xl text-[#429ade] uppercase font-bold px-4 my-5 font-bodoni mb-8'>Buyer's guide specs</h3>
                   <div className='mt-10 ml-16'>
                      <ul className='list-disc text-xl'>
                        <li><b>Cover Page</b> Front & Back</li>
                        <li><b>Dimension:</b> 11’’ * 8.5''</li>
                        <li><b>Printable area: </b> Full-page advertisement</li>
                        <li><b>Circulation:</b> 20,000 copies per month</li>
                        <li><b>Frequency:</b>  4X Per Year (Quarterly issue)</li>
                        {/* <li>A promocode will be printed on every page  related to the specific product.</li> */}
                      </ul>
                   </div>
               </div>
               <div className='col-span-6'>
                <img src='../buyer/buyer21.png' alt='Buyers Guide'/>
               </div>
            </div>
       </section>

     
    <Footer/>
    </>
  )
}

export default Buyer