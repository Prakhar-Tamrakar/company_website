export const caseStudies = [
  {
    id: "UC-01",
    // img:'/Casestudy/mordanize_hospital.png',
    img:'/Casestudy/case-study-doctors.png',

    title:
      "Modernizing Clinical Communication & Device Ecosystem in a Healthcare Institution",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      "Replaced legacy Cisco infrastructure with a unified Microsoft-based solution, achieving operational savings of $1.25M/month with ROI in under 3 months.",

    background: {
      overview:
        "A top-ranked medical institution faced operational inefficiencies due to an outdated and fragmented communication infrastructure relying heavily on legacy Cisco devices.",
      keyChallenges: [
        "Outdated Cisco communication infrastructure",
        "Frequent system breakdowns",
        "High operational and maintenance costs",
        "Multiple devices per clinician (phones, pagers, tablets, walkie-talkies)",
        "Limited collaboration and messaging capabilities",
      ],
    },

    problemStatement: {
      averageProcessingTimeDays: null,
      issues: [
        "Clinicians carrying multiple devices",
        "Disrupted patient care due to device fragmentation",
        "High dependency on legacy Cisco systems",
        "Poor collaboration and messaging stability",
        "Increased IT support and maintenance overhead",
      ],
    },

    solution: {
      platform: "Microsoft 365 + Microsoft Teams",
      implementedChanges: [
        {
          type: "Device Consolidation",
          description:
            "Migrated from over 12,000 Cisco devices to 4,000 iOS devices, enabling clinicians to work with a single unified device",
        },
        {
          type: "Communication Modernization",
          description:
            "Replaced Cisco phone services with Microsoft Teams for calling, messaging, and collaboration",
        },
        {
          type: "Messaging & Collaboration Upgrade",
          description:
            "Modernized messaging platforms to improve stability, reduce downtime, and enhance real-time collaboration",
        },
        {
          type: "Contact Center Enhancement",
          description:
            "Extended contact center functionalities to support healthcare operations more efficiently",
        },
        {
          type: "Conference & Workspace Overhaul",
          description:
            "Centralized conference services and modernized physical spaces for seamless collaboration",
        },
      ],
    },

    outcomes: {
      processingTimeReductionDays: null,
      benefits: [
        "Single-device experience for clinicians",
        "Improved collaboration and communication",
        "Reduced operational and support costs",
        "Enhanced clinician productivity",
        "Uninterrupted patient care",
      ],
    },

    impactMeasurement: {
      reports: [
        "Operational Cost Savings Report",
        "Device Consolidation & Adoption Metrics",
        "Collaboration Efficiency Report",
      ],
    },

    nextSteps: [
      "Enhance Microsoft Teams integrations with clinical applications",
      "Introduce advanced analytics for usage and performance tracking",
      "Scale the solution for future digital healthcare initiatives",
    ],
  },
  {
    id: "UC-02",
    title:
      "Streamlining Onboarding Process in Healthcare Center using ServiceNow",
      img:'/Casestudy/health_onboard.png',
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      "Reduced onboarding time from 26 days to 3 days (88% improvement).",

    background: {
      overview:
        "A renowned healthcare center faced inefficiencies in its employee onboarding process due to excessive templates, approvals, and manual dependencies.",
      keyChallenges: [
        "Multiple onboarding templates",
        "Unnecessary approvals",
        "Manual background verification",
        "Inter-team dependencies causing delays",
      ],
    },

    problemStatement: {
      averageProcessingTimeDays: 26,
      issues: [
        "Delayed employee onboarding",
        "Complex approval chains",
        "Manual background checks",
        "Dependency on e-Services and ID Processing teams",
      ],
    },

    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Template Optimization",
          description:
            "Consolidated 25–26 onboarding templates into a single unified template",
        },
        {
          type: "Background Check Integration",
          description:
            "Integrated background check validation directly into the onboarding form",
        },
        {
          type: "Dependency Removal",
          description:
            "Removed dependencies on e-Services team and eliminated 24-hour wait timers",
        },
        {
          type: "Workflow Optimization",
          description:
            "Removed unnecessary approvals and streamlined workflows",
        },
        {
          type: "UI & Backend Redesign",
          description: "Redesigned form UI and rebuilt backend workflows",
        },
      ],
    },

    outcomes: {
      processingTimeReductionDays: {
        before: 26,
        after: 3,
        improvementPercentage: 88,
      },
      benefits: [
        "Faster onboarding",
        "Improved productivity",
        "Reduced manual intervention",
        "Enhanced user experience",
      ],
    },

    impactMeasurement: {
      reports: [
        "New Onboarding – Average Lifetime Report",
        "Old Onboarding – Average Lifetime Report",
      ],
    },

    nextSteps: [
      "Monitor onboarding metrics for 3 months",
      "Identify further optimization opportunities",
    ],
  },

  {
    id: "UC-03",
    img:'/Casestudy/multiple_tools.png',
    title: "Integrating Multiple Tools for Enhanced Visibility and Efficiency",
    location: { state: "", country: "" },
    domain: "Enterprise Operations",
    summary: "Integrated SharePoint, Teams, and SolarWinds into ServiceNow.",

    background: {
      overview:
        "The organization aimed to centralize inventory, incident, and request management by integrating multiple tools into ServiceNow.",
      keyChallenges: [
        "No centralized inventory system",
        "Email-based request handling",
        "Disconnected tools causing duplication",
      ],
    },
    problemStatement: {
      issues: [
        "Lack of real-time inventory visibility",
        "Manual and error-prone processes",
        "Operational inefficiencies",
      ],
    },
    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Tool Integration",
          description:
            "Integrated SharePoint, Teams, SolarWinds, Cisco, Aria, and Dell",
        },
        {
          type: "Inventory Centralization",
          description: "Created a centralized inventory management system",
        },
        {
          type: "Workflow Automation",
          description: "Replaced email-based requests with ServiceNow forms",
        },
      ],
    },

    outcomes: {
      benefits: [
        "Real-time inventory visibility",
        "Reduced manual work",
        "Improved operational efficiency",
        "Enhanced collaboration across teams",
      ],
    },
  },

  {
    id: "UC-04",
    img:'/Casestudy/automation_discovery1.png',
    location: { state: "", country: "" },
    title: "Automation Discovery Report in ServiceNow",
    domain: "IT Service Management",
    summary: "Automated repetitive incidents like password resets.",

    background: {
      overview:
        "ServiceNow Automation Discovery analyzed incident and request data to identify automation opportunities.",
      keyChallenges: ["Repetitive manual tasks", "High risk of human error"],
    },

    problemStatement: {
      issues: [
        "Repetitive manual tasks",
        "Inefficient resource utilization",
        "Increased ticket volume and SLA breaches",
      ],
    },

    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Automation Discovery",
          description:
            "Identified automation candidates using built-in reports",
        },
        {
          type: "Template Usage",
          description: "Used pre-built automation templates for common tasks",
        },
      ],
    },

    outcomes: {
      benefits: [
        "Reduced SLA breaches",
        "Improved response times",
        "Lower operational costs",
        "Employees focused on higher-value work",
      ],
    },
  },
  {
    id: "UC-05",
    img:'/Casestudy/customized_dashboards.png',
    title: "Customized Survey and Dashboard for Service Delivery Improvement",
    location: { state: "", country: "" },
    domain: "Service Delivery & Customer Experience",
    summary: "Automated feedback surveys for incidents.",

    background: {
      overview:
        "The service delivery team lacked visibility into customer satisfaction and resolution quality.",
      keyChallenges: [
        "No structured feedback mechanism",
        "Limited management visibility",
        "Manual post-resolution follow-ups",
      ],
    },

    problemStatement: {},

    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Customized Surveys",
          description:
            "Created tailored surveys for Incident and Non-Catalog requests",
        },
        {
          type: "Dashboard Creation",
          description: "Built executive dashboards for satisfaction visibility",
        },
      ],
    },

    outcomes: {
      benefits: [
        "Improved customer satisfaction",
        "Reduced rework",
        "Lower support costs",
        "Enhanced customer experience",
      ],
    },
  },
];

