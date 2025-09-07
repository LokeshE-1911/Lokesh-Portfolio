import React from "react";

const Projects = () => {
  return (
    <section className=" mx-5 font-display" id="projects">
      <div className="container px-0 my-3">
        <div className="flex flex-wrap xl:mx-4 mx-0 sm:mx-1 justify-evenly">
          <div className="w-full  md:w-1/2 xl:w-1/3 md:px-4 py-2">
            <div className="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://blog.apify.com/content/images/2023/09/what-is-web-scraping-websites-web-scraper-structured-data-1.png"
                alt="image"
                className="w-full h-80"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Automated Web Scraping and Data Integration using AWS
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a Python script using the BeautifulSoup library to
                    automate web scraping for client websites, retrieving and
                    processing updated data daily.
                  </li>
                  <li>
                    Automated script execution using AWS Lambda, and cron job
                    triggered by AWS CloudWatch.
                  </li>
                  <li>
                    Managed dependencies via AWS S3 for seamless Lambda
                    execution, while integrating Google Sheets API to
                    automatically update and streamline the reporting of
                    extracted data.
                  </li>
                </ul>

                <a
                  href="https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 md:px-4 py-2">
            <div className="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://www.zdnet.com/a/img/resize/02ce32fd41dbf78e0ad4ea0070d02cd5b30d42c1/2024/02/07/5374e91a-e8ae-4337-84ac-b9eb9c977453/screenshot-2024-02-07-at-5-08-13pm.png?auto=webp&width=1280"
                alt="image"
                className="w-full h-80"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/video_streaming"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Chat with PDF using Google Gemini AI and LangChain
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a web application to upload PDFs and generate
                    detailed answers to user questions based on the document
                    content.
                  </li>
                  <li>
                    Utilized Google Gemini AI for embedding and
                    question-answering capabilities with LangChain handling the
                    conversational flow.
                  </li>
                  <li>
                    Implemented text extraction from PDFs using PyPDF2 and split
                    large text into chunks with LangChain's
                    RecursiveCharacterTextSplitter.
                  </li>
                  <li>
                    Built a local FAISS vector store to perform similarity
                    searches on the document text for accurate question
                    matching.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/genAI_Gemini"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 md:px-4 py-2">
            <div className="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNqxT6YhSr_VfKD_p8R-126I6WDe4CkjngA&s"
                alt="image"
                className="w-full h-80"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/video_streaming"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    React-Based Video Streaming Application
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Developed a video streaming application using React for
                    seamless content viewing.
                  </li>
                  <li>
                    Implemented a responsive user interface with smooth video
                    playback and intuitive navigation.
                  </li>
                  <li>
                    Integrated video player features such as play/pause, seek,
                    volume control, and fullscreen mode.
                  </li>
                  <li>
                    Optimized the app for performance with lazy loading and
                    efficient state management using React hooks.
                  </li>
                  <li>
                    Enhanced user experience with customizable video quality
                    options and support for various file formats.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/video_streaming"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 md:px-4 py-2">
            <div className="bg-white h-full flex flex-col rounded-lg mb-10 max-h-3/5 lg:max-h-3/5 overflow-hidden">
              <img
                src="https://www.labellerr.com/blog/content/images/size/w2000/2023/11/Driver-drowsiness-main.webp"
                alt="image"
                className="w-full h-80"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center overflow-y-auto">
                <h3>
                  <a
                    href="https://github.com/Abhiram-23/drowsiness_detection"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Drowsiness Detection using OpenCV
                  </a>
                </h3>
                <ul className="text-base text-body-color leading-relaxed mb-7 text-justify list-disc ">
                  <li>
                    Built a real-time drowsiness detection system using OpenCV
                    and Python.
                  </li>
                  <li>
                    Used facial landmarks to track eye movements and detect
                    drowsiness via Eye Aspect Ratio (EAR).
                  </li>
                  <li>
                    Integrated a threshold-based alert system that triggers
                    audio warnings for prolonged eye closure.
                  </li>
                  <li>
                    Optimized for low-latency detection and tested under varied
                    lighting and angles.
                  </li>
                  <li>
                    Designed for potential scalability in vehicle or safety
                    monitoring systems.
                  </li>
                </ul>
                <a
                  href="https://github.com/Abhiram-23/drowsiness_detection"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default Projects;
