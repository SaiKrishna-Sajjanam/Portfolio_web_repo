import { Card } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Independent Data Analytics Consultant",
    company: "Self-Employed",
    location: "Dublin, Ireland / Remote",
    period: "Oct 2023 – Present",
    projects: [
      {
        name: "Hospitality Client — Customer Insights & Retention Analytics",
        tech: "Python · SQL · Excel · Power BI",
        bullets: [
          "Scraped and consolidated customer feedback data from web sources using BeautifulSoup and Python — built a clean, structured dataset tracking satisfaction scores, NPS, and retention patterns across customer segments.",
          "Analysed feedback trends and experience gaps using SQL and Python; identified key drivers of dissatisfaction and seasonal booking behaviour, delivering prioritised recommendations to the client.",
          "Built a Power BI dashboard surfacing retention rates, satisfaction scores, and sentiment insights — customer satisfaction response rate improved from 68% to 85% following implementation of data-driven experience changes, directly contributing to increased seasonal bookings.",
        ],
      },
      {
        name: "Metaverse Transaction Risk & Fraud Detection",
        tech: "Python · Machine Learning · SQL",
        bullets: [
          "Investigated fraud patterns across 78K+ financial transactions; applied SMOTE for class imbalance and PCA for dimensionality reduction.",
          "Cross-validated Logistic Regression, Random Forest, KNN, and Naive Bayes models — selected Naive Bayes as the final model, achieving ~94.6% F1-score on unseen data and delivering a reusable, production-ready fraud detection pipeline.",
        ],
      },
      {
        name: "Vendor Performance Analytics",
        tech: "Python · SQL · Power BI · Tableau",
        bullets: [
          "Designed a SQL-driven KPI framework analysing delivery, quality, and cost metrics across vendors; flagged variances exceeding 15% thresholds and surfaced underperforming suppliers previously undetected in existing reporting.",
          "Built interactive Power BI and Tableau dashboards enabling self-service reporting — reduced time spent on manual vendor reviews and empowered procurement teams to act on data independently.",
        ],
      },
      {
        name: "ShopVista E-Commerce Data Pipeline",
        tech: "Azure Databricks · Delta Lake · PySpark · Power BI",
        bullets: [
          "Built an end-to-end ELT pipeline on Azure Databricks using Medallion Architecture (Bronze → Silver → Gold); ingested data from ADLS Gen2 and applied deduplication, type casting, and business rule corrections across dimension and fact tables.",
          "Delivered a Power BI dashboard tracking $22.19B in sales, 1.6M units, and 299.7K customers across 7 countries with a 66.53% repeat customer rate surfaced through Gold-layer KPI aggregations.",
        ],
      },
    ],
  },
  {
    title: "Data Consultant",
    company: "Infosys — Client: Goldman Sachs",
    officialTitle: "Official Designation: Technology Analyst",
    location: "Hyderabad, India",
    period: "Mar 2021 – Sep 2023",
    context: "Data analysis, KPI reporting, risk monitoring, and data quality governance in a regulated financial environment (Goldman Sachs FICC & GLP).",
    bullets: [
      "Gathered business requirements and translated them into Power BI dashboards using DAX, Power Query, SQL, Oracle, and SQL Server — improving reporting efficiency by 30% and enhancing executive decision-making.",
      "Designed KPI frameworks and self-service reporting solutions across multiple business functions, reducing manual reporting effort and improving stakeholder visibility into operational performance.",
      "Examined batch log and SLA breach patterns via self-built SQL dashboards; identified feed sequencing as the root cause of ~15 monthly incidents and drove a fix that reduced incidents to 2–3 low-severity per month.",
      "Performed data profiling, validation, and root-cause analysis across enterprise pipelines — preventing data-quality breaches on P&L-critical financial pipelines in a regulated Azure environment.",
      "Examined Gold-layer data flows with BI and QA teams; identified pipeline misalignments and recommended fixes that improved report delivery efficiency by 25%.",
      "Introduced structured delivery tracking via JIRA and Azure DevOps — achieving consistent on-time delivery and reducing knowledge-transfer gaps across cross-functional teams.",
    ],
  },
  {
    title: "Data & BI Analyst",
    company: "iConcept Software Services — Client: Bayer Crop Science",
    officialTitle: "Official Designation: Technical Support Engineer",
    location: "Hyderabad, India",
    period: "Feb 2019 – Mar 2021",
    bullets: [
      "Gathered reporting requirements and delivered SQL-backed Tableau and Power BI dashboards, providing self-service KPI visibility and reducing stakeholder dependency on ad-hoc data requests.",
      "Investigated Azure VM performance and data-ingestion trends; identified seasonal capacity gaps and delivered data-backed recommendations that reduced infrastructure over-provisioning costs.",
      "Restructured KPI presentation ahead of CEO review — earned direct CEO recognition for analytical clarity and decision-support quality.",
      "Detected recurring data-quality issues before they reached reporting layers, improving downstream dashboard reliability and reducing manual correction effort.",
      "Traced UAT defects to data-layer inconsistencies; improved release stability and ensured production reporting accuracy across enterprise application deployments.",
      "Analysed support issue patterns and identified resolution bottlenecks — reducing average resolution time by ~20% through structured tracking tools.",
    ],
  },
  {
    title: "Associate",
    company: "Knoah Solutions — Client: Time Warner",
    location: "Hyderabad, India",
    period: "Oct 2016 – 2018",
    bullets: [
      "Built Excel-based trackers and field-tracker tools to analyse support trends — improved resolution time by ~20% and standardised issue management across the team.",
      "Earned two Bravo Awards for outstanding client service and analytical contribution.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Journey and Achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-8 md:p-10 border border-border rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-base font-semibold text-primary">
                        {exp.company}
                      </p>
                      {"officialTitle" in exp && (
                        <p className="text-sm text-muted-foreground italic">
                          {exp.officialTitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-7">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {"context" in exp && exp.context && (
                  <p className="text-sm text-muted-foreground italic ml-7">
                    {exp.context}
                  </p>
                )}

                {/* Sub-projects (Consultant role) */}
                {"projects" in exp && exp.projects && (
                  <div className="space-y-5 ml-7">
                    {exp.projects.map((proj, pi) => (
                      <div key={pi}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground text-sm">
                            {proj.name}
                          </span>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {proj.tech}
                          </span>
                        </div>
                        <ul className="space-y-1.5 list-none">
                          {proj.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm text-foreground/85">
                              <span className="text-accent mt-1 flex-shrink-0">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Direct bullets */}
                {"bullets" in exp && exp.bullets && (
                  <ul className="space-y-2 ml-7">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
