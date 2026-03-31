function showContact(type) {
  const contactBox = document.getElementById("contact-info");

  if (type === "email") {
    window.open("mailto:srilekhagouda@gmail.com", "_blank");
    contactBox.classList.remove("show");
  } else if (type === "github") {
    window.open("https://github.com/srilekhagouda", "_blank");
    contactBox.classList.remove("show");
  } else if (type === "linkedin") {
    window.open("https://linkedin.com/in/srilekhagouda", "_blank");
    contactBox.classList.remove("show");
  } else if (type === "phone") {
    contactBox.innerHTML = `
            📱 +91 7381442946
            <p style="margin-top:15px; color:#94a3b8;">
            I am open to work opportunities. Feel free to contact me.
            </p>
        `;
    contactBox.classList.add("show");
  }
}

const text = ["Software Engineer", "Embedded Developer", "Django Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}
type();

function openModal(project) {
  const data = {
    faceclone: {
      title: "FaceClone – Social Media Web App",
      desc: "Social media web application built using Django with authentication, posts, likes and comments.",
      tech: ["Python", "Django", "HTML", "CSS"],
      features: [
        "User Login",
        "Create Post",
        "Like & Comment",
        "Profile System",
      ],
      github: "https://github.com/srilekhagouda/MyFaceClone.git",
    },
    blindstick: {
      title: "Smart Blind Stick",
      desc: "Embedded system for obstacle detection using sensors.",
      tech: ["Embedded C", "Ultrasonic", "IR Sensor"],
      features: ["Obstacle Detection", "Audio Alert", "Vibration Alert"],
      github: "https://github.com/",
    },
    movieticket: {
      title: "Movie Ticket System",
      desc: "Console-based movie ticket booking system.",
      tech: ["C", "File Handling"],
      features: ["Seat Booking", "Cancellation", "File Storage"],
      github:
        "https://github.com/srilekhagouda/Movie-Ticket-Reservation-System.git",
    },
    reportcard: {
      title: "Student Report Card System",
      desc: "Student record management system using C++.",
      tech: ["C++", "OOP"],
      features: ["Add Student", "Update Marks", "Generate Report"],
      github: "https://github.com/",
    },
  };

  document.getElementById("modal-title").innerText = data[project].title;
  document.getElementById("modal-desc").innerText = data[project].desc;

  let techHTML = "";
  data[project].tech.forEach((t) => (techHTML += `<span>${t}</span>`));
  document.getElementById("modal-tech").innerHTML = techHTML;

  let featureHTML = "";
  data[project].features.forEach((f) => (featureHTML += `<li>${f}</li>`));
  document.getElementById("modal-features").innerHTML = featureHTML;

  document.getElementById("modal-github").href = data[project].github;
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
