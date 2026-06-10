import { Card } from "@/components/ui/card";
import { BarChart2, Database, Cloud, Code2, Cpu, Boxes } from "lucide-react";

const skillCategories = [
  {
    title: "BI & Visualization",
    icon: BarChart2,
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "KPI Scorecards",
      "Self-Service Reporting",
      "Executive Dashboards",
    ],
    color: "text-primary",
  },
  {
    title: "Data Warehousing & Databases",
    icon: Database,
    skills: [
      "SQL (Oracle, SQL Server, PostgreSQL)",
      "Data Modeling",
      "Star Schema",
      "Snowflake Schema",
      "Dimensional Modeling",
      "Metadata Management",
    ],
    color: "text-accent",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "Microsoft Azure (Data Lake, Databricks, ADLS Gen2)",
      "Amazon AWS (S3, Glue, Lambda, Athena, Redshift)",
      "Microsoft Fabric",
    ],
    color: "text-primary",
  },
  {
    title: "Data Engineering",
    icon: Cpu,
    skills: [
      "PySpark",
      "Delta Lake",
      "ETL / ELT Pipelines",
      "Medallion Architecture (Bronze/Silver/Gold)",
    ],
    color: "text-accent",
  },
  {
    title: "Languages & AI",
    icon: Code2,
    skills: [
      "Python (Pandas, NumPy, Scikit-learn, Matplotlib, BeautifulSoup)",
      "R (Basic)",
      "Predictive Analytics",
      "Machine Learning",
      "Statistical Modeling",
    ],
    color: "text-primary",
  },
  {
    title: "DevOps & Collaboration",
    icon: Boxes,
    skills: [
      "JIRA",
      "Confluence",
      "Azure DevOps",
      "Git",
      "Agile / Scrum",
      "Six Sigma Yellow Belt",
      "ServiceNow",
    ],
    color: "text-accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills &amp; Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data-driven solutions and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="p-8 gradient-card border-border hover:shadow-lg transition-smooth group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 ${category.color} group-hover:scale-110 transition-bounce`}
                >
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
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

export default Skills;
