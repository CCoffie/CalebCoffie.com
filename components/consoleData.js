import moment from 'moment';

const birthdayDate = moment('1992-10-09');
const currentDate = moment(); 
const diffDuration = moment.duration(currentDate.diff(birthdayDate))

export const consoleData = {
    "messages": [
        {
            "content": "whoami",
            "startingText": "ccoffie@calebcoffie.com:/$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "ccoffie",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "hostname",
            "startingText": "ccoffie@calebcoffie.com:/$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "calebcoffie.com",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "groups",
            "startingText": "ccoffie@calebcoffie.com:/$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "security developer backend frontend python node wheel sudo",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "uptime -p",
            "startingText": "ccoffie@calebcoffie.com:~$ ",
            "outputMethod": "multiple"
        },
        {
            "content": `up ${diffDuration.years()} years, ${diffDuration.months()} months, ${diffDuration.days()} days, ${diffDuration.hours()} hours, ${diffDuration.minutes()} minutes`,
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "jobs",
            "startingText": "ccoffie@calebcoffie.com:~$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "[1]\t- 2016 done\t./rit.sh\n[2]\t- 2022 done\t./indeed.sh\n[3]\t- running\t./dropbox.sh",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "cd ~",
            "startingText": "ccoffie@calebcoffie.com:/$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "ls",
            "startingText": "ccoffie@calebcoffie.com:~$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "bio.txt\ntesting.py\npasswords.txt\nabout.txt",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "cat bio.txt",
            "startingText": "ccoffie@calebcoffie.com:~$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "Hey there! I'm Caleb Coffie, a security enthusiast currently based in Magnolia, TX. By day, I'm immersed in the world of application security at Dropbox, where I apply my expertise to safeguard digital landscapes.\n\nMy journey in tech began at the renowned Rochester Institute of Technology (RIT), where I pursued my passion for Computing Security. It was there that I honed my skills and cultivated a fervor for software development, fueled by my participation in hackathons and my exploration of Open Source and Free Software.\n\nAt the core of my professional ethos lies a commitment to innovation. I thrive on crafting custom security solutions that empower organizations to navigate today's digital terrain with confidence.\n\nBeyond the realm of cybersecurity, I'm an avid maker and tinkerer. You'll often find me immersed in a myriad of hobbies, from 3D printing and laser cutting to indulging in the art of woodworking.\n\nLet's connect and explore the possibilities of technology together!\n",
            "startingText": "",
            "outputMethod": "single"
        },
        {
            "content": "exit",
            "startingText": "ccoffie@calebcoffie.com:~$ ",
            "outputMethod": "multiple"
        },
        {
            "content": "\nThat's the end of the interactive prompt...\nCheck out out the rest of the site through the navigation links above.",
            "startingText": "",
            "outputMethod": "single"
        },
        // {
        //     "content": " ",
        //     "startingText": "ccoffie@calebcoffie.com:~$ ",
        //     "outputMethod": "multiple"
        // },
    ]
};
