/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Stage Plays",
    name: "stageplays",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
            description: "(required)"
        },
        {
            title: "Genre",
            name: "genre",
            type: "string",
            description: "(optional)"
        },
        {
            title: "Description",
            name: "description",
            type: "array",
            of: [
                {
                    type: "block",
                    marks: {
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
            ],
            description: "(optional)"
        },
        {
            title: "Performance Info",
            name: "performanceInfo",
            type: "text",
            description: "(optional)"
        },
        {
            title: "Sample",
            name: "sample",
            type: "file",
            description: "Upload a pdf (optional)"
        }
    ]
}