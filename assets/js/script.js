// Project data with all the details you provided
const projects = {
	"hybrid-chat": {
		title: "Hybrid-Chat App",
		description:
			"Developed a Community-Based Chat App designed to facilitate one-on-one and group interactions. It features unique public discussion groups with controlled participation, a monetized Q&A system, and real-time communication.",
		keyFeatures: [
			"One-on-One Chat: Private, secure, real-time messaging.",
			"Private Groups: Invitation-only for focused discussions.",
			"Public Groups: Up to ten active participants, with open observation for others.",
			"Question & Answer Feature: Paid questions to admins, offering a revenue stream.",
			"Reactions and Engagement: User reactions to discussions for broader community involvement.",
			"User Notifications: Real-time updates on messages and activities.",
			"Group Management: Tools for creating, managing groups, and setting question fees.",
		],
		challenges: [
			"Real-Time Communication: Ensuring seamless real-time messaging across various chat types.",
			"Monetized Q&A Feature: Integrating a payment system for asking questions, while ensuring fair admin compensation.",
			"Privacy and Security in Private Groups: Maintaining exclusivity and security in private groups.",
			"Efficient Data Management: Managing diverse data types and ensuring efficient storage and retrieval.",
		],
		solutions: [
			"Utilized Socket.io for efficient real-time communication, enabling instant message delivery and updates.",
			"Developed a flexible payment feature allowing group admins to set fees for questions, incentivizing engagement and providing a revenue stream.",
			"Designed private groups to be invitation-only with strict access controls, ensuring only invited users could join and participate.",
			"Employed MongoDB for scalable and flexible data management, handling chat histories, group interactions, and notifications efficiently.",
		],
		technologies: [
			"React Native",
			"Node.js",
			"Express",
			"MongoDB",
			"Socket.io",
			"Stripe",
		],
		screenshots: [
			"./assets/images/hibrid-1.jpeg",
			"./assets/images/hibrid-2.jpeg",
			"./assets/images/hibrid-3.jpeg",
		], // Add screenshot URLs later
		links: [
			// { url: "#", text: "Live Demo", icon: "fas fa-external-link-alt" },
			// { url: "#", text: "GitHub", icon: "fab fa-github" }
		],
	},
	"event-management": {
		title: "Event Management App",
		description:
			"Developed a comprehensive event management application designed to simplify event discovery, participation, and organization. The app serves both attendees and organizers with an intuitive, user-friendly interface to improve engagement and streamline event coordination.",
		keyFeatures: [
			"Featured Events: Home-screen highlights top-rated and popular events.",
			"Upcoming Events: Displays a curated list of upcoming events with essential details.",
			"Event Details: Detailed pages offer comprehensive event information.",
			"Search Functionality: A search bar enables users to find events by keywords.",
			"User Notifications: The notification system keeps users updated on new events, updates, and reminders.",
		],
		challenges: [
			"Event Discovery and User Engagement: Facilitating easy discovery of events and maintaining user engagement.",
			"Detailed Event Information: Providing comprehensive event details for better user decision-making.",
			"Effective Search Functionality: Allowing users to efficiently find specific events.",
			"User Notifications: Keeping users informed about events and updates.",
			"Visual Design and Usability: Creating a visually appealing and user-friendly interface.",
		],
		solutions: [
			"Implemented a home screen showcasing featured events and a curated list of upcoming events. This approach makes it easy for users to find and join events of interest.",
			"Developed detailed event pages showing ratings, descriptions, and participant lists, with 'Interested' and 'Join' buttons for seamless interaction.",
			"Integrated a search bar that filters events based on user-entered keywords, providing relevant results and detailed information.",
			"Designed a notification system to alert users about new events, updates, and reminders related to events they have joined or shown interest in.",
			"Employed a modern dark theme with high-quality images and icons.",
		],
		technologies: [
			"React Native",
			"Node.js",
			"Express",
			"Firebase",
			"Firebase Cloud Messaging",
		],
		screenshots: [
			"./assets/images/event-1.jpeg",
			"./assets/images/event-2.jpeg",
			"./assets/images/event-3.jpeg",
		],
		links: [
			// { url: "#", text: "App Store", icon: "fab fa-app-store" },
			// { url: "#", text: "Play Store", icon: "fab fa-google-play" }
		],
	},
	"kaocity-trivia": {
		title: "Kaocity Trivia Game",
		description:
			"Developed a new trivia game using React Native to provide an engaging and interactive trivia experience. Players can test their knowledge, challenge friends, and earn rewards. The game features diverse question categories and a sleek, user-friendly interface for seamless gameplay.",
		challenges: [
			"Real-Time Multiplayer Gameplay: Implementing real-time multiplayer functionality for trivia duels and live events.",
			"Reward System Integration: Develop a system to track points and manage the redemption of rewards.",
			"Achievement Tracking and Milestones: Designing a feature to track player achievements and progress across various tasks.",
			"Diverse Question Categories: Ensuring various trivia questions across different categories to keep the game engaging.",
			"Live Event Management: Managing real-time events and ensuring smooth execution with a large number of participants.",
		],
		solutions: [
			"Used React Native with real-time communication libraries to enable smooth, live interactions during duels and events, ensuring an engaging multiplayer experience.",
			"Created a points system reward store where players can redeem points for gift cards and prizes. This system was designed to be secure & user-friendly, ensuring accurate reward distribution.",
			"Implemented an achievement board that displays completed tasks, milestones, and earned badges. This feature was designed to be visually appealing and easy to navigate, motivating players to complete more achievements.",
			"Developed a flexible question database that supports multiple categories. Giving regular updates.",
			"Implemented real-time features using sockets services, allowing for smooth coordination and minimal latency during live events.",
		],
		technologies: [
			"React Native",
			"Node.js",
			"Express",
			"Socket.io",
			"MongoDB",
		],
		screenshots: [
			"./assets/images/kaocity-1.jpeg",
			"./assets/images/kaocity-2.jpeg",
			"./assets/images/kaocity-3.jpeg",
		],
		links: [
			// { url: "#", text: "Live Demo", icon: "fas fa-external-link-alt" },
			{
				url: "https://github.com/faizanzafer/kaosity",
				text: "GitHub",
				icon: "fab fa-github",
			},
		],
	},
	smvd: {
		title: "SMVD – Social Media Video Downloader",
		description:
			"SMVD (Social Media Video Downloader) is a full-stack, cloud-deployed web application that allows users to download videos and images from TikTok, Instagram and Facebook in high quality. The app is fully deployed on Google Cloud Platform (GCP) and runs on a custom domain smvd.org.uk, providing a production-ready, scalable, and secure experience.",
		keyFeatures: [
			"Multi-Platform Support – TikTok, Instagram and Facebook downloaders in one app.",
			"Real-Time Progress Updates – Integrated WebSocket support for instant download progress.",
			"Cloud-Optimized – Hosted on GCP Compute Engine with CI/CD pipeline for automated deployment.",
			"SEO-Friendly – Dynamic meta tags and structured data for search engine optimization.",
			"Responsive & Fast – Tailwind CSS and optimized Next.js rendering for a smooth user experience.",
			"Smart URL Detection – Automatically detects platform type and redirects users to the appropriate downloader.",
		],
		challenges: [
			"Seamless migration from a standalone Node.js + Express backend to Next.js App Router APIs.",
			"Tailwind/PostCSS integration issues resolved with the new Next.js 14 architecture.",
			"Successfully configured reverse proxy and SSL certificates on GCP for a secure custom domain.",
			"Maintained real-time WebSocket connections after deployment in a cloud environment.",
		],
		solutions: [
			"Migrated legacy Express APIs into Next.js API structure under /api.",
			"Resolved Tailwind/PostCSS integration issues with the new Next.js 14 architecture.",
			"Configured reverse proxy and SSL certificates on GCP for a secure custom domain.",
			"Maintained real-time WebSocket connections in a cloud environment.",
		],
		technologies: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"Node.js",
			"Express",
			"WebSocket",
			"GCP",
			"Nginx",
			"PM2",
		],
		screenshots: [
			"./assets/images/smvd-2.png",
			"./assets/images/smvd-3.png",
			"./assets/images/smvd-4.png",
		],
		links: [
			{
				url: "https://smvd.org.uk",
				text: "Visit Website",
				icon: "fas fa-external-link-alt",
			},
			// { url: "#", text: "GitHub", icon: "fab fa-github" }
		],
	},
	matrimonial: {
		title: "MATRIMONIAL - High-Scale Matchmaking Application",
		description:
			"MATRIMONIAL is a large-scale, mobile-first matchmaking platform engineered to facilitate meaningful connections for a vast user base. The application was architected from the ground up to handle massive data sets and high concurrent traffic, ensuring a smooth, responsive, and reliable experience for users during peak usage.",
		keyFeatures: [
			"Scalable Architecture: Designed to handle over 200,000 user profiles with sub-second response times",
			"Advanced Matchmaking Algorithms: Intelligent profile matching based on multiple criteria",
			"High Availability: 99.9%+ uptime during high-traffic events",
			"Mobile-First Design: Optimized for mobile devices with native-like experience",
			"Real-Time Notifications: Instant updates for matches and messages",
		],
		responsibilities: [
			"Full-Stack Development: Spearheaded the end-to-end design and development of the application",
			"System Architecture & Scaling: Designed a robust and scalable backend system",
			"Algorithm & Data Processing: Developed and optimized the core matchmaking algorithms",
			"Performance Optimization: Continuously profiled and optimized database queries and API endpoints",
			"Deployment & DevOps: Containerized services using Docker and deployed on cloud infrastructure",
		],
		technicalImplementation: [
			"Backend: High-performance RESTful API using Node.js and Express.js",
			"Database: MongoDB with strategic indexing for optimal query performance",
			"Frontend: Cross-platform mobile application with React Native",
			"State Management: React Context API/Redux for predictable state management",
			"Deployment: Containerized with Docker and deployed on cloud infrastructure",
		],
		technologies: [
			"React Native",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Docker",
			"AWS/GCP",
		],
		screenshots: [
			"./assets/images/matrimonial-1.png",
			"./assets/images/matrimonial-2.png",
			"./assets/images/matrimonial-3.png",
		], // Add screenshot URLs later
		links: [
			{
				url: "https://github.com/faizanzafer/matrimonial",
				text: "GitHub Repository",
				icon: "fab fa-github",
			},
		],
	},
	givit: {
		title: "GIVIT - Secure Giveaway Platform",
		description:
			"GIVIT is an innovative giveaway application that creates an engaging and transparent platform for users to discover and participate in giveaways. The project focused on solving key challenges in e-commerce and promotional campaigns by integrating secure financial transactions and providing live updates to foster user trust and engagement.",
		keyFeatures: [
			"Secure Payment Integration: PCI-DSS compliant payment processing for contest entries",
			"Real-Time Updates: Live draw updates and winner announcements",
			"Transparent Process: Users can see giveaway status in real-time",
			"User Trust Systems: Features to build confidence in the platform",
			"Responsive Design: Works seamlessly across all devices",
		],
		responsibilities: [
			"Secure Payment Integration: Researched, integrated, and tested secure payment gateways",
			"Real-Time System Design: Engineered real-time notification and update system",
			"Full-Stack Development: Owned the complete development lifecycle",
			"WebSocket Implementation: Implemented and managed persistent client-server connections",
			"Authentication & Security: Implemented JWT for secure user authentication",
		],
		technicalImplementation: [
			"Backend: Secure server with Node.js and Express.js integrated with payment APIs",
			"Real-Time Communication: WebSocket protocols using Socket.io library",
			"Database: ACID compliant database for financial operations",
			"Frontend: Responsive web application with modern frontend framework",
			"Security: JWT for authentication, encryption for sensitive data",
		],
		technologies: [
			"React",
			"Node.js",
			"Express.js",
			"Socket.io",
			"MongoDB/PostgreSQL",
			"Stripe/PayPal",
		],
		screenshots: [], // Add screenshot URLs later
		links: [
			{
				url: "https://github.com/faizanzafer/givit",
				text: "GitHub Repository",
				icon: "fab fa-github",
			},
		],
	},
};