// export const  caseStudies = [
//     {
//       "id": "UC-01",
//       "title": "Streamlining Onboarding Process in Healthcare Center using ServiceNow",
//       "domain": "Healthcare",
//       "location": {
//         "state": "Ohio",
//         "country": "USA"
//       },
//       "summary":"Reduced onboarding time from 26 days to 3 days (88% improvement).",
//       "background": {
//         "overview": "A renowned healthcare center faced inefficiencies in its employee onboarding process due to excessive templates, approvals, and manual dependencies.",
//         "keyChallenges": [
//           "Multiple onboarding templates",
//           "Unnecessary approvals",
//           "Manual background verification",
//           "Inter-team dependencies causing delays"
//         ]
//       },
//       "problemStatement": {
//         "averageProcessingTimeDays": 26,
//         "issues": [
//           "Delayed employee onboarding",
//           "Complex approval chains",
//           "Manual background checks",
//           "Dependency on e-Services and ID Processing teams"
//         ]
//       },
//       "solution": {
//         "platform": "ServiceNow",
//         "implementedChanges": [
//           {
//             "type": "Template Optimization",
//             "description": "Consolidated 25–26 onboarding templates into a single unified template"
//           },
//           {
//             "type": "Background Check Integration",
//             "description": "Integrated background check validation directly into the onboarding form with exception handling"
//           },
//           {
//             "type": "Dependency Removal",
//             "description": "Removed dependencies on e-Services team and eliminated 24-hour wait timers"
//           },
//           {
//             "type": "Workflow Optimization",
//             "description": "Removed unnecessary approvals and streamlined workflows"
//           },
//           {
//             "type": "UI & Backend Redesign",
//             "description": "Redesigned form UI and rebuilt backend workflows to reduce complexity"
//           }
//         ]
//       },
//       "outcomes": {
//         "processingTimeReductionDays": {
//           "before": 26,
//           "after": 3,
//           "improvementPercentage": 88
//         },
//         "benefits": [
//           "Faster onboarding",
//           "Improved productivity",
//           "Reduced manual intervention",
//           "Enhanced user experience"
//         ]
//       },
//       "impactMeasurement": {
//         "reports": [
//           "New Onboarding – Average Lifetime Report",
//           "Old Onboarding – Average Lifetime Report"
//         ]
//       },
//       "nextSteps": [
//         "Monitor onboarding metrics for 3 months",
//         "Identify further optimization opportunities"
//       ]
//     },
//     {
//       "id": "UC-02",
//       "title": "Integrating Multiple Tools for Enhanced Visibility and Efficiency",
//       "domain": "Enterprise Operations",
//       "summary":"Integrated SharePoint, Teams, and SolarWinds into ServiceNow.",

