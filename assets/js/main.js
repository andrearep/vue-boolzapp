
const app = new Vue({

    el: "#root",

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    }
                ]
            },

            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/01/2020 15:30:55',
                        text: 'Buona giornata fratellino',
                        status: 'sent'
                    }
                ]
            },

            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '30/01/2021 12:30:35',
                        text: 'Ci andiamo a mangiare un gelato?',
                        status: 'sent'
                    },
                    {
                        date: '30/01/2021 12:30:35',
                        text: 'Non lo so fratellì ti faccio sapere',
                        status: 'receveid'
                    }
                ]
            },

            {
                name: 'Luigi',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:37:55',
                        text: 'No mi sono dimenticato mi spiace',
                        status: 'receveid'
                    },
                ]
            },
            {
                name: 'Carlo',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:37:55',
                        text: 'No mi sono dimenticato mi spiace',
                        status: 'receveid'
                    },
                ]
            },
            {
                name: 'Malena',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:37:55',
                        text: 'No mi sono dimenticato mi spiace',
                        status: 'receveid'
                    },
                ]
            },
            {
                name: 'Gino',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:37:55',
                        text: 'No mi sono dimenticato mi spiace',
                        status: 'receveid'
                    },
                ]
            },
            {
                name: 'Franco',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'receveid'
                    },
                    {
                        date: '10/01/2020 15:37:55',
                        text: 'No mi sono dimenticato mi spiace',
                        status: 'receveid'
                    },
                ]
            },
        ],
    }

})