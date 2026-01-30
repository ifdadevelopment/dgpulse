'use client';

import { useState } from 'react';
import Image from 'next/image';
import { caseStudies } from '../data/services';

export default function CaseStudyTabs() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].key);

  const activeData = caseStudies.find(item => item.key === activeTab);

  return (
    <div className="tabs-wrapper case-study-wrapper">
      <div className="section-header text-center px-4">
        <h2 className="section-heading aos-init aos-animate" data-aos="fade-up">
          Growth You Can Measure + Results You Can Trust
        </h2>
        <p className="section-subtitle aos-init aos-animate" data-aos="fade-up">
          Explore the challenges our clients faced and how our data-driven digital
          marketing services delivered clear, measureable improvements.
        </p>
      </div>

      <div className="tabs-container">
        <div className="custom-tabs flex flex-wrap justify-center gap-3">
          {caseStudies.map(tab => (
            <button
              key={tab.key}
              className={`tab-btn aos-init aos-animate ${activeTab === tab.key ? 'active' : ''}`}
              data-tab={tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={`fas ${tab.icon}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="tab-content-wrapper active">

          <div className="case-card">
            <div className="case-content flex flex-col lg:flex-row gap-8">
              <div className="">
                <span className="client-badge aos-init aos-animate">
                  {activeData.client}
                </span>

                <div className="section-title aos-init aos-animate">
                  <i className="fas fa-exclamation-triangle" />
                  The Challenge
                </div>
                <p className="section-content aos-init aos-animate">
                  {activeData.challenge}
                </p>

                <div className="section-title aos-init aos-animate">
                  <i className="fas fa-lightbulb" />
                  The Solution
                </div>
                <p className="section-content aos-init aos-animate">
                  {activeData.solution}
                </p>
              </div>
              <div className="case-image-wrapper aos-init aos-animate">
                <Image
                  src={activeData.image}
                  alt={activeData.label}
                  width={600}
                  height={400}
                  className="case-image"
                />
              </div>
            </div>
            <div className="bottom-wrapper">
              <h3 className="impact-title aos-init aos-animate">
                {activeData.impactTitle}
              </h3>

              <div className="metrics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeData.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-card aos-init aos-animate">
                    <div className="metric-icon">
                      <i className={`fas ${metric.icon}`} />
                    </div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-change">{metric.change}</div>
                  </div>
                ))}
              </div>

              <span className="result-badge aos-init aos-animate">
                {activeData.result}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
