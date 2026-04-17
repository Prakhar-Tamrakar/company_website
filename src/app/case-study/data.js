export const caseStudies = [
  // ─── AIO Use Cases ────────────────────────────────────────────────────────
  {
    id: "use-case-v",
    // img: "/Casestudy/case-study-doctors.png",
    img: "/shutterstock/Case-Studies/cs1.png",

    title:
      "All-In-One (AIO) Devices: Modernizing Workflows and Communication for Clinical & Nursing Staff",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      " Our All-In-One (AIO) Devices solution transforms Microsoft Teams into a unified clinical platform, consolidating fragmented legacy systems to deliver a $15.17M annual benefit and a 279% Year 1 ROI through improved workflow efficiency.",

    background: {
      overview: `Major Healthcare CIOs in past couple years are facing a "margin emergency" characterized by rising labor costs and fragmented digital assets. A top-ranked academic medical center in Ohio partnered with i-Connectresources to execute an All-in-One (AIO) Devices strategy. The goal was to operationalize Gartner's "Intelligent Health" imperatives - precision, equity, ethics, and interoperability - by leveraging their existing Microsoft 365 and Teams infrastructure. `,
    },

    problemStatement: {
      summary:
        "Clinicians were forced to juggle between desk phones, pagers, walkie-talkies, and iPads.",
      issues: [
        "Communication Gaps: Fragmented workflows and frequent system outages.",
        "High Operational Costs: Overlapping licensing fees and complex support requirements.",
        "Clinician Burnout: Increased 'toil' due to inefficient tools and low staff morale.",
        "Support Fatigue: A heavy IT load managing a diverse and aging hardware fleet.",
        "Manual work: Clinicians had to carry paper for Emergency/Important phone numbers.",
      ],
    },
    solution: {
      description:
        "The All-in-One (AIO) Devices solution consolidated the fragmented ecosystem into a single, secure experience on Microsoft Teams, deployed via 4,000 iPhone SE devices. Key implementation steps included:",
      platform: "Microsoft 365 + Microsoft Teams (AIO Strategy)",

      implementedChanges: [
        {
          type: "Voice Migration",
          description:
            "Transitioned from Cisco to Microsoft 365 with a standardized 10-digit numbering plan.",
        },
        {
          type: "Centralized Directory",
          description:
            "Built unit-specific contact lists in SharePoint for instant peer-to-peer reach.",
        },
        {
          type: "Clinical Integration",
          description:
            "Integrated the Rover bedside alarm application to flow critical alerts directly to the iPhones.",
        },
        {
          type: "Unified Access",
          description:
            "Created a 'front door' for clinicians providing one-tap access to browser-based clinical resources and bookmarked high-value applications.",
        },
        {
          type: "Software Consolidation",
          description:
            "Related applications were migrated to iPhone, so clinicians/staff can access from one device.",
        },
      ],
    },

    KeyFeatures: {
      content: [
        {
          title: "Single Device Strategy",
          description:
            "Consolidation of calling, messaging, and alarms onto a single iPhone.  ",
        },
        {
          title: "Ambient Alerting",
          description: "Real-time integration with bedside alarms (Rover).  ",
        },
        {
          title: "Cloud-Native Infrastructure",
          description:
            "High-availability Teams environment replacing legacy on-premises hardware.  ",
        },
        {
          title: "One-Tap Clinical Bookmarks",
          description: "Instant access to essential web-based medical tools. ",
        },
        {
          title: "Centralized Governance",
          description:
            "Microsoft 365 policy enforcement for security and compliance.   ",
        },
      ],
    },

    impactMeasurement: {
      reports: [
        "Cisco Licensing Elimination: $2.70M annual savings",
        "Device Maintenance Savings: $1.00M annual savings",
        "Voice Infrastructure Reduction: $1.87M annual savings",
        "Clinical Time Efficiency (240,000 hours): $9.60M annual savings",
        "Total Annual Benefit: $15.17M | Year 1 ROI: 279%",
      ],
    },

    outcomes: {
      benefits: [
        "Financial Efficiency: Achieved a 279% ROI in Year 1 with a payback period of less than three months.",
        "Operational Reliability: Reduced communication downtime to near-zero, reclaiming 50+ hours of productive time per month.",
        "Clinical Safety: Accelerated critical response times by 40–60% through integrated alerting.",
        "Staff Experience: Improved clinician satisfaction scores by 20–30% and reduced onboarding time by 60%.",
        "IT Optimization: Realized a 40–50% reduction in device-related support tickets.",
      ],
    },
    Benefits: {
      content: [
        {
          title: "Margin Stabilization",
          description: `Significantly reduced technology "sunk costs" and redirected funds toward clinical care.`,
        },
        {
          title: "Workforce Sustainability",
          description: ` Combated burnout by reducing "toil" and simplifying the digital workspace for nurses and allied health professionals.`,
        },
        {
          title: "Improved Interoperability",
          description: ` Used Teams as a "communication fabric" to bridge gaps between alarms, collaboration tools, and clinical data.  `,
        },
        {
          title: "Scalable Blueprint: ",
          description: `Established a repeatable model for modernizing Clinical Communication and Collaboration (CCC) without purchasing a new standalone platform. `,
        },
      ],
    },
  },
  // jira use case
  {
    id: "use-case-vi",
    // img: "/Casestudy/case-study-doctors.png",
    img: "/shutterstock/Case-Studies/cs1.png",

    title:
      "Implementing End-to-End Governance in Healthcare",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      "No more ‘what went wrong?’ — just clear processes and 70% fewer issues.",

    background: {
      overview: `A major Healthcare organization in NY were facing challenges in having proper documentation, tracking the changes, incidents etc.  for an critical application. Lack of tracking the jobs and/or proper understanding of what needs to be done when issue happens or how to escalate in timely manner and frequent issues resulted in financial losses. `,
    },

    // problemStatement: {
    //   summary: "Lack of proper documentation and tracking led to frequent issues and financial losses.",
    //   issues: [
    //     "No documentation for critical applications.",
    //     "Lack of tracking jobs and incidents.",
    //     "Frequent issues due to no proper understanding of processes.",
    //     "Financial losses from reactive work.",
    //   ],
    // },

    solution: {
      platform: "Jira",
      implementedChanges: [
        {
          // type: "Voice Migration",
          description:
            "Used Atlassian tools like Jira and Confluence to get to a state of from no documentation to a complete end to end process flow documentation flowing the ITIL best practices.",
        },
        {
          // type: "Centralized Directory",
          description:
            "From an ad-hoc/reactive troubleshooting to structured Incident and Change management framework was created.",
        },
        {
          // type: "Clinical Integration",
          description:
            "ITIL best practices were used to create a workflow for approvals to escalations.",
        },
        {
          // type: "Unified Access",
          description:
            "Conducting regular operational checks to confirm accuracy across jobs.",
        },
        {
          // type: "Software Consolidation",
          description:
            "Conduct regular checks on the infrastructure and suggest any changes based on the observations as in proactive rather than reactive.",
        },
        {
          // type: "Software Consolidation",
          description:
            "Enhanced version control practices in place for proper tracking all the versions of Jobs or backed up properly into GITHUB regularly.",
        },
        {
          // type: "Software Consolidation",
          description:
            "Proper RCA (root cause analysis) was created during major incidents.",
        },
        {
          // type: "Software Consolidation",
          description:
            "Escalate incident to Problem when required.",
        },
      ],
    },
    KeyFeatures: {
      content: [
        {
          // title: "Single Device Strategy",
          description:
            "Used Jira - For tracking all Issues ",
        },
        {
          // title: "Ambient Alerting",
          description: "Used Confluence – Documentation ",
        },
        {
          // title: "Cloud-Native Infrastructure",
          description:
            "Tracked and prevented upcoming problems.",
        }
      ],
    },
    impactMeasurement: {
      reports: [
        "Issues dropped significantly by 60-70%.",
        "Zero to no financial loss due to reactive/ad-hoc work.",
      ],
    },

    outcomes: {
      benefits: [
        "Reduced No. of issues or minimized the issues.",
        "Maintained proper documentation.",
        "Reduced financial Loss.",
        "Proper runbooks/playbooks including documentation related to each ever aspect.",
        "Version control best practices were in-place avoiding resulted in streamlined deployments.",
      ],
    },
  },
  //  microsoft teams use case
  {
    id: "use-case-vii",
    // img: "/Casestudy/case-study-doctors.png",
    img: "/shutterstock/Case-Studies/cs1.png",

    title:
      "Contact Manager for Teams-Enabled Phones",
    domain: "Microsoft",
    location: { state: "Ohio", country: "USA" },
    summary:
      "Centralized contacts, role-based access and real-time availability—built for high-stakes environments.",

    background: {
      overview: `In a healthcare setting, staff faced difficulties in storing, customizing, accessing, and managing organizational contacts due to limitations of native contact apps on mobiles/tablets.`,
    },
    problemStatement: {
      summary: "Key challenges included:",
      issues: [
        "Limited Customization: Native apps could not offer the specific features or customization required for the organization's unique needs. ",
        "Role-Based Access Control: Native apps did not have advanced access control features, making it difficult to manage contacts based on roles or units.",
        "Centralized Management: Native apps could not provide the level of centralized management and standardization required for the organization's contact management needs.",
        "Integration with Other Systems: Native apps were not suitable to integrate seamlessly with other systems or applications used by the organization, limiting their effectiveness in regard to save and quickly access frequently called numbers, such as pharmacy security or blood unit contacts.",
      ],
    },

    solution: {
      description:
        "The Contact Manager solution was developed to address this challenges and various work-units were given Teams-enabled phones without access to native contact apps. Here's how it works",

      implementedChanges: [
        {
          type: "SharePoint List:",
          description:
            "Initially, a SharePoint list was created to store contact information for each unit. Authorized personnel, such as nurse managers, were given access to manage and maintain these lists.",
        },
        {
          type: "Power Platform App",
          description:
            "The SharePoint list was later converted into a Power Platform app, allowing units to view and manage their specific contact lists. The app ensures that each unit only sees their relevant contacts.",
        },
        {
          type: "Automatic Filtering",
          description:
            "Contacts are filtered based on unit-specific naming conventions, enabling staff to easily access the right contacts.",
        },
      ],
    },
    KeyFeatures: {
      content: [
        {
          // title: "Single Device Strategy",
          description:
            "Used Jira - For tracking all Issues ",
        },
        {
          // title: "Ambient Alerting",
          description: "Used Confluence – Documentation ",
        },
        {
          // title: "Cloud-Native Infrastructure",
          description:
            "Tracked and prevented upcoming problems.",
        }
      ],
    },
    impactMeasurement: {
      discription: "In the Contact Manager system, each unit has its own administrative users (Contact List Admins) who manage contacts specific to their unit. Thus, the contact management solution provides a centralized and standardized way to manage contacts across different units. Key features include:",
      reports: [
        "Centralized Contact Management: Standardized contacts are maintained centrally, ensuring consistency and accuracy. ",
        "Unit-Specific Contacts: Each unit can have its own set of specialized contacts, catering to specific needs.",
        "Role-Based Access: Contacts are assigned based on roles, enabling efficient management and access control. ",
        "Template-Based Contact Lists: Predefined templates are made available for contact lists, customized for each unit. ",
        "Teams Channel Creation: New Teams channels are created for each contact list, with admins responsible for managing contacts and user access. ",
      ],
    },
    outcomes: {
      benefits: [
        "Efficient Contact Management: Staff can quickly access frequently called numbers, improving communication and response times. ",
        "Reduced Administrative Burden: Authorized personnel can manage contact lists, reducing the need for manual updates. ",
        "Customization: The solution is tailored to the specific needs of each unit, ensuring that staff have access to the contacts they need. ",
      ],
    },
    FutureDevelopment: {
      discription: "The success of the Contact Manager solution has even caught the attention of Microsoft, who are now considering incorporating similar functionality into their own tools. This demonstrates the value of innovative solutions that i-Connectresources has addressed in terms of specific business needs. ",

    },
  },
// ondrive use case
  {
    id: "use-case-viii",
    // img: "/Casestudy/case-study-doctors.png",
    img: "/shutterstock/Case-Studies/cs1.png",

    title:
      " OneDrive Migration Project",
    domain: "Microsoft",
    location: { state: "Ohio", country: "USA" },
    summary:
      "A centralized, role-based contact management solution enabling instant access and faster response across healthcare units. ",

    background: {
      overview: `The OneDrive migration project involved migrating 16,000 users' file share locations from on-premises file shares to OneDrive. The goal was to modernize storage infrastructure, enhance collaboration, and leverage cloud-based features.`,
    },
    // problemStatement: {
    //   summary: "Key challenges included:",
    //   issues: [
    //     "Limited Customization: Native apps could not offer the specific features or customization required for the organization's unique needs. ",
    //     "Role-Based Access Control: Native apps did not have advanced access control features, making it difficult to manage contacts based on roles or units.",
    //     "Centralized Management: Native apps could not provide the level of centralized management and standardization required for the organization's contact management needs.",
    //     "Integration with Other Systems: Native apps were not suitable to integrate seamlessly with other systems or applications used by the organization, limiting their effectiveness in regard to save and quickly access frequently called numbers, such as pharmacy security or blood unit contacts.",
    //   ],
    // },

    solution: {
      description:
        "The Contact Manager solution was developed to address this challenges and various work-units were given Teams-enabled phones without access to native contact apps. Here's how it works",

      implementedChanges: [
        {
          type: "Massive Data Migration",
          description:
            "Successfully migrated approximately 11-12 terabytes (TB) of data to OneDrive.",
        },
        {
          type: "Automation",
          description:
            "Developed scripts to automate the migration process, utilizing 5 servers to complete the project within 6 months.",
        },
        {
          type: "Redundancy Elimination",
          description:
            "Made on-premises file shares redundant and read-only, ensuring a seamless transition.",
        },
      ],
    },
    KeyFeatures: {
      content: [
        {
          // title: "Single Device Strategy",
          description:
            "Used Jira - For tracking all Issues ",
        },
        {
          // title: "Ambient Alerting",
          description: "Used Confluence – Documentation ",
        },
        {
          // title: "Cloud-Native Infrastructure",
          description:
            "Tracked and prevented upcoming problems.",
        }
      ],
    },
    impactMeasurement: {
      discription: "By delivering a scalable and efficient OneDrive migration solution, we empowered the organization to accelerate its digital transformation journey, fostering enhanced collaboration and streamlined data management across its operations.",
      reports: [
        "Centralized Contact Management: Standardized contacts are maintained centrally, ensuring consistency and accuracy. ",
        "Unit-Specific Contacts: Each unit can have its own set of specialized contacts, catering to specific needs.",
        "Role-Based Access: Contacts are assigned based on roles, enabling efficient management and access control. ",
        "Template-Based Contact Lists: Predefined templates are made available for contact lists, customized for each unit. ",
        "Teams Channel Creation: New Teams channels are created for each contact list, with admins responsible for managing contacts and user access. ",
      ],
    },
    outcomes: {
      benefits: [
        "Efficient Contact Management: Staff can quickly access frequently called numbers, improving communication and response times. ",
        "Reduced Administrative Burden: Authorized personnel can manage contact lists, reducing the need for manual updates. ",
        "Customization: The solution is tailored to the specific needs of each unit, ensuring that staff have access to the contacts they need. ",
      ],
    },
    Benefits: {
      content: [
        {
          title: "Automatic Backup",
          description: "Files are automatically backed up to the cloud, reducing data loss risks.",
        },
        {
          title: "Zero Touch Migration USP",
          description: "Approx. 16,730 user migrations complement using the Zero-touch migration approach.  The Zero Touch Migration approach automates the migration process, minimizing manual intervention and reducing human error. Key aspects include automated scripts, scheduler jobs that pick users from a CSV file, automatic log uploads for transparency, and limited validation by migration team members. This approach delivers quicker, more efficient, and error-free migrations, ensuring a seamless experience for clients by leveraging technology to lead the process.",
        },
        {
          title: "Cloud Content Management",
          description: "Users can leverage version history, collaboration, and sharing features. ",
        },
        {
          title: "Enhanced Productivity",
          description: "OneDrive's sync capabilities ensure files are up-to-date across devices. ",
        },
        {
          title: "Monetary Plus",
          description: "Approx. $200K savings realized over the period of 5 years.  ",
        },
      ],
    },
    FutureDevelopment: {
      discription: "The organization plans to migrate file share data to SharePoint Online sites, separating personal data (OneDrive) from team or organization-wide data (SharePoint).",

    },
  },




  // ─── ServiceNow Cases ─────────────────────────────────────────────────
  {
    id: "use-case-i",
    // img: "/Casestudy/health_onboard.png",
    img: "/shutterstock/Case-Studies/cs2.png",

    title: "Streamlining Onboarding Process in Healthcare  using ServiceNow",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      "Turning onboarding bottlenecks into breakthroughs by 88%.",

    background: {
      overview:
        "A renowned Medical center in the state of Ohio, USA, faced significant challenges with its onboarding process, which was lengthy and inefficient. The process involved multiple templates, unnecessary approvals, and dependencies that hindered the onboarding of new employees.",
    },

    problemStatement: {
      summary:
        "The onboarding process took around 26 days to complete, causing delays in getting new employees up to speed. The process was plagued by unnecessary approvals and dependencies, including background checks that added to the complexity.",
      issues: [
        "Multiple redundant onboarding templates causing confusion and inconsistency.",
        "Background check processes added delays and required manual reviews.",
        "Unnecessary approvals from stakeholders who were not required in the workflow.",
        "Dependencies on the e-Services team for ID Processing team updates.",
        "24-hour wait timers for background check revalidation.",
      ],
    },

    solution: {
      platform: "ServiceNow and custom UI/UX",
      implementedChanges: [
        {
          type: "Consolidated templates",
          description:
            "Reduced 25-26 templates to a single template, eliminating unnecessary complexity and approvals.",
        },
        {
          type: "Streamlined background check process",
          description:
            "Integrated background checks into the onboarding process, allowing users to submit requests only after the background check is complete. Exceptions are now handled within the form, reducing manual reviews and unnecessary routing.",
        },
        {
          type: "Removed dependencies",
          description:
            "Eliminated the dependency on the e-Services team for ID Processing team updates and removed the 24-hour wait timer for background check revalidation.",
        },
        {
          type: "Optimized Approvals & Workflow",
          description:
            "Identified and removed unnecessary approvals, ensuring that only required stakeholders are involved in the process.",
        },
        {
          type: "Implemented ServiceNow",
          description:
            "Utilized ServiceNow as a tool to automate and streamline the onboarding process.",
        },
        {
          type: "UI and workflow redesign",
          description:
            "Simplified the form UI and rebuilt the backend workflow to eliminate unnecessary complexity.",
        },
      ],
    },

    impactMeasurement: {
      KeyFeatures: {
        content: [
          {
            title: "Consolidated Templates",
            description: "Reduced multiple templates to one for consistency.",
          },
          {
            title: "Automated Background Checks",
            description: "Integrated checks to streamline the process.",
          },
          {
            title: "Removed Dependencies",
            description: "Eliminated unnecessary team dependencies.",
          },
          {
            title: "Optimized Approvals",
            description: "Streamlined approval workflows.",
          },
          {
            title: "ServiceNow Integration",
            description: "Automated onboarding with ServiceNow.",
          },
        ],
      },

      reports: [
        "New Onboarding – Average Lifetime Report: Shows average ticket lifetime for requests created using the new onboarding form.",
        "Old Onboarding – Average Lifetime Report: Displays average ticket lifetime for requests created using the previous form.",
      ],
    },

    outcomes: {
      benefits: [
        "Reduced processing time: The onboarding process has been reduced from 26 days to 3 days, a significant improvement of approximately 88%.",
        "Increased efficiency: The elimination of unnecessary approvals and dependencies has streamlined the process, reduced delays and increasing productivity.",
        "Improved user experience: The simplified process has improved the user experience for new employees, allowing them to get up to speed faster and focus on their roles.",
      ],
    },
    Benefits: {
      content: [
        {
          title: "Time Savings",
          description: "Reduced onboarding time by 88%.",
        },
        {
          title: "Efficiency Gains",
          description: "Streamlined processes and removed bottlenecks.",
        },
        {
          title: "Better UX",
          description: "Improved experience for new employees.",
        },
        {
          title: "Scalable Solution",
          description: "Repeatable model for other processes.",
        },
      ],
    },
  },
  {
    id: "use-case-ii",
    // img: "/Casestudy/multiple_tools.png",
    img: "/shutterstock/Case-Studies/cs3.png",

    title: "Enhancing IT Service Management with Accurate CMDB",
    domain: "IT Service Management",
    location: { state: "", country: "" },
    summary:
      "Improved CMDB accuracy by integrating multiple discovery tools and dependency mapping, enabling automated impact analysis and proactive communication to prevent service disruptions.",

    background: {
      overview:
        "The organization faced challenges with its Configuration Management Database (CMDB) accuracy, leading to a lack of visibility into upstream and downstream dependencies. This resulted in unintended consequences, such as service disruptions, when changes were made to IT infrastructure without proper awareness and planning.",
    },

    problemStatement: {
      summary:
        "Without an accurate CMDB, the organization struggled with multiple issues.",
      issues: [
        "Lack of visibility: IT teams were unaware of dependencies between IT assets and services, making it difficult to assess the impact of changes.",
        "Inadequate communication: Stakeholders were not informed about planned maintenance or changes, leading to unexpected service disruptions.",
        "Inefficient change management: IT teams had to manually contact numerous stakeholders to determine dependencies, wasting time and resources.",
        "Slow recovery: During major events like disaster recovery, without a priority list or dependencies, it becomes difficult to bring up the applications.",
      ],
    },

    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Dependency mapping",
          description:
            "A clear understanding of upstream and downstream dependencies between IT assets and services.",
        },
        {
          type: "Integration",
          description:
            "Integrated multiple products/tools like SolarWinds, Intune, Cisco Thousand Island, Gluware, VMWare, Dynatrace, Splunk, SharePoint, AWS, MS Graph Connector, MS Teams etc to discover all CIs in the organization.",
        },
        {
          type: "Automated Discovery for Different Assets (CI)",
          description:
            "Utilizes scheduled jobs to scan networks, identify new assets, and integrate seamlessly with multiple third-party vendors.",
        },
        {
          type: "Reports",
          description:
            "For data gaps like owner, location etc, data gap dashboards were created for every CIs and show the progress.",
        },
      ],
    },

    impactMeasurement: {
      KeyFeatures: {
        content: [
          {
            title: "Dependency Mapping",
            description: "Clear upstream and downstream dependencies.",
          },
          {
            title: "Multi-Tool Integration",
            description: "Integrated various discovery tools.",
          },
          {
            title: "Automated Discovery",
            description: "Scheduled jobs for asset identification.",
          },
          {
            title: "Data Gap Reports",
            description: "Dashboards for tracking completeness.",
          },
        ],
      },

      reports: [
        "CMDB Accuracy Report: Tracks the percentage of configuration items with complete and accurate data.",
        "Dependency Mapping Report: Shows upstream/downstream CI relationships and their current health status.",
        "Change Impact Assessment Report: Measures the reduction in unplanned outages due to improved dependency awareness.",
      ],
    },

    outcomes: {
      benefits: [
        "Automated impact analysis: The ability to assess the impact of changes on IT services and stakeholders.",
        "Proactive communication: Automated notifications to dependent stakeholders about planned maintenance or changes, ensuring awareness and minimizing disruptions.",
        "Improved change management: IT teams can now assess the impact of changes and plan accordingly, reducing the risk of service disruptions.",
        "Enhanced communication: Stakeholders are informed about planned maintenance or changes, ensuring awareness and minimizing disruptions.",
        "Increased efficiency: Dependency mapping helped in understanding upstream/downstream CIs, helped in faster recovery during major events.",
      ],
    },
    Benefits: {
      content: [
        {
          title: "Accurate CMDB",
          description: "Improved visibility and accuracy of IT assets.",
        },
        {
          title: "Proactive Management",
          description: "Automated impact analysis and notifications.",
        },
        {
          title: "Reduced Disruptions",
          description: "Minimized service outages through better planning.",
        },
        {
          title: "Faster Recovery",
          description: "Priority lists for disaster recovery.",
        },
      ],
    },
  },
  {
    id: "use-case-iii",
    // img: "/Casestudy/customized_dashboards.png",
    img: "/shutterstock/Case-Studies/cs4.png",

    title: "Optimizing ServiceNow Licensing Costs",
    domain: "IT Service Management",
    location: { state: "", country: "" },
    summary:
      " Paying for assets you don’t use? We cut the waste and the bill.",

    background: {
      overview:
        "The organization faced challenges with ServiceNow licensing costs due to a lack of understanding of the licensing model and inadequate management of Configuration Management Database (CMDB) data.",
    },

    problemStatement: {
      summary:
        "The organization struggled with licensing costs and CMDB data issues.",
      issues: [
        "Lack of awareness: Unclear understanding of ServiceNow licensing rules, leading to unexpected costs.",
        "Inaccurate CMDB data: Failure to update CMDB records for retired or unused assets, resulting in inflated licensing costs.",
        "Unused assets counted: Active records for retired or unused assets, such as servers, storage, laptops, and mobile devices, were counted towards licensing, increasing costs.",
      ],
    },

    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Licensing model understanding",
          description:
            "Gained a clear understanding of ServiceNow licensing rules and requirements.",
        },
        {
          type: "CMDB data cleanup",
          description:
            "Regularly reviewed and updated CMDB records to ensure accuracy and reflect the current state of assets.",
        },
        {
          type: "Asset lifecycle management",
          description:
            "Implemented processes to mark assets as retired or inactive when they are no longer in use.",
        },
      ],
    },

    impactMeasurement: {
      KeyFeatures: {
        content: [
          {
            title: "Licensing Awareness",
            description: "Clear understanding of ServiceNow licensing rules.",
          },
          {
            title: "CMDB Cleanup",
            description: "Regular updates to CMDB records.",
          },
          {
            title: "Asset Lifecycle Management",
            description: "Processes for retiring unused assets.",
          },
        ],
      },

      reports: [
        "License Usage Report: Tracks active vs. inactive assets contributing to licensing costs.",
        "CMDB Cleanup Progress Report: Shows the number of assets retired/corrected over time.",
      ],
    },

    outcomes: {
      benefits: [
        "Cost savings: Reduced huge licensing costs by ensuring accurate CMDB data and removing unused assets from licensing counts.",
        "Improved compliance: Ensured compliance with ServiceNow licensing rules and requirements.",
        "Better asset management: Implemented effective asset lifecycle management processes, reducing waste and improving resource utilization.",
      ],
    },
    Benefits: {
      content: [
        {
          title: "Cost Reduction",
          description: "Significant savings on licensing costs.",
        },
        {
          title: "Compliance",
          description: "Adherence to licensing rules.",
        },
        {
          title: "Asset Management",
          description: "Effective lifecycle processes.",
        },
      ],
    },
  },
  {
    id: "use-case-iv",
    // img: "/Casestudy/automation_discovery1.png",
    img: "/shutterstock/Case-Studies/cs5.png",

    title: "Certificate Management with ServiceNow",
    domain: "IT Security & Compliance",
    location: { state: "", country: "" },
    summary:
      " Never let one expired certificate take down your business again.",

    background: {
      overview:
        "Certificates are essential to encrypt sensitive data (login credentials, credit card details) sent between browsers and servers, preventing interception, securing online communications and transactions. Organizations use various types of certificates, such as wildcard and multi-domain certificates, to protect their digital assets. However, managing these certificates can be complex, especially when dealing with large numbers of certificates across different departments and systems.",
    },
    problemStatement: {
      summary:
        "Organizations struggle with managing certificates, leading to multiple issues.",
      issues: [
        "Lack of Visibility: Unknown certificate inventory and status make it difficult for organizations to track and manage their certificates effectively.",
        "Lack of ownership: Since the inventory is not readily available, owner for each certificate is unknown and not updated when changes happen causing delays in renewals or reaching out during an event.",
        "Unknown Expiration Dates: Certificates expire without notice, causing disruptions to business operations and potentially leading to security risks.",
        "Unutilized Certificates: Redundant certificates waste resources and cost money, resulting in unnecessary expenses.",
        "Inefficient Renewal: Manual renewal processes lead to errors and delays, risking missed renewal deadlines and potential security risks.",
        "Production Outages: Due to expired certificates, users will not be able to access applications causing huge loss to organizations.",
      ],
    },
    solution: {
      platform: "ServiceNow",
      implementedChanges: [
        {
          type: "Centralized Inventory",
          description:
            "All certificates are tracked and visible in one place, providing a single source of truth for certificate management. This centralized tracking enables organizations to easily manage their certificates and reduce the risk of errors or oversights.",
        },
        {
          type: "Automated Workflow for Renewals",
          description:
            "Notifications are sent before certificates expire, ensuring that organizations are aware of upcoming expirations and can take timely action to renew or replace certificates. Escalations are triggered based on the organization needs.",
        },
        {
          type: "Automated Cleanup",
          description:
            "Unused certificates are removed from the system, eliminating unnecessary expenses and reducing clutter. This automated cleanup process helps organizations optimize their certificate inventory and reduce costs.",
        },
      ],
    },
    impactMeasurement: {
      reports: [
        "Certificate Expiry Report: Tracks certificates nearing expiration with owner and renewal status.",
        "Unutilized Certificate Report: Identifies and lists certificates that are no longer active or in use.",
        "Renewal Automation Report: Measures the reduction in manual renewal efforts and missed expirations.",
      ],
    },
    outcomes: {
      benefits: [
        "Improved Visibility: Clear overview of certificate inventory and status enables organizations to effectively manage their certificates and reduce the risk of errors or oversights.",
        "Reduced Risk: Minimized security risks from expired certificates ensure that organizations can maintain the security and integrity of their digital assets.",
        "Increased Efficiency: Streamlined certificate management and renewal processes reduce the administrative burden associated with certificate management.",
        "Cost Savings: Elimination of unutilized certificates reduces costs and optimizes certificate inventory.",
      ],
    },
  },
];
