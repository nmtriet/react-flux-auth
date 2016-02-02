/* User data is returned from API when user logins sucessfully */
module.exports = {
    init: function() {
        var data = JSON.stringify([
            {
                id: '1',
                name: 'Triet Nguyen',
                email: 'trietnguyen308@gmail.com',
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
                name: 'Tuan Nguyen',
                email: 'tuannguyen@gmail.com',
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
                name: 'Tri Nguyen',
                email: 'tringuyen@gmail.com',
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