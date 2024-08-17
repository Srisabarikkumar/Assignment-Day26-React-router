/* eslint-disable react/prop-types */
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

function Cards({ card }) {
  return <Card
      hoverable
      style={{
        width: 300,
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
      }}
      cover={<img alt="image" width="300" height="200" src={card.image} />}
    >
      <Title level={5}>{card.title}</Title>
      <Text>{card.author}</Text>
    </Card>
}

export default Cards;
