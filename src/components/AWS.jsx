import React from "react";

export default function AWS() {
  return (
    <div className="AWS">
      <h4>AWS-CCP Practice Set Sample</h4>
      <div className="sample_questions">
        {/* 1,2,3,4,5,6,14,16,18,20 */}

        <br />
        <ul>
          1. Which AWS service provides a simple way to set up a new
          multi-account AWS environment and govern it at scale?
        </ul>
        <ul>A. AWS Trusted Advisor</ul>
        <ul>B. AWS Security Hub</ul>
        <ul>C. AWS Control Tower</ul>
        <ul>D. AWS Resources Access Manager</ul>

        <br />
        <ul>
          {" "}
          2. A user has underlined on-premises resources. Which AWS Cloud
          concept can BEST address this issue?
        </ul>
        <ul>A. High Availability</ul>
        <ul>B. Elasticity</ul>
        <ul>C. Security</ul>
        <ul>D. Loose coupling</ul>

        <br />
        <ul>
          3. Which of the following are benefits of using the AWS CLoud? (Select
          TWO.)
        </ul>
        <ul>A. 100% fault tolerance</ul>
        <ul>B. Total control over underlying infrastructure</ul>
        <ul>C. Fast provisioning of IT resources</ul>
        <ul>D. Outsourcing all application coding in AWS</ul>
        <ul>E. Ability to go global quickly</ul>

        <br />
        <ul>
          4. A company has multiple data sources across the organization and
          wants to consolidate data into one data warehouse. Which AWS service
          can be used to meet this requirement?
        </ul>
        <ul>A. Amazon DynamoDB</ul>
        <ul>B. Amazon Redshift</ul>
        <ul>C. Amazon Athena</ul>
        <ul>D. Amazon QuickSight</ul>

        <br />
        <ul>
          5. A user with an AWS Basic Support plan has determined that illegal
          activities are being run on their AWS resources. What is the
          recommended method for the user to report the activity to AWS?
        </ul>
        <ul>A. Contact the AWS Concierge Support Team</ul>
        <ul>B. Contact an AWS technical account manager</ul>
        <ul>C. Contact the AWS Abuse team</ul>
        <ul>D. Contact the AWS Support team</ul>

        <br />
        <ul>
          6. A developer has been hired by a large company and needs AWS
          credentials. Which are security best practices that should be
          followed? (Select TWO.)
        </ul>
        <ul>
          A. Grant the developer access to only the AWS resources needed to
          perform the job.
        </ul>
        <ul>
          B. Share the AW account root user credentials with the developer.
        </ul>
        <ul>C. Add the developer to the administrator’s group in AWS IAM.</ul>
        <ul>
          D. Configure a password policy that ensures the developer’s password
          cannot be changed.
        </ul>
        <ul>
          E. Ensure the account password policy requires a minimum length.
        </ul>

        <br />
        <ul>
          7. Which credential allows programmatic access to AWS resources for
          use from the AWS CLI or the AWS API?
        </ul>
        <ul>A. User name and password</ul>
        <ul>B. Access Keys</ul>
        <ul>C. SSH public keys</ul>
        <ul>D. AWS Key Management Services (AWS KMS) keys</ul>

        <br />
        <ul>
          8. Which AWS service provides a customized view of the health of
          specific AWS services that power a customer’s workloads running on
          AWS?
        </ul>
        <ul>A. AWS Service Health Dashboard</ul>
        <ul>B. AWS X-Ray</ul>
        <ul>C. AWS Personal Health Dashboard</ul>
        <ul>D. Amazon CloudWatch</ul>

        <br />
        <ul>
          9. Which of the following enables users to leverag the power of AWS
          SERVICES programmatically?
        </ul>
        <ul>A. AWS Command Line Interface ( AWS CLI)</ul>
        <ul>B. AWS Trusted Advisor</ul>
        <ul>C. AWS CodeDeploy </ul>
        <ul>D. AWS Management Console</ul>

        <br />
        <ul>
          10. What does the AWS Cloud provide to increase the speed and agility
          of execution for customers? (Select two){" "}
        </ul>
        <ul>A. Readily available resources low provisioning</ul>
        <ul>B. Scalable compute capacity</ul>
        <ul>C. Free Tier services usage</ul>
        <ul>D. Access to AWS data centers</ul>
        <ul>E. Lower resource provisioning cost</ul>
        <br />
        <br />
      </div>
    </div>
  );
}
