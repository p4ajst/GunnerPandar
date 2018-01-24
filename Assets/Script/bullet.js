#pragma strict

var fireFlag=false;
var fireTime=0;

function Start () {
    transform.position=gameObject.Find("Cube").transform.position;
}

function Update () {

    //Instantiate(gameObject.Find("bullet"));

    if (Input.GetKey(KeyCode.Z)&&!fireFlag)
    {
        fireFlag=true;
        fireTime=0;
    }

    if(fireFlag)
    {
        fireTime++;
        transform.position=new Vector3(transform.position.x+0.3,transform.position.y,0);

        if(fireTime>=120)
        {
            fireFlag=false;
        }
    }
    else if(!fireFlag)
        transform.position=gameObject.Find("Cube").transform.position;
}
