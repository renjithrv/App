(function () {

    'use strict'

    angular.module('full_starter.services', [])

        .service('appService', ['$state', '$ionicPopup', '$ionicActionSheet', '$ionicHistory', '$ionicLoading', '$timeout',
            function ($state, $ionicPopup, $ionicActionSheet, $ionicHistory, $ionicLoading, $timeout) {

                return {
                    getNews: function () {
                        return _news;
                    },
                    getMessages: function () {
                        return _messages;
                    },
                    getContacts: function () {
                        return _contacts;
                    },
                     getforwardContacts: function () {
                        return _forwardcontacts;
                    },
                    getmidfielderContacts: function () {
                        return _midfieldercontacts;
                    },
                    getdefenderContacts: function () {
                        return _defendercontacts;
                    },
                    getProducts: function () {
                        return _products;
                    },
                    getNotifications: function () {
                        return _notifications;
                    },
                    getRandomMessages: function () {
                        return _randMessages;
                    },
                    getRandomObject: function (arr) {
                        return arr[Math.floor(Math.random() * arr.length)];
                    },
                    Loading: function (params) {
                        if (params === 'show') {
                            $ionicLoading.show({
                                template: '<ion-spinner></ion-spinner>'
                            });
                        } else {
                            $ionicLoading.hide();
                        }
                    },
                    KeepKeyboardOpen: function (params) {
                        var txtInput = angular.element(document.body.querySelector(params));
                        txtInput.one('blur', function () {
                            txtInput[0].focus();
                        });
                    },
                    showAlert: function (title, text, buttonText, buttonType, page) {
                        var alertPopup = $ionicPopup.alert({
                            title: title,
                            template: text,
                            buttons: [{ text: buttonText, type: buttonType }]
                        });
                        $timeout(function () {
                            alertPopup.close();
                        }, 1500000);

                        alertPopup.then(function (res) {
                            page != null ? $state.go(page) : '';
                            alertPopup.close();
                        });
                    },
                    getGreetingTime: function (m) {
                        var g = null;

                        if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

                        var split_afternoon = 12 //24hr time to split the afternoon
                        var split_evening = 17 //24hr time to split the evening
                        var currentHour = parseFloat(m.format("HH"));

                        if (currentHour >= split_afternoon && currentHour <= split_evening) {
                            g = "Good Afternoon";
                        } else if (currentHour >= split_evening) {
                            g = "Good Evening";
                        } else {
                            g = "Good Morning";
                        }
                        return g;
                    },
                    getCameraOptions: function () {
                        return {
                            quality: 80,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            encodingType: Camera.EncodingType.JPEG,
                            saveToPhotoAlbum: true,
                            correctOrientation: true,
                        };
                    },
                    getLibraryOptions: function () {
                        return {
                            quality: 80,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                            encodingType: Camera.EncodingType.JPEG,
                            saveToPhotoAlbum: false,
                            correctOrientation: true,
                        };
                    },
                }
            }]);
})();

//Contacts data
var _contacts = [
    {
        id: 3,
        "name": "Shihin Haridas",
        "photo": "img/avatar.png",
        "desc": "Midfielder",
        "points": "240"
    }, {
        "id": 4,
        "name": "Satyaki Bose",
        "photo": "img/avatar.png",
        "desc": "Midfielder",
        "points": "220"
    },
    {
        id: 2,
        "name": "Kunal Verma",
        "photo": "img/avatar.png",
        "desc": "Forward",
        "points": "200"
    },
    {
        id: 5,
        "name": "Ankit",
        "photo": "img/avatar.png",
        "desc": "Forward",
        "points": "190"
    },
    {
        id: 6,
        "name": "Samuel Ross",
        "photo": "img/avatar.png",
        "desc": "Defender",
        "points": "180"
    },
    {
        "id": 7,
        "name": "Daily Bugle",
        "photo": "img/avatar.png",
        "desc": "Defender",
        "points": "170"
    },
    {
        "id": 8,
        "name": "Peter Vaughn",
        "photo": "img/avatar.png",
        "desc": "Defender",
        "points": "160"
    }
]



