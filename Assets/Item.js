#pragma strict

public var item : gameObject;
public var nikuman : gameObject;
public var seiro : gameObject;

function Start () 
{
    seiro = item.transform.Find("seiro").gameObject;
}

function Update ()
{
    if(Input.GetKeyDown("A"))
    {
        if(seiro.activeSelf == true)
        {
            seiro.setActive(false);
        }
        else
        {
            seiro.setActive(true);
        }
    }
}
