/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Fiction and Literary",
    name: "fiction",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Link to Work",
            name: "link",
            type: "url"
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
                        {title: "Normal", value: "normal"}
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"}
                        ],
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "External Link",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "URL"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ]
}