// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Brand Logos",
  name: "brandlogos",
  type: "document",
  fields: [
      {
        title: "Client Type",
        name: "clientType",
        type: "string",
        options: {
          list: [
            {title: "Agency", value: 'agency'},
            {title: "Brand", value: 'brand'}
          ],
          layout: 'radio'
        },
        validation: Rule => Rule.required()
      },
      {
          title: "Title",
          name: "title",
          type: "string",
          validation: Rule => Rule.required()
      },
      {
          title: "Link",
          name: "link",
          type: "url"
      },
      {
          title: "Image",
          name: "image",
          type: "image",
          validation: Rule => Rule.required()
      },
      {
        title: "Order",
        name: "order",
        type: "string"
      }
  ]
}