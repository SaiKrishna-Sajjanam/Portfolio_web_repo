import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ShopVista E-Commerce Data Pipeline",
      description:
        "End-to-end ELT pipeline on Azure Databricks using Medallion Architecture (Bronze → Silver → Gold). Ingested data from ADLS Gen2, applied deduplication, type casting, and business rule corrections. Delivered a Power BI dashboard tracking $22.19B in sales, 1.6M units, and 299.7K customers across 7 countries with a 66.53% repeat customer rate.",
      github: "https://github.com/SaiKrishna-Sajjanam/ShopVista_ECommerce_Data_Pipeline",
      technologies: ["Azure Databricks", "PySpark", "Delta Lake", "Power BI", "Medallion Architecture", "ADLS Gen2"],
    },
    {
      title: "Credit Card Customer Analysis",
      description:
        "Analysed spending habits of 4,000 customers across demographics, cities, and occupations to craft tailor-made credit card solutions. Built a Power BI dashboard surfacing segment-level insights — credit cards led payment types, bills and groceries topped spend categories, with salaried IT employees and Mumbai customers driving the highest volumes.",
      github: "https://github.com/SaiKrishna-Sajjanam/Credit_Card_Customer_Analysis",
      technologies: ["Power BI", "SQL", "DAX", "Customer Segmentation", "Data Modeling"],
    },
    {
      title: "AQI Index Analysis",
      description:
        "Air Quality Index analysis tracking day-wise AQI trends and pollution patterns across regions. Built a Power BI dashboard with custom background and branding to surface AQI categories, seasonal patterns, and actionable environmental insights.",
      github: "https://github.com/SaiKrishna-Sajjanam/AQI_Index_Analysis",
      technologies: ["Power BI", "Excel", "Data Visualisation", "Environmental Analytics"],
    },
    {
      title: "Telecom Data Analysis",
      description:
        "Telecom market share and revenue analytics using Power BI with advanced DAX measures. Tracks plan performance, city-level metrics, market share trends, and customer revenue patterns across dimensions and fact tables including telecom KPIs.",
      github: "https://github.com/SaiKrishna-Sajjanam/Telecom_Data_Analysis",
      technologies: ["Power BI", "DAX", "SQL", "Star Schema", "Market Analytics"],
    },
    {
      title: "Amazon Sales Data Analysis",
      description:
        "Analysed 1,000+ Amazon sales records across three cities using SQL. Identified top-performing product lines, peak revenue months, VAT impact by city, and branch-level performance. Delivered insights on customer type, gender distribution, and product-line quality ratings to sharpen sales strategy and inventory decisions.",
      github: "https://github.com/SaiKrishna-Sajjanam/sales_project---SQL",
      technologies: ["SQL", "MySQL", "EDA", "Business Analytics"],
    },
    {
      title: "Metaverse Transaction Anomaly Detection",
      description:
        "Investigated fraud patterns across 78K+ financial transactions using SMOTE for class imbalance and PCA for dimensionality reduction. Cross-validated Logistic Regression, Random Forest, KNN, and Naive Bayes models — Naive Bayes selected as final model achieving ~94.6% F1-score on unseen data, delivering a production-ready fraud detection pipeline.",
      github: "https://github.com/SaiKrishna-Sajjanam/metaverse_transaction_anomaly_detection_ML_project",
      technologies: ["Python", "Machine Learning", "SMOTE", "PCA", "Scikit-learn"],
    },
    {
      title: "ProdCo Sales Analysis",
      description:
        "Comprehensive sales analysis combining SQL queries, Python analytics, and Power BI visualisations. Identified revenue trends, customer segments, and product performance patterns to deliver actionable business intelligence for sales optimisation.",
      github: "https://github.com/SaiKrishna-Sajjanam/prodCo_sales_analysis_project",
      technologies: ["SQL", "Python", "Power BI", "Data Visualisation", "EDA"],
    },
    {
      title: "Vendor Performance Analytics",
      description:
        "Designed a SQL-driven KPI framework analysing delivery, quality, and cost metrics across vendors. Flagged variances exceeding 15% thresholds and surfaced underperforming suppliers previously undetected in existing reporting. Built interactive Power BI and Tableau dashboards enabling self-service reporting.",
      github: "https://github.com/SaiKrishna-Sajjanam/Analysis_performance_vendor_sql_python_powerBI",
      technologies: ["SQL", "Python", "Power BI", "Tableau", "KPI Framework"],
    },
    {
      title: "Six Sigma Yellow Belt – Process Improvement (DMAIC)",
      description:
        "Lean Six Sigma Yellow Belt project applying the DMAIC framework to reduce defects and cycle time. Includes problem definition, data collection, exploratory data analysis, hypothesis testing, and control charts with measurable process improvements.",
      github: "https://github.com/SaiKrishna-Sajjanam/Six_Sigma_project_Yellow_Belt",
      technologies: ["Excel", "Statistics", "DMAIC", "Hypothesis Testing", "Control Charts"],
    },
    {
      title: "AD Works – Sales & Profitability Analytics",
      description:
        "End-to-end BI project using the AdventureWorks dataset. Built SQL models and DAX measures, designed interactive Power BI dashboards for sales performance, product mix, geographic distribution, and profitability trends across business segments.",
      github: "https://github.com/SaiKrishna-Sajjanam/AD_works_project",
      technologies: ["SQL", "Power BI", "DAX", "Data Modeling", "ETL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of data analytics and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className="p-6 gradient-card border-border hover:shadow-xl transition-smooth group animate-fade-in flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-bounce">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-accent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
