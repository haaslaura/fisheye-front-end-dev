import { Media } from './Media.js'

export class Picture extends Media {
    constructor (data) {
        super(data)

        this.image = data.image
    }
}