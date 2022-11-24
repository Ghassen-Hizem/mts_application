import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function Cardjs() {
    return (
  <Card css={{ w: "20%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/js.png"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              
            </Col>
            <Col>
              <Text color="#fff" size={15}>
              Js Game Course
              </Text>
              <Text color="#fff" size={13}>
                Learn JavaScript By playing Our Game
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#fff", bg: "#000" }}
             
            >
              <Text
                css={{ color: "inherit" }}
                size={15}
                weight="bold"
                transform="uppercase"
              >
                Start Game
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
)
}
