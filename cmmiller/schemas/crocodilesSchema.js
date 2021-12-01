/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Crocodiles",
    name: "crocodiles",
    type: "document",
    fields: [
        {
            title: "Crododiles Text",
            name: "crocodiles_text",
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