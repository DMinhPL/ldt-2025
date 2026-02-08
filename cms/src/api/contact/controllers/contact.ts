/**
 * contact controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::contact.contact',
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const { name, email, phone, detail, company_name, budget, source } =
          ctx.request.body;

        if (!name || !email || !phone) {
          return ctx.badRequest('Name, email, and phone are required.');
        }

        const newContact = await strapi.entityService.create(
          'api::contact.contact',
          {
            data: {
              name,
              email,
              phone,
              detail,
              company_name,
              budget,
              source,
            },
          }
        );

        return ctx.send({ success: true, data: newContact }, 201);
      } catch (error) {
        return ctx.internalServerError('Something went wrong', error);
      }
    },
  })
);
