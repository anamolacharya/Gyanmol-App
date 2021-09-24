import React from "react";
import Dropdown from "../components/Dropdown";
import sat from "../images/SAT.jpg";
import awsccp from "../images/AWS-CCP.png";
import az900 from "../images/AZ-900.jpg";
import nclex from "../images/NCLEX.png";
import Topic from "../components/Topic";
import "../css/Topics.css";

const TestPrepPage = () => (
  <>
    <h1>Welcome to Test Preparation page!</h1>
    <Dropdown />
    <div className="topic_banner">
      <Topic topicName="AWS CCP" image={awsccp} />
      <Topic topicName="AZ 900" image={az900} />
      <Topic topicName="SATs" image={sat} />
      <Topic topicName="NCLEX" image={nclex} />
    </div>

    <div>
      {/* 1,2,3,4,5,6,14,16,18,20 */}
      <h4>AWS-CCP Practice Set Sample</h4>
      <br />
      <li>
        Which AWS service provides a simple way to set up a new multi-account
        AWS environment and govern it at scale?
      </li>
      <ul>A. AWS Trusted Advisor</ul>
      <ul>B. AWS Security Hub</ul>
      <ul>C. AWS Control Tower</ul>
      <ul>D. AWS Resources Access Manager</ul>

      <br />
      <li>
        {" "}
        A user has underlined on-premises resources. Which AWS Cloud concept can
        BEST address this issue?
      </li>
      <ul>A. High Availability</ul>
      <ul>B. Elasticity</ul>
      <ul>C. Security</ul>
      <ul>D. Loose coupling</ul>

      <br />
      <li>
        Which of the following are benefits of using the AWS CLoud? (Select
        TWO.)
      </li>
      <ul>A. 100% fault tolerance</ul>
      <ul>B. Total control over underlying infrastructure</ul>
      <ul>C. Fast provisioning of IT resources</ul>
      <ul>D. Outsourcing all application coding in AWS</ul>
      <ul>E. Ability to go global quickly</ul>

      <br />
      <li>
        A company has multiple data sources across the organization and wants to
        consolidate data into one data warehouse. Which AWS service can be used
        to meet this requirement?
      </li>
      <ul>A. Amazon DynamoDB</ul>
      <ul>B. Amazon Redshift</ul>
      <ul>C. Amazon Athena</ul>
      <ul>D. Amazon QuickSight</ul>

      <br />
      <li>
        A user with an AWS Basic Support plan has determined that illegal
        activities are being run on their AWS resources. What is the recommended
        method for the user to report the activity to AWS?
      </li>
      <ul>A. Contact the AWS Concierge Support Team</ul>
      <ul>B. Contact an AWS technical account manager</ul>
      <ul>C. Contact the AWS Abuse team</ul>
      <ul>D. Contact the AWS Support team</ul>

      <br />
      <li>
        A developer has been hired by a large company and needs AWS credentials.
        Which are security best practices that should be followed? (Select TWO.)
      </li>
      <ul>
        A. Grant the developer access to only the AWS resources needed to
        perform the job.
      </ul>
      <ul>B. Share the AW account root user credentials with the developer.</ul>
      <ul>C. Add the developer to the administrator’s group in AWS IAM.</ul>
      <ul>
        D. Configure a password policy that ensures the developer’s password
        cannot be changed.
      </ul>
      <ul>E. Ensure the account password policy requires a minimum length.</ul>

      <br />
      <li>
        Which credential allows programmatic access to AWS resources for use
        from the AWS CLI or the AWS API?
      </li>
      <ul>A. User name and password</ul>
      <ul>B. Access Keys</ul>
      <ul>C. SSH public keys</ul>
      <ul>D. AWS Key Management Services (AWS KMS) keys</ul>

      <br />
      <li>
        Which AWS service provides a customized view of the health of specific
        AWS services that power a customer’s workloads running on AWS?
      </li>
      <ul>A. AWS Service Health Dashboard</ul>
      <ul>B. AWS X-Ray</ul>
      <ul>C. AWS Personal Health Dashboard</ul>
      <ul>D. Amazon CloudWatch</ul>

      <br />
      <li>
        Which of the following enables users to leverag the power of AWS
        SERVICES programmatically?
      </li>
      <ul>A. AWS Command Line Interface ( AWS CLI)</ul>
      <ul>B. AWS Trusted Advisor</ul>
      <ul>C. AWS CodeDeploy </ul>
      <ul>D. AWS Management Console</ul>

      <br />
      <li>
        What does the AWS Cloud provide to increase the speed and agility of
        execution for customers? (Select two){" "}
      </li>
      <ul>A. Readily available resources low provisioning</ul>
      <ul>B. Scalable compute capacity</ul>
      <ul>C. Free Tier services usage</ul>
      <ul>D. Access to AWS data centers</ul>
      <ul>E. Lower resource provisioning cost</ul>
      <br />
      <br />
    </div>

    <div>
      <h4>NCLEX Practise Test Sample</h4>
      <br />
      <li>
        A client had a 10( - bag of 5% dextrose in 0.9 % sodium chloride hung at
        3 . The nurse making rounds at 3/45 * P * M finds that the client is
        complaining of a pounding headache and is dyspneic , is experiencing
        chills , and is apprehensive , with an increased pulse rate . The
        intravenous (IV ) bag has 400 remaining . The nurse should take which
        action first?
      </li>
      <ul>1. Slow the IV infusion. </ul>
      <ul>2. Sit the client up in bed.</ul>
      <ul>3. Remove the IV catheter.</ul>
      <ul>4. Call the health care provider (HCP) .</ul>

      <br />
      <li>
        The nurse has a prescription to hang a 1000 - intravenous (IV ) bag of
        5% dextrose in water with 20 mEq of potassium chloride and needs to add
        the medication to the IV bag . The nurse should plan to take which
        action immediately after injecting the potassium chloride into the port
        of the IV bag ?
      </li>
      <ul>1. Rotate the bag gently. </ul>
      <ul>2. Attach the tubing to the client.</ul>
      <ul>3. Prime the tubing with the IV solution. </ul>
      <ul>4. Check the solution for yellowish discoloration.</ul>

      <br />
      <li>
        The nurse is completing a time tape for a 1000 - IV bag that is
        scheduled to infuse over 8 hours . The nurse has just placed the 11:0(
        marking at the 500 - level. The nurse would place the mark for noon at
        which numerical level ( ) on the time tape ? Fill in the blank .
      </li>
      <ul>Answer: _____ ml.</ul>

      <br />
      <li>
        The nurse is making initial rounds on the nursing unit to assess the
        condition of assigned clients . The nurse notes that a client's
        intravenous (IV ) site is cool , pale , and swollen , and the solution
        is not infusing . The nurse concludes that which compli cation has
        occurred?
      </li>
      <ul>1. Infection</ul>
      <ul>2. Phlebitis </ul>
      <ul>3. Infiltration </ul>
      <ul>4. Thrombosis </ul>

      <br />
      <li>
        The nurse is inserting an intravenous line into a client's vein . After
        the initial stick , the nurse would continue to advance the catheter in
        which situation?
      </li>
      <ul>1. The catheter advances easily.</ul>
      <ul>2. The vein is distended under the needle. </ul>
      <ul>3. The client does not complain of discomfort. </ul>
      <ul>4. Blood return shows in the backflash chamber of the catheter.</ul>

      <br />
      <li>
        The nurse notes that the site of a client's peripheral intravenous (IV )
        catheter is reddened , warm , painful , and slightly edematous proximal
        to the insertion point of the IV catheter . After taking appropriate
        steps to care for the client , the nurse should document in the medical
        record that the client experienced which condition?{" "}
      </li>
      <ul>1. Phlebitis of the vein</ul>
      <ul>2. Infiltration of the IV line</ul>
      <ul>3. Hypersensitivity to the IV solution</ul>
      <ul>4. Allergic reaction to the IV catheter material</ul>

      <br />
      <li>
        The nurse is preparing a continuous intravenous ( IV ) infusion at the
        medication cart . As the nurse goes to insert the spike end of the IV
        tubing into the IV bag , the tubing drops and the spike end hits the top
        of the medication cart . The nurse should take which action ?
      </li>
      <ul>1. Obtain a new IV bag .</ul>
      <ul>2. Obtain new IV tubing . </ul>
      <ul>3. Wipe the spike end of the tubing with Betadine .</ul>
      <ul>4. Scrub the spike end of the tubing with an alcohol swab.</ul>

      <br />
      <li>
        A health care provider has written a prescription to discontinue an
        intravenous (IV) line . The nurse should obtain which item from the unit
        supply area for applying pressure to the site after removing the IV
        catheter ?
      </li>
      <ul>1. Elastic wrap</ul>
      <ul>2. Betadine swab </ul>
      <ul>3. Adhesive bandage</ul>
      <ul>4. Sterile 2x2 gauze</ul>

      <br />
      <li>
        A client rings the call bell and complains of paint the nurse assesses
        the site of an intravenous (IV) infusion. The nurse assesses the site
        and determines that phlebitis has developed. The nurse should take which
        action( s) in the care of this client ? Select all that apply .
      </li>
      <ul>1. Notify the health care provider ( ICP).</ul>
      <ul>2. Remove the IV catheter at that site.</ul>
      <ul>3. Apply warm moist packs to the site. </ul>
      <ul>4. Start a new IV line in a proximal portion of the same vein.</ul>
      <ul>
        5. Document the occurrence , actions taken , and the client's response.
      </ul>

      <br />
      <li>
        A client involved in a motor vehicle crash presents to the emergency
        department with severe internal bleeding . The client is severely
        hypotensive and unresponsive . The nurse anticipates that which
        intravenous (IV ) solution will most likely be prescribed to increase
        intravascular volume , replace immediate blood loss volume , and
        increase blood pressure ?{" "}
      </li>
      <ul>1. 5 % dextrose in lactated Ringer's</ul>
      <ul>2. 0.33% sodium chloride (1/3 normal saline )</ul>
      <ul>3. 0.225% sodium chloride (1/4 normal saline)</ul>
      <ul>4. 0.45% sodium chloride (1/2 normal saline)</ul>
    </div>
  </>
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
);
export default TestPrepPage;
