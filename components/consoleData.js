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
            "content": "[1]\t- 2016 done\t./rit.sh\n[2]\t+ running\t./indeed.sh",
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
            "content": "My name is Caleb Coffie. I'm a security engineer living in Austin, TX and working at Indeed (the jobsearch company). I'm an alumnus of RIT (Rochester Institute of Technology) where I majored in Computing Security. While at RIT I developed a passion for software development by going to hackathons as well within my Open Source and Free Software minor. This passion has blead into my work and led me to focusing on developing custom security tools.\n\nOutside of work, I have way too many hobbies including making things. Whether that's 3d printing, laser cutting, electronics, or just regular wood working.\n",
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
