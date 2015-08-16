static var time:float;

function Start () {
	time=0; 
				  }
	 
	function Update () {
	myGoal();                      
	}
	 
	function myGoal()
	{
	 var msg=GameObject.Find("msg");
 	 var now:int=time;
 		 	 
	if (GoalArea.myGoal==false)
	 {
	 	time+=Time.deltaTime;
	 }else{
	    msg.guiText.text="GOAL!"; 
	    msg.guiText.fontSize=50;    
	  	yield WaitForSeconds (2.0);
	  	Application.LoadLevel(Application.loadedLevel);
	  	GoalArea.myGoal=false;
	 }

	 guiText.text=now.ToString(); 

	}
	 	