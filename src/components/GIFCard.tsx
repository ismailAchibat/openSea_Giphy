import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { GIF } from "./GIFGrid";

interface Props {
  GIF: GIF;
}

const GIFCard = ({ GIF }: Props) => {
  return (
    <Card>
      
      <CardBody>
        <Image src={GIF.url} />
        <Heading fontSize="lg">{GIF.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GIFCard;
