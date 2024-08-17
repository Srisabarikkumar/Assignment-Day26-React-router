import { Col, Flex, Row } from "antd";
import Cards from "../components/Cards";

const cards = [
  {
    id: 1,
    title: "Best Full-Stack Development Project Ideas in 2024",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    author: "Isha Sharma",
  },
  {
    id: 2,
    title: "7 Unique Web Development Project Ideas for Beginners",
    image: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
    author: "Lukesh S",
  },
  {
    id: 3,
    title: "How Long Would It Take to Be a Full Stack Developer?",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
    author: "Meghana D",
  },
  {
    id: 4,
    title: "10 Best React Project Ideas for Developers [with Source Code]",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2024/04/10-Best-React-Project-Ideas-for-Developers-with-Source-Code.png",
    author: "Isha Sharma",
  },
  {
    id: 5,
    title: "10 Best Database Management Systems For Software Developers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
    author: "Isha Sharma",
  },
  {
    id: 6,
    title: "How does Apache work? A detailed introduction to Apache",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
    author: "Tushar Vinocha",
  },
  {
    id: 7,
    title:
      "Top 10 Full-Stack Developer Frameworks in 2024",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    author: "Isha Sharma",
  },
  {
    id: 8,
    title: "Hot Topics That You Need To Know In Full Stack Development",
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
    author: "Archana",
  },
  {
    id: 9,
    title: "6 Essential Prerequisites For Learning ReactJS",
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
    author: "Ramkumar",
  }
];

function FullStackDevelopment() {
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

export default FullStackDevelopment;
