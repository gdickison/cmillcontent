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
            title: "Description",
            name: "description",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        {title: "Normal", value: 'normal'}
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"}
                        ],
                        annotations: []
                    }
                }
            ]
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