//       "background": {
//         "overview": "The organization aimed to centralize inventory, incident, and request management by integrating multiple tools into ServiceNow.",
//         "existingChallenges": [
//           "No centralized inventory system",
//           "Email-based request handling",
//           "Disconnected tools causing duplication"
//         ]
//       },
//       "problemStatement": {
//         "issues": [
//           "Lack of real-time inventory visibility",
//           "Manual and error-prone processes",
//           "Operational inefficiencies"
//         ]
//       },
//       "solution": {
//         "platform": "ServiceNow",
//         "integratedTools": [
//           "SharePoint",
//           "Microsoft Teams",
//           "SolarWinds",
//           "Cisco",
//           "Aria",
//           "Dell"
//         ],
//         "keyImplementations": [
//           "Centralized inventory management",
//           "Form-based request handling",
//           "Automated workflows replacing email-based processes"
//         ]
//       },
//       "outcomes": {
//         "benefits": [
//           "Real-time inventory visibility",
//           "Reduced manual work",
//           "Improved operational efficiency",
//           "Enhanced collaboration across teams"
//         ]
//       }
//     },
//     {
//       "id": "UC-03",
//       "title": "Automation Discovery Report in ServiceNow",
//       "domain": "IT Service Management",
//       "summary":"Automated repetitive incidents like password resets.",

