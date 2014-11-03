#pragma strict
var lastX:float;
var isMoving:boolean = false;


function Start () {
	animation.Stop();	
}

function Update () {
	var halfW:float = Screen.width / 2;
	transform.position.x = (Input.mousePosition.x)/20;	
	
	if(lastX != transform.position.x){
		//if(!isMoving){
		//Debug.Log('moving');
			isMoving = true;
			animation.CrossFade("step");				
		//}
	}
	else{
	//	if(isMoving){
		//Debug.Log('stop');
			isMoving = false;
			animation.CrossFade("idle");				
	//	}		
	}		
	lastX = transform.position.x;	
	
	
}