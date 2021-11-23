/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Feature Film Treatments",
    name: "featureFilm",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Film Image",
            name: "filmImage",
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: "Genre",
            name: "genre",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Description (paragraph 1)",
            name: "description1",
            type: "text",
            validation: Rule => Rule.required()
        },
        {
            title: "Description (paragraph 2)",
            name: "description2",
            type: "text"
        },
        {
            title: "Full Treatment",
            name: "fullTreatment",
            type: "file"
        },
        {
            title: "Sample Scene",
            name: "sampleScene",
            type: "file"
        }
    ]
}