// Mobile menu functionality
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
	link.addEventListener("click", () => {
		mobileMenu.classList.remove("active");
	});
});

// Modal functionality
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-project-title");
const modalContent = document.getElementById("modal-project-content");
const closeModal = document.querySelector(".close-modal");

// Open modal when project card is clicked
document.querySelectorAll(".card").forEach((card) => {
	card.addEventListener("click", () => {
		const projectId = card.getAttribute("data-project");
		openModal(projectId);
	});
});

// Close modal when X is clicked
closeModal.addEventListener("click", () => {
	closeModalFunc();
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		closeModalFunc();
	}
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && modal.classList.contains("active")) {
		closeModalFunc();
	}
});

function openModal(projectId) {
	const project = projects[projectId];
	if (!project) return;

	// Set modal title
	modalTitle.textContent = project.title;

	// Build modal content
	let contentHTML = `
                <div class="project-detail">
                    <h4>Description</h4>
                    <p>${project.description}</p>
                </div>
            `;

	// Add key features if available
	if (project.keyFeatures && project.keyFeatures.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Key Features</h4>
                        <ul class="feature-list">
                `;

		project.keyFeatures.forEach((feature) => {
			contentHTML += `<li>${feature}</li>`;
		});

		contentHTML += `</ul></div>`;
	}

	// Add responsibilities for MATRIMONIAL and GIVIT
	if (project.responsibilities && project.responsibilities.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Responsibilities & Achievements</h4>
                        <ul class="feature-list">
                `;

		project.responsibilities.forEach((responsibility) => {
			contentHTML += `<li>${responsibility}</li>`;
		});

		contentHTML += `</ul></div>`;
	}

	// Add technical implementation for MATRIMONIAL and GIVIT
	if (
		project.technicalImplementation &&
		project.technicalImplementation.length > 0
	) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Technical Implementation</h4>
                        <ul class="feature-list">
                `;

		project.technicalImplementation.forEach((implementation) => {
			contentHTML += `<li>${implementation}</li>`;
		});

		contentHTML += `</ul></div>`;
	}

	// Add challenges and solutions for other projects
	if (project.challenges && project.challenges.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Challenges</h4>
                        <ul class="feature-list">
                `;

		project.challenges.forEach((challenge) => {
			contentHTML += `<li>${challenge}</li>`;
		});

		contentHTML += `</ul></div>`;
	}

	if (project.solutions && project.solutions.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Solutions</h4>
                        <ul class="feature-list">
                `;

		project.solutions.forEach((solution) => {
			contentHTML += `<li>${solution}</li>`;
		});

		contentHTML += `</ul></div>`;
	}

	// Add technologies
	contentHTML += `
                <div class="project-detail">
                    <h4>Technologies Used</h4>
                    <div class="tech-stack">
            `;

	project.technologies.forEach((tech) => {
		contentHTML += `<span class="tech-item">${tech}</span>`;
	});

	contentHTML += `</div></div>`;

	// Add screenshots section if available
	if (project.screenshots && project.screenshots.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Screenshots</h4>
                        <div class="screenshots-container">
                `;

		project.screenshots.forEach((screenshot) => {
			contentHTML += `
                        <div class="screenshot-item">
                            <img src="${screenshot}" alt="${project.title} Screenshot">
                        </div>
                    `;
		});

		contentHTML += `</div></div>`;
	}

	// Add project links
	if (project.links && project.links.length > 0) {
		contentHTML += `
                    <div class="project-detail">
                        <h4>Project Links</h4>
                        <div class="project-links">
                `;

		project.links.forEach((link) => {
			contentHTML += `
                        <a href="${link.url}" target="_blank" class="project-link">
                            <i class="${link.icon}"></i>
                            ${link.text}
                        </a>
                    `;
		});

		contentHTML += `</div></div>`;
	}

	// Set content and show modal
	modalContent.innerHTML = contentHTML;
	modal.style.display = "block";
	document.body.style.overflow = "hidden";

	// Trigger animation
	setTimeout(() => {
		modal.classList.add("active");
	}, 10);
}

