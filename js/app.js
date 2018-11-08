// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App root data
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe'
            },
            // Demo products for Catalog section
            products: [
                {
                    id: '1',
                    title: 'Apple iPhone 8',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique' +
                            ' reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente' +
                            ' rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                }, {
                    id: '2',
                    title: 'Apple iPhone 8 Plus',
                    description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident ' +
                            'temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum por' +
                            'ro sunt sint eveniet maiores, dolorem itaque!'
                }, {
                    id: '3',
                    title: 'Apple iPhone X',
                    description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero b' +
                            'landitiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet qu' +
                            'os, accusamus earum asperiores officiis assumenda optio architecto quia neque, q' +
                            'uae eum.'
                }
            ]
        };
    },
    // App root methods
    methods: {
        helloWorld: function () {
            app
                .dialog
                .alert('Hello World!');
        }
    },
    // App routes
    routes: routes
});

// Init/Create views
var homeView = app
    .views
    .create('#view-home', {url: '/'});
var catalogView = app
    .views
    .create('#view-catalog', {url: '/catalog/'});
var settingsView = app
    .views
    .create('#view-settings', {url: '/settings/'});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();

    // Close login screen
    app
        .loginScreen
        .close('#my-login-screen');

    // Alert username and password
    app
        .dialog
        .alert('Username: ' + username + '<br>Password: ' + password);
});
var list_col = $$(".list-col");
$$(list_col).each(function (index) {
    if (($$(this).children(".number-col").length) > 1 && ($$(this).children(".number-col").length) <= 2) {
        $$(this)
            .children(".number-col")
            .removeClass('col-100')
            .addClass('col-50');
    }
});
$$('.convert-form-to-data').on('click', function(){
    var formData = app.form.convertToData('#demo-form');
    console.log(formData);
    let baseUrl = 'http://159.65.133.13:4500/api/UserQuizzes';
    axios.post(baseUrl, formData).then(res =>{
        console.log(res);
        alert("Submit thành công");

    }).catch(err =>{
        console.log(err);
        alert("Submit không thành công");
    })
    console.log(JSON.stringify(formData));
    // alert(JSON.stringify(formData));
  });
