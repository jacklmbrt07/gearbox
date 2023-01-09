export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "details",
      title: "Details",
      type: "text",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "PC", value: "PC" },
          { title: "Xbox", value: "Xbox" },
          { title: "Nintendo Switch", value: "Nintendo Switch" },
          { title: "PS5", value: "PS5" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
    },
    {
      name: "releaseDate",
      title: "Release Date",
      type: "date",
    },
    {
      name: "reviewRating",
      title: "Review Rating",
      type: "number",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
        ],
      },
      validation: (Rule) => Rule.min(0).max(5),
    },
  ],
};
