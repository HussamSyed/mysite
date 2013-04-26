$(document).ready(function() {
myEducation = [{year:'1998', school:'Dar-ul-Arqam'}, 
{year:'2001', school:'Karachi International School'},
{year:'2003', school:'School of Creative Science'},
{year:'2004', school:'Arab Unity School'},
{year:'2005', school:'Karachi International School'},
{year:'2008', school:'Suffah Saviour School'},
{year:'2010', school:'Beaconhouse Gulshan A Level'},
{year:'2012', school:'Mission College'},
{year:'present', school:'none'}];

lenEdu = myEducation.length;
var htmlStr = "";

	//for (var i=0; i < lenEdu-1; i++) {
	//	htmlStr += "<li>"+myEducation[i].school+" from "+myEducation[i].year+" to "+myEducation[i+1].year+"</li>";
		//$('#eduList').append(htmlStr);
	//};
	//$('#eduList').html(htmlStr);
	for (var i=0; i < lenEdu-1; i++) {
		htmlStr = "<tr><td>"+myEducation[i].school+"</td><td>"+myEducation[i].year+" to "+myEducation[i+1].year+"</td></tr>";
		$('#eduList').append(htmlStr);
	};

});
