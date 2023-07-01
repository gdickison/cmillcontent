/* eslint-disable import/no-anonymous-default-export */
export default {
  title: "Prager Sections",
  name: "pragerSection",
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
      title: "Mag Cover Image",
      name: "mag_cover_image",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: "Video Link",
      name: "video_link",
      description: "Paste the link to the YouTube video",
      type: "url"
    },
    {
      title: "Prager Link",
      name: "prager_link",
      description: "This is the link to the page on prageru.com",
      type: "url"
    },
    {
      title: "PDF Downloadable File",
      name: "pdf_link",
      description: "Upload the pdf of the article",
      type: "file"
    }
  ]
}