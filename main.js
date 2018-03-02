// How to run the script
// $MONGO_HOME\bin>mongo.exe -u username -p password server[:port]/Admin [--eval "var param1=value, param2=value"] path_to_script.js
// eg - 
// mongo -u user_m4 -p password qn7ddsmng01.starwave.com/m4_TSS  --eval " var sleepBetweenBatches=1000" oneid_qa.js
// The following command-line parameters can be set in an eval block:

var sleepBetweenDBs =   sleepBetweenDBs || 400;
var sleepBetweenBatches =  sleepBetweenBatches || 1000;
var batchsize = batchsize  || 50
var m4_dbsPath =  "------------/m4_dbsArray_oneid_qa.js"

//	LIST DBs 

load(m4_dbsPath) 
var m4dbsToProcess = JSON.parse(m4dbs);
dbcount = m4dbsToProcess.length
print ("Database count " + dbcount)
print("Databases being processed in this run are as below - ")
printjson(m4dbsToProcess)


//   Main script entry

m4dbsToProcess.forEach(function(database)	{
db = db.getSiblingDB(database);      
if (db != 'local' && db !='admin') 
	{   
	var collections = db.getCollectionNames();
	print('Collections inside the db:');
	for(var i = 0; i < collections.length; i++)
		{
		  var name = collections[i];

		  if(name.substr(0, 6) != 'system' )
			print(db + ' | ' + name + ' | ' + db[name].count());
		}
	}        	
});


