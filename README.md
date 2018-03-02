| [`dataginger`][1] | 
| `Hareesh` - `Mognodb` - `get count of documents for each collection` |
# readme.md #


###### This code takes in the list of databases in a MongoDB store and runs any specific queries across all the collections within each of those databases.
###### Provide the path to the database files
###### Follow the sample file (db_list.js) formatting for specifying databases.
###### Write your query that you want to run across all the collections. Default is to print the count of all documents for each collection
###### Execute the script as below
> mongo -u user_ -p P@$$word mongo_hostname.domain.com/db  --eval " var sleepBetweenBatches=1000" main.js
	
[1]: https://dataginger.com/