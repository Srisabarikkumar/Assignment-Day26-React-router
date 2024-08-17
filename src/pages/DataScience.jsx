import { Col, Flex, Row } from "antd";
import Cards from "../components/Cards";

const cards = [
  {
    id: 1,
    title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    author: "Isha Sharma",
  },
  {
    id: 2,
    title: "12 Real-World Data Science Examples: Power Of Data Science",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
    author: "Lukesh S",
  },
  {
    id: 3,
    title: "Can A Commerce Student Do Data Science?",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science.png",
    author: "Saakshi Priyadarshini",
  },
  {
    id: 4,
    title: "Roles and Responsibilities of a Data Scientist",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    author: "Jaishree Tomar",
  },
  {
    id: 5,
    title: "Top Product-Based Companies for Data Scientists in 2024",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    author: "Jaishree Tomar",
  },
  {
    id: 6,
    title: "10 Best Data Science Online Courses for Beginners | 2024",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    author: "Srinithi Sankar",
  },
  {
    id: 7,
    title:
      "Everything about Data Scientist Salary in India | 2024",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Science-Salary-in-India.png",
    author: "Srinithi Sankar",
  },
  {
    id: 8,
    title: "How Long Would It Take to Learn Data Science?",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science.png",
    author: "Meghana D",
  },
  {
    id: 9,
    title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
    image: "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_.png",
    author: "Archana",
  }
];

function DataScience() {
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

export default DataScience;