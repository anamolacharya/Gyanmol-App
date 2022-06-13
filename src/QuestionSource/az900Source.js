export const azureTestSet = {
  title: "Microsoft Azure-900, Cloud Fundamentals",
  questions: [
    {
      number: 1,
      question:
        "What are the two most common services that all cloud providers offer along with Azure provides?",
      options: [
        { option: "A", value: "compute power and storage.", isCorrect: true },
        { option: "B", value: "Compute power and analytics", isCorrect: false },
        { option: "C", value: "Networking and storage", isCorrect: false },
        { option: "D", value: "All of the above", isCorrect: false },
        { option: "E", value: "None of the above", isCorrect: false },
      ],
      answer: "A",
      explanation: " ",
    },
    {
      number: 2,
      question:
        "The process of adding resources to increase the power of an existing server is called",
      options: [
        { option: "A", value: "Vertical Scaling", isCorrect: false },
        { option: "B", value: "Horizontal Scaling", isCorrect: true },
      ],
      answer: "B",
      explanation: " ",
    },

    {
      number: 3,
      question:
        "Which term from the list below would be viewed as benefits of using cloud services?",
      options: [
        { option: "A", value: "Unpredictable costs", isCorrect: false },
        { option: "B", value: "Elasticity", isCorrect: true },
        { option: "C", value: "Local reach only", isCorrect: false },
      ],
      answer: "B",
      explanation: " ",
    },
    {
      number: 4,
      question:
        " Suppose you have two types of applications: legacy applications that require specialized mainframe hardware and newer applications that can run on commodity hardware. Which cloud deployment model would be best for you?",
      options: [
        { option: "A", value: "Public cloud", isCorrect: false },
        { option: "B", value: "Private cloud", isCorrect: false },
        { option: "C", value: "Hybrid cloud", isCorrect: true },
      ],
      answer: "C",
      explanation: " ",
    },

    {
      number: 5,
      question:
        "You're developing an application and want to focus on building, testing, and deploying. You don't want to worry about managing the underlying hardware or software. Which cloud service type is best for you?",
      options: [
        { option: "A", value: "Infrastructure as a Service", isCorrect: false },
        {
          option: "B",
          value: "Platform as a Service (PaaS)",
          isCorrect: true,
        },
        {
          option: "C",
          value: "Software as a Service (SaaS)",
          isCorrect: false,
        },
      ],
      answer: "B",
      explanation: " ",
    },
    {
      number: 6,
      question:
        "Deploying an app can be done directly to what level of physical granularity?",
      options: [
        { option: "A", value: "Region", isCorrect: true },
        { option: "B", value: "Datacenter", isCorrect: false },
        { option: "C", value: "Server rack", isCorrect: false },
      ],
      answer: "A",
      explanation: " ",
    },
    {
      number: 7,
      question:
        "To use Azure datacenters that are made available with power, cooling, and networking capabilities independent from other datacenters in a region, choose a region that supports _________?",
      options: [
        { option: "A", value: "Geography distribution", isCorrect: false },
        { option: "B", value: "Service-Level Agreements", isCorrect: false },
        { option: "C", value: "Availability Zones", isCorrect: true },
      ],
      answer: "C",
      explanation: " ",
    },
    {
      number: 8,
      question: "Application availability refers to what?",
      options: [
        {
          option: "A",
          value: "The service level agreement of the associated resource.",
          isCorrect: false,
        },
        {
          option: "B",
          value: "Application support for an availability zone.",
          isCorrect: false,
        },
        {
          option: "C",
          value: "The overall time that a system is functional and working.",
          isCorrect: true,
        },
      ],
      answer: "C",
      explanation: " ",
    },
    {
      number: 9,
      question:
        "Suppose you have an existing application running locally on your own server. You need additional capacity but prefer to move to Azure instead of buying upgraded on-premises hardware. Which compute option would likely give you the quickest route to getting your application running in Azure?",
      options: [
        { option: "A", value: "Serverless computin", isCorrect: false },
        { option: "B", value: "Containers", isCorrect: false },
        { option: "C", value: "Virtual machines", isCorrect: true },
      ],
      answer: "C",
      explanation: " ",
    },
    {
      number: 10,
      question:
        "Imagine that you work on a photo-sharing application that runs on millions of mobile devices. Demand is unpredictable because you see a spike in usage whenever a locally or nationally significant event occurs. Which Azure compute resource is the best match for this workload?",
      options: [
        { option: "A", value: "Serverless computing", isCorrect: true },
        { option: "B", value: "Containers", isCorrect: false },
        { option: "C", value: "Virtual machines", isCorrect: false },
      ],
      answer: "A",
      explanation: " ",
    },
  ],
};

/* 
Answers:
1. Compute power and storage.
2. Horizontal Scaling- the process of adding more servers that function together as one unit  
3. B. Elasticity-Elasticity, Agility and Economies of scale are the correct answers, and would be seen as benefits that you can gain from using cloud services.
4. Hybrid cloud
5. Platform as a Service (PaaS)- Platform as a Service is the best choice here because the PaaS services handle the IT management tasks for you, so you can focus on writing code.
6. Region- Azure organizes infrastructure around regions, which include multiple datacenters. You can pick the region you want resources deployed into. You can't select a specific datacenter or location within a datacenter.
7. Availability Zones-Availability Zones are datacenters set up to be an isolation boundary from others in the region, with their own power, cooling, and networking. If one zone in a region goes down, other Availability Zones in the region continue to work.
8. The overall time that a system is functional and working-The time that a system is working is referred to as the application availability.
9. Virtual machines-You have full control over the VM setup, so you can configure it to match your on-premises server. This control will allow your existing application to run on the Azure VM with little or no change.
10. Serverless computing-The photo-sharing app is event driven and needs to handle unpredictable demand. Serverless computing is a good fit for this situation because it is event-based and can scale instantly to process spikes in traffic. It should also be a cost-effective choice because you will pay for compute time only when processing user data.

*/
