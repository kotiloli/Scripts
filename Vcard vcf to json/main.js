
var fs = require("fs");
var vcard = require('vcard-json');
const clearContactList = new Array();
 
vcard.parseVcardFile('akutlu2.vcf', function(err, data){
  if(err) console.log('oops:'+ err);
  else {
  	for(let obj of data){
  		if(obj.fullname != "" && obj.phone != undefined && obj.phone.length == 1){
  			clearContactList.push({fullname:obj.fullname,phone:obj.phone[0].value});
  		}
  	}

		fs.writeFile("output.txt",JSON.stringify(clearContactList, null, 1), (err) => {
		  if (err) console.log(err);
		  console.log("Successfully Written to File.");
		});
  }
});






