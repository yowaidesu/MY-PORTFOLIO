import { Typography } from 'antd';
//import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Text } = Typography;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Text type="secondary" className="footer-name">
          Vince Jayson D. Redondo © {new Date().getFullYear()}
        </Text>
      </div>
    </footer>
  );
}
