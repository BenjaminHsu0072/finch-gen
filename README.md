# finch-gen
A cli tool for create a finch project 

#### Install 
npm install finch-gen -g

#### Usage

```cmd
finch-gen [option]
```
option will be
* min  
Generate a minimal server
* normal  
Server with 2 middle wares : cookie Parser and  post Parser
* full  
Server with middle wares and a Sqlite3 Database

Then run `npm install ` or `yarn` to install the dependencies;