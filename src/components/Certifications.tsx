import * as React from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

function LogoImage({
  sources = [],
  alt,
  className = "",
}: {
  sources: string[];
  alt: string;
  className?: string;
}) {
  const [i, setI] = React.useState(0);
  const src = sources[Math.min(i, sources.length - 1)];
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (i < sources.length - 1) setI(i + 1);
      }}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
    ],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/SNMXM8DJTRIV",
  },
  {
    title: "Microsoft Power BI Data Analysis",
    issuer: "Microsoft",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
    ],
    link: "https://www.linkedin.com/learning/certificates/607d780191ededdcae325d60f1b00056bbcba5e7fa05ce68ba1f0f3a4f998170",
  },
  {
    title: "HackerRank SQL Certified (Basic, Intermediate & Advanced)",
    issuer: "HackerRank",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg",
    ],
    link: "https://www.hackerrank.com/saikrishna_sajjanam",
  },
  {
    title: "Cloud Computing",
    issuer: "Infosys",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/infosys.svg",
    ],
    link: "https://www.linkedin.com/in/sai-krishna-sajjanam-52118ba3",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg",
    ],
    link: "https://www.credly.com/badges/87485abb-8e22-48ec-8063-ef8e40c3ee3e/public_url",
  },
  {
    title: "Six Sigma Yellow Belt",
    issuer: "Coursera",
    logos: [
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/coursera.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coursera_logo_2020.svg",
    ],
    link: "https://www.coursera.org/account/accomplishments/specialization/YE132ZW8QKCT",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Certifications</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {certifications.map((cert, idx) => (
            <Card
              key={cert.title}
              className="overflow-hidden group cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in w-[280px] min-w-[280px] flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => window.open(cert.link, "_blank")}
            >
              <div className="relative overflow-hidden w-full">
                <div className="h-32 flex items-center justify-center bg-white p-4 w-full">
                  <LogoImage
                    sources={cert.logos}
                    alt={`${cert.issuer} logo`}
                    className={`w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                      cert.issuer === "Coursera" ? "max-w-[150px]" : "max-w-[130px]"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-4 flex-1 flex">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <LogoImage
                      sources={cert.logos}
                      alt={`${cert.issuer} small logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold mb-0.5 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
