export const awsTestSet = {
  title: "AWS-CCP Practice Set Sample",
  //  Questions from  {/* 1,2,3,4,5,6,14,16,18,20 */}
  questions: [
    {
      number: 1,
      question:
        "Which AWS service provides a simple way to set up a new multi-account AWS environment and govern it at scale?",
      options: [
        { option: "A", value: "AWS Trusted Advisor", isCorrect: false },
        { option: "B", value: "AWS Security Hub", isCorrect: false },
        { option: "C", value: "AWS Control Tower", isCorrect: true },
        {
          option: "D",
          value: "AWS Resources Access Manager",
          isCorrect: false,
        },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 2,
      question:
        " A user has underlined on-premises resources. Which AWS Cloud concept can BEST address this issue?",
      options: [
        { option: "A", value: "High Availability", isCorrect: false },
        { option: "B", value: "Elasticity", isCorrect: true },
        { option: "C", value: "Security", isCorrect: false },
        { option: "D", value: "Loose coupling", isCorrect: false },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 3,
      question:
        "Which of the following are benefits of using the AWS CLoud? (Select TWO.)",
      options: [
        { option: "A", value: "100% fault tolerance", isCorrect: false },
        {
          option: "B",
          value: "Total control over underlying infrastructure",
          isCorrect: false,
        },
        {
          option: "C",
          value: "Fast provisioning of IT resources",
          isCorrect: true,
        },
        {
          option: "D",
          value: "Outsourcing all application coding in AWS",
          isCorrect: false,
        },
        {
          option: "E",
          value: "Ability to go global quickly",
          isCorrect: true,
        },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 4,
      question:
        "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?",
      options: [
        { option: "A", value: "Amazon DynamoDB", isCorrect: false },
        { option: "B", value: "Amazon Redshift", isCorrect: true },
        { option: "C", value: "Amazon Athena", isCorrect: false },
        { option: "D", value: "Amazon QuickSight", isCorrect: false },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 5,
      question:
        "A user with an AWS Basic Support plan has determined that illegal activities are being run on their AWS resources. What is the recommended method for the user to report the activity to AWS?",
      options: [
        {
          option: "A",
          value: "Contact the AWS Concierge Support Team",
          isCorrect: false,
        },
        {
          option: "B",
          value: "Contact an AWS technical account manager",
          isCorrect: false,
        },
        { option: "C", value: "Contact the AWS Abuse team", isCorrect: true },
        {
          option: "D",
          value: "Contact the AWS Support team",
          isCorrect: false,
        },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 6,
      question:
        "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Select TWO.)",
      options: [
        {
          option: "A",
          value:
            "Grant the developer access to only the AWS resources needed to perform the job.",
          isCorrect: true,
        },
        {
          option: "B",
          value:
            "Share the AW account root user credentials with the developer.",
          isCorrect: false,
        },
        {
          option: "C",
          value: "Add the developer to the administrator’s group in AWS IAM.",
          isCorrect: false,
        },
        {
          option: "D",
          value:
            "Configure a password policy that ensures the developer’s password cannot be changed.",
          isCorrect: false,
        },
        {
          option: "E",
          value:
            "Ensure the account password policy requires a minimum length.",
          isCorrect: true,
        },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 7,
      question:
        "Which credential allows programmatic access to AWS resources for use from the AWS CLI or the AWS API?",
      options: [
        { option: "A", value: "User name and password", isCorrect: false },
        { option: "B", value: "Access Keys", isCorrect: true },
        { option: "C", value: "SSH public keys", isCorrect: false },
        {
          option: "D",
          value: "AWS Key Management Services (AWS KMS) keys",
          isCorrect: false,
        },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 8,
      question:
        "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
      options: [
        {
          option: "A",
          value: "AWS Service Health Dashboard",
          isCorrect: false,
        },
        { option: "B", value: "AWS X-Ray", isCorrect: false },
        {
          option: "C",
          value: "AWS Personal Health Dashboard",
          isCorrect: true,
        },
        { option: "D", value: "Amazon CloudWatch", isCorrect: false },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 9,
      question:
        "Which of the following enables users to leverag the power of AWS SERVICES programmatically?",
      options: [
        {
          option: "A",
          value: "AWS Command Line Interface ( AWS CLI)",
          isCorrect: false,
        },
        { option: "B", value: "AWS Trusted Advisor", isCorrect: false },
        { option: "C", value: "AWS CodeDeploy", isCorrect: true },
        { option: "D", value: "AWS Management Console", isCorrect: false },
      ],
      answer: " ",
      explanation: " ",
    },
    {
      number: 10,
      question:
        "What does the AWS Cloud provide to increase the speed and agility of execution for customers? (Select two)",
      options: [
        {
          option: "A",
          value: "Readily available resources low provisioning",
          isCorrect: true,
        },
        { option: "B", value: "Scalable compute capacity", isCorrect: true },
        { option: "C", value: "Free Tier services usage", isCorrect: false },
        { option: "D", value: "Access to AWS data centers", isCorrect: false },
        {
          option: "E",
          value: "Lower resource provisioning cost",
          isCorrect: false,
        },
      ],
      answer: " ",
      explanation: " ",
    },
  ],
};

//Question sample Format
// {
//     number: 2,
//     question: " ",
//     options: [
//       { option: "A", value: " " },
//       { option: "B", value: " " },
//       { option: "C", value: " " },
//       { option: "D", value: " " },
//     ],
//   },
//  Questions from  {/* 1:C,2:B,3:CE,4:B,5:C,6:AE,14:B,16:C,18:C,20:AB */}
