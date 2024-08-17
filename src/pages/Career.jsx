import { Col, Flex, Row } from "antd";
import Cards from "../components/Cards";

const cards = [
  {
    id: 1,
    title: "Business Communication",
    image:
      "https://static.guvi.in/course-thumbnail/webps/businesscommunicationenglish.webp",
    author: "Author name"
  },
];

function Career() {
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

export default Career;
