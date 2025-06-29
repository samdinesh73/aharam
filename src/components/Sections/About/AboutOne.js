import Link from "next/link"

const AboutOne = () => {
    return (
        <section className="about-block">
            <div className="container">
                <div className="content rounded-2xl bg-linear-blue md:p-10 p-7">
                    <div className="heading flex max-lg:flex-col gap-y-4 md:pb-10 pb-8 border-b border-line">
                        <div className="w-full xl:w-5/12 lg:w-1/2">
                            <div className="tag text-label bg-blue text-white">About Us</div>
                            <h3 className="heading3 text-white mt-4">We Solve Digital Marketing Challenges.</h3>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="desc text-white">At Aharam Digital Marketing Agency, we help startups go from invisible to unstoppable. Whether you're launching or scaling, we craft SEO strategies, run high-converting ads, manage content and social media — all with one goal: growth that lasts</div>
                            <Link className="text-button-sm text-white border-b-2 border-white mt-4 inline-block hover:border-black hover:text-black duration-300" href="/company/about-us">Let's row Together</Link>
                        </div>
                    </div>
                    <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 md:pt-10 pt-8">
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">2+</div>
                            <div className="body1 mt-1 text-white">Years experiences</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="flex items-center">
                                <div className="count-number heading3 text-white">30</div>
                                <span className="heading3 text-white">+</span>
                            </div>
                            <div className="body1 mt-1 text-white">Clients satisfied</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">250+</div>
                            <div className="body1 mt-1 text-white">Project completed</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">98%</div>
                            <div className="body1 mt-1 text-white">Client satisfication</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutOne