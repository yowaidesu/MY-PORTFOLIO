import { Typography, Tag, Card, Row, Col } from 'antd';
import { Skill } from '../../types';

const { Title, Text } = Typography;

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'advanced': return 'success';
      case 'intermediate': return 'warning';
      case 'beginner': return 'processing';
      default: return 'default';
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <div className="section-header">
          <Text type="secondary" className="section-label">My Skills</Text>
          <Title level={2} className="section-title">Technical Expertise</Title>
        </div>

        <Row gutter={[40, 40]}>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <Col xs={24} sm={12} lg={8} key={category}>
              <Card
                className="skill-category-card"
                title={
                  <Title level={4} style={{ margin: 0 }}>
                    {category}
                  </Title>
                }
                variant="borderless"
              >
                <div className="skills-list">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <Text>{skill.name}</Text>
                      <Tag color={getLevelColor(skill.level)}>
                        {skill.level}
                      </Tag>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
