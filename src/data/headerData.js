import resume from '../assets/pdf/Sudhanshu_Choudhary_Software_Engineer_Resume.pdf'

export const headerData = {
    name: 'Sudhanshu Choudhary',
    title: 'Software Engineer',
    desciption:
        'Software Engineer with 4+ years building scalable web and cloud applications. Skilled in Java, Python, JavaScript, and TypeScript with strong expertise in AWS, CI/CD automation, and infrastructure as code. Experienced across RESTful APIs, data pipelines, and containerized microservices using modern DevOps practices.',
    image: process.env.PUBLIC_URL + '/ProfileImage.png',
    // You mentioned you will manage resume download manually; keeping current wire-up.
    resumePdf: resume
}
