import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Link from 'next/link'

const ContactOne = ({ classname }) => {
    return (
        <section className={`section-contact py-[60px] ${classname}`}>
            <div className="container">
                <div className="lg:flex items-center justify-between">
                    <div className="content-main w-full xl:w-7/12 lg:w-1/2 text-white">
                        <span className="text-label tag text-white bg-blue">Contact us</span>
                        <h3 className="heading3 mt-3">Free Consultation – Unleash Your Brand’s Digital Potential</h3>
                        <p className="desc mt-6">Take your business to the next level with a free consultation from Aharam Digital Marketing Agency. Our digital experts will evaluate your online presence, understand your goals, and craft a customized marketing strategy to boost visibility, engagement, and conversions. Book your consultation today and start transforming your brand’s online journey.</p>
                        <div className="list-features mt-4 pb-6 border-b border-line">
                            <div className="item flex items-center">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Confirmation of appointment details</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3"> Pre-consultation research & competitor analysis by our digital team</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3"> Strategy session to discuss your brand, goals, and marketing challenges</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Assessment of current digital channels and performance metrics</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Presentation of personalized digital marketing strategies (SEO, Social Media, PPC, Content, etc.)</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Implementation roadmap and performance tracking setup

</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Follow-up to measure results and ensure continued growth</span>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <Icon.Envelope className="text-xl" />
                            <span className="body2 pl-3">hello@aharam.com</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.PhoneCall className="text-xl" />
                            <span className="body2 pl-3">+91 9443818425</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.MapPin className="text-xl" />
                            <span className="body2 pl-3">3095, 1st Street , Near Anu Hospital, VOC Nagar , Thanjavur,Tamil Nadu 613007</span>
                        </div>
                        <Link href={'https://maps.app.goo.gl/NMPUkvGS3x2PC4eM7'} target='_blank' className='inline-block underline mt-2'>Open map</Link>
                    </div>
                    <div className="w-full xl:w-1/3 lg:w-[40%] max-lg:mt-10">
                        <div className="form-block rounded-2xl bg-white py-6 px-7 flex flex-col gap-5">
                            <div className="heading5">Schedule a free consultation</div>
                            <form className="grid max-lg:grid-cols-2 gap-5 gap-y-2">
                                <div className="name w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="name">Name</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="name" placeholder="" required />
                                </div>
                                <div className="phone w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="phone">Phone</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="phone" placeholder="" required />
                                </div>
                                <div className="email w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="companyEmail">Company Email</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="email" id="companyEmail" placeholder="" required />
                                </div>
                                <div className="organization w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="company">Company/ Organization</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="company" placeholder="" required />
                                </div>
                                <div className="select w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="cate">How can we help you?</label>
                                    <div className="select-block relative">
                                        <select className="w-full bg-white pl-4 pr-6 py-3 rounded border border-outline" name="form" id="cate">
                                            <option value="Financial Planning">Branding</option>
                                            <option value="Business Planning">Digital Marketing</option>
                                            <option value="Development Planning">Web Development</option>
                                        </select>
                                        <Icon.CaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />
                                    </div>
                                </div>
                                <div className="message w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="message">Message</label>
                                    <textarea className="w-full bg-white px-4 py-3 rounded border border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                </div>
                                <div className="block-button max-lg:col-span-2 mt-3">
                                    <button className="button-main w-full">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactOne
