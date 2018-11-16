const Excel = require('exceljs');

function fetchData(){
	const workbook = new Excel.Workbook();
	return workbook.xlsx.readFile('../porzadki.xlsm')
		.then(()=>{
			let worksheet = workbook.getWorksheet("INDYWIDUAL");
			let namesColumn = worksheet.getColumn('B').values
			let scoresColumn = worksheet.getColumn('H').values
			
			//delete unused fields from array of scores
			scoresColumn.map((object)=>{
				object.formula ? delete object.formula : delete object.sharedFormula
			})
			//delete unnecessary fields from both arrays
			let namesColumnClean = namesColumn.slice(3);
			let scoresColumnClean = scoresColumn.slice(3);
			scoresColumnCleaned = scoresColumnClean.map((item)=>{
				item.result = Math.round(item.result);
			}) 
			//create an array of users with their points
			usersWithPoints = scoresColumnClean.map((item, index)=>{
				item.name = namesColumnClean[index];
				return item;
			})
			return JSON.stringify(usersWithPoints);
		})
}

module.exports = fetchData