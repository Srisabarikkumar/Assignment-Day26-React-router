import { Col, Flex, Row } from "antd";
import Cards from "../components/Cards";

const cards = [
  {
    id: 1,
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
    author: "Tushar Vinocha",
  },
  {
    id: 2,
    title: "Non-Coding Jobs in Cybersecurity: A Guide",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    author: "Jaishree Tomar",
  },
  {
    id: 3,
    title: "What Is Hacking? Types of Hacking & More",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    author: "Meghana D",
  },
  {
    id: 4,
    title: "8 Different Types of Cybersecurity and Threats Involved",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
    author: "Tushar Vinocha",
  },
  {
    id: 5,
    title: "What is Cybersecurity? Importance and its uses",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    author: "Tushar Vinocha",
  },
  {
    id: 6,
    title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png",
    author: "Tushar Vinocha",
  },
  {
    id: 7,
    title:
      "Is coding required for cybersecurity?",
    image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    author: "Tushar Vinocha",
  },
  {
    id: 8,
    title: "The Ultimate Cybersecurity Roadmap for Beginners",
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    author: "Srinithi Sankar",
  },
  {
    id: 9,
    title: "How Is Cyber Security Important To Our Lives?",
    image: "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
    author: "Ramkumar",
  }
];

function CyberSecurity() {
  return (
    <Row>
      <Col className="gutter-row" span={4} />
      <Col className="gutter-row" span={16}>
        <Flex wrap justify="space-evenly" gap="large">
          {cards.map((card) => (
            <Cards key={card.id} card={card} />
          ))}
        </Flex>
      </Col>
      <Col className="gutter-row" span={4} />
    </Row>
  );
}

export default CyberSecurity;