//       "background": {
//         "overview": "ServiceNow Automation Discovery was used to analyze incident and request data to identify automation opportunities.",
//         "commonManualTasks": [
//           "Printer setup",
//           "Password resets"
//         ]
//       },
//       "problemStatement": {
//         "issues": [
//           "Repetitive manual tasks",
//           "High risk of human error",
//           "Inefficient resource utilization",
//           "Increased ticket volume and SLA breaches"
//         ]
//       },
//       "solution": {
//         "platform": "ServiceNow",
//         "featuresUsed": [
//           "Automation Discovery Reports",
//           "Pre-built automation templates"
//         ],
//         "automationBenefits": [
//           "Identification of automation candidates",
//           "Reduction in manual tracking and follow-ups"
//         ]
//       },
//       "outcomes": {
//         "efficiencyGains": {
//           "timeReductionPercentage": "Up to 50%"
//         },
//         "benefits": [
//           "Reduced SLA breaches",
//           "Improved response and resolution times",
//           "Lower operational costs",
//           "Employees focused on higher-value work"
//         ]
//       }
//     },
//     {
//       "id": "UC-13",
//       "title": "Customized Survey and Dashboard for Service Delivery Improvement",
//       "domain": "Service Delivery & Customer Experience",
//       "summary":"Automated feedback surveys for incidents.",
//       "background": {
//         "overview": "The service delivery team lacked visibility into customer satisfaction and resolution quality.",
//         "challenges": [
//           "No structured feedback mechanism",
//           "Limited management visibility",
//           "Manual post-resolution follow-ups"
//         ]
//       },
//       "solution": {
//         "platform": "ServiceNow",
//         "components": [
//           "Customized Surveys",
//           "Automated Feedback Collection",
//           "Executive Dashboard"
//         ],
//         "surveyScope": [
//           "Incident Requests",
//           "Non-Catalog Requests"
//         ]
//       },
//       "outcomes": {
//         "benefits": [
//           "Improved customer satisfaction",
//           "Reduced rework",
//           "Lower support costs",
//           "Ability for users to reopen incidents if dissatisfied"
//         ]
//       },
//       "keyFeatures": {
//         "surveys": "Tailored to request type",
//         "automation": "Automated survey distribution",
//         "dashboards": "Real-time visibility for senior management"
//       },
//       "businessImpact": [
//         "Data-driven decision making",
//         "Improved service delivery",
//         "Enhanced customer experience and loyalty"
//       ]
//     }
//   ]

// export const caseStudies = [
//   {
//     id: "1",
//     title: "Streamlining Onboarding in Healthcare",
//     summary:
//       "Reduced onboarding time from 26 days to 3 days (88% improvement).",
//     background:
//       "A healthcare center faced lengthy onboarding due to multiple templates.",
//     problem:
//       "Manual background checks and unnecessary dependencies caused delays.",
//     solution:
//       "Templates were consolidated and background checks automated.",
//     outcomes: [
//       "Reduced processing time by 88%",
//       "Improved productivity",
//       "Better new hire experience",
//     ],
//   },
//   {
//     id: "2",
//     title: "Multi-Tool Integration for Efficiency",
//     summary:
//       "Integrated SharePoint, Teams, and SolarWinds into ServiceNow.",
//     background:
//       "Organization lacked a centralized inventory management system.",
//     problem:
//       "Manual email-based inventory tracking with low visibility.",
//     solution:
//       "Integrated multiple tools into a single request platform.",
//     outcomes: [
//       "Real-time inventory visibility",
//       "Reduced manual work",
//       "Better collaboration",
//     ],
//   },
//   {
//     id: "3",
//     title: "ServiceNow Automation Discovery",
//     summary:
//       "Automated repetitive incidents like password resets.",
//     background:
//       "Incident data showed repetitive patterns.",
//     problem:
//       "High ticket volume caused SLA breaches.",
//     solution:
//       "Automation Discovery and templates were used.",
//     outcomes: [
//       "Fewer SLA breaches",
//       "50% faster resolution",
//       "Cost savings",
//     ],
//   },
//   {
//     id: "13",
//     title: "Customized Surveys & Dashboards",
//     summary:
//       "Automated feedback surveys for incidents.",
//     background:
//       "No visibility into customer satisfaction.",
//     problem:
//       "Manual follow-ups wasted time.",
//     solution:
//       "Automated surveys and dashboards.",
//     outcomes: [
//       "Data-driven decisions",
//       "Improved customer loyalty",
//       "Lower support cost",
//     ],
//   },
// ];
