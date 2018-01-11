//#pragma strict

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
    var state;
    state = 0;

    
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


    //if (Input.GetKey(KeyCode.UpArrow))
    //transform.Translate(0, 0.1, 0);
    //else 
    //下キーを押した時しゃがみにする
    if (Input.GetKey(KeyCode.DownArrow))
        state = 1;
    else
        state = 0;

    //しゃがんでいるとき（縮ませる）
    if (state == 1) {
        transform.localScale = new Vector3(1, 1, 1);
        transform.position = new Vector3(gameObject.transform.position.x, -0.5, 0);
    }

    //待機の時（そのまま）
    if (state == 0) {
        transform.localScale = new Vector3(1, 2, 1);
    }

    //ジャンプ

    if (Input.GetKey(KeyCode.Space))
    {
        //if (transform.position.y == 0.5)
        //    transform.position.y = 4;
        if (!jumpFlag)
        {
            jumpFlag = true;
            pos_y = transform.position.y;
            Debug.Log(pos_y);
        }
    }

    if (jumpFlag)
    {
        Debug.Log(pos_y);
        transform.position.y += 0.25;
        if (pos_y + 3.0 <= transform.position.y)
            downFlag = true;

        if (downFlag)
        {
            transform.position.y -= 0.5;
            if (pos_y>=transform.position.y)
            {
                jumpFlag = false;
                downFlag = false;
            }
        }
        //Jump();
    }

    //if (transform.position.y == 0.5)
    //    jumpFlag = false;


    //左端の設定
    if (transform.position.x <= -3)
        transform.position.x = -3;
}

//function OnCollisionEnter(col:Collision)
//    {
//        if(col.gameObject.name == "prop_powerCube")
//        {
//            Destroy(col.gameObject);
//        }
//}

//function Jump()
//{
//    var pos_y = transform.position.y;

//    transform.position.y++;

//    if(pos_y+3.0<=transform.position.y)
//    {
//        transform.position.y -= 2.0;
//    }
//}