// data for news tab
var _news = [
    {
        "id": 8,
        "title": "Intermediate",
        "link": "",
        "author": "Play Arena",
        "source": "",
        "sourceLogo": "img/badmintong.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusiasts to excel in the game",
        "image": "img/play.png",
        "genre": "#3897f0",
        "date": "25th Sep",
         "theme": "Dribbling",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg"
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/4.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg"
            },
        ]
    },
    {
        "id": 2,
        "title": "Advanced",
        "link": "",
        "author": "Magnum Arena",
        "source": "",
        "sourceLogo": "img/badmintong.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "image": "img/magnumarena.jpg",
        "genre": "#2ecc71",
        "date": "26th Sep",
        "theme": "Attacking",
        "comments": [
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg",
                "text": "Midfielder",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/5.jpg",
                "text": "Defender",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 3,
        "title": "Beginner",
        "link": "",
        "author": "Play Arena",
        "source": "",
        "sourceLogo": "img/footballg.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "image": "img/play.png",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "genre": "#3897f0",
        "date": "25th Sep",
        "theme": "Defending",
        "likes": [
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg"
            },
            {
                "name": "Diana Cahill",
                "photo": "img/users/4.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg"
            },
        ],
    },
    {
        "id": 4,
        "title": "Intermediate",
        "link": "",
        "author": "Play Arena",
        "source": "Business News",
        "sourceLogo": "img/footballg.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "image": "img/play.png",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "genre": "#000",
        "date": "20th Sep",
        "theme": "Attacking",
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/3.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/4.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 5,
        "title": "Advanced",
        "link": "",
        "author": "Magnum Arena",
        "source": "Forbes",
        "sourceLogo": "img/footballg.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "image": "img/magnumarena.jpg",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "genre": "#000",
        "date": "24th Sep",
        "theme": "Attacking",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/1.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg"
            },
        ],
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/3.jpg",
                "text": "Goalkeeper",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg",
                "text": "Midfielder",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/5.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    },
    {
        "id": 6,
        "title": "Intermediate",
        "link": "",
        "author": "Magnum Arena",
        "source": "Daily Planet",
        "sourceLogo": "img/footballg.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "image": "img/magnumarena.jpg",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "genre": "#000",
        "date": "19th Sep",
        "theme": "Dribbling",
    },
    {
        "id": 7,
        "title": "Advanced",
        "link": "",
        "author": "Play Arena",
        "source": "Daily Bugle",
        "sourceLogo": "img/footballg.png",
        "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
        "summary": "21:00 - 22:00 Hrs",
        "image": "img/play.png",
        "description": "This is a Intermediate level Sporthood play session catering to the needs of football enthusias to excel in the game",
        "genre": "#3897f0",
        "date": "24th Sep",
        "theme": "Attacking",
        "likes": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/3.jpg",
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/2.jpg"
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/1.jpg"
            },
        ],
        "comments": [
            {
                "name": "Thomas Tank",
                "photo": "img/users/2.jpg",
                "text": "Midfielder",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Rupert Bear",
                "photo": "img/users/1.jpg",
                "text": "Forward",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
            {
                "name": "Samuel Ross",
                "photo": "img/users/3.jpg",
                "text": "Defender",
                "publishedDate": randomDate(new Date(2016, 1, 1), new Date()),
            },
        ]
    }
];

// data for conversation and chat
var _messages = [
    {
        "conversation": 1,
        "recepientid": 8,
        "recepientname": 'New Session',
        "recepientphoto": 'img/play.png',
        
        "messages": [
            {
                "senderid": 1,
                "text": "A new session at Play Arena every Thursday 21:00 - 21:30 Hrs. Contact buddy for allocation.",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            }
        ]
    },
    {
        "conversation": 2,
        "recepientid": 2,
        "recepientname": 'New Venue',
        "recepientphoto": 'img/magnumarena.jpg',
        
        "messages": [
            {
                "senderid": 1,
                "text": "A new venue has added at Magnum Arena. Batch allocation to start soon.",
                "sentAt": randomDate(new Date(2016, 1, 1), new Date()),
            }]
    }
]

// notifications json
var _notifications = [
    {
        id: 1,
        title: "Sporthood Improve",
        venue: "Play Arena",
        goals: "2",
        assist: "4",
        rating: "60",
        logo: "img/magnumarena.jpg",
        passing: "60",
        receiving: "65",
        dribbling: "60",
        attacking: "70",
        defending: "80",
        core: "40",
        upper: "32",
        lower: "24",
        weight: "60",
        flexibility: "Good"

    },
    // {
    //     id: 2,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     title: "Do Tesco shopping for the week",
    //     type: "Add Task",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 3,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Remind him about paint-balling",
    //     phone: "07816965792",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     title: "Call Harry",
    //     type: "Add Call",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 4,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     title: "Meeting with Mathew",
    //     type: "Add Event",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 5,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     email: "john@email.com",
    //     title: "Send an Email to john",
    //     type: "Add Email",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 6,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).add(1, 'days')._d, new Date()),
    //     email: "harry@email.com",
    //     title: "Send an Email to Harry",
    //     type: "Add Email",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 7,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
    //     notes: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date())._d, new Date()),
    //     email: "kevin@email.com",
    //     title: "Email Kevin about start up event",
    //     type: "Add Email",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 8,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
    //     phone: "03309965792",
    //     title: "Call Advant Ltd",
    //     type: "Add Call",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 9,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     email: "nick@email.com",
    //     title: "Email Nick about mobile phone app",
    //     type: "Add Email",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 10,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     phone: "01237965792",
    //     title: "Call Dolly",
    //     type: "Add Call",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 11,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Remind him about paint-balling",
    //     phone: "07816900453",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     title: "Phone Steph",
    //     type: "Add Call",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 12,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     title: "Meeting with Romanov",
    //     type: "Add Event",
    //      goals: "2",
    //     assist: "4",
    //     skill: "60",
    //     fitness: "65"
    // },
    // {
    //     id: 13,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).subtract(3, 'days')._d, new Date()),
    //     email: "ronald@email.com",
    //     title: "Compose an email to Ronald",
    //     type: "Add Email"
    // },
    // {
    //     id: 14,
    //     allDay: true,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     notes: "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).add(1, 'days')._d, new Date()),
    //     email: "harry@email.com",
    //     title: "Send an Email to Harry",
    //     type: "Add Email"
    // },
    // {
    //     id: 15,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
    //     notes: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.",
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date())._d, new Date()),
    //     title: "Do a budget plan for next three months",
    //     type: "Add Task"
    // },
    // {
    //     id: 16,
    //     allDay: false,
    //     endsAt: randomDate(moment(new Date()).subtract(2, 'days')._d, new Date()),
    //     remindTime: ["at set time", "15 mins before"],
    //     startsAt: randomDate(moment(new Date()).add(2, 'days')._d, new Date()),
    //     phone: "07816965792",
    //     title: "Call Advant Ltd",
    //     type: "Add Call"
    // },
]

