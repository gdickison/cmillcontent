// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Brand Logos",
  name: "brandlogos",
  type: "document",
  fields: [
      {
          title: "Title",
          name: "title",
          type: "string",
          validation: Rule => Rule.required()
      },
      {
          title: "Link",
          name: "link",
          type: "url",
          validation: Rule => Rule.required()
      },
      {
          title: "Image",
          name: "image",
          type: "image",
          validation: Rule => Rule.required()
      }
  ]
}