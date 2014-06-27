function CustomContainer(label, color, w, h) {
    this._label = label;
    this._color = color;
    this._width = w;
    this._height = h;
    this.initialize();
}
//Inheritance from Container
CustomContainer.prototype = new createjs.Container(); 
CustomContainer.prototype.Container_initialize = CustomContainer.prototype.initialize; 
     
CustomContainer.prototype.initialize = function () {
    this.Container_initialize();
    
    var shape = new createjs.Shape()
        shape.graphics.beginFill(this._color).drawRect(0, 0, this._width, this._height);
        shape.name = j;
            
    var txt = new createjs.Text();
        txt.text = this._label;
        
            
    this.addChild(shape, txt);
}