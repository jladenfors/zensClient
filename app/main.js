requirejs.config({
    shim: {
        'bower_components/angular-local-storage/angular-local-storage': ['bower_components/angular/angular.min'],
        'bower_components/Flot/jquery.flot.time': ['bower_components/Flot/jquery.flot'],
        'bower_components/Flot/jquery.flot': ['bower_components/jquery/jquery.min'],
        'scripts/service/zens-flot': ['bower_components/Flot/jquery.flot.time', 'scripts/service/zens-flot-util'],
        'scripts/service/zens-dao': [],
        'scripts/service/zens-data-formatter': [],
        'scripts/service/zens-flot-util': [],
        'scripts/service/zens-reader': ['scripts/service/zens-flot',  'scripts/service/zens-dao', 'scripts/service/zens-data-formatter'],
        'scripts/controllers/zens-directive': ['scripts/controllers/zens-controller', 'scripts/service/zens-reader'],                
        'scripts/controllers/zens-controller': ['scripts/init'],        
        'scripts/init': [ 'bower_components/angular/angular.min']
    }
});

require(['scripts/controllers/zens-directive',  'bower_components/angular-local-storage/angular-local-storage'], 
    function main() {        
        
        // Late bootstrap for require to work
        angular.bootstrap(document, ['zens']);              

    });
