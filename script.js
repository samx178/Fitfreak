const reviews = [
    {
        review: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
        name: "Raj Ojha",
        profession: "Software Developer",
        photo: "https://th.bing.com/th/id/OIP.nya40Um2XpDzMrivNsC9lgHaEZ?rs=1&pid=ImgDetMain"
    },
    {
        review: "Joining this gym and yoga club has been one of the best decisions of my life. The variety of classes offered is amazing, and the yoga sessions are particularly rejuvenating. The trainers are knowledgeable and supportive, always encouraging us to push our limits safely. I've seen a significant improvement in my flexibility and overall fitness since I joined. Highly recommend!",
        name: "Satyam Tiwari",
        profession: "Graphic Designer",
        photo: "https://i.pinimg.com/originals/76/fc/86/76fc86692e1d7e03a21e130ead24904a.jpg"
    },
    {
        review: "This place is not just a gym but a community. The facilities are top-notch and well-maintained, and the staff is incredibly friendly and welcoming. The yoga classes are a perfect blend of relaxation and strength training, helping me manage stress and stay fit. The positive energy here is contagious, and it keeps me motivated to achieve my fitness goals.",
        name: "Pratham Mishra",
        profession: "Marketing Specialist",
        photo: "https://th.bing.com/th/id/OIP.lXtw7upApXTrpAC0FXVNvAHaFG?rs=1&pid=ImgDetMain"
    },
    {
        review: "The yoga and fitness programs here are exceptional. Each session is crafted to cater to different fitness levels, which I really appreciate. The environment is serene and perfect for unwinding after a long day at work. The trainers are attentive and customize workouts to suit individual needs. I feel healthier, both mentally and physically, since I started attending classes here.",
        name: "Shubham Kumar",
        profession: "Teacher",
        photo: "https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg"
    }
];

let currentIndex = 0;

const reviewElement = document.querySelector('.review1');
const nameElement = document.querySelector('.name');
const professionElement = document.querySelector('.software');
const photoElement = document.querySelector('.photo-placeholder');

document.querySelector('.next-review').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    reviewElement.textContent = reviews[currentIndex].review;
    nameElement.textContent = reviews[currentIndex].name;
    professionElement.textContent = reviews[currentIndex].profession;
    photoElement.style.backgroundImage = `url(${reviews[currentIndex].photo})`;
});
