import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="font-display mx-3">
      <h4 className="mb-8 text-4xl font-bold text-center md:text-left">
        Experience
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-3xl font-bold">
            University of Louisiana at Lafayette, USA
          </h5>
          <h6 className="text-xl font-bold">
            Graduate Assistant at University Computing Support Service
          </h6>
          <p className="text-l">September 2023 – Present</p>
        </div>
        <div className="flex flex-col col-span-4">
          <ul className="list-disc px-2 text-justify">
            <li>
              Worked on migrating services from virtual machines to Docker
              containers hosted on AWS ECS.
            </li>
            <li>
              Integrated AWS Elastic File System (EFS) for file storage,
              ensuring seamless scalability.
            </li>
            <li>
              Implemented file syncing from EFS to AWS S3 and added lifecycle
              policies to move files to S3 Glacier for long- term storage.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 my-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-3xl font-bold">
            Valuebound Consulting Services Pvt. Ltd, India
          </h5>
          <h6 className="text-xl font-bold">SDE1 </h6>
          <p className="text-l">September 2021 – July 2023</p>
        </div>
        <div className="flex flex-col col-span-4">
          <ul className="list-disc px-2 text-justify">
            <li>
              Implemented the PMO section of the company ERP, improving
              management's reporting and project tracking for over 200 employees
              using React, NodeJS, ExpressJS, Material UI, and MongoDB.
            </li>
            <li>
              Led Dialer’s Integration with the MindTickle Platform. Utilized
              OAuth 2.0, webhooks, and cron jobs to process call data, managing
              thousands of recordings in AWS S3 and enabling efficient analytics
              with SQL databases using Python, AWS, and PostgreSQL.
            </li>
          </ul>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Experience;
