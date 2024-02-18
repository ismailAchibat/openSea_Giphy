import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { GIF } from "./GIFGrid";

interface Props {
  GIF: GIF;
}

const GIFCard = ({ GIF }: Props) => {
    console.log(GIF.embed_url)
  return (
    <Card>
        <CardBody>
            <iframe src={GIF.embed_url} width="480" height="311" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq">via GIPHY</a></p>

            <Heading fontSize="lg">{GIF.title}</Heading>
        </CardBody>
    </Card>
  );
};

export default GIFCard;
