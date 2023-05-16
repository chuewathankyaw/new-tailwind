import { useState, useRef, useEffect } from "react";
import { ArrowDownIcon } from '@chakra-ui/icons'
import {ArrowUpIcon} from '@chakra-ui/icons'

export default function Careers() {
     const [openDropdowns, setOpenDropdowns] = useState([]);

     const toggleDropdown = (index) => {
       setOpenDropdowns((prevOpenDropdowns) => {
         const updatedOpenDropdowns = [...prevOpenDropdowns];
         updatedOpenDropdowns[index] = !updatedOpenDropdowns[index];
         return updatedOpenDropdowns;
       });
     };
    const [isVisible, setIsVisible] = useState(false);
    const textContainerRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const textContainer = textContainerRef.current;
        if (textContainer) { // Check if the ref has a value
          const textContainerTop = textContainer.offsetTop;
          const textContainerHeight = textContainer.offsetHeight;
          const windowScrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          const windowHeight = window.innerHeight;
    
          if (
            windowScrollTop + windowHeight >= textContainerTop &&
            windowScrollTop <= textContainerTop + textContainerHeight &&
            !isVisible
          ) {
            setIsVisible(true);
          }
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isVisible]);

    return (
      <>
        <div className="inter px-4 ss:px-8 lg:px-16 font-semibold mb-40">
          <div className="mt-3">
            <div
              className={`item ${
                isVisible ? "fade-and-scroll-right-to-left" : ""
              }`}
              ref={textContainerRef}
            >
              <h1 className="text-3xl font-semibold ss:text-4xl lg:text-9xl">
                Be part of <br></br>our success story
              </h1>
            </div>
          </div>
          <div className="border-y-2 border-black py-2 mt-8">
            <div className="flex justify-between  ">
              <h1 className="summary">Senior Q.A Taster</h1>
              <div className="flex">
                <h1>1 post</h1>
                {openDropdowns[0] ? (
                  <ArrowUpIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(0)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(0)}
                  />
                )}
              </div>
            </div>

            <div className={`details ${openDropdowns[0] ? "open" : "closed"}`}>
              <div className="mt-4">
                <h1 className="text-sm">Job Description:</h1>
                <h1 className="text-sm">
                  We are seeking a highly motivated and experienced .NET
                  Developer to join our team. The ideal candidate will have a
                  strong background in developing web applications using .NET
                  and related technologies.
                </h1>
              </div>
              <div>
                <h1 className="text-sm">Responsibilities</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Develop and maintain web applications using C#, .NET, and
                    related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Participate in the full software development life cycle,
                    from requirements gathering and design to implementation and
                    testing
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Collaborate with cross-functional teams, including business
                    analysts, project managers, and other developers, to deliver
                    high-quality solutions
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Write clean, well-documented, and reusable code
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Perform code reviews and provide feedback to other
                    developers
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm">Requirements</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Bachelor's degree in Computer Science or related field
                  </li>
                  <li className="list-disc text-sm ml-4">
                    3+ years of experience in developing web applications using
                    .NET and related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong experience with C#, ASP.NET, and MVC
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Experience with JavaScript frameworks such as Angular,
                    React, or Vue
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Familiarity with relational databases, such as SQL Server or
                    Oracle
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong analytical and problem-solving skills
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Excellent verbal and written communication skills
                  </li>
                </ul>
              </div>
              <div className="text-center	my-4">
                <button className="	border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white">
                  Upload your cv{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="border-y-2 border-black py-2 mt-8">
            <div className="flex justify-between  ">
              <h1 className="summary">frontend Developer</h1>
              <div className="flex">
                <h1>1 post</h1>
                {openDropdowns[1] ? (
                  <ArrowUpIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(1)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(1)}
                  />
                )}
              </div>
            </div>

            <div className={`details ${openDropdowns[1] ? "open" : "closed"}`}>
              <div className="mt-4">
                <h1 className="text-sm">Job Description:</h1>
                <h1 className="text-sm">
                  We are seeking a highly motivated and experienced .NET
                  Developer to join our team. The ideal candidate will have a
                  strong background in developing web applications using .NET
                  and related technologies.
                </h1>
              </div>
              <div>
                <h1 className="text-sm">Responsibilities</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Develop and maintain web applications using C#, .NET, and
                    related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Participate in the full software development life cycle,
                    from requirements gathering and design to implementation and
                    testing
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Collaborate with cross-functional teams, including business
                    analysts, project managers, and other developers, to deliver
                    high-quality solutions
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Write clean, well-documented, and reusable code
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Perform code reviews and provide feedback to other
                    developers
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm">Requirements</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Bachelor's degree in Computer Science or related field
                  </li>
                  <li className="list-disc text-sm ml-4">
                    3+ years of experience in developing web applications using
                    .NET and related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong experience with C#, ASP.NET, and MVC
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Experience with JavaScript frameworks such as Angular,
                    React, or Vue
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Familiarity with relational databases, such as SQL Server or
                    Oracle
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong analytical and problem-solving skills
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Excellent verbal and written communication skills
                  </li>
                </ul>
              </div>
              <div className="text-center	my-4">
                <button className="	border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white">
                  Upload your cv{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="border-y-2 border-black py-2 mt-8">
            <div className="flex justify-between  ">
              <h1 className="summary">Senior Q.A Taster</h1>
              <div className="flex">
                <h1>1 post</h1>
                {openDropdowns[2] ? (
                  <ArrowUpIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(2)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="mt-1"
                    onClick={() => toggleDropdown(2)}
                  />
                )}
              </div>
            </div>

            <div className={`details ${openDropdowns[2] ? "open" : "closed"}`}>
              <div className="mt-4">
                <h1 className="text-sm">Job Description:</h1>
                <h1 className="text-sm">
                  We are seeking a highly motivated and experienced .NET
                  Developer to join our team. The ideal candidate will have a
                  strong background in developing web applications using .NET
                  and related technologies.
                </h1>
              </div>
              <div>
                <h1 className="text-sm">Responsibilities</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Develop and maintain web applications using C#, .NET, and
                    related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Participate in the full software development life cycle,
                    from requirements gathering and design to implementation and
                    testing
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Collaborate with cross-functional teams, including business
                    analysts, project managers, and other developers, to deliver
                    high-quality solutions
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Write clean, well-documented, and reusable code
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Perform code reviews and provide feedback to other
                    developers
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm">Requirements</h1>
                <ul>
                  <li className="list-disc text-sm ml-4">
                    Bachelor's degree in Computer Science or related field
                  </li>
                  <li className="list-disc text-sm ml-4">
                    3+ years of experience in developing web applications using
                    .NET and related technologies
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong experience with C#, ASP.NET, and MVC
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Experience with JavaScript frameworks such as Angular,
                    React, or Vue
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Familiarity with relational databases, such as SQL Server or
                    Oracle
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Strong analytical and problem-solving skills
                  </li>
                  <li className="list-disc text-sm ml-4">
                    Excellent verbal and written communication skills
                  </li>
                </ul>
              </div>
              <div className="text-center	my-4">
                <button className="	border-black border-2 px-8 rounded-2xl md:px-20 md:py-1 md:rounded-3xl hover:bg-black hover:text-white">
                  Upload your cv{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}