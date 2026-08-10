// PORTFOLIO COMPLETED!
import { Typography, Card, Button, Row, Col } from 'antd';
import { FileTextOutlined, LinkOutlined } from '@ant-design/icons';
import { Certificate } from '../../types';

const { Title, Text } = Typography;

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-inner">
        <div className="section-header">
          <Text type="secondary" className="section-label">Achievements</Text>
          <Title level={2} className="section-title">Certifications</Title>
        </div>

        <Row gutter={[24, 24]}>
          {certificates.map((cert) => (
            <Col xs={24} sm={12} lg={8} key={cert.id}>
              <Card className="certificate-card" variant="borderless" hoverable>
                {cert.image ? (
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                ) : (
                  <div className="certificate-icon">
                    <FileTextOutlined />
                  </div>
                )}
                <Title level={4} className="certificate-title">{cert.title}</Title>
                <Text type="secondary" className="certificate-issuer">{cert.issuer}</Text>
                <Text type="secondary" className="certificate-date">{cert.date}</Text>
                {cert.link && (
                  <Button
                    type="link"
                    icon={<LinkOutlined />}
                    href={cert.link}
                    target="_blank"
                    className="certificate-link"
                  >
                    View Certificate
                  </Button>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 24]}>
          {certificates.map((cert) => (
            <Col xs={24} sm={12} lg={8} key={cert.id}>
              <Card className="certificate-card" variant="borderless" hoverable>
                {cert.image ? (
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                ) : (
                  <div className="certificate-icon">
                    <FileTextOutlined />
                  </div>
                )}
                <Title level={4} className="certificate-title">{cert.title}</Title>
                <Text type="secondary" className="certificate-issuer">{cert.issuer}</Text>
                <Text type="secondary" className="certificate-date">{cert.date}</Text>
                {cert.link && (
                  <Button
                    type="link"
                    icon={<LinkOutlined />}
                    href={cert.link}
                    target="_blank"
                    className="certificate-link"
                  >
                    View Certificate
                  </Button>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
