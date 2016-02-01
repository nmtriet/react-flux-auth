import auth from '../utils/auth';
import User from '../components/User.jsx';

function redirectToLogin(nextState, replaceState) {
    if (!auth.loggedIn()) {
        replaceState({
            nextPathname: nextState.location.pathname
        }, '/login')
    }
}

function redirectToDashboard(nextState, replaceState) {
    if (auth.loggedIn()) {
        replaceState(null, '/')
    }
}

export default {
    component: require('../components/App.jsx'),
    childRoutes: [
        { 
            path: '/logout',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Logout.jsx'))
                })
            }
        },

        { 
            path: '/about',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/About.jsx'))
                })
            }
        },

        {
            onEnter: redirectToLogin,
            path: '/profile',
            getComponent: (location, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Profile.jsx'))
                })
            },
            childRoutes: [
                { 
                    path: 'user/:id',
                    getComponent: (location, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../components/User.jsx'))
                        })
                    },
                },
            ]
        },

        {
            onEnter: redirectToDashboard,
            childRoutes: [
                // Unauthenticated routes
                // Redirect to dashboard if user is already logged in
                { 
                    path: '/login',
                    getComponent: (location, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('../components/Login.jsx'))
                        })
                    }
                }
            ]
        },

        {
            path: '/',
            getComponent: (location, cb) => {
                // Dynamically load the correct component
                if (auth.loggedIn()) {
                    return require.ensure([], (require) => {
                        cb(null, require('../components/Dashboard.jsx'))
                    })
                }
                return require.ensure([], (require) => {
                    cb(null, require('../components/Home.jsx'))
                })
            },
            indexRoute: {
                getComponent: (location, cb) => {
                    // Only load if we're logged in
                    if (auth.loggedIn()) {
                        return require.ensure([], (require) => {
                            cb(null, require('../components/Welcome.jsx'))
                        })
                    }
                    return cb();
                }
            },
        }
    ]
}