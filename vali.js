function validateForm() {

       var a = /^[A-Za-z ]{3,30}$/
       var b = /^[0-99]{2}$/
       var c = /^[789]\d{9}$/
       if(a.test(document.myForm.tagline.value)==false)
       {
        alert("Enter Valid Tagline!");
        }
       else if(b.test(document.myForm.quantity.value)==false)
       {
	alert("Enter Quantity between 1 to 99");
	}
       else if(size =="select a size")
       {
	alert("Enter a size");
	}
       else if(address== "")
       {
	alert("Enter valid address");
	}
       else if(c.test(document.myForm.number.value)==false)
       {
	alert("Enter valid Phone number");
	}
       else
       {
        var tagline= document.getElementById("tagline").value;
        var name= document.getElementById("name").value;
        var number = document.getElementById("number").value; 
        var address = document.getElementById("address").value; 
        var size = document.getElementById("size").value;
	
	       var quantity =document.getElementById("quantity").value;
	       var total=quantity*1500;
        alert("Order Recepit \nName: "+name+ "\nPhone Number: "+number+ "\nTagline: "+tagline+ "\nAddress: "+address+ "\nSize: "+size+ "\nTotal Amount:"+total+"."
	     );
       }
}
