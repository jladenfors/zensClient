requirejs.config({
    shim: {
        'lib/jquery.flot': ['bower_components/jquery/jquery.min'],
        'scripts/reader/zens-flot': ['lib/jquery.flot'],
        'scripts/reader/zens-util': [],
        'scripts/reader/zens-reader': ['scripts/reader/zens-util', 'scripts/reader/zens-flot'],
        'scripts/controllers/zens-module': ['scripts/controllers/zens-controller', 'scripts/reader/zens-reader'],                
        'scripts/controllers/zens-controller': ['scripts/init'],        
        'scripts/init': [ 'bower_components/angular/angular.min']
    }
});

require(['scripts/controllers/zens-module', 'scripts/reader/zens-reader'], 
    function main() {        
        // Late bootstrap for require to work
        angular.bootstrap(document, ['zens']);
        
        <!-- Here the dom and bo-->
        $(function() {
            $(".nav li").click(function() {
                $(".nav li").removeClass('active');
                setTimeout(function() {
                    var page = $.QueryString("page");
                    $(".nav li:eq(" + page + ")").addClass("active");
                }, 50);

            });
        });

    });
