let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//tête
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.arc(260,100,70,0,2*Math.PI);
ctx.fill();
//corps
ctx.fillRect(200, 130, 120, 200);
//bras
ctx.fillRect(130, 130, 250, 50);
//main gauche
ctx.beginPath();
ctx.arc(130,155,25,1.5,1.5*Math.PI,false);
ctx.fill();
//main droite
ctx.beginPath();
ctx.arc(378,155,25,1.5,1.5*Math.PI,true);
ctx.fill();
//jambe gauche
ctx.fillRect(200, 320, 50, 130);
//pied gauche
ctx.beginPath();
ctx.arc(225,450,25,0,1*Math.PI);
ctx.fill();
//jambe droite
ctx.fillRect(270, 320, 50, 130);
//pied droite
ctx.beginPath();
ctx.arc(295,450,25,0,1*Math.PI);
ctx.fill();
//entrejambe
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.bezierCurveTo(270, 330, 263, 260, 250, 330);
ctx.fill();
//oeil gauche
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(240,80,10,0,2*Math.PI);
ctx.fill();
//sourcil gauche
ctx.beginPath();
ctx.lineWidth = '2';
ctx.strokeStyle = 'white';
ctx.arc(240, 75, 15, 0, Math.PI, true);
ctx.stroke();
//oeil droit
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(280,80,10,0,2*Math.PI);
ctx.fill();
//sourcil droit
ctx.beginPath();
ctx.lineWidth = '2';
ctx.strokeStyle = 'white';
ctx.arc(280, 75, 15, 0, Math.PI, true);
ctx.stroke();
//bouche
ctx.beginPath(240,105);
ctx.lineWidth = '3';
ctx.strokeStyle = 'red';
ctx.bezierCurveTo(240, 105, 263, 130, 275, 105);
ctx.stroke();

ctx.beginPath(240,105);
ctx.lineWidth = '3';
ctx.strokeStyle = 'red';
ctx.bezierCurveTo(240, 105, 263, 110, 275, 105);
ctx.stroke();

//boutons
ctx.beginPath();
ctx.fillStyle = 'purple';
ctx.arc(260,180,15,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'purple';
ctx.arc(260,220,15,0,2*Math.PI);
ctx.fill();