function closeModalFunc() {
	modal.classList.remove("active");
	document.body.style.overflow = "auto";

	// Wait for animation to complete before hiding
	setTimeout(() => {
		modal.style.display = "none";
	}, 300);
}

// Typing animation
const text =
	"Full Stack Web & Mobile Developer | Node.js, Next.js, React, Flutter";
const typingEl = document.getElementById("typing");
let idx = 0;

function type() {
	if (idx < text.length) {
		typingEl.textContent += text.charAt(idx);
		idx++;
		setTimeout(type, 60);
	} else {
		// Remove the cursor after typing is complete
		typingEl.style.borderRight = "none";
	}
}

// Start typing animation when page loads
window.addEventListener("load", () => {
	typingEl.textContent = "";
	type();
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("active");
			}
		});
	},
	{ threshold: 0.2 }
);
document
	.querySelectorAll(".animate-slideUp, .animate-fadeIn")
	.forEach((el) => observer.observe(el));

// Particles.js initialization
particlesJS("particles-js", {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: { type: "circle" },
		opacity: { value: 0.3, random: true },
		size: { value: 3, random: true },
		line_linked: {
			enable: true,
			distance: 120,
			color: "#ffffff",
			opacity: 0.2,
			width: 1,
		},
		move: {
			enable: true,
			speed: 2,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "grab" },
			onclick: { enable: true, mode: "push" },
			resize: true,
		},
	},
	retina_detect: true,
});
