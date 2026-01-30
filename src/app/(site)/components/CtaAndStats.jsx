'use client';

export default function CtaAndStats() {
    const formSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="cta-form-wrapper">
            <section className="cta-section show py-16" id="banner_form">
                <div className="cta-wrapper">

                    <div className="cta-text ">
                        <h2>
                            Ready to Improve Your <span>Digital Performance?</span>
                        </h2>
                        <p>
                            Get a free consultation and learn how we optimise every channel for growth
                        </p>
                    </div>

                    <div className="cta-form">
                        <form
                            id="ready_to_grow_form"
                            onSubmit={formSubmit}
                        >
                            <div className="form-inline flex flex-col lg:flex-row gap-4">

                                <div className="form-field w-full">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        maxLength={75}
                                    />
                                </div>

                                <div className="form-field w-full">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        maxLength={100}
                                    />
                                </div>

                                <div className="form-field w-full">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        pattern=".{9,14}"
                                        maxLength={15}
                                    />
                                </div>

                                <div className="form-field w-full">
                                    <input
                                        type="text"
                                        name="website"
                                        placeholder="Website (Optional)"
                                    />
                                </div>
                                <input type="hidden" name="form_title" value="Ready to grow" />
                                <input
                                    type="hidden"
                                    name="current_page_url"
                                    value="https://www.ezrankings.com/"
                                />
                                <input
                                    type="hidden"
                                    name="ez_key"
                                    value="vwizwyMJh0Hh2KGyBgZscPnoobaeic6"
                                />

                                <input
                                    type="submit"
                                    className="submit-btn"
                                    value="Submit"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="trust-badges flex flex-col md:flex-row justify-center gap-6 mt-10">
                        <div className="badge">
                            <span className="badge-icon">⭐</span>
                            <span>16000+ Happy Clients</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">🏆</span>
                            <span>Award Winning Agency</span>
                        </div>
                        <div className="badge">
                            <span className="badge-icon">🚀</span>
                            <span>16+ Years Experience</span>
                        </div>
                    </div>

                </div>
            </section>
            <section
                className="stats-numbers-section show py-16"
                role="region"
                aria-label="EZ Rankings Statistics – Data Driven Marketing Results"
            >
                <div className="container max-6xl  mx-auto px-4">
                    <header className="section-header text-center mb-12">
                        <div className="badge-top ani-heading flex items-center justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                aria-hidden="true"
                                className="w-5 h-5"
                            >
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                            Numbers That Prove Our Impact
                        </div>

                        <h2 className="section-title ani-heading">
                            Stats That Define EZ Rankings
                        </h2>

                        <p className="section-subtitle">
                            Data-Driven Results That Speak For Themselves
                        </p>
                    </header>
                    <div className="row flex flex-col lg:flex-row justify-center gap-6">

                        <div className="col-lg-4 col-md-6 col-12">
                            <article className="stat-card">
                                <div className="stat-number">
                                    <span>9.4X</span>
                                </div>
                                <p className="stat-description">
                                    Average ROAS across all paid campaigns
                                </p>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 relative middle-card-wrapper">
                            <div className="middle-border-left" aria-hidden="true"></div>
                            <div className="middle-border-right" aria-hidden="true"></div>

                            <article className="stat-card">
                                <div className="stat-number">
                                    <span>162%</span>
                                </div>
                                <p className="stat-description">
                                    Year-over-Year Growth in Online Revenue
                                </p>
                            </article>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <article className="stat-card">
                                <div className="stat-number">
                                    <span>127%</span>
                                </div>
                                <p className="stat-description">
                                    Growth in High-Intent MQLs (Marketing Qualified Leads)
                                </p>
                            </article>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
