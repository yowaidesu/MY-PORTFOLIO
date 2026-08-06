import React from 'react';
import { Button, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export function Hero() {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">Available for projects</div>
        <Title level={1} className="hero-title">
          Building things<br />
          that <em>actually work.</em>
        </Title>
        <Paragraph className="hero-sub">
          IT student from North Cotabato, Kidapawan City. I write Python, design databases,
          and ship code that solves real problems — not just demos.
        </Paragraph>
        <div className="hero-cta">
          <Button
            //type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={handleScrollToWork}
            className="hero-btn-ghost"
          >
            See my work
          </Button>
          <Button
            size="large"
            onClick={handleScrollToContact}
            className="hero-btn-ghost"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Spinning diamond decoration */}
      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit-diamond">✦</div>
      </div>
    </section>
  );
}
