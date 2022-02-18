// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Portfolio Sections",
    name: "portfolioSection",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Subtitle",
            name: "subtitle",
            // type: "string",
            // validation: Rule => Rule.required()
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
            ]
        },
        {
            title: "Background Color",
            name: "color",
            type: "string",
            options: {
                list: [
                    {title: "Lightest", value: "lightest"},
                    {title: "Light", value: "light"},
                    {title: "Dark", value: "dark"},
                    {title: "Medium", value: "medium"}
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            title: "Cards",
            name: "cards",
            type: "array",
            of: [{
                type: "reference",
                to: [
                    {type: 'portfolioCard'}
                ]
            }],
            validation: Rule => Rule.required().min(1)
        },
        {
            title: "Testimonial",
            name: "testimonialText",
            type: "string"
        },
        {
            title: "Testimonial Source",
            name: "testimonialSource",
            type: "string",
            hidden: ({document}) => !document?.testimonialText
        }
    ]
}