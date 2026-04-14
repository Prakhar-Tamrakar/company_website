export const caseStudies = [
  // ─── AIO Use Cases ────────────────────────────────────────────────────────
  {
    id: "use-case-v",
    img: "/Casestudy/case-study-doctors.png",
    title:
      "All-In-One (AIO) Devices: Modernizing Workflows and Communication for Clinical Staff",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      " Our All-In-One (AIO) Devices solution transforms Microsoft Teams into a unified clinical platform, consolidating fragmented legacy systems to deliver a $15.17M annual benefit and a 279% Year 1 ROI through improved workflow efficiency.",

    background: {
      overview: `Major Healthcare CIOs in past couple years are facing a "margin emergency" characterized by rising labor costs and fragmented digital assets. A top-ranked academic medical center in Ohio partnered with  i-Connectresources to execute an All-in-One (AIO) Devices strategy. The goal was to operationalize Gartner’s "Intelligent Health" imperatives—precision, equity, ethics, and interoperability—by leveraging their existing Microsoft 365 and Teams infrastructure.  `,
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
        "The All-in-One (AIO) Devices solution consolidated the fragmented ecosystem into a single, secure experience on Microsoft Teams, deployed via 4,000 iPhone SE devices. Key implementation steps included:",
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
  // ─── ServiceNow Use Cases ─────────────────────────────────────────────────
  {
    id: "use-case-i",
    img: "/Casestudy/health_onboard.png",
    title: "Streamlining Onboarding Process in Healthcare  using ServiceNow",
    domain: "Healthcare",
    location: { state: "Ohio", country: "USA" },
    summary:
      "Reduced employee onboarding time from 26 days to 3 days — an 88% improvement — by consolidating templates, automating background checks, and eliminating unnecessary approvals via ServiceNow.",

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
  },

  {
    id: "use-case-ii",
    img: "/Casestudy/multiple_tools.png",
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
  },

  {
    id: "use-case-iii",
    img: "/Casestudy/customized_dashboards.png",
    title: "Optimizing ServiceNow Licensing Costs",
    domain: "IT Service Management",
    location: { state: "", country: "" },
    summary:
      "Significantly reduced ServiceNow licensing costs by gaining clarity on the licensing model, cleaning up CMDB data, and implementing asset lifecycle management to remove retired or unused assets from license counts.",

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
  },

  {
    id: "use-case-iv",
    img: "/Casestudy/automation_discovery1.png",
    title: "Certificate Management with ServiceNow",
    domain: "IT Security & Compliance",
    location: { state: "", country: "" },
    summary:
      "Eliminated certificate-related production outages by centralizing certificate inventory, automating renewal workflows, and cleaning up unutilized certificates — reducing security risks and unnecessary costs.",

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
