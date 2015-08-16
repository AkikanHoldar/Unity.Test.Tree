	static var myGoal:boolean;
	static var myPose:boolean;
	myGoal=false;                          
	 
	function OnTriggerEnter(myCol:Collider)
	{
	 if(myCol.tag=="Player")
	 {
  		myGoal=true;                                  
	 }
	}