// products json for shop-front tab
var _products = [
    {
        id: 1,
        category: "shoes",
        price: 70.00,
        name: "blue-green nike",
        image: ["img/shop/1.jpg", "img/shop/1.jpg", "img/shop/1.jpg", "img/shop/1.jpg"],
        stock: 100,
    },
    {
        id: 2,
        category: "shoes",
        price: 60.00,
        name: "black-pink nike",
        image: ["img/shop/2.jpg", "img/shop/2.jpg", "img/shop/2.jpg", "img/shop/2.jpg"],
        stock: 1000,
    },
    {
        id: 3,
        category: "shoes",
        price: 50.99,
        name: "black-red nike",
        image: ["img/shop/3.jpg", "img/shop/3.jpg", "img/shop/3.jpg", "img/shop/3.jpg"],
        stock: 5000,
    },
    {
        id: 4,
        category: "shoes",
        price: 69.99,
        name: "blue-pink nike",
        image: ["img/shop/4.jpg", "img/shop/4.jpg", "img/shop/4.jpg", "img/shop/4.jpg"],
        stock: 1200,
    },
    {
        id: 5,
        category: "shoes",
        price: 70.00,
        name: "black-white nike",
        image: ["img/shop/5.jpg", "img/shop/5.jpg", "img/shop/5.jpg", "img/shop/5.jpg"],
        stock: 1200,
    },
    {
        id: 6,
        category: "shoes",
        price: 74.99,
        name: "blue-black-white nike",
        image: ["img/shop/6.jpg", "img/shop/6.jpg", "img/shop/6.jpg", "img/shop/6.jpg"],
        stock: 1200,
    },
    {
        id: 7,
        category: "shoes",
        price: 45.65,
        name: "red-black nike",
        image: ["img/shop/7.jpg", "img/shop/7.jpg", "img/shop/7.jpg", "img/shop/7.jpg"],
        stock: 100,
    },
    {
        id: 8,
        category: "shoes",
        price: 72.00,
        name: "white-black nike",
        image: ["img/shop/8.jpg", "img/shop/8.jpg", "img/shop/8.jpg", "img/shop/8.jpg"],
        stock: 100,
    },
    {
        id: 9,
        category: "shoes",
        price: 80.00,
        name: "green-black nike",
        image: ["img/shop/9.jpg", "img/shop/9.jpg", "img/shop/9.jpg", "img/shop/9.jpg"],
        stock: 12000,
    },
    {
        id: 10,
        category: "shoes",
        price: 70.00,
        name: "blue-black nike",
        image: ["img/shop/10.jpg", "img/shop/10.jpg", "img/shop/10.jpg", "img/shop/10.jpg"],
        stock: 1800,
    }
]

// Random Messages used as replies for chat tab
var _randMessages = [
    'Over the propaganda tangent refrains the cryptic warehouse.',
    'Does a steam jacket your altered blade?',
    'The thirst gasps underneath the library.',
    'An era reverts?',
    'The blackmail zooms in the master!',
    'When can the horror arrest the new drama?',
    'Whatever elitist prizes a lemon.',
    'A workload stretches against the ridden suicide.',
    'The male dances beneath the conscience!',
    'Why wont the surplus joke?',
    'How can the capitalist bolt a coming terminology?',
    'Can the curve bolt near the optimal word?',
    'A ridiculous custom refutes a science.',
    'The cheese advances within a creep!',
    'The remembered indent rocks the depressed eye.',
    'A rhetorical library twists on top of a misuse.',
    'The rear flood bulls a hand underneath the post axiom.',
    'This rotating chord deserves the guard.',
    'Should the spoiled thief bay with the illiterate?'
]

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}