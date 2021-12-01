/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Bio",
    name: "bio",
    type: "document",
    fields: [
        {
            title: "Bio Image",
            name: "bio_image",
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: "Bio Text",
            name: "bio_text",
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
                            },
                            {
                                name: "mailLink",
                                type: "object",
                                title: "Email Link",
                                blockEditor: {
                                    icon: () => "Mail-Link"
                                },
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        validation: Rule => Rule.uri({
                                            allowRelative: true,
                                            scheme: ["mailto"]
                                        })
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