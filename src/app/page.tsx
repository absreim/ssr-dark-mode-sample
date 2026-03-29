import ThemeSelectorContainer from "@/app/ThemeSelectorContainer";
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Card>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            The text and background of this card should change in response to
            color mode settings
          </CardText>
        </CardBody>
      </Card>
      <ThemeSelectorContainer />
    </main>
  );
}
