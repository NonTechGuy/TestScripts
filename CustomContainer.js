function CustomContainer(label, color, w, h) {
    this._label = label;
    this._color = color;
    this._width = w;
    this._height = h;
    this.initialize();
}
//Inheritance from Container
Item.prototype = new createjs.Container(); 
Item.prototype.Container_initialize = Item.prototype.initialize; 
     
Item.prototype.initialize = function () {
    this.Container_initialize();
    
    var shape = new createjs.Shape()
        shape.graphics.beginFill(this._color).drawRect(0, 0, this._width, this._height);
        shape.x = xpos;
        shape.name = "item"+j
            
    var txt = new createjs.Text();
        txt.text = this._label;
        
            
    this.addChild(shape, txt);
}