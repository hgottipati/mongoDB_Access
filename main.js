// How to run the script
// $MONGO_HOME\bin>mongo.exe -u username -p password server[:port]/Admin [--eval "var param1=value, param2=value"] path_to_script.js
// eg - 
// mongo -u user_ -p P@$$word mongo_hostname.domain.com/db  --eval " var sleepBetweenBatches=1000" main.js
// The following command-line parameters can be set in an eval block:

var sleepBetweenDBs =   sleepBetweenDBs || 400;
var sleepBetweenBatches =  sleepBetweenBatches || 1000;
var batchsize = batchsize  || 50
var _dbsPath =  "/path_to_dblist/db_list.js"

//	LIST DBs 

load(dbsPath) 
var dbsToProcess = JSON.parse(dbs);
dbcount = dbsToProcess.length
print ("Database count " + dbcount)
print("Databases being processed in this run are as below - ")
printjson(dbsToProcess)


//   Main script entry

dbsToProcess.forEach(function(database)	{
db = db.getSiblingDB(database);      
if (db != 'local' && db !='admin') 
	{   
	var collections = db.getCollectionNames();
	print('Collections inside the db:');
	for(var i = 0; i < collections.length; i++)
		{
		  var name = collections[i];

		  if(name.substr(0, 6) != 'system' )
		  // Write your own query here.
		  // Prints the count of documents inside each collection

			print(db + ' | ' + name + ' | ' + db[name].count()); 
			
		}
	}        	
});


