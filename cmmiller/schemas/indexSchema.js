/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Home Page Headline",
    name: "headlineText",
    type: "document",
    fields: [
        {
            title: "Headline Text",
            name: "headline",
            type: "text",
            validation: Rule => Rule.required().max(200)
        }
    ]
}