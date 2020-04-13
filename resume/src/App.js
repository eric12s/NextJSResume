import React from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

function App(){
  
  const main = {
    name: "Eric Sabag", 
    occupation:"Computer Science BSc student",
    description:"Have knowledge and experience in Java, C++, and Python with a high level of self-learning skills. \n Looking for a student position",
    image:"profilepic.jpeg",
    bio:"I'm a Computer Science student specializating in Bio-informatics in the 2nd year, with a passion for coding. I'm a self-learner looking for my first development job. As a student, I divide my time between University tasks and self-learning projects.",
    contactmessage:"Have a job for me? Want to invite me to an interview? You can give me a shout by email or by using the contact form below.",
    email: "ericsabag@gmail.com",
    phone: "050-324-4471",
    city:"Beer Sheva",
    website: " https://eric-sabag-resume.herokuapp.com/",
    resumedownload:"http://download1653.mediafire.com/p2w9144sbbrg/u6bjbipuddnskl5/Eric_Sabag.pdf",
    social:[
      {
        name:"facebook",
        url:"http://www.facebook.com/ericsabag1",
        className:"fa fa-facebook"
      },
      {
        name:"linkedin",
        url:"https://www.linkedin.com/in/eric-sabag-1847331a0/",
        className:"fa fa-linkedin"
      },
      {
        name:"github",
        url:"https://github.com/eric12s",
        className:"fa fa-github"
      },
    ],
  }

  const resume = {
    skillmessage:"Here you can see some of the skills I feel the most comfortable talking about",
    education:[
      {
        school:"Ben-Gurion University",
        degree:"BSc in Computer Science",
        graduated:"March 2022",
        date: "01/03/2022 00:00:00",
        description:[
          "BSc degree in Computer Science on Bioinformatics specialization in the second year.",
          "\xa0\xa0\xa0\xa0• Completion of \"Systems Programming\" course with a grade of 83 and completion of \xa0\xa0\xa0\xa0project in server-side building in Java and client-side in C ++ with a grade of 100.",
          "\xa0\xa0\xa0\xa0• Completion of \"Computer Science Introduction\" course with a grade of 96."
        ]
      },
      {
        school:"AMIT High School",
        degree:"Computer Science and Physics classes",
        graduated:"July 2013",
        date: "01/07/2013 00:00:00",
        description:[
          "High school education.",
          "\xa0\xa0\xa0\xa0•Finished with High school diploma on average 108",
          "\xa0\xa0\xa0\xa0•5 units in \"Computer Science\" and 5 units in \"System Design and Programming\" with grades \xa0\xa0\xa0\xa0of 100 and 96.",
          "\xa0\xa0\xa0\xa0•Participation in the “Accessibility to the Academy” project in the high school in the computer \xa0\xa0\xa0\xa0science track and receiving excellence in the project."
        ]
      }
    ],
    skills:[
      {
        name:"Java",
        level:"High level and most used to"
      },
      {
        name:"C++",
        level:"High level and done some big projects"
      },
      {
        name:"Git",
        level:"Know the basics and use it for all of my projects"
      },
      {
        name:"ReactJs",
        level:"Getting started, becoming more familliar with it fast"
      },
      {
        name:"Python",
        level:"Know the basics, planning to learn more about it"
      },
      {
        name:"CSS",
        level:"Know the basics"
      },
      {
        name:"MongoDB",
        level:"Know enough for small projects"
      }
    ],
    technologies:[
      {
        name:"GitHub",
        image:"github.png",
        description:"I use GitHub for all my project. I use it to share the files wi co-workers, and backup my work. In addition, it let me work on my projects from different computers.",
      },
      {
        name:"Java",
        image:"java.jpg",
        description:"Java is the first language I learned. The first time I learne Java was on high-school. I still use it as my main language and feel most comfortabe with it.",
      },
      {
        name:"MongoDB",
        image:"mongoDB.png",
        description:"MongoDB is the main database I use for my apps. I have used different databases in the past, and better educated with Relation Databases. However, I find mongoDB much more enjoyable and fit my needs.",
      },
      {
        name:"React",
        image:"react.png",
        description:"As a self-learner, I was very interesting in learning web-development and designing my own web pages. As a result, I took react-courses. I still learn about developing my pages and hopefully will reach high level in the field.",
      },
      {
        name:"Node JS",
        image:"nodejs.png",
        description:"NodeJS is the main language I use for server-side development. I am fairly new to this, and hoping to improve my skills as a backend developer too.",
      },
      {
        name:"Heroku",
        image:"heroku.png",
        description:"Heroku is my hosting platform of choice. I appriciate its unpaid services and find it easy to use and works well for my needs.",
      },
    ]
  }

  const Porfolio = {
    projects: [
      {
        title:"Form Builder Application",
        description:"My first full stack web project. You can build your own form, which would be shown on the form's table, and let other users fill it or watch the fulfilled form. I still work on it and use it as my main project to learn new tools.",
        url:"https://github.com/eric12s/FormBuilder"
      },
      {
        title:"Pub-Sub Messaging",
        description:"Implementation of an anonymous messaging system for intelligence agency providing the ability to forward a broadcast message or a specific mission, written in Java and using multithreading",
        url:"https://github.com/eric12s/Assignment02"
      },
      {
        title:"Cafe shop databse",
        description:"My first Python and SQLite project. It holds  the employee, supplier, product, coffee_standand activity tables.",
        url:"https://github.com/eric12s/Assignment4"
      },
      {
        title:"Book Club Application",
        description:"A server and client-side for a book club. Users can signup for reading clubs and borrow books from each other. The server provides STOMP server services and implemented in Java, and the client is implemented in C++.",
        url:"https://github.com/eric12s/Assignment3Full"
      },
      {
        title:"My Resume",
        description:"A React application created to show my resume in more attractive format. You are actually watching it right now!",
        url:"https://github.com/eric12s/MyResume"
      },
    ],}

    const testimonials = [
      {
        text:"Coming soon... They will come!",
        user:"me"
      },
    ]

  return (
    <>
    <div className="App">
        <Header data={main}/>
        <About data={main}/>
        <Resume data={resume}/>
        <Portfolio data={Porfolio}/>
        <Testimonials data={testimonials}/>
        <Contact data={main}/>
        <Footer data={main}/>
    </div>
    </>
  );
}

export default App;
