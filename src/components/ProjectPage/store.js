  const ProjectData = [
    {
      "_id": "61b44f8e2d8a3b7f7c5e89a1",
      "title": "E-commerce Website Development",
      "description": "Developed a fully responsive e-commerce website using React, Node.js, and MongoDB. Features include product catalog, cart system, and secure payment gateway integration.",
      "client_id": "2",
      "freelancer_id": "1",
      "status": "completed",
      "budget": 5000,
      "duration": "3 months",
      "skillsRequired": ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      "createdAt": "2021-06-01T10:00:00Z",
      "updatedAt": "2021-09-01T10:00:00Z"
    },
    {
      "_id": "7581",
      "title": "E-commerce Website Development",
      "description": "Developed a fully responsive e-commerce website using React, Node.js, and MongoDB. Features include product catalog, cart system, and secure payment gateway integration.",
      "client_id": "2",
      "freelancer_id": "1",
      "status": "completed",
      "budget": 5000,
      "duration": "3 months",
      "skillsRequired": ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      "createdAt": "2021-06-01T10:00:00Z",
      "updatedAt": "2021-09-01T10:00:00Z"
    },
    {
      "_id": "61b44f8e2d8a3b7f7c5e89a4",
      "title": "Real-time Chat Application",
      "description": "Created a real-time messaging app with WebSockets, enabling instant communication between users with an intuitive UI built using React.",
      "client_id": "2",
      "freelancer_id": "1",
      "status": "in_progress",
      "budget": 3000,
      "duration": "2 months",
      "skillsRequired": ["React", "WebSockets", "JavaScript", "Node.js"],
      "createdAt": "2021-07-15T14:30:00Z",
      "updatedAt": "2021-07-20T15:00:00Z"
    },
    {
      "_id": "61b44f8e2d8a3b7f7c5e89a7",
      "title": "Portfolio Website Development",
      "description": "Built a personal portfolio website with HTML, CSS, and JavaScript. Showcases projects, skills, and contact form.",
      "client_id": "3",
      "freelancer_id": "3",
      "status": "completed",
      "budget": 1000,
      "duration": "1 month",
      "skillsRequired": ["HTML", "CSS", "JavaScript"],
      "createdAt": "2021-05-10T09:00:00Z",
      "updatedAt": "2021-06-01T09:00:00Z"
    },
    {
      "_id": "61b44f8e2d8a3b7f7c5e89aa",
      "title": "Blog Platform Development",
      "description": "Developed a CMS for a blogging platform using React and MongoDB. Includes features for creating, editing, and deleting posts.",
      "client_id": "3",
      "freelancer_id": "1",
      "status": "open",
      "budget": 2000,
      "duration": "4 months",
      "skillsRequired": ["React", "MongoDB", "Node.js", "JavaScript"],
      "createdAt": "2021-08-01T11:30:00Z",
      "updatedAt": "2021-08-05T12:00:00Z"
    },
    {
      "_id": "61b44f8e2d8a3b7f7c5e89ad",
      "title": "Task Management Tool",
      "description": "Built a task management application with a drag-and-drop interface using React, Redux, and Firebase for real-time data syncing.",
      "client_id": "1",
      "freelancer_id": "3",
      "status": "completed",
      "budget": 3500,
      "duration": "2 months",
      "skillsRequired": ["React", "Redux", "Firebase", "JavaScript"],
      "createdAt": "2021-04-10T10:00:00Z",
      "updatedAt": "2021-06-10T10:00:00Z"
    }
  ];

  const usersData = [
    {
      "id": "1",
      "firstName": "John",
      "lastName": "Doe",
      "profilePhoto": "https://th.bing.com/th/id/OIP.26gJxHxqr366fCVuWb3uOQAAAA?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "totalEarnings": 5000,
      "totalJobs": 10,
      "totalHours": 100,
      "location": {
        "city": "Cairo",
        "country": "Egypt"
      },
      "availability": true,
      "englishProficiency": "Fluent",
      "title": "Web Developer",
      "overview": "Experienced web developer with a passion for building beautiful and functional web applications. With a strong background in front-end and back-end development, I have successfully delivered numerous projects that enhance user experience and drive business growth. I am proficient in a wide range of technologies and always eager to learn and adapt to new challenges.",
      "skills": [
        "JavaScript",
        "React",
        "Node.js",
        "HTML5",
        "CSS3",
        "TypeScript",
        "Redux",
        "Express.js",
        "MongoDB",
        "SQL",
        "Git",
        "Webpack",
        "RESTful APIs",
        "GraphQL",
        "Agile Methodologies",
        "Responsive Design",
        "Test-Driven Development (TDD)",
        "Continuous Integration/Continuous Deployment (CI/CD)"
      ],
      "portfolio": [
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 1",
          "description": "Developed a responsive e-commerce website using React and Node.js, featuring a user-friendly interface and secure payment gateway integration."
        },
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 2",
          "description": "Created a real-time chat application with WebSocket and Node.js, enabling seamless communication between users."
        },
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 3",
          "description": "Built a content management system (CMS) with React and MongoDB, allowing easy management of website content for non-technical users."
        }
      ],
      "company": [
        {
          "jobTitle": "Frontend Developer",
          "companyName": "Tech Corp",
          "stillWork": true
        },
        {
          "jobTitle": "Backend Developer",
          "companyName": "Web Solutions",
          "stillWork": false
        },
        {
          "jobTitle": "Full Stack Developer",
          "companyName": "Creative Agency",
          "stillWork": false
        }
      ],
      "certifications": [
        {
          "title": "Certified JavaScript Developer",
          "institution": "Code Academy",
          "date": "2022-03-15"
        },
        {
          "title": "React Mastery Certification",
          "institution": "Udemy",
          "date": "2021-07-10"
        }
      ],
      "socialMedia": [
        {
          "platform": "LinkedIn",
          "link": "https://www.linkedin.com/in/johndoe"
        },
        {
          "platform": "GitHub",
          "link": "https://github.com/johndoe"
        },
        {
          "platform": "Twitter",
          "link": "https://twitter.com/johndoe"
        }
      ]
    },
    {
      "id": "2",
      "firstName": "Jane",
      "lastName": "Smith",
      "profilePhoto": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "totalEarnings": 7500,
      "totalJobs": 15,
      "totalHours": 120,
      "location": {
        "city": "London",
        "country": "UK"
      },
      "availability": true,
      "englishProficiency": "Fluent",
      "title": "Software Engineer",
      "overview": "Passionate software engineer with a focus on backend technologies and data-driven solutions. I thrive in collaborative environments and enjoy solving complex problems using Python and JavaScript.",
      "skills": [
        "Python",
        "Django",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "Git",
        "AWS",
        "Docker",
        "RESTful APIs",
        "Machine Learning",
        "Data Analysis"
      ],
      "portfolio": [
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 1",
          "description": "Built a scalable web application using Python and Django, integrating real-time data analytics."
        },
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 2",
          "description": "Developed a machine learning-based recommendation engine for e-commerce platforms."
        }
      ],
      "company": [
        {
          "jobTitle": "Software Developer",
          "companyName": "Tech Solutions",
          "stillWork": true
        }
      ],
      "certifications": [
        {
          "title": "Certified Python Developer",
          "institution": "Python Institute",
          "date": "2021-06-10"
        }
      ],
      "socialMedia": [
        {
          "platform": "LinkedIn",
          "link": "https://www.linkedin.com/in/janesmith"
        },
        {
          "platform": "GitHub",
          "link": "https://github.com/janesmith"
        }
      ]
    },
    {
      "id": "3",
      "firstName": "Mark",
      "lastName": "Taylor",
      "profilePhoto": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "totalEarnings": 3000,
      "totalJobs": 7,
      "totalHours": 70,
      "location": {
        "city": "New York",
        "country": "USA"
      },
      "availability": false,
      "englishProficiency": "Intermediate",
      "title": "Mobile Developer",
      "overview": "Mobile developer with experience in building native applications for iOS and Android using React Native and Swift. Enthusiastic about delivering great user experiences.",
      "skills": [
        "React Native",
        "Swift",
        "Objective-C",
        "Firebase",
        "JavaScript",
        "Android Development"
      ],
      "portfolio": [
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 1",
          "description": "Developed a cross-platform mobile app for a local business using React Native."
        },
        {
          "image": "https://th.bing.com/th/id/OIP.S3EfdgIgDOOQI2Rvde0dNwHaD1?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          "imagetitle": "Project 2",
          "description": "Created a weather app for iOS using Swift, integrating live weather data."
        }
      ],
      "company": [
        {
          "jobTitle": "iOS Developer",
          "companyName": "Mobile Solutions",
          "stillWork": true
        }
      ],
      "certifications": [
        {
          "title": "Certified iOS Developer",
          "institution": "Apple",
          "date": "2022-01-20"
        }
      ],
      "socialMedia": [
        {
          "platform": "LinkedIn",
          "link": "https://www.linkedin.com/in/marktaylor"
        },
        {
          "platform": "GitHub",
          "link": "https://github.com/marktaylor"
        }
      ]
    }
  ];
  
  const proposals = [
    {
        proposalId: "p1",
        projectId: "61b44f8e2d8a3b7f7c5e89a1",
        freelancerId: "1",
        proposalText: "I have extensive experience in similar projects and can deliver quality work on time.",
        budget: 500,
        duration: 15, // in days
        status: "pending", // pending, accepted, or rejected
        submittedAt: "2025-01-22T10:00:00Z",
    },
    {
        proposalId: "p2",
        projectId: "61b44f8e2d8a3b7f7c5e89a4",
        freelancerId: "1",
        proposalText: "I am confident in my ability to complete this project efficiently with excellent results.",
        budget: 750,
        duration: 20, // in days
        status: "pending",
        submittedAt: "2025-01-21T14:30:00Z",
    },
    {
        proposalId: "p3",
        projectId: "61b44f8e2d8a3b7f7c5e89a7",
        freelancerId: "1",
        proposalText: "I can bring creative and innovative solutions to this project and ensure timely delivery.",
        budget: 650,
        duration: 18, // in days
        status: "pending",
        submittedAt: "2025-01-20T09:15:00Z",
    },
    {
        proposalId: "p4",
        projectId: "proj3",
        freelancerId: "3",
        proposalText: "I am passionate about this domain and have a proven track record of successful projects.",
        budget: 450,
        duration: 12, // in days
        status: "accepted",
        submittedAt: "2025-01-18T12:00:00Z",
    },
    {
        proposalId: "p5",
        projectId: "proj4",
        freelancerId: "3",
        proposalText: "I am detail-oriented and always strive to exceed client expectations.",
        budget: 800,
        duration: 25, // in days
        status: "rejected",
        submittedAt: "2025-01-17T16:45:00Z",
    },
];


