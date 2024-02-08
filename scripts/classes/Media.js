/**
* @abstract
*/
export class Media {
	/**
	* @typedef MediaDef
	* @property {Number} id
	* @property {Number} photographerId
	* @property {String} title
	* @property {Number} likes
	* @property {String} date
	* @property {Number} price
	* 
	* @param {MediaDef} data 
	*/
	constructor(data) {
		
		// Duplicate elements for the Image and Video classes
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._likes = data.likes;
		this._date = data.date;
		this._price = data.price;
	}
	
	/** Reminder that the function needs to be added,
	* particularly for future classes
	*/
	getMediaDOM(){}
}
