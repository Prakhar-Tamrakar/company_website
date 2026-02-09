 import { Settings,LayoutDashboard  ,Code ,Layers ,Cloud ,Cpu, Grid  } from "lucide-react";
 const Categories = [
    {
        id:1,
        img:'/Services/aiml.png',
        icon:Cpu ,
        heading:"Enterprise Automation with AI/ML & GenAI",
        subHeading:"From repetitive task elimination to cognitive decision support — our automation stack delivers at scale.",
        featureList:['Custom Workflows using Python, PowerShell, UiPath, Appian',
            'AI-Powered Root Cause Analysis & Predictive Maintenance',
            'GenAI-Based Chatbots & Virtual Assistants',
            'Automation of User/Calendar/Group Management'
        ],
        footerContent:'40–60% time saved on repetitive tasks, 30% increase in IT productivity.'
         
    },
     {
        id:2,
        img:'/Services/Custom_Software.png',
        icon:Code,
        heading:"Custom Software & Data Engineering Solutions",
        subHeading:"Not every challenge fits into a box — we custom-build scalable, secure solutions.",
        featureList:['Full-Stack Web & Mobile Development',
            'Microservices, Containerization, and CI/CD',
            'Enterprise Data Pipelines & Analytics Dashboards',
            'Integration with ServiceNow, Salesforce, Microsoft 365, SAP',
            'AI/ML Model Deployment & Governance'
        ],
        footerContent:'Reduced vendor sprawl, integrated experiences, improved leadership decision-making.'
         
    },
    {
        id:3,
        img:'/Services/itsm.png',
        icon:Settings,
        heading:"IT Service Management & Workflow Automation",
        subHeading:"We transform how IT services are delivered — making operations intelligent, resilient, and scalable.",
        featureList:['ServiceNow-based Incident, Change & Problem Management',
            'CMDB Accuracy & Auto Discovery',
            'Cisco & MS Teams Integration for Major Incident Resolution',
            'Real-time Dashboards for Service Leaders'
        ],
        footerContent:'Up to 70% reduction in service disruptions, faster RCA, and enhanced end-user satisfaction.'
         

    },
    {
        id:4,
        img:'/Services/salesforce.png',
        icon:Layers,
        heading:"Salesforce & Appian-Based Business Automation",
        subHeading:"Accelerate front-office and back-office automation with low-code platforms.",
        featureList:['Salesforce Workflows, Integrations, and Dashboards',
            'Appian Case Management & Business Rules Automation',
            'Process Digitization Across Sales, Service, HR, and Ops',
            'Seamless API Integrations to ERP/CRM/ITSM Systems'
        ],
        footerContent:'Streamlined processes, shorter onboarding, higher CX scores through faster turnaround.'
         

    },
    {
        id:5,
        img:'/Services/cloudinfra.png',
        icon:Cloud,
        heading:"Cloud, Infrastructure & Data Modernization",
        subHeading:"Cloud-agnostic support that keeps your infrastructure agile, compliant, and ready for scale.",
        featureList:['Server & Storage Provisioning Automation (AWS, Azure, VMware)',
            'Active Directory Integrations & CMDB Sync',
            'DNS/IP/SSL Certificate Automation',
            'Personal Drive to OneDrive Migrations',
            'Onboarding/Offboarding with Compliance Hooks'
        ],
        footerContent:'Infrastructure provisioning cycles reduced from weeks to hours; enhanced governance.'
         
    },
    {
        id:6,
        img:'/Services/microsoftoffice.png',
        icon:LayoutDashboard ,
        heading:"Microsoft 365 & PowerPlatform Enablement",
        subHeading:"Drive collaboration, automation, and innovation using your existing Microsoft investments.",
        featureList:['Power Apps & Power Automate-based Process Automation',
            'Role-Based Access Control & Mailbox Management',
            'Custom App Development for Line-of-Business Needs',
            'Governance, Security & Productivity Dashboards'
        ],
        footerContent:'Consolidated IT support platforms, improved employee productivity, compliance at scale.'
         
    }
]
export default Categories