const messages = [
  {
    _id: 1,
    sender_id: 1,
    receiver_id: 2,
    messageText: 'Hello, how are you?',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 2,
    sender_id: 2,
    receiver_id: 1,
    messageText: 'I am good, thanks! How about you?',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 3,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Are you available for the project?',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 4,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'Yes, I am interested.',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 5,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Can we schedule a meeting?',
    project_id: '61b44f8e2d8a3b7f7c5e89a7',
    createdAt: new Date(),
  },
  {
    _id: 6,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'Yes, I am available tomorrow.',
    project_id: '61b44f8e2d8a3b7f7c5e89a7',
    createdAt: new Date(),
  },
  {
    _id: 7,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Please review the proposal document.',
    project_id: '61b44f8e2d8a3b7f7c5e89aa',
    createdAt: new Date(),
  },
  {
    _id: 8,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'I will review it by end of the day.',
    project_id: '61b44f8e2d8a3b7f7c5e89aa',
    createdAt: new Date(),
  },
  {
    _id: 9,
    sender_id: 1,
    receiver_id: 2,
    messageText: 'Any updates on the project timeline?',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 10,
    sender_id: 2,
    receiver_id: 1,
    messageText: 'We are on track to finish by the deadline.',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 11,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Do you need more information?',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 12,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'Yes, please share the technical details.',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 13,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Have you started working on the assigned task?',
    project_id: '61b44f8e2d8a3b7f7c5e89a7',
    createdAt: new Date(),
  },
  {
    _id: 14,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'Yes, I have already made good progress.',
    project_id: '61b44f8e2d8a3b7f7c5e89a7',
    createdAt: new Date(),
  },
  {
    _id: 15,
    sender_id: 1,
    receiver_id: 2,
    messageText: 'Let’s finalize the budget tomorrow.',
    project_id: '61b44f8e2d8a3b7f7c5e89aa',
    createdAt: new Date(),
  },
  {
    _id: 16,
    sender_id: 2,
    receiver_id: 1,
    messageText: 'Sure, I will prepare the numbers by then.',
    project_id: '61b44f8e2d8a3b7f7c5e89aa',
    createdAt: new Date(),
  },
  {
    _id: 17,
    sender_id: 1,
    receiver_id: 2,
    messageText: 'Please update the task completion status.',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 18,
    sender_id: 2,
    receiver_id: 1,
    messageText: '50% of the tasks are completed so far.',
    project_id: '61b44f8e2d8a3b7f7c5e89a1',
    createdAt: new Date(),
  },
  {
    _id: 19,
    sender_id: 1,
    receiver_id: 3,
    messageText: 'Do you have the designs ready?',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 20,
    sender_id: 3,
    receiver_id: 1,
    messageText: 'Yes, I will send them over shortly.',
    project_id: '61b44f8e2d8a3b7f7c5e89a4',
    createdAt: new Date(),
  },
  {
    _id: 20,
    sender_id: 1,
    receiver_id: 2,
    messageText: 'kya bhai bhool gye.',
    project_id: '7581',
    createdAt: new Date(),
  },
];


  

export {ProjectData , usersData , proposals , messages};