function TrainingNotes(){
    var height = this.getHeightOfScreen();
    this.resizeSection(height);
}


TrainingNotes.prototype.resizeSection = function(height){
    $('.introduction').height(height)
}

TrainingNotes.prototype.getHeightOfScreen = function(){
   return $(window).height();
}
