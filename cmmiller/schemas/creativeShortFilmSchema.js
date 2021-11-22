/* eslint-disable import/no-anonymous-default-export */
export default {
    title: "Short Films",
    name: "shortFilm",
    type: "document",
    fields: [
        {
            title: "Film Link",
            name: 'link',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            title: "Film Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Roles",
            name: "roles",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Year",
            name: "year",
            type: "string",
            validation: Rule => Rule.required()
        }
    ]
}
