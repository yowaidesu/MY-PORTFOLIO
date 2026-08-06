import { Typography, Tag, Card, Timeline } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Experience } from '../../types';

const { Title, Paragraph, Text } = Typography;

interface ExperiencesProps {
  experiences: Experience[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section id="experiences" className="section experiences-section">
      <div className="section-inner">
        <div className="section-header">
          <Text type="secondary" className="section-label">My Journey</Text>
          <Title level={2} className="section-title">Experiences</Title>
        </div>

        <Timeline
          className="experiences-timeline"
          items={experiences.map((exp) => ({
            content: (
              <Card key={exp.id} className="experience-card" variant="borderless">
                <div className="experience-header">
                  <Title level={4} style={{ margin: 0 }}>{exp.title}</Title>
                  <Text type="secondary">
                    <CalendarOutlined /> {exp.period}
                  </Text>
                </div>
                <Text type="secondary" className="experience-company">{exp.company}</Text>
                <Paragraph className="experience-description">{exp.description}</Paragraph>
                <div className="experience-tags">
                  {exp.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            ),
          }))}
        />
      </div>
    </section>
  );
}
