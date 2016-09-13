appServices.factory('BApi', api);

/** @ngInject */
function api($resource) {

    var api = {};

    // Base Url
    api.baseUrl = 'http://localhost:9000';

    api.auth = $resource(api.baseUrl + '/api/auth/:id/:controller', {
        id: '@_id'
    }, {
            local: {
                method: 'POST',
                params: {
                    id: 'local'
                }
            }
        });

    api.user = $resource(api.baseUrl + '/api/users/:id/:controller', {
        id: '@_id'
    }, {
            create: {
                method: 'POST'
            },
            changePassword: {
                method: 'PUT',
                params: {
                    controller: 'password'
                }
            },
            me: {
                method: 'GET',
                params: {
                    controller: 'me'
                }
            }
        });
    
    api.space = $resource(api.baseUrl + 'api/spaces/:id/:controller', {
        id: '@_id'
    }, {
            create: {
                method: 'POST'
            },
            getUserSpaces: {
                method: 'GET',
                params: {
                    id: 'user'
                }
            }
        }
    )

}