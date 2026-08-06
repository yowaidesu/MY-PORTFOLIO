// PORTFOLIO COMPLETED!
import { Typography, Button } from 'antd';
import { MailOutlined, PhoneOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const EMAIL = 'vinceredondo23@gmail.com';
const PHONE = '+63 991 231 9590';

export function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-inner">
        <Text type="secondary" className="section-label">Get in touch</Text>
        <Title level={2} className="contact-title">
          Let's build<br /> something <div className='title-gold'>together!</div>
        </Title>
        <Paragraph className="contact-sub">
          Open to internships, freelance projects, and collaborations.
          I respond to every message.
        </Paragraph>
        <div className="contact-sub">
          <Button
            type="link"
            size="large"
            icon={<MailOutlined />}
            href={gmailUrl}
            target="_blank"
            className="contact-email-btn"
          >
            {EMAIL}
          </Button>
          <Button
            type="link"
            size="large"
            icon={<PhoneOutlined />}
            href={`tel:${PHONE}`}
            className="contact-email-btn"
          >
            {PHONE}
          </Button>
          <div className="contact-socials">
            <Button
              type="text"
              icon={<GithubOutlined />}
              href="https://github.com/yowaidesu"
              target="_blank"
              className="social-btn"
            >
              GitHub
            </Button>
            <Button
              type="text"
              icon={<FacebookOutlined />}
              href="https://www.facebook.com/vince.redondo.2025"
              target="_blank"
              className="social-btn"
            >
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
