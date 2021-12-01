/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Home Cards",
    name: "homecards",
    type: "document",
    fields: [
        {
            title: "Home Card Icon",
            name: "hc_icon",
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: "Home Card Header",
            name: "hc_header",
            type: "string",
            validation: Rule => Rule.required().max(25),
            description: "Limit of 25 characters"
        },
        {
            title: "Home Card Content",
            name: "hc_content",
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
                        annotations: []
                    },
                    lists: [
                        {title: "Bullet", value: "bullet"}
                    ]
                }
            ]
        },
        {
            title: "Button Text",
            name: "hc_button_text",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Button Link",
            name: "hc_button_link",
            type: "url",
            validation: Rule => Rule.required().uri({
                allowRelative: true,
                // scheme: [""]
            })
        }
    ]
}