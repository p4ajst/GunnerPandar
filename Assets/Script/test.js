#pragma strict

function Start () {
    
}
var jumpFlag = false;
var downFlag = false;
var pos_y = 0.0;
function Update() {

    //state
    //0=何もなし、待機
    //1=しゃがみ
    //2=移動中
    //3=落下
    var state;
    state = 0;

    if(!jumpFlag)
        Physics.gravity=new Vector3(0,-50,0);
    else
        Physics.gravity=new Vector3(0,-9.8,0);
    
    //プレイヤーが待機状態の時
    //if (state == 0)
    //    //
    //    transform.position.y = 0.0;

    //左右キーを押したとき移動状態を2にする
    if (Input.GetKey(KeyCode.RightArrow))
    {
        state = 2;
        transform.Translate(0.1, 0, 0);
    }
    else if (Input.GetKey(KeyCode.LeftArrow))
    {
        state = 2;
        transform.Translate(-0.1, 0, 0);
    }
    else
    {
        state = 0;
    }

    //下キーを押した時しゃがみにする
    if (Input.GetKey(KeyCode.DownArrow))
    {
        state = 1;
    }
    else
        state = 0;

    //しゃがんでいるとき（縮ませる）
    if (state == 1) {
        transform.localScale = new Vector3(1, 1, 1);
        transform.position = new Vector3(gameObject.transform.position.x, gameObject.transform.position.y, 0);
    }

    //if (Input.GetKey(KeyCode.A))
    //    transform.position=new Vector3(0,0,0);

    //待機の時（そのまま）
    if (state == 0) {
        transform.localScale = new Vector3(1, 2, 1);
    }

    //ジャンプ
    if (Input.GetKeyDown(KeyCode.Space))
    {
        if (!jumpFlag)
        {
            jumpFlag = true;
            pos_y = transform.position.y;
        }
    }

    if (jumpFlag)
    {
        transform.position.y += 0.25;
        if (pos_y + 3.0 <= transform.position.y)
            downFlag = true;

        if (downFlag)
        {
            transform.position.y -= 0.5;
        }
    }

    //左端の設定
    if (transform.position.x <= -5)
        transform.position.x = -5;

    //落ちたら
    if(transform.position.y<=-10)
        state=3;

    //落ちたら
    if(state==3)
    {
        transform.position =new Vector3(0,0,0);
        state=0;
    }
}

function OnCollisionEnter(col : Collision)
{
    jumpFlag = false;
    downFlag = false;
}