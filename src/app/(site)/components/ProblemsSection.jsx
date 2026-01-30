'use client';

export default function ProblemsSection() {
    return (
        <section
            className="problems-section show relative overflow-hidden"
            role="region"
            aria-label="Problems EZ Rankings Solves"
        >
            {/* Floating Shapes */}
            <svg
                className="floating-shape shape-1 absolute top-10 left-10"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="#f5c400"
                aria-hidden="true"
            >
                <circle cx="50" cy="50" r="50" />
            </svg>

            <svg
                className="floating-shape shape-2 absolute top-32 right-16"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="#11559b"
                aria-hidden="true"
            >
                <rect width="80" height="80" rx="20" />
            </svg>

            <svg
                className="floating-shape shape-3 absolute bottom-20 left-1/2 -translate-x-1/2"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="#f5c400"
                aria-hidden="true"
            >
                <polygon points="60,10 110,90 10,90" />
            </svg>

            {/* Accent Lines */}
            <div className="accent-line accent-line-1" aria-hidden="true" />
            <div className="accent-line accent-line-2" aria-hidden="true" />

            <div className="container-fluid px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="row">
                    <div className="col-12 text-center mb-14">
                        <div className="section-header">
                            <div
                                className="section-subtitle aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Problem We Solve
                            </div>

                            <h2
                                className="section-title aos-init"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                For SMBs to Large Enterprises
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Problems Grid */}
                <div className="row">
                    <div className="col-12">
                        <div className="problems-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 01 */}
                            <article
                                className="problem-card aos-init"
                                role="group"
                                aria-labelledby="problem1-title"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="card-number">01</div>
                                <div className="card-icon-wrapper" aria-hidden="true">
                                    <i className="fas fa-chart-line" />
                                </div>

                                <h3 className="card-title" id="problem1-title">
                                    Not Getting Results from Your Marketing
                                </h3>

                                <p className="card-description">
                                    You may be running campaigns, posting content, or boosting ads,
                                    but the traffic is not turning into leads or sales. We help{' '}
                                    <span className="highlight">fix the gaps</span> that stop your
                                    marketing from performing.
                                </p>

                                <svg className="card-graph" viewBox="0 0 300 60" aria-hidden="true">
                                    <polyline
                                        points="0,50 50,45 100,40 150,55 200,35 250,30 300,25"
                                        stroke="#11559b"
                                        strokeWidth="3"
                                        fill="none"
                                        opacity="0.6"
                                    />
                                    <polyline
                                        points="0,60 50,45 100,40 150,55 200,35 250,30 300,25 300,60"
                                        fill="url(#gradient1)"
                                        opacity="0.2"
                                    />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#f5c400" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#11559b" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className="stats-badge">
                                    <i className="fas fa-arrow-trend-up" /> <span>Boost ROI by 250%</span>
                                </div>
                            </article>

                            {/* Card 02 */}
                            <article
                                className="problem-card aos-init"
                                role="group"
                                aria-labelledby="problem2-title"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="card-number">02</div>
                                <div className="card-icon-wrapper" aria-hidden="true">
                                    <i className="fas fa-users-slash" />
                                </div>

                                <h3 className="card-title" id="problem2-title">
                                    Getting Traffic, But Not Leads
                                </h3>

                                <p className="card-description">
                                    Your website may get visitors, but if they aren&apos;t converting,
                                    you&apos;re missing real business results. We{' '}
                                    <span className="highlight">optimise your funnel</span>.
                                </p>
                                <svg className="card-graph" viewBox="0 0 300 60" aria-hidden="true">
                                    <rect x="30" y="40" width="40" height="20" fill="#f5c400" opacity="0.4" rx="4"></rect>
                                    <rect x="90" y="25" width="40" height="35" fill="#f5c400" opacity="0.6" rx="4"></rect>
                                    <rect x="150" y="15" width="40" height="45" fill="#11559b" opacity="0.7" rx="4"></rect>
                                    <rect x="210" y="5" width="40" height="55" fill="#11559b" opacity="0.9" rx="4"></rect>
                                </svg>
                                <div className="stats-badge">
                                    <i className="fas fa-bullseye" /> <span>3x Conversion Rate</span>
                                </div>
                            </article>
                            <article
                                className="problem-card aos-init"
                                role="group"
                                aria-labelledby="problem3-title"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="card-number">03</div>
                                <div className="card-icon-wrapper" aria-hidden="true">
                                    <i className="fas fa-route" />
                                </div>

                                <h3 className="card-title" id="problem3-title">
                                    No Clear Digital Strategy
                                </h3>

                                <p className="card-description">
                                    Trying everything without a plan leads to slow progress. We
                                    create <span className="highlight">data-driven strategies</span>.
                                </p>
                                <svg className="card-graph" viewBox="0 0 300 60" aria-hidden="true">
                                    <circle cx="50" cy="30" r="8" fill="#f5c400" opacity="0.6"></circle>
                                    <circle cx="110" cy="30" r="10" fill="#f5c400" opacity="0.7"></circle>
                                    <circle cx="180" cy="30" r="14" fill="#11559b" opacity="0.8"></circle>
                                    <circle cx="250" cy="30" r="18" fill="#11559b" opacity="0.9"></circle>
                                    <line
                                        x1="58"
                                        y1="30"
                                        x2="102"
                                        y2="30"
                                        stroke="#f5c400"
                                        strokeWidth={2}
                                        opacity="0.5"
                                        strokeDasharray="5,5"
                                    />

                                    <line
                                        x1="120"
                                        y1="30"
                                        x2="166"
                                        y2="30"
                                        stroke="#f5c400"
                                        strokeWidth={2}
                                        opacity="0.5"
                                        strokeDasharray="5,5"
                                    />

                                    <line
                                        x1="194"
                                        y1="30"
                                        x2="232"
                                        y2="30"
                                        stroke="#11559b"
                                        strokeWidth={2}
                                        opacity="0.5"
                                        strokeDasharray="5,5"
                                    />

                                </svg>
                                <div className="stats-badge">
                                    <i className="fas fa-lightbulb" /> <span>Strategic Clarity</span>
                                </div>
                            </article>
                            <article
                                className="problem-card aos-init"
                                role="group"
                                aria-labelledby="problem4-title"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="card-number">04</div>
                                <div className="card-icon-wrapper" aria-hidden="true">
                                    <i className="fas fa-robot" />
                                </div>

                                <h3 className="card-title" id="problem4-title">
                                    Low Visibility in AI-Powered Search
                                </h3>

                                <p className="card-description">
                                    If your brand isn&apos;t optimised for AI-driven discovery,
                                    you risk being invisible. We ensure you{' '}
                                    <span className="highlight">stay visible</span>.
                                </p>
                                <svg
                                    className="card-graph"
                                    viewBox="0 0 300 60"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M 20,50 Q 80,10 140,30 T 260,20"
                                        stroke="#11559b"
                                        strokeWidth={3}
                                        fill="none"
                                        opacity="0.7"
                                    />

                                    <circle cx="20" cy="50" r="4" fill="#f5c400" />
                                    <circle cx="80" cy="20" r="5" fill="#f5c400" />
                                    <circle cx="140" cy="30" r="6" fill="#11559b" />
                                    <circle cx="200" cy="15" r="5" fill="#11559b" />
                                    <circle cx="260" cy="20" r="7" fill="#11559b" />
                                </svg>

                                <div className="stats-badge">
                                    <i className="fas fa-brain" /> <span>AI-Ready Brand</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
