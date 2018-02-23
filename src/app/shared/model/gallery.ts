export class Gallery {

    id;
    title;
    description;
    images;
    author_id;
    
    constructor( id: number , title: string, description: string, images: string,  author_id: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.author_id = author_id;
    }
}


