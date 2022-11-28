import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Timer from "../components/Timer";
import sat from "../images/SAT.jpg";
import awsccp from "../images/AWS-CCP.png";
import az900 from "../images/AZ-900.jpg";
import nclex from "../images/NCLEX.png";
import Topic from "../components/Topic";
import "../css/Topics.css";
import { useHistory } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DisplayQuestions from "../components/Questions/DisplayQuestion";
import FormModal from "../components/Questions/FormModal";

function TestPrepPage() {
  const [enter, setEnter] = useState(false);
  const history = useHistory();

  //const { isOpen, onOpen, onClose } = useDisclosure();

  // function onMouseEnter() {
  //   setEnter(true);
  // }
  // function onMouseLeave() {
  //   setEnter(false);
  // }
  // function handleClick() {
  //   history.push("/awsccp");
  //   console.log("Clicked!");
  // }

  return (
    <>
      <h1>Welcome to Test Preparation page!</h1>
      <Dropdown />
      {/* <Button>Button</Button> */}

      <div className="topic_icon">
        <Topic topicName="AWS CCP" image={awsccp} name="awsccp" />
        <Topic topicName="AZ 900" image={az900} name="az900" />
        <Topic topicName="SATs" image={sat} name="sat" />
        <Topic topicName="NCLEX" image={nclex} name="nclex" />
      </div>
      {/* <Timer /> */}
      <DisplayQuestions />
      <FormModal />
    </>
  );
  /*
Answers
1. 1
2. 1
3. 375ml
4. 3
5. 4
6. 1
7. 2
8. 4
9. 1,2,3,5
10. 1
*/
}
export default TestPrepPage;
