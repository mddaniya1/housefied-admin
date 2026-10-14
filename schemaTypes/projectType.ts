
import { defineType, defineField } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Kitchens', value: 'kitchens' },
          { title: 'Interiors', value: 'interiors' },
          { title: 'Wardrobes', value: 'wardrobes' },
          { title: 'Bathrooms', value: 'bathrooms' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Project Location',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Completion Year',
      type: 'number',
    }),

    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})
