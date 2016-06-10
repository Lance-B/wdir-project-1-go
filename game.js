var test = function() {
    var selectbox = document.getElementById('one');
    console.log(selectbox);
    var tlog = function(){
            console.log('roger roger bogie down');
        };
    selectbox.addEventListener('click', tlog);
};
test();



var game = function(){
    
    var boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var winner = 0;
    var player = 1;
    
    while(!(winner)){
        var selected = document.getElementById(document.getElementsByClassName("box"));
        selected.addEventListener("click", function(){
        console.log('roger roger bogie down');
    });
    }
};