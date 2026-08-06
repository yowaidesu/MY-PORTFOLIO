import { Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { AppState } from '../../types';

const { Title, Paragraph, Text } = Typography;

interface AboutProps {
  state: AppState;
}

export function About({ state: _state }: AboutProps) {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner about-grid">
        {/* Avatar */}
        <div className="about-avatar-wrap">
          <div className="about-avatar">
            <img
              className="avatar-img"
              src="https://scontent.fcgy4-1.fna.fbcdn.net/v/t39.30808-6/705663497_2403560863486611_2290720539170906044_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x1541&ctp=s1536x1541&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGIzPwKeFJeO5a0fmOyLZ_UYECwULlafnhgQLBQuVp-eLvjp-rMv6sn3f0sGc0DyPMuqGSMYDfLYRar6jXhCbf0&_nc_ohc=IDVY8Ldk0zIQ7kNvwFyxBS2&_nc_oc=AdpQ5bTC7MRvkymJhVwe2eYc1tEeDAaE8-6pObpE-ZprckPe6daKpKG0nXqB6osSqoo7n5892v4dVXk6iiH9Vnhe&_nc_zt=23&_nc_ht=scontent.fcgy4-1.fna&_nc_gid=AJ_ZlYvOscYHY8SDI8NvTw&_nc_ss=7b2a8&oh=00_AQHxfeSbe3jj9HNyfrDjkq5Ifmc0HvPwywBWaumv9domKA&oe=6A776396"
              alt="Vince Jayson D. Redondo"
            />
          </div>
          <div className="about-status">
            <CheckCircleOutlined style={{ color: '#52c41a' }} />
            <Text type="secondary">Open to opportunities</Text>
          </div>
        </div>

        <div className="about-content">
          <Text type="secondary" className="section-label">About me</Text>
          <Title level={2} className="section-title">
            I turn ideas into<br />working software.
          </Title>
          <Paragraph className="about-body">
            I'm an Information Technology student based in North Cotabato, Kidapawan City.
            I got hooked on building things when I realized that writing code
            that actually runs — and solves something real — is one of the most
            satisfying feelings there is.
          </Paragraph>
          <Paragraph className="about-body">
            I work across the stack: from MySQL schemas and Python-written backends, to React frontends. I care about correctness, clean structure, and
            understanding what's actually happening with the code.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
