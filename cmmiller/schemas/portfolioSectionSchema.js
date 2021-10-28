// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Portfolio Section",
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
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Background Color",
            name: "color",
            type: "string",
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