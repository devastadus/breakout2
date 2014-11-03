#pragma strict

var prefab:GameObject;
var speed:int;

function Start () {

}

function Update () {
	transform.position.y -= speed * Time.deltaTime;
	Debug.Log(Time.deltaTime);
	if(transform.position.y < 0){
		Instantiate(prefab, transform.position,Quaternion.identity);
		transform.position.y = 50;
		transform.position.x = Random.Range(0,60);
		transform.position.z = -16;
		}	
}