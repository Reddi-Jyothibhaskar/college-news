const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Article = require('../models/Article');

dotenv.config();

const articles = [
    {
        title: 'College Fest Announced',
        summary: 'The annual college fest will be held next month with various events planned.',
        content: 'Join us for a week of fun, learning, and networking at our annual college fest. This year, we have a lineup of exciting events including workshops, guest lectures, and cultural performances. Don\'t miss out on the chance to showcase your talents and meet new people.',
        author: 'John Doe',
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    },
    {
        title: 'New Library Opening',
        summary: 'A new library will be inaugurated next week, providing students with more resources.',
        content: 'We are excited to announce the opening of our new library, which will feature a vast collection of books, journals, and digital resources. The library aims to support students in their academic pursuits and provide a quiet space for study and research.',
        author: 'Jane Smith',
        imageUrl: 'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    },
    {
        title: 'College Fest Announced',
        summary: 'The annual college fest will be held next month with various events planned.',
        content: 'Join us for a week of fun, learning, and networking at our annual college fest. This year, we have a lineup of exciting events including workshops, guest lectures, and cultural performances. Don\'t miss out on the chance to showcase your talents and meet new people.',
        author: 'John Doe',
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    },
    {
        title: 'New Library Opening',
        summary: 'A new library will be inaugurated next week, providing students with more resources.',
        content: 'We are excited to announce the opening of our new library, which will feature a vast collection of books, journals, and digital resources. The library aims to support students in their academic pursuits and provide a quiet space for study and research.',
        author: 'Jane Smith',
        imageUrl: 'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    },
    {
        title: 'College Fest Announced',
        summary: 'The annual college fest will be held next month with various events planned.',
        content: 'Join us for a week of fun, learning, and networking at our annual college fest. This year, we have a lineup of exciting events including workshops, guest lectures, and cultural performances. Don\'t miss out on the chance to showcase your talents and meet new people.',
        author: 'John Doe',
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    },
    {
        title: 'New Library Opening',
        summary: 'A new library will be inaugurated next week, providing students with more resources.',
        content: 'We are excited to announce the opening of our new library, which will feature a vast collection of books, journals, and digital resources. The library aims to support students in their academic pursuits and provide a quiet space for study and research.',
        author: 'Jane Smith',
        imageUrl: 'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: new Date(),
    }
];

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    await Article.deleteMany(); // Clear existing articles
    await Article.insertMany(articles); // Insert new articles
    console.log('Seed data inserted successfully');
    process.exit();
}).catch(err => {
    console.error('Error inserting seed data:', err);
});