#pragma strict

function Start () {
	
}

function Update () {
    transform.position.x=gameObject.Find("Cube").transform.position.x;
}
