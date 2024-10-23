import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const WorkHistoryPage = () => {
  const workHistory = [
    {
      company: "VIRBAC NZ",
      location: "Hamilton, Waikato",
      positions: [
        {
          title: "Production Technician",
          period: "May 2024 – Current",
          duties: [
            "Production Technician encompasses manufacturing, filling, and packing sterile pharmaceutical products in compliance with Standard Operating Procedures (SOPs) and Batch Manufacturing Records (BMRs). Key responsibilities include operating manufacturing equipment according to Good Manufacturing Practice (GMP) standards, performing quality control checks, and conducting environmental monitoring. The position requires adherence to strict aseptic work practices and involves maintaining work areas to GMP standards, including sterilization, sanitation, and clean-in-place operations. Equipment maintenance oversight includes monitoring calibration status, reporting defects, and coordinating material requirements with warehouse staff. Documentation responsibilities include completing logs promptly after each production step, noting deviations from protocols, reviewing and updating SOPs and BMRs, and assisting with investigations into deviations through corrective and preventative actions."
          ]
        },
        {
          title: "Industrial Operations Administrator",
          period: "December 2023 – May 2024",
          duties: [
            "Primary role was handling the scheduling and management of site equipment & machinery maintenance. Secondary role was leading workplace Health & Safety actions & meetings.",
            "The role involved administration of the Computerized Maintenance Management System (CMMS), maintaining comprehensive equipment databases, managing calibration schedules, and coordinating with staff, contractors & external services to ensure timely maintenance activities. Core duties included monitoring health and safety corrective actions, presenting monthly H&S meetings, implementing planned maintenance routines, and facilitating communication between operations staff and contractors for equipment repair. Tasks encompassed developing and maintaining documentation systems for calibration certificates, specification sheets, and maintenance procedures, while also establishing a spare parts inventory system for production equipment. Additional responsibilities included authoring and revising standard operating procedures, and generating reports from the CMMS using Excel & Power BI. The position required strong organizational skills to manage multiple  and ensure maintenance activities had minimal impact on production schedules.",
            ]
        },
        {
          title: "Packing Department Labourer",
          period: "July 2023 – November 2023",
          duties: ["First full time employment immediately following completion of studies, role is in final stage of production process, packaging and quality checking of goods as final checkpoint before beginning customer distribution."]
        }
      ]
    },
    
  ];

  const skills = [
    "Bachelor of Applied Information Technology (Software Engineering)",
    "NZ Diploma in Information Technology Technical Support",
    "Experience in: Typescript, React, C#, Python, Java, HTML, JS & CSS",
    "Experienced cleaning & organising data using Excel and analysing with Power BI",
    "Proficient in Adobe Illustrator, Photoshop & Microsoft Office applications",
    "Understand deadlines with the ability to work unsupervised in high pressure situations",
    "Team player mentality with a great sense of humour that helps create a productive and positive work atmosphere",
    "Caring and empathetic nature that provides a genuine, high level of customer care"
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Work History</h1>

      {/* Skills Section */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Key Competencies</Card.Title>
          <ul className="list-unstyled">
            {skills.map((skill, index) => (
              <li key={index} className="mb-2">• {skill}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      {/* Work history */}
      {workHistory.map((company, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Row>
              <Col>
                <h2 className="h4">{company.company}</h2>
                <p className="text-muted">{company.location}</p>
              </Col>
            </Row>
            
            {company.positions.map((position, posIndex) => (
              <div key={posIndex} className="mb-4">
                <h3 className="h5">{position.title}</h3>
                <p className="text-muted">{position.period}</p>
                {position.duties.map((duty, dutyIndex) => (
                    <p key={dutyIndex}>{duty}</p>
                ))}
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default WorkHistoryPage;