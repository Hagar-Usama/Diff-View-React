import React from "react";
import { Header } from "semantic-ui-react";
import data from "../data";
import SingleDiff from "./SingleDiff";
import Card from "@bit/nexxtway.react-rainbow.card";
import Accordion from "@bit/nexxtway.react-rainbow.accordion";

const Results = data;

function Diff() {
  return (
    <React.Fragment>
      <Header textAlign="center" as="h4">
        Results diff are ready for view
      </Header>
      <Card style={{ height: "20%" }}>
        <Accordion id="accordion-1">
          {Results.map((result) => (
            <SingleDiff result={result} />
          ))}
        </Accordion>
      </Card>
    </React.Fragment>
  );
}

export default Diff;
