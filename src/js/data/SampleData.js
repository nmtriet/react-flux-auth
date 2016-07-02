/* User data is returned from API when user logins sucessfully */
module.exports = {
    init: function() {
        var data = JSON.stringify([
            {
                id: '1',
                name: 'User 1',
                email: 'user1@gmail.com',
                password: '123456',
                project: [
                    {
                        name: 'Project A',
                    },
                    {
                        name: 'Project B',
                    },
                ]
            },
            {
                id: '2',
                name: 'User 2',
                email: 'user2@gmail.com',
                password: '123456',
                project: [
                    {
                        name: 'Project C',
                    },
                    {
                        name: 'Project D',
                    },
                ]
            },
            {
                id: '3',
                name: 'User 3',
                email: 'user3@gmail.com',
                password: '123456',
                project: [
                    {
                        name: 'Project E',
                    },
                    {
                        name: 'Project F',
                    },
                ]
            }
        ]);
        return data;
    }
};