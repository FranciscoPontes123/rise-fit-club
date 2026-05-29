import { defineType, defineField, defineArrayMember } from 'sanity'

export const scheduleSchema = defineType({
  name: 'weeklySchedule',
  title: 'Horário Semanal',
  type: 'document',
  fields: [
    defineField({
      name: 'days',
      title: 'Dias da Semana',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'dayEntry',
          title: 'Dia',
          preview: {
            select: { title: 'day' },
          },
          fields: [
            defineField({
              name: 'day',
              title: 'Dia da Semana',
              type: 'string',
              options: {
                list: [
                  { title: 'Segunda', value: 'Segunda' },
                  { title: 'Terça', value: 'Terça' },
                  { title: 'Quarta', value: 'Quarta' },
                  { title: 'Quinta', value: 'Quinta' },
                  { title: 'Sexta', value: 'Sexta' },
                  { title: 'Sábado', value: 'Sábado' },
                  { title: 'Domingo', value: 'Domingo' },
                ],
              },
            }),
            defineField({
              name: 'classes',
              title: 'Aulas',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'classEntry',
                  title: 'Aula',
                  preview: {
                    select: { title: 'name', subtitle: 'time' },
                  },
                  fields: [
                    defineField({
                      name: 'time',
                      title: 'Hora',
                      type: 'string',
                      description: 'Exemplo: 10:30',
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: 'name',
                      title: 'Nome da Aula',
                      type: 'string',
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: 'restricted',
                      title: 'Inscrição Obrigatória',
                      type: 'boolean',
                      description: 'Ativar se a aula não está incluída no livre trânsito',
                      initialValue: false,
                    }),
                    defineField({
                      name: 'sub',
                      title: 'Subtítulo (opcional)',
                      type: 'string',
                      description: 'Exemplo: Kimono, No-Gi, Small Group',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
