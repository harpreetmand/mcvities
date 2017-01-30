/***************************************
Filter for Ascii or html code
****************************************/
app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
app.filter('trustedurl', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
app.filter('m2km', function() {
    return function(input) {
        if (input) {
            return (Math.round((input * 1.6093) * 10) / 10 + " KM");
        } else {

        }
    }
});

app.filter('shuffle', function() {
    var shuffledArr = [],
        shuffledLength = 0;
        f =0;
    return function(arr) {
    	if(arr!=undefined){
	        var o = arr.slice(0, arr.length);
	        if (shuffledLength == arr.length) {
                var h = shuffledArr
                if(f===3){
                	 shuffledArr=[];
                	 shuffledLength = 0;
                	 f=0;
                }
                f++;
	        	return h;
    		}
	        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	        shuffledArr = o;
	        shuffledLength = o.length;
	        return o;
	    }
    };
});
