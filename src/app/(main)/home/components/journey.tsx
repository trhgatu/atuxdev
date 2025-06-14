import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const journeyData = [
  {
    title: "Collaborator at CyberSkill",
    period: "2024 - Present",
    type: "work",
    description: "Working on cutting-edge web applications and expanding my professional network.",
    highlights: [
      "Collaborate with experienced developers on real-world projects",
      "Implement modern frontend frameworks and libraries",
      "Participate in code reviews and technical discussions"
    ]
  },
  {
    title: "Internship at CyberSkill",
    period: "Jan 2024 - May 2024",
    type: "work",
    description: "Completed an intensive internship program focused on web development and software engineering practices.",
    highlights: [
      "Contributed to e-commerce platform development",
      "Worked with React, Node.js, MongoDB, Docker",
      "Built internal tools and utilities"
    ]
  },
  {
    title: "Ho Chi Minh University of Industry and Trade",
    period: "Sep 2021 - Jun 2023",
    type: "education",
    description: "Studied Information Technology with a focus on web development and software engineering.",
    highlights: [
      "Web Development, Database Systems, Algorithms",
      "Coding competitions participation",
      "Active member of Student tech club"
    ]
  }
];

export const Journey = () => {
  return (
    <section className="px-6 py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 pointer-events-none" />

      <div className="flex max-w-5xl flex-col gap-10 mx-auto">
        <div className="w-full">
          <h2 className="text-4xl md:text-6xl font-bold">My Journey.</h2>
          <div className="h-2 bg-gradient-to-r from-red-500 to-red-600 w-24 md:w-40 mt-3 rounded-r-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
            My professional path and educational background that shaped who I am today.
          </p>
        </div>

        <div className="space-y-8">
          {journeyData.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center">
                    {item.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-red-600" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.period}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>

                  <ul className="space-